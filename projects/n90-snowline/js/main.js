import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { SnowWorld, WEATHER_PRESETS } from './world.js';
import { N90Vehicle } from './vehicle.js';
import { clamp, damp, easeInOutCubic, easeOutCubic } from './utils.js';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CinematicShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uVignette: { value: 0.34 },
    uGrain: { value: 0.011 },
    uAberration: { value: 0.0016 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uAberration;
    varying vec2 vUv;

    float hash(vec2 p) {
      p = fract(p * vec2(443.897, 441.423));
      p += dot(p, p + 19.19);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 centered = vUv - 0.5;
      vec2 offset = centered * dot(centered, centered) * uAberration;

      vec3 color;
      color.r = texture2D(tDiffuse, vUv - offset).r;
      color.g = texture2D(tDiffuse, vUv).g;
      color.b = texture2D(tDiffuse, vUv + offset).b;

      // Subtle teal-and-gold grade, keeping snow neutral.
      float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
      vec3 cool = color * vec3(0.94, 0.985, 1.045);
      vec3 warm = color * vec3(1.035, 1.008, 0.955);
      color = mix(cool, warm, smoothstep(0.015, 0.55, luma) * 0.72);

      // Optical vignette.
      float edge = smoothstep(0.82, 0.22, length(centered * vec2(1.08, 1.0)));
      color *= mix(1.0 - uVignette, 1.0, edge);

      // Very fine film grain, scaled in linear space.
      float grain = hash(vUv * uResolution + fract(uTime) * 73.17) - 0.5;
      color += grain * uGrain * (0.45 + 0.55 * smoothstep(0.0, 0.2, luma));

      gl_FragColor = vec4(max(color, 0.0), 1.0);
    }
  `,
};

class Experience {
  constructor() {
    this.dom = {
      canvas: document.getElementById('scene'),
      loader: document.getElementById('loader'),
      loaderBar: document.getElementById('loaderBar'),
      loaderPct: document.getElementById('loaderPct'),
      loaderStatus: document.getElementById('loaderStatus'),
      webglError: document.getElementById('webglError'),
      weatherPanel: document.getElementById('weatherPanel'),
      weatherToggle: document.getElementById('weatherToggle'),
      weatherButtons: [...document.querySelectorAll('.weather-tab')],
      weatherLabel: document.getElementById('weatherLabel'),
      weatherNote: document.getElementById('weatherNote'),
      weatherIntensity: document.getElementById('weatherIntensity'),
      intensity: document.getElementById('intensity'),
      intensityOut: document.getElementById('intensityOut'),
      temp: document.getElementById('tempTelemetry'),
      wind: document.getElementById('windTelemetry'),
      air: document.getElementById('airTelemetry'),
      altitude: document.getElementById('altitude'),
      roofBtn: document.getElementById('roofBtn'),
      orbitBtn: document.getElementById('orbitBtn'),
      resetBtn: document.getElementById('resetBtn'),
      modeButtons: [...document.querySelectorAll('.mode-btn')],
      sceneFade: document.getElementById('sceneFade'),
      lightningFlash: document.getElementById('lightningFlash'),
      srStatus: document.getElementById('srStatus'),
      viewHint: document.getElementById('viewHint'),
      cabinHint: document.getElementById('cabinHint'),
      clock: document.getElementById('clock'),
    };

    this.reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    this.isNarrow = window.innerWidth <= 760;
    this.state = {
      mode: 'exterior',
      weather: 'snow',
      intensity: 0.62,
      roof: false,
      orbit: !this.reducedMotion,
      transitioning: false,
      introActive: false,
      started: false,
    };
    this.clock = new THREE.Clock();
    this.elapsed = 0;
    this.lightningAccent = 0;
    this.cabinLook = {
      yaw: 0,
      pitch: 0,
      targetYaw: 0,
      targetPitch: 0,
      dragging: false,
      pointerId: null,
      lastX: 0,
      lastY: 0,
    };
    this._tmpEuler = new THREE.Euler(0, 0, 0, 'YXZ');
    this._tmpQuat = new THREE.Quaternion();
    this._lookOffset = new THREE.Quaternion();
    this._clockMinute = 42;
    this._minuteAccumulator = 0;

    this.init();
  }

  init() {
    this.initRenderer();
    this.initScene();
    this.initPostprocessing();
    this.initCameraControls();
    this.bindUI();
    this.onResize();
    this.load().catch((error) => {
      console.error('[N90 load]', error);
      this.showWebGLError();
    });

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) this.clock.getDelta();
    });

    this.renderer.setAnimationLoop(() => this.render());
    window.__N90 = {
      experience: this,
      setWeather: (id, intensity) => this.setWeather(id, intensity),
      setRoof: (open) => this.setRoof(open),
      enterCabin: () => this.enterCabin(),
      exitCabin: () => this.exitCabin(),
      resetView: () => this.resetView(),
      snapshot: () => this.snapshot(),
    };
  }

  initRenderer() {
    const gl = this.dom.canvas.getContext('webgl2', {
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
    if (!gl) {
      this.showWebGLError();
      throw new Error('WebGL2 is not available');
    }

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.dom.canvas,
      context: gl,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0x04080c, 1);
    this.textureAnisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x071019);
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.04, 1400);
    this.scene.add(this.camera);

    this.world = new SnowWorld(this.scene, this.renderer, { mobile: this.isNarrow });
    this.world.onLightning = (energy) => {
      this.lightningAccent = Math.max(this.lightningAccent, energy);
    };
    this.vehicle = new N90Vehicle(this.scene);
    this.vehicle.setPixelRatio?.(this.renderer.getPixelRatio());

    this.heroPosition = new THREE.Vector3(5.0, 2.1, 6.75);
    this.heroTarget = new THREE.Vector3(-0.82, 1.26, 0.02);
    this.introPosition = new THREE.Vector3(8.4, 3.75, 10.7);
    this.defaultFov = 42;
    this.interiorFov = 64;

    this.applyResponsiveFraming(true);
    this.camera.position.copy(this.introPosition);
    this.camera.lookAt(this.heroTarget);

    this.sceneFadeTimer = null;
    this.intro = {
      active: false,
      time: 0,
      duration: this.reducedMotion ? 0.01 : 3.1,
      fromPos: this.introPosition.clone(),
      toPos: this.heroPosition.clone(),
      fromTarget: this.heroTarget.clone(),
      toTarget: this.heroTarget.clone(),
    };
    this.cameraTween = null;
    this.savedExterior = null;
    this.cabinBaseQuaternion = new THREE.Quaternion();
  }

  initPostprocessing() {
    const dpr = this.getPixelRatio();
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.composer = new EffectComposer(this.renderer);
    // WebGL2 multisampling keeps the fine car shut-lines and glass edges clean.
    if (!this.isNarrow) {
      this.composer.renderTarget1.samples = 4;
      this.composer.renderTarget2.samples = 4;
    }
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth * 0.55, window.innerHeight * 0.55),
      0.35,
      0.42,
      1.55
    );
    this.cinematicPass = new ShaderPass(CinematicShader);
    this.outputPass = new OutputPass();
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.cinematicPass);
    this.composer.addPass(this.outputPass);
    this.cinematicPass.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
  }

  initCameraControls() {
    this.controls = new OrbitControls(this.camera, this.dom.canvas);
    this.controls.target.copy(this.heroTarget);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.055;
    this.controls.enablePan = false;
    this.controls.minDistance = 4.15;
    this.controls.maxDistance = 19;
    this.controls.minPolarAngle = 0.56;
    this.controls.maxPolarAngle = 1.495;
    this.controls.autoRotateSpeed = 0.42;
    this.controls.autoRotate = false;
    this.controls.enabled = false;
    this.controls.addEventListener('start', () => {
      if (!this.state.introActive && this.state.mode === 'exterior' && this.state.orbit) {
        this.setOrbit(false);
      }
    });
    this.controls.addEventListener('end', () => {
      this.dom.canvas.classList.remove('is-dragging');
    });

    this.dom.canvas.addEventListener('pointerdown', (event) => {
      this.dom.canvas.classList.add('is-dragging');
      if (this.state.introActive) {
        this.finishIntro();
        return;
      }
      if (this.state.mode === 'cabin') this.startCabinLook(event);
    });
    this.dom.canvas.addEventListener('pointermove', (event) => this.moveCabinLook(event));
    this.dom.canvas.addEventListener('pointerup', (event) => this.endCabinLook(event));
    this.dom.canvas.addEventListener('pointercancel', (event) => this.endCabinLook(event));
    this.dom.canvas.addEventListener('pointerleave', () => {
      this.dom.canvas.classList.remove('is-dragging');
    });
    this.dom.canvas.addEventListener('dblclick', () => {
      if (this.state.mode === 'exterior') this.resetView();
      else this.resetCabinLook();
    });
    this.dom.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  bindUI() {
    this.dom.weatherButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (this.state.transitioning) return;
        this.setWeather(button.dataset.weather);
        if (this.isNarrow) this.setWeatherPanelCollapsed(true);
      });
    });

    this.dom.intensity.addEventListener('input', () => {
      this.state.intensity = Number(this.dom.intensity.value) / 100;
      this.updateRangeUI();
      if (this.state.weather !== 'clear') {
        this.world.setWeather(this.state.weather, this.state.intensity);
      }
    });
    this.dom.intensity.addEventListener('change', () => {
      this.announce(`${this.world.getSummary().preset.label}，强度 ${Math.round(this.state.intensity * 100)}%`);
    });

    this.dom.roofBtn.addEventListener('click', () => {
      if (this.state.transitioning) return;
      this.setRoof(!this.state.roof);
    });
    this.dom.orbitBtn.addEventListener('click', () => this.setOrbit(!this.state.orbit));
    this.dom.resetBtn.addEventListener('click', () => this.resetView());
    this.dom.modeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.dataset.view === 'interior') this.enterCabin();
        else this.exitCabin();
      });
    });
    if (this.dom.weatherToggle) {
      this.dom.weatherToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const collapsed = this.dom.weatherPanel.classList.toggle('is-collapsed');
        this.dom.weatherToggle.setAttribute('aria-expanded', String(!collapsed));
      });
    }
    this.dom.weatherPanel.addEventListener('click', (event) => {
      if (event.target.closest('.weather-tab, input, #weatherToggle')) return;
      if (this.dom.weatherPanel.classList.contains('is-collapsed')) {
        this.setWeatherPanelCollapsed(false);
      }
    });

    this.updateWeatherUI(true);
    this.updateRoofUI();
    this.updateModeUI();
    this.updateOrbitUI();
    this.updateRangeUI();
    if (this.isNarrow) this.setWeatherPanelCollapsed(true);
  }

  updateRangeUI() {
    const percent = Math.round(this.state.intensity * 100);
    this.dom.intensity.value = String(percent);
    this.dom.intensityOut.textContent = `${percent}%`;
    this.dom.intensity.style.setProperty('--range', `${percent}%`);
    this.dom.intensity.disabled = this.state.weather === 'clear';
    this.dom.weatherIntensity.classList.toggle('is-disabled', this.state.weather === 'clear');
  }

  setWeather(id, intensity = this.state.intensity) {
    const preset = WEATHER_PRESETS[id] || WEATHER_PRESETS.snow;
    this.state.weather = preset.id;
    this.state.intensity = clamp(intensity, 0, 1);
    this.world.setWeather(preset.id, this.state.intensity);
    if ((preset.id === 'rain' || preset.id === 'storm') && this.state.roof) {
      this.setRoof(false);
      this.announce('风雪将至，观星车顶已自动收起');
    }
    this.dom.weatherButtons.forEach((button) => {
      const active = button.dataset.weather === preset.id;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    this.updateWeatherUI();
    this.updateRangeUI();
    this.announce(`天气切换为${preset.label}`);
    return preset;
  }

  updateWeatherUI(first = false) {
    const preset = WEATHER_PRESETS[this.state.weather];
    this.dom.weatherLabel.textContent = preset.label;
    this.dom.weatherNote.textContent = preset.note;
    this.dom.temp.textContent = `${preset.temp < 0 ? '−' : ''}${Math.abs(preset.temp)}`;
    this.dom.wind.textContent = preset.windText;
    this.dom.air.textContent = `含氧量 ${preset.air}%`;
    this.dom.altitude.textContent = '海拔 4,860 m';
    if (this.dom.clock) this.dom.clock.textContent = this.getClockText();
    this.dom.weatherPanel.dataset.weather = preset.id;
    const bars = [...this.dom.weatherNote.parentElement.querySelectorAll('.weather-signal i')];
    bars.forEach((bar, index) => {
      bar.style.opacity = index < Math.min(3, Math.ceil(preset.signal * 0.75)) ? '1' : '0.25';
      bar.style.height = `${3 + index * 2.5}px`;
    });
    if (!first) {
      // Small tactile tickle for the live badge.
      this.dom.weatherLabel.animate(
        [
          { opacity: 0.2, transform: 'translateY(3px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' }
      );
    }
  }

  updateRoofUI() {
    this.dom.roofBtn.classList.toggle('is-raised', this.state.roof);
    this.dom.roofBtn.setAttribute('aria-pressed', String(this.state.roof));
    const label = this.dom.roofBtn.querySelector('.dock-label');
    if (label) label.textContent = this.state.roof ? '收起车顶' : '升起车顶';
    this.dom.roofBtn.title = this.state.roof ? '收起观星车顶' : '升起观星车顶';
  }

  updateModeUI() {
    const cabin = this.state.mode === 'cabin';
    document.body.classList.toggle('is-cabin', cabin);
    this.dom.modeButtons.forEach((button) => {
      const active = button.dataset.view === (cabin ? 'interior' : 'exterior');
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    this.dom.orbitBtn.disabled = cabin;
    this.dom.orbitBtn.setAttribute('aria-disabled', String(cabin));
    if (cabin) {
      this.setOrbit(false, true);
      this.dom.viewHint.setAttribute('aria-hidden', 'true');
      this.dom.cabinHint.setAttribute('aria-hidden', 'false');
    } else {
      this.dom.viewHint.setAttribute('aria-hidden', 'false');
      this.dom.cabinHint.setAttribute('aria-hidden', 'true');
    }
  }

  updateOrbitUI() {
    const active = this.state.orbit;
    this.dom.orbitBtn.classList.toggle('is-on', active);
    this.dom.orbitBtn.setAttribute('aria-pressed', String(active));
    this.dom.orbitBtn.title = active ? '暂停自动环绕' : '开启自动环绕';
    if (this.state.mode === 'exterior' && !this.state.introActive && this.controls.enabled) {
      this.controls.autoRotate = active;
    } else {
      this.controls.autoRotate = false;
    }
  }

  setOrbit(active, silent = false) {
    this.state.orbit = Boolean(active) && this.state.mode === 'exterior';
    this.updateOrbitUI();
    if (!silent) {
      this.announce(this.state.orbit ? '自动环绕已开启' : '自动环绕已暂停');
    }
  }

  setRoof(open) {
    if (this.state.transitioning) return;
    this.state.roof = Boolean(open);
    this.vehicle.setRoof(this.state.roof);
    this.updateRoofUI();
    this.announce(this.state.roof ? '观星车顶正在升起' : '观星车顶正在收起');
    this.pulseRoofButton();
  }

  pulseRoofButton() {
    this.dom.roofBtn.animate(
      [
        { boxShadow: 'inset 0 0 0 1px rgba(255,164,98,.14)' },
        { boxShadow: 'inset 0 0 0 1px rgba(255,190,142,.45), 0 0 22px rgba(255,140,70,.16)' },
        { boxShadow: 'inset 0 0 0 1px rgba(255,164,98,.14)' },
      ],
      { duration: 800, easing: 'ease-out' }
    );
  }

  setWeatherPanelCollapsed(collapsed) {
    this.dom.weatherPanel.classList.toggle('is-collapsed', collapsed);
    this.dom.weatherToggle?.setAttribute('aria-expanded', String(!collapsed));
  }

  announce(message) {
    if (!this.dom.srStatus) return;
    this.dom.srStatus.textContent = '';
    window.setTimeout(() => {
      this.dom.srStatus.textContent = message;
    }, 30);
  }

  addMinute() {
    this._clockMinute += 1;
    if (this._clockMinute >= 60) {
      this._clockMinute = 0;
      this._clockHour = (this._clockHour ?? 17) + 1;
    }
    this.dom.clock.textContent = this.getClockText();
  }

  getClockText() {
    const h = this._clockHour ?? 17;
    return `${String(h).padStart(2, '0')}:${String(this._clockMinute).padStart(2, '0')}`;
  }

  async enterCabin() {
    if (this.state.transitioning || this.state.mode === 'cabin') return;
    this.state.transitioning = true;

    if (this.state.introActive) this.finishIntro();
    this.cameraTween = null;
    this.controls.enabled = false;
    this.controls.autoRotate = false;
    this.savedExterior = {
      position: this.camera.position.clone(),
      target: this.controls.target.clone(),
      autoRotate: this.state.orbit,
    };

    this.dom.sceneFade.classList.add('is-visible');
    await sleep(430);

    this.state.mode = 'cabin';
    this.state.orbit = false;
    this.controls.enabled = false;
    this.controls.autoRotate = false;
    this.vehicle.setCabinMode(true);
    this.setWeatherPanelCollapsed(true);
    this.camera.fov = this.interiorFov;
    this.camera.updateProjectionMatrix();

    const pose = this.vehicle.getCabinPose();
    this.camera.position.copy(pose.position);
    this.camera.lookAt(pose.target);
    this.cabinBaseQuaternion.copy(this.camera.quaternion);
    this.cabinLook.yaw = 0;
    this.cabinLook.pitch = 0;
    this.cabinLook.targetYaw = 0;
    this.cabinLook.targetPitch = 0;
    this.cabinLook.dragging = false;

    this.updateModeUI();
    this.updateOrbitUI();
    this.announce('已进入 N90 Max 座舱。拖动画面环视，按 Escape 退出。');
    this.dom.sceneFade.classList.remove('is-visible');
    await sleep(560);
    this.state.transitioning = false;
  }

  async exitCabin() {
    if (this.state.transitioning || this.state.mode === 'exterior') return;
    this.state.transitioning = true;

    this.dom.sceneFade.classList.add('is-visible');
    await sleep(430);

    this.state.mode = 'exterior';
    this.vehicle.setCabinMode(false);
    if (this.savedExterior) {
      this.camera.position.copy(this.savedExterior.position);
      this.controls.target.copy(this.savedExterior.target);
    } else {
      this.camera.position.copy(this.heroPosition);
      this.controls.target.copy(this.heroTarget);
    }
    this.applyResponsiveFraming(false);
    this.controls.enabled = true;
    this.state.orbit = this.reducedMotion ? false : Boolean(this.savedExterior?.autoRotate);
    this.controls.autoRotate = false;
    this.camera.lookAt(this.controls.target);
    this.controls.update();
    this.updateModeUI();
    this.updateOrbitUI();
    this.setWeatherPanelCollapsed(this.isNarrow);
    this.announce('已返回车外视角');
    this.dom.sceneFade.classList.remove('is-visible');
    await sleep(560);
    this.state.transitioning = false;
  }

  startCabinLook(event) {
    if (this.state.transitioning) return;
    this.cabinLook.dragging = true;
    this.cabinLook.pointerId = event.pointerId;
    this.cabinLook.lastX = event.clientX;
    this.cabinLook.lastY = event.clientY;
    this.dom.canvas.setPointerCapture?.(event.pointerId);
  }

  moveCabinLook(event) {
    if (!this.cabinLook.dragging || event.pointerId !== this.cabinLook.pointerId) return;
    const dx = event.clientX - this.cabinLook.lastX;
    const dy = event.clientY - this.cabinLook.lastY;
    this.cabinLook.lastX = event.clientX;
    this.cabinLook.lastY = event.clientY;
    const sensitivity = 0.0028;
    this.cabinLook.targetYaw = clamp(
      this.cabinLook.targetYaw - dx * sensitivity,
      -1.32,
      1.32
    );
    this.cabinLook.targetPitch = clamp(
      this.cabinLook.targetPitch - dy * sensitivity,
      -0.58,
      0.58
    );
  }

  endCabinLook(event) {
    if (event && this.cabinLook.pointerId !== null && event.pointerId !== this.cabinLook.pointerId) return;
    this.cabinLook.dragging = false;
    if (this.cabinLook.pointerId !== null) {
      this.dom.canvas.releasePointerCapture?.(this.cabinLook.pointerId);
    }
    this.cabinLook.pointerId = null;
    this.dom.canvas.classList.remove('is-dragging');
  }

  resetCabinLook() {
    this.cabinLook.targetYaw = 0;
    this.cabinLook.targetPitch = 0;
    this.announce('已回正座舱视角');
  }

  resetView() {
    if (this.state.transitioning) return;
    if (this.state.mode === 'cabin') {
      this.exitCabin();
      return;
    }
    this.setOrbit(false, true);
    this.controls.enabled = false;
    const targetPos = this.isNarrow
      ? new THREE.Vector3(7.6, 3.0, 10.2)
      : this.heroPosition.clone();
    const targetLook = this.isNarrow
      ? new THREE.Vector3(0.0, 1.15, 0)
      : this.heroTarget.clone();
    this.cameraTween = {
      elapsed: 0,
      duration: this.reducedMotion ? 0.01 : 1.3,
      fromPos: this.camera.position.clone(),
      toPos: targetPos,
      fromTarget: this.controls.target.clone(),
      toTarget: targetLook,
    };
    this.announce('视角已复位');
  }

  finishIntro() {
    if (!this.intro.active && !this.state.introActive) return;
    this.intro.active = false;
    this.state.introActive = false;
    this.camera.position.copy(this.heroPosition);
    this.controls.target.copy(this.heroTarget);
    this.camera.lookAt(this.heroTarget);
    this.camera.fov = this.defaultFov;
    this.camera.updateProjectionMatrix();
    this.controls.enabled = this.state.mode === 'exterior';
    this.controls.autoRotate = false;
    this.controls.update();
    this.updateOrbitUI();
  }

  onKeyDown(event) {
    if (event.target instanceof HTMLInputElement) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const key = event.key.toLowerCase();
    if (key === 'escape') {
      if (this.state.mode === 'cabin') this.exitCabin();
    } else if (key === 'r') {
      this.setRoof(!this.state.roof);
    } else if (key === 'c') {
      if (this.state.mode === 'cabin') this.exitCabin();
      else this.enterCabin();
    } else if (key === 'o') {
      this.setOrbit(!this.state.orbit);
    } else if (key === '0' || key === 'f') {
      this.resetView();
    } else if (['1', '2', '3', '4'].includes(key)) {
      const ids = ['clear', 'snow', 'rain', 'storm'];
      this.setWeather(ids[Number(key) - 1]);
    }
  }

  getPixelRatio() {
    return Math.min(window.devicePixelRatio || 1, this.isNarrow ? 1.6 : 1.85);
  }

  applyResponsiveFraming(initial = false) {
    this.isNarrow = window.innerWidth <= 760;
    this.defaultFov = this.isNarrow ? 55 : 42;
    if (initial) {
      this.heroPosition.set(5.0, 2.1, 6.75);
      this.heroTarget.set(-0.82, 1.26, 0.02);
      this.introPosition.set(8.4, 3.75, 10.7);
      if (this.isNarrow) {
        this.heroPosition.set(7.6, 3.0, 10.2);
        this.heroTarget.set(0.0, 1.15, 0.0);
        this.introPosition.set(10.6, 4.5, 13.8);
      }
    }
    if (!initial) {
      if (this.isNarrow) {
        // Keep the current orbit angle but widen the lens for the tall viewport.
        if (!this.state.introActive) this.camera.fov = this.defaultFov;
        if (this.state.mode === 'exterior') this.controls.target.y = 1.1;
      } else if (this.state.mode === 'exterior') {
        this.camera.fov = this.defaultFov;
      }
      this.camera.updateProjectionMatrix();
    } else {
      this.camera.fov = this.defaultFov;
    }
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const wasNarrow = this.isNarrow;
    this.isNarrow = width <= 760;
    this.applyResponsiveFraming(false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    const dpr = this.getPixelRatio();
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(width, height);
    this.composer.setPixelRatio(dpr);
    this.composer.setSize(width, height);
    this.bloomPass.resolution.set(width * 0.55, height * 0.55);
    this.cinematicPass.uniforms.uResolution.value.set(width, height);
    this.world.setPixelRatio(dpr);
    if (wasNarrow !== this.isNarrow) {
      if (this.isNarrow) this.setWeatherPanelCollapsed(true);
      else this.setWeatherPanelCollapsed(false);
    }
  }

  startIntro() {
    this.state.started = true;
    const startPos = this.camera.position.clone();
    const startTarget = this.controls.target.clone();
    this.intro = {
      active: !this.reducedMotion,
      time: 0,
      duration: 3.15,
      fromPos: startPos,
      toPos: this.heroPosition.clone(),
      fromTarget: startTarget,
      toTarget: this.heroTarget.clone(),
    };
    if (this.reducedMotion) {
      this.intro.active = false;
      this.camera.position.copy(this.heroPosition);
      this.controls.target.copy(this.heroTarget);
      this.camera.lookAt(this.heroTarget);
      this.controls.enabled = true;
      this.state.orbit = false;
      this.controls.autoRotate = false;
      this.updateOrbitUI();
    } else {
      this.state.introActive = true;
      this.controls.enabled = false;
    }
  }

  async load() {
    this.setLoading(10, '连接雪山气象站');
    await sleep(120);
    this.setLoading(34, '生成冰川与雪脊');
    await sleep(170);
    this.setLoading(61, '雕琢 N90 Max 车身');
    await sleep(220);
    this.setLoading(82, '点亮观星座舱');
    await sleep(210);
    this.setLoading(100, '雪境已就绪');
    await sleep(320);

    document.body.classList.add('is-ready');
    document.body.classList.remove('is-loading');
    this.startIntro();
  }

  setLoading(percent, status) {
    this.dom.loaderBar.style.width = `${percent}%`;
    this.dom.loaderPct.textContent = String(percent).padStart(2, '0');
    if (status) this.dom.loaderStatus.textContent = status;
  }

  showWebGLError() {
    document.body.classList.remove('is-loading');
    if (this.dom.loader) this.dom.loader.style.display = 'none';
    if (this.dom.webglError) this.dom.webglError.hidden = false;
  }

  updateCamera(dt) {
    if (this.state.introActive) {
      this.intro.time += dt;
      const t = clamp(this.intro.time / this.intro.duration, 0, 1);
      const eased = easeOutCubic(t);
      this.camera.position.lerpVectors(this.intro.fromPos, this.intro.toPos, eased);
      this.controls.target.lerpVectors(this.intro.fromTarget, this.intro.toTarget, eased);
      this.camera.lookAt(this.controls.target);
      if (t >= 1) {
        this.state.introActive = false;
        this.intro.active = false;
        this.controls.enabled = true;
        if (this.state.orbit && !this.reducedMotion) this.controls.autoRotate = true;
        this.updateOrbitUI();
      }
      return;
    }

    if (this.cameraTween) {
      this.cameraTween.elapsed += dt;
      const t = clamp(this.cameraTween.elapsed / this.cameraTween.duration, 0, 1);
      const eased = easeInOutCubic(t);
      this.camera.position.lerpVectors(this.cameraTween.fromPos, this.cameraTween.toPos, eased);
      this.controls.target.lerpVectors(this.cameraTween.fromTarget, this.cameraTween.toTarget, eased);
      this.camera.lookAt(this.controls.target);
      if (t >= 1) {
        this.cameraTween = null;
        this.controls.enabled = true;
        this.controls.update();
      }
      return;
    }

    if (this.state.mode === 'cabin') {
      this.cabinLook.yaw = damp(this.cabinLook.yaw, this.cabinLook.targetYaw, 9.5, dt);
      this.cabinLook.pitch = damp(this.cabinLook.pitch, this.cabinLook.targetPitch, 9.5, dt);
      this._tmpEuler.set(this.cabinLook.pitch, this.cabinLook.yaw, 0, 'YXZ');
      this._lookOffset.setFromEuler(this._tmpEuler);
      this.camera.quaternion.copy(this.cabinBaseQuaternion).multiply(this._lookOffset);
      const targetFov = this.interiorFov;
      if (Math.abs(this.camera.fov - targetFov) > 0.01) {
        this.camera.fov = damp(this.camera.fov, targetFov, 5.5, dt);
        this.camera.updateProjectionMatrix();
      }
    } else if (this.controls.enabled) {
      this.controls.update();
    }
  }

  render() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.elapsed += dt;
    this._minuteAccumulator += dt;
    if (this._minuteAccumulator > 6) {
      this._minuteAccumulator = 0;
      // A slow clock tick keeps the HUD quietly alive.
      this._clockMinute = (this._clockMinute + 1) % 60;
      if (this.dom.clock) this.dom.clock.textContent = this.getClockText();
    }

    this.updateCamera(dt);
    this.world.update(dt, this.elapsed);
    this.vehicle.update(dt, this.elapsed);
    this.vehicle.setWeather({
      wetness: this.world.current.wetness,
      snow: this.world.current.snow,
      rain: this.world.current.rain,
    });

    this.renderer.toneMappingExposure = this.world.current.exposure;
    this.bloomPass.strength = this.world.current.bloom * (this.isNarrow ? 0.55 : 0.68);
    this.cinematicPass.uniforms.uTime.value = this.elapsed;
    this.dom.lightningFlash.style.opacity = String(
      Math.min(0.8, this.world.flashEnergy * 0.58)
    );

    this.composer.render(dt);
  }

  snapshot() {
    return {
      mode: this.state.mode,
      weather: this.state.weather,
      intensity: this.state.intensity,
      roof: this.state.roof,
      roofAmount: this.vehicle.roofAmount,
      orbit: this.state.orbit,
      camera: this.camera.position.toArray(),
      exterior: this.camera.position.toArray(),
      introActive: this.state.introActive,
      transitioning: this.state.transitioning,
      render: {
        calls: this.renderer.info.render.calls,
        triangles: this.renderer.info.render.triangles,
      },
    };
  }
}

try {
  new Experience();
} catch (error) {
  console.error('[N90 snow experience]', error);
  const fallback = document.getElementById('webglError');
  if (fallback) fallback.hidden = false;
  document.body.classList.remove('is-loading');
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
  window.__N90_ERROR = String(error?.stack || error);
}
