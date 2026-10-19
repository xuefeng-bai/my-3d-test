import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { CityWorld, WEATHER_PRESETS } from './world.js';
import { ConvenienceStore } from './store.js';
import { clamp, damp, lerp, easeInOutCubic, smoothstep } from './utils.js';

const HERO_POSITION = new THREE.Vector3(6.95, 2.2, 18.7);
const HERO_TARGET = new THREE.Vector3(-1.05, 1.62, -0.7);
const INTRO_POSITION = new THREE.Vector3(12.3, 4.35, 29.4);
const INTRO_TARGET = new THREE.Vector3(-1.8, 2.2, -2.5);
const MOBILE_HERO_POSITION = new THREE.Vector3(7.8, 3.05, 27.4);
const MOBILE_HERO_TARGET = new THREE.Vector3(-0.6, 1.85, 0);
const MOBILE_INTRO_POSITION = new THREE.Vector3(15.8, 5.4, 40);
const MOBILE_INTRO_TARGET = new THREE.Vector3(-2.0, 2.7, -2.6);
const INTERIOR_TARGET = new THREE.Vector3(0.35, 1.14, -5.35);
const DOOR_X = 1.4;
const MOVE_SPEED = 2.05;
const PLAYER_RADIUS = 0.25;

const sleep = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uIntensity: { value: 1 },
    uGrain: { value: 0.014 },
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
    uniform float uIntensity;
    uniform float uGrain;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      vec2 center = uv - 0.5;
      float aberration = 0.0008 + dot(center, center) * 0.0022;

      vec3 col;
      col.r = texture2D(tDiffuse, uv + center * aberration).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - center * aberration).b;

      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(col, col * vec3(0.93, 1.015, 1.02) + vec3(0.003, 0.007, 0.006), 0.55);
      col += vec3(0.018, 0.007, -0.005) * smoothstep(0.55, 1.3, luma);
      col = (col - 0.5) * 1.035 + 0.5;
      col = mix(vec3(luma), col, 1.045);

      float vig = smoothstep(0.92, 0.3, length(center * vec2(1.0, 1.06)));
      col *= mix(0.8, 1.0, vig);

      float grain = hash(uv * 1600.0 + fract(uTime) * 17.0) - 0.5;
      col += grain * uGrain;
      col = max(col, 0.0);

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

class AfterHours {
  constructor() {
    this.canvas = document.querySelector('#scene');
    this.state = {
      mode: 'exterior',
      transitioning: false,
      autoOrbit: false,
      intro: true,
      weather: 'rain',
      intensity: 0.55,
      hour: 22.68,
      entered: false,
    };
    this.elapsed = 0;
    this.interiorYaw = 0;
    this.interiorPitch = 0;
    this.targetYaw = 0;
    this.targetPitch = 0;
    this.dragLook = null;
    this.keys = new Set();
    this.bobPhase = 0;
    this.transition = null;
    this.intro = null;
    this.viewTween = null;
    this.exteriorPose = null;
    this.isMobile = window.matchMedia('(max-width: 760px)').matches;
    this.noIntro = new URLSearchParams(window.location.search).has('nointro');
    this.heroPosition = (this.isMobile ? MOBILE_HERO_POSITION : HERO_POSITION).clone();
    this.heroTarget = (this.isMobile ? MOBILE_HERO_TARGET : HERO_TARGET).clone();
    this.introStartPosition = (this.isMobile ? MOBILE_INTRO_POSITION : INTRO_POSITION).clone();
    this.introStartTarget = (this.isMobile ? MOBILE_INTRO_TARGET : INTRO_TARGET).clone();
    this.exteriorFov = this.isMobile ? 55 : 38;
    const params = new URLSearchParams(window.location.search);
    this.hq = params.has('hq');
    this.renderScale = 1;
    this.baseDpr = Math.min(window.devicePixelRatio || 1, this.isMobile ? 1.4 : 1.5);
    this.fpsElapsed = 0;
    this.fpsFrames = 0;
    this.lastScaleChange = 0;
    this.perfReadyAt = 0;

    this.initRenderer();
    this.initScene();
    this.initUI();
    this.bindEvents();
    this.animate = this.animate.bind(this);
    this.clock = new THREE.Clock();
    this.frame = requestAnimationFrame(this.animate);
    this.startExperience();
  }

  initRenderer() {
    try {
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: false,
        powerPreference: 'high-performance',
        alpha: false,
        stencil: false,
      });
    } catch (error) {
      console.error(error);
      document.querySelector('#webglError').hidden = false;
      document.body.classList.remove('is-loading');
      throw error;
    }
    const dpr = this.baseDpr * this.renderScale;
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;
    this.renderer.setClearColor(0x030807, 1);
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(this.exteriorFov, window.innerWidth / window.innerHeight, 0.06, 1200);
    this.camera.position.copy(this.introStartPosition);
    this.camera.lookAt(this.introStartTarget);

    this.world = new CityWorld(this.scene, this.renderer, { mobile: this.isMobile });
    this.world.setTime(22.68);
    this.world.setWeather('rain', 0.55, true);
    this.world.wetness = 0.82;
    this.currentExposure = this.world.exposure;

    this.store = new ConvenienceStore(this.scene);
    this.store.setTime(22.68);
    this.store.setDoorOpen(false);
    this.store.setSnowCover(0);

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.target.copy(this.introStartTarget);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enablePan = false;
    this.controls.rotateSpeed = 0.52;
    this.controls.zoomSpeed = 0.7;
    this.controls.minDistance = 7.5;
    this.controls.maxDistance = 36;
    this.controls.minPolarAngle = 0.64;
    this.controls.maxPolarAngle = 1.52;
    this.controls.minAzimuthAngle = -1.35;
    this.controls.maxAzimuthAngle = 1.35;
    this.controls.autoRotate = false;
    this.controls.autoRotateSpeed = -0.32;
    this.controls.enabled = false;
    this.controls.addEventListener('start', () => {
      if (this.state.autoOrbit && this.state.mode === 'exterior' && !this.state.transitioning) {
        this.setAutoOrbit(false);
      }
    });

    const composerTarget = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight,
      {
        type: THREE.HalfFloatType,
        depthBuffer: true,
        stencilBuffer: false,
        samples: this.isMobile ? 0 : 2,
      }
    );
    this.composer = new EffectComposer(this.renderer, composerTarget);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.36,
      0.58,
      0.92
    );
    this.gradePass = new ShaderPass(GradeShader);
    this.outputPass = new OutputPass();
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.gradePass);
    this.composer.addPass(this.outputPass);
    this.composer.setPixelRatio(this.baseDpr * this.renderScale);
    this.composer.setSize(window.innerWidth, window.innerHeight);
  }

  applyRenderScale(scale, force = false) {
    const min = this.isMobile ? 0.68 : 0.72;
    const next = Math.max(min, Math.min(1, scale));
    if (!force && Math.abs(next - this.renderScale) < 0.005) return;
    this.renderScale = next;
    const dpr = this.baseDpr * next;
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    if (this.composer) {
      this.composer.setPixelRatio(dpr);
      this.composer.setSize(window.innerWidth, window.innerHeight);
    }
    this.world?.setPixelRatio(dpr);
  }

  updateAdaptiveResolution(rawDt) {
    if (this.hq || document.hidden) return;
    if (!this.perfReadyAt) return;
    if (performance.now() - this.perfReadyAt < 1500) return;
    this.fpsElapsed += rawDt;
    this.fpsFrames++;
    if (this.fpsElapsed < 1.4) return;
    const fps = this.fpsFrames / this.fpsElapsed;
    this.fpsElapsed = 0;
    this.fpsFrames = 0;
    if (performance.now() - this.lastScaleChange < 1200) return;

    const min = this.isMobile ? 0.68 : 0.72;
    if (fps < 45 && this.renderScale > min) {
      // Frame rate falls roughly with pixel count, so measure and scale
      // toward a comfortable 47 fps in one or two steps.
      const target = this.renderScale * Math.sqrt(Math.max(18, fps) / 47);
      this.applyRenderScale(Math.max(min, Math.min(this.renderScale - 0.02, target)));
      this.lastScaleChange = performance.now();
    } else if (fps > 56 && this.renderScale < 1) {
      this.applyRenderScale(Math.min(1, this.renderScale + 0.03));
      this.lastScaleChange = performance.now();
    }
  }

  initUI() {
    this.ui = {
      body: document.body,
      loader: document.querySelector('#loader'),
      loaderBar: document.querySelector('#loaderBar'),
      loaderPct: document.querySelector('#loaderPct'),
      loaderStatus: document.querySelector('#loaderStatus'),
      sceneFade: document.querySelector('#sceneFade'),
      headerClock: document.querySelector('#headerClock'),
      headerWeather: document.querySelector('#headerWeather'),
      headerTemp: document.querySelector('#headerTemp'),
      headerHumidity: document.querySelector('#headerHumidity'),
      headerWeatherUse: document.querySelector('#headerWeatherIcon use'),
      heroMood: document.querySelector('#heroMood'),
      heroDesc: document.querySelector('#heroDesc'),
      enterCta: document.querySelector('#enterCta'),
      atmospherePanel: document.querySelector('#atmospherePanel'),
      panelToggle: document.querySelector('#panelToggle'),
      panelBody: document.querySelector('#panelBody'),
      timeRange: document.querySelector('#timeRange'),
      timeOut: document.querySelector('#timeOut'),
      weatherLabel: document.querySelector('#weatherLabel'),
      intensity: document.querySelector('#intensity'),
      intensityOut: document.querySelector('#intensityOut'),
      intensityLabel: document.querySelector('#intensityLabel'),
      weatherNote: document.querySelector('#weatherNote'),
      tempTelemetry: document.querySelector('#tempTelemetry'),
      humidityTelemetry: document.querySelector('#humidityTelemetry'),
      weatherTabs: [...document.querySelectorAll('.weather-tab')],
      timePresets: [...document.querySelectorAll('[data-time]')],
      modeButtons: [...document.querySelectorAll('.mode-btn')],
      orbitBtn: document.querySelector('#orbitBtn'),
      resetBtn: document.querySelector('#resetBtn'),
      storeHint: document.querySelector('#storeHint'),
      storeHintText: document.querySelector('#storeHintText'),
      srStatus: document.querySelector('#srStatus'),
    };
    this.ui.timeRange.value = String(Math.round(this.state.hour * 60));
    this.ui.intensity.value = String(Math.round(this.state.intensity * 100));
    this.ui.orbitBtn.classList.remove('is-on');
    this.ui.orbitBtn.setAttribute('aria-pressed', 'false');
    const startCollapsed = window.matchMedia('(max-width: 760px)').matches;
    this.setPanelCollapsed(startCollapsed);
    this.updateUI();
    this.updateModeUI();
    this.updateHintText();
  }

  updateHintText() {
    this.ui.storeHintText.innerHTML = this.isMobile
      ? '拖动环视 <i>·</i> 点下方「街区」离店'
      : '拖动环视 <i>·</i> WASD 移动 <i>·</i> ESC 离店';
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('keydown', (event) => this.onKeyDown(event));
    window.addEventListener('keyup', (event) => this.keys.delete(event.code));
    window.addEventListener('blur', () => this.keys.clear());

    this.ui.enterCta.addEventListener('click', () => this.enterStore());
    this.ui.modeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (this.state.transitioning) return;
        if (button.dataset.view === 'interior') this.enterStore();
        else this.exitStore();
      });
    });
    this.ui.orbitBtn.addEventListener('click', () => {
      if (this.state.mode !== 'exterior' || this.state.transitioning) return;
      this.setAutoOrbit(!this.state.autoOrbit);
    });
    this.ui.resetBtn.addEventListener('click', () => this.resetView());

    this.ui.panelToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      this.setPanelCollapsed(!this.ui.atmospherePanel.classList.contains('is-collapsed'));
    });
    this.ui.atmospherePanel.querySelector('.panel-head').addEventListener('click', () => {
      if (this.ui.atmospherePanel.classList.contains('is-collapsed')) this.setPanelCollapsed(false);
    });

    this.ui.timeRange.addEventListener('input', () => {
      const minutes = Number(this.ui.timeRange.value);
      this.setTime(minutes / 60);
    });
    this.ui.timePresets.forEach((button) => {
      button.addEventListener('click', () => {
        const minutes = Number(button.dataset.time);
        this.ui.timeRange.value = String(minutes);
        this.setTime(minutes / 60);
      });
    });
    this.ui.weatherTabs.forEach((button) => {
      button.addEventListener('click', () => {
        this.setWeather(button.dataset.weather, Number(this.ui.intensity.value) / 100);
      });
    });
    this.ui.intensity.addEventListener('input', () => {
      this.state.intensity = Number(this.ui.intensity.value) / 100;
      this.world.setWeather(this.state.weather, this.state.intensity);
      this.updateUI();
    });

    this.canvas.addEventListener('pointerdown', (event) => this.onCanvasPointerDown(event));
    this.canvas.addEventListener('pointermove', (event) => this.onCanvasPointerMove(event));
    this.canvas.addEventListener('pointerup', (event) => this.endLookDrag(event));
    this.canvas.addEventListener('pointercancel', (event) => this.endLookDrag(event));
    this.canvas.addEventListener('dblclick', () => {
      if (this.state.mode === 'exterior' && !this.state.transitioning) this.resetView();
    });
    this.canvas.addEventListener('wheel', () => {
      if (this.state.intro) this.finishIntro();
    }, { passive: true });
    this.canvas.addEventListener('pointerdown', () => {
      if (this.state.intro) this.finishIntro();
    });

    window.addEventListener('wheel', (event) => {
      if (this.state.intro) this.finishIntro();
      if (this.state.mode === 'interior') event.preventDefault();
    }, { passive: false });
  }

  setPanelCollapsed(collapsed) {
    this.ui.atmospherePanel.classList.toggle('is-collapsed', collapsed);
    this.ui.panelToggle.setAttribute('aria-expanded', String(!collapsed));
  }

  onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const wasMobile = this.isMobile;
    this.isMobile = w <= 760;
    this.heroPosition.copy(this.isMobile ? MOBILE_HERO_POSITION : HERO_POSITION);
    this.heroTarget.copy(this.isMobile ? MOBILE_HERO_TARGET : HERO_TARGET);
    this.introStartPosition.copy(this.isMobile ? MOBILE_INTRO_POSITION : INTRO_POSITION);
    this.introStartTarget.copy(this.isMobile ? MOBILE_INTRO_TARGET : INTRO_TARGET);
    this.exteriorFov = this.isMobile ? 55 : 38;
    this.baseDpr = Math.min(window.devicePixelRatio || 1, this.isMobile ? 1.4 : 1.5);
    this.camera.aspect = w / h;
    this.camera.fov = this.state.mode === 'interior' ? 64 : this.exteriorFov;
    this.camera.updateProjectionMatrix();
    this.applyRenderScale(this.renderScale, true);
    this.updateHintText();

    if (wasMobile !== this.isMobile && !this.state.transitioning && !this.state.intro) {
      if (this.state.mode === 'exterior') {
        this.camera.position.copy(this.heroPosition);
        this.controls.target.copy(this.heroTarget);
        this.camera.lookAt(this.heroTarget);
        this.controls.update();
      }
    }
    if (wasMobile !== this.isMobile && this.state.mode === 'exterior' && !this.state.transitioning) {
      this.setPanelCollapsed(this.isMobile);
    }
  }

  /* ----------------------------- UI data ---------------------------- */

  setTime(hour) {
    this.state.hour = ((hour % 24) + 24) % 24;
    this.world.setTime(this.state.hour);
    this.store.setTime(this.state.hour);
    this.updateUI();
  }

  setWeather(id, intensity = this.state.intensity) {
    if (!WEATHER_PRESETS[id]) return;
    this.state.weather = id;
    this.state.intensity = clamp(intensity, 0, 1);
    this.world.setWeather(id, this.state.intensity);
    this.updateUI();
    this.ui.srStatus.textContent = `天气已切换为${WEATHER_PRESETS[id].label}`;
  }

  setAutoOrbit(enabled) {
    this.state.autoOrbit = Boolean(enabled);
    this.controls.autoRotate = this.state.autoOrbit && this.state.mode === 'exterior';
    this.ui.orbitBtn.classList.toggle('is-on', this.state.autoOrbit);
    this.ui.orbitBtn.setAttribute('aria-pressed', String(this.state.autoOrbit));
  }

  getHeroMood(summary) {
    const hour = summary.hour;
    const night = hour >= 19 || hour < 5.5;
    if (night) {
      if (summary.weatherId === 'rain') return '雨夜';
      if (summary.weatherId === 'snow') return '雪夜';
      if (summary.weatherId === 'fog') return '雾夜';
      return '星夜';
    }
    return summary.mood;
  }

  getHeroDescription(summary) {
    const hour = summary.hour;
    const night = hour >= 18.5 || hour < 5.5;
    const morning = hour >= 5.5 && hour < 11;
    if (summary.weatherId === 'snow') {
      return '雪落在斑马线上。自动门打开，关东煮的热气、现磨咖啡的香气，和一小块温暖的冬夜，一起迎上来。';
    }
    if (summary.weatherId === 'fog') {
      return '雾把街灯揉成一团柔光。自动门打开，热气和咖啡香从店里漫出来，替夜晚留了一盏灯。';
    }
    if (summary.weatherId === 'rain') {
      if (morning) {
        return '雨落在清晨的斑马线上。自动门打开，关东煮的热气、现磨咖啡的香气，和一小块干燥的清晨，一起迎上来。';
      }
      if (!night) {
        return '雨落在午后的街道上。自动门打开，冷气、咖啡香和一小段慢下来的时间，一起迎上来。';
      }
      return '雨落在斑马线上。自动门打开，关东煮的热气、现磨咖啡的香气，和一小块干燥的夜晚，一起迎上来。';
    }
    if (night) {
      return '夜色落在斑马线上。自动门打开，关东煮的热气、现磨咖啡的香气，和一小块安静的夜晚，一起迎上来。';
    }
    if (morning) {
      return '清晨的光落在斑马线上。自动门打开，关东煮的热气、现磨咖啡的香气，和一小段刚醒来的街道，一起迎上来。';
    }
    return '阳光落在斑马线上。自动门打开，冷气、咖啡香和一小段慢下来的时间，一起迎上来。';
  }

  updateUI() {
    const summary = this.world.getSummary();
    const time = summary.time;
    this.ui.headerClock.textContent = `${time} JST`;
    this.ui.headerWeather.textContent = summary.weatherLabel;
    this.ui.headerTemp.textContent = String(summary.temperature);
    this.ui.headerHumidity.textContent = `湿度 ${summary.humidity}%`;
    this.ui.headerWeatherUse.setAttribute('href', `#${summary.icon}`);
    this.ui.heroMood.textContent = `${this.getHeroMood(summary)} · ${time}`;
    this.ui.heroDesc.textContent = this.getHeroDescription(summary);
    this.ui.weatherLabel.textContent = summary.weatherLabel;
    this.ui.weatherNote.textContent = summary.note;
    this.ui.tempTelemetry.textContent = `${summary.temperature}°C`;
    this.ui.humidityTelemetry.textContent = `湿度 ${summary.humidity}%`;
    this.ui.timeOut.textContent = time;
    this.ui.intensityLabel.textContent = summary.intensityLabel;
    this.ui.intensityOut.textContent = this.state.weather === 'clear' ? '—' : `${Math.round(this.state.intensity * 100)}%`;
    this.ui.intensity.disabled = this.state.weather === 'clear';
    this.ui.intensity.value = String(Math.round(this.state.intensity * 100));
    this.ui.timeRange.value = String(Math.round(this.state.hour * 60));

    for (const button of this.ui.weatherTabs) {
      const active = button.dataset.weather === this.state.weather;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    }
    for (const cls of ['weather-clear', 'weather-rain', 'weather-snow', 'weather-fog']) {
      this.ui.body.classList.remove(cls);
    }
    this.ui.body.classList.add(`weather-${this.state.weather}`);
    this.ui.intensity.style.setProperty('--range', `${Math.round(this.state.intensity * 100)}%`);
  }

  updateModeUI() {
    const interior = this.state.mode === 'interior';
    this.ui.modeButtons.forEach((button) => {
      const active = button.dataset.view === this.state.mode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
      button.disabled = this.state.transitioning;
    });
    this.ui.orbitBtn.disabled = interior || this.state.transitioning;
    this.ui.resetBtn.disabled = this.state.transitioning;
    this.ui.body.classList.toggle('is-interior', interior);
    this.ui.body.classList.toggle('is-transitioning', this.state.transitioning);
  }

  /* ---------------------------- live cycle -------------------------- */

  async startExperience() {
    this.setProgress(4, '正在打开卷帘门');
    await sleep(230);
    this.setProgress(21, '正在点亮店铺');
    await sleep(260);
    this.setProgress(46, '正在布置货架与冷柜');
    this.renderer.compile(this.scene, this.camera);
    await sleep(300);
    this.setProgress(68, '正在唤醒街灯与霓虹');
    await sleep(240);
    this.setProgress(86, '正在调整雨势与夜色');
    this.world.setTime(this.state.hour);
    this.world.setWeather(this.state.weather, this.state.intensity, true);
    await sleep(300);
    this.setProgress(100, '即将开门');
    await sleep(260);

    this.ui.body.classList.remove('is-loading');
    this.ui.body.classList.add('is-ready');
    this.perfReadyAt = performance.now();

    if (this.noIntro) {
      this.finishIntro(true);
      this.ui.srStatus.textContent = '场景已载入';
    } else {
      this.state.intro = true;
      this.controls.enabled = false;
      this.intro = {
        t: 0,
        duration: 4.2,
        fromPosition: this.introStartPosition.clone(),
        toPosition: this.heroPosition.clone(),
        fromTarget: this.introStartTarget.clone(),
        toTarget: this.heroTarget.clone(),
      };
      this.camera.fov = this.exteriorFov;
      this.camera.updateProjectionMatrix();
      this.camera.position.copy(this.introStartPosition);
      this.camera.lookAt(this.introStartTarget);
      this.ui.srStatus.textContent = '场景已载入，正在靠近店铺';
    }
    window.__READY = true;
    window.__store = this;
  }

  setProgress(value, status) {
    this.ui.loaderBar.style.width = `${value}%`;
    this.ui.loaderPct.textContent = String(value).padStart(2, '0');
    if (status) this.ui.loaderStatus.textContent = status;
  }

  finishIntro(instant = false) {
    if (!this.state.intro) return;
    this.state.intro = false;
    this.intro = null;
    this.camera.position.copy(this.heroPosition);
    this.camera.fov = this.exteriorFov;
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.heroTarget);
    this.controls.target.copy(this.heroTarget);
    this.controls.enabled = this.state.mode === 'exterior' && !this.state.transitioning;
    this.controls.update();
    if (instant) this.ui.srStatus.textContent = '场景已载入';
  }

  animate() {
    this.frame = requestAnimationFrame(this.animate);
    const rawDt = this.clock.getDelta();
    const dt = Math.min(rawDt, 0.05);
    this.elapsed += dt;
    this.updateAdaptiveResolution(rawDt);
    this.updateCamera(dt);
    this.updateWorld(dt);
    this.updateDoorProximity();
    this.renderFrame();
  }

  updateCamera(dt) {
    if (this.state.intro) {
      if (!this.intro) return;
      this.intro.t = Math.min(1, this.intro.t + dt / this.intro.duration);
      const e = easeInOutCubic(this.intro.t);
      this.camera.position.lerpVectors(this.intro.fromPosition, this.intro.toPosition, e);
      const look = new THREE.Vector3().lerpVectors(this.intro.fromTarget, this.intro.toTarget, e);
      this.camera.lookAt(look);
      if (this.intro.t >= 1) this.finishIntro();
      return;
    }

    if (this.viewTween) {
      this.updateViewTween(dt);
      return;
    }

    if (this.transition) {
      this.updateTransition(dt);
      return;
    }

    if (this.state.mode === 'interior') {
      this.updateInterior(dt);
    } else {
      this.controls.enabled = true;
      this.controls.autoRotate = this.state.autoOrbit;
      if (this.state.autoOrbit) {
        const azimuth = this.controls.getAzimuthalAngle();
        if (azimuth > this.controls.maxAzimuthAngle - 0.03) {
          this.controls.autoRotateSpeed = -Math.abs(this.controls.autoRotateSpeed);
        } else if (azimuth < this.controls.minAzimuthAngle + 0.03) {
          this.controls.autoRotateSpeed = Math.abs(this.controls.autoRotateSpeed);
        }
      }
      this.controls.update();
    }
  }

  updateInterior(dt) {
    if (this.state.transitioning) return;
    const bounds = this.store.getBounds();
    let forward = 0;
    let right = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) forward += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) forward -= 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) right -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) right += 1;
    const moving = forward !== 0 || right !== 0;

    if (moving) {
      const len = Math.hypot(forward, right) || 1;
      forward /= len;
      right /= len;
      const sin = Math.sin(this.interiorYaw);
      const cos = Math.cos(this.interiorYaw);
      const dx = (-sin * forward + cos * right) * MOVE_SPEED * dt;
      const dz = (-cos * forward - sin * right) * MOVE_SPEED * dt;
      const nextX = clamp(this.camera.position.x + dx, bounds.minX, bounds.maxX);
      const nextZ = clamp(this.camera.position.z + dz, bounds.minZ, bounds.maxZ);
      if (!this.blockedAt(nextX, this.camera.position.z, bounds)) this.camera.position.x = nextX;
      if (!this.blockedAt(this.camera.position.x, nextZ, bounds)) this.camera.position.z = nextZ;
      this.bobPhase += dt * 8.4;
    } else {
      const rest = Math.round(this.bobPhase / (Math.PI * 2)) * Math.PI * 2;
      this.bobPhase = damp(this.bobPhase, rest, 5, dt);
    }

    const yawDiff = ((this.targetYaw - this.interiorYaw + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    this.interiorYaw += yawDiff * (1 - Math.exp(-9 * dt));
    this.interiorPitch = damp(this.interiorPitch, this.targetPitch, 9, dt);

    const eye = 1.73;
    const bob = Math.sin(this.bobPhase) * (moving ? 0.013 : 0.0015);
    this.camera.position.y = damp(this.camera.position.y, eye + bob, 8, dt);
    this.camera.fov = damp(this.camera.fov, 64, 4, dt);
    this.camera.updateProjectionMatrix();
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.set(this.interiorPitch, this.interiorYaw, 0);
  }

  blockedAt(x, z, bounds) {
    if (x < bounds.minX || x > bounds.maxX || z < bounds.minZ || z > bounds.maxZ) return true;
    for (const c of this.store.getColliders()) {
      if (
        x + PLAYER_RADIUS > c.x1 &&
        x - PLAYER_RADIUS < c.x2 &&
        z + PLAYER_RADIUS > c.z1 &&
        z - PLAYER_RADIUS < c.z2
      ) return true;
    }
    return false;
  }

  startInteriorLook(target) {
    const dx = target.x - this.camera.position.x;
    const dy = target.y - this.camera.position.y;
    const dz = target.z - this.camera.position.z;
    const yaw = Math.atan2(-dx, -dz);
    const pitch = Math.atan2(dy, Math.hypot(dx, dz));
    this.interiorYaw = yaw;
    this.targetYaw = yaw;
    this.interiorPitch = clamp(pitch, -1.05, 1.0);
    this.targetPitch = this.interiorPitch;
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.set(this.interiorPitch, this.interiorYaw, 0);
  }

  updateDoorProximity() {
    if (this.state.mode !== 'interior' || this.state.transitioning) return;
    const distance = Math.hypot(this.camera.position.x - DOOR_X, this.camera.position.z);
    this.store.setDoorOpen(distance < 2.05);
  }

  updateWorld(dt) {
    this.world.update(dt, this.elapsed);
    this.store.update(dt, this.elapsed, {
      hour: this.world.hour,
      snowCover: this.world.snowCover,
    });
    if (this.gradePass) this.gradePass.uniforms.uTime.value = this.elapsed;
    const targetExposure = this.world.exposure * (this.state.mode === 'interior' ? 0.82 : 1);
    this.currentExposure = damp(this.currentExposure, targetExposure, 2.2, dt);
    this.renderer.toneMappingExposure = this.currentExposure;
    if (this.bloomPass) {
      this.bloomPass.strength = this.world.bloom * (this.state.mode === 'interior' ? 0.86 : 1);
    }
  }

  renderFrame() {
    this.composer.render();
  }

  /* ---------------------------- camera move ------------------------- */

  enterStore() {
    if (this.state.transitioning || this.state.mode === 'interior') return;
    if (this.state.intro) this.finishIntro();
    if (this.viewTween) this.viewTween = null;
    this.state.transitioning = true;
    this.state.entered = true;
    this.store.setDoorOpen(true);
    this.setAutoOrbit(false);
    this.controls.enabled = false;
    this.exteriorPose = {
      position: this.camera.position.clone(),
      target: this.controls.target.clone(),
    };
    this.setPanelCollapsed(true);
    this.updateModeUI();

    const start = this.camera.position.clone();
    const points = [
      start,
      new THREE.Vector3(DOOR_X + 3.6, 1.95, 9.2),
      new THREE.Vector3(DOOR_X + 1.2, 1.82, 4.2),
      new THREE.Vector3(DOOR_X + 0.28, 1.75, 1.1),
      new THREE.Vector3(DOOR_X, 1.73, -1.35),
    ];
    if (start.distanceTo(points[1]) < 1.2) points.splice(1, 1);
    this.transition = {
      type: 'enter',
      stage: 'path',
      t: 0,
      duration: 3.65,
      curve: new THREE.CatmullRomCurve3(points, false, 'centripetal'),
      lookFrom: this.controls.target.clone(),
      lookTo: INTERIOR_TARGET.clone(),
    };
    this.ui.srStatus.textContent = '正在走向自动门';
  }

  exitStore() {
    if (this.state.transitioning || this.state.mode !== 'interior') return;
    this.state.transitioning = true;
    this.store.setDoorOpen(true);
    this.controls.enabled = false;
    this.updateModeUI();
    this.ui.sceneFade.classList.add('is-visible');
    this.transition = {
      type: 'exit',
      stage: 'fade',
      t: 0,
      duration: 0.42,
    };
    this.ui.srStatus.textContent = '正在离开店铺';
  }

  updateTransition(dt) {
    const tr = this.transition;
    if (!tr) return;

    if (tr.type === 'enter') {
      tr.t = Math.min(1, tr.t + dt / tr.duration);
      const e = easeInOutCubic(tr.t);
      this.camera.position.copy(tr.curve.getPoint(e));
      const look = new THREE.Vector3().lerpVectors(tr.lookFrom, tr.lookTo, smoothstep(0.06, 0.96, e));
      this.camera.lookAt(look);
      this.camera.fov = lerp(this.exteriorFov, 64, smoothstep(0.28, 1, e));
      this.camera.updateProjectionMatrix();
      if (tr.t >= 1) this.finishEnterTransition();
      return;
    }

    if (tr.stage === 'fade') {
      tr.t += dt;
      if (tr.t >= tr.duration) {
        const inside = new THREE.Vector3(DOOR_X, 1.73, -1.22);
        this.camera.position.copy(inside);
        this.camera.fov = 64;
        this.camera.updateProjectionMatrix();
        this.camera.lookAt(new THREE.Vector3(DOOR_X, 1.55, 6.2));
        this.ui.sceneFade.classList.remove('is-visible');
        const saved = this.exteriorPose || {
          position: this.heroPosition.clone(),
          target: this.heroTarget.clone(),
        };
        const points = [
          inside.clone(),
          new THREE.Vector3(DOOR_X, 1.76, 0.65),
          new THREE.Vector3(DOOR_X + 0.7, 1.82, 3.2),
          saved.position.clone(),
        ];
        tr.stage = 'path';
        tr.t = 0;
        tr.duration = 2.8;
        tr.curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
        tr.lookFrom = new THREE.Vector3(DOOR_X, 1.45, 5.3);
        tr.lookTo = saved.target.clone();
        tr.saved = saved;
        tr.fovStart = 64;
        tr.fovEnd = this.exteriorFov;
      }
      return;
    }

    tr.t = Math.min(1, tr.t + dt / tr.duration);
    const e = easeInOutCubic(tr.t);
    this.camera.position.copy(tr.curve.getPoint(e));
    const look = new THREE.Vector3().lerpVectors(tr.lookFrom, tr.lookTo, smoothstep(0.1, 0.92, e));
    this.camera.lookAt(look);
    this.camera.fov = lerp(tr.fovStart, tr.fovEnd, smoothstep(0.35, 1, e));
    this.camera.updateProjectionMatrix();
    if (tr.t >= 1) this.finishExitTransition();
  }

  finishEnterTransition() {
    this.transition = null;
    this.state.transitioning = false;
    this.state.mode = 'interior';
    this.state.entered = true;
    this.camera.position.set(DOOR_X, 1.73, -1.35);
    this.camera.fov = 64;
    this.camera.updateProjectionMatrix();
    this.startInteriorLook(INTERIOR_TARGET);
    this.controls.enabled = false;
    this.controls.autoRotate = false;
    this.ui.sceneFade.classList.remove('is-visible');
    this.setPanelCollapsed(true);
    this.updateModeUI();
    this.ui.srStatus.textContent = '已进入店内，使用鼠标拖动环视，W A S D 移动，ESC 离店';
    this.updateDoorProximity();
  }

  finishExitTransition() {
    const tr = this.transition;
    this.transition = null;
    this.state.transitioning = false;
    this.state.mode = 'exterior';
    this.state.entered = false;
    const saved = tr && tr.saved ? tr.saved : {
      position: this.heroPosition.clone(),
      target: this.heroTarget.clone(),
    };
    this.camera.position.copy(saved.position);
    this.camera.fov = this.exteriorFov;
    this.camera.updateProjectionMatrix();
    this.controls.target.copy(saved.target);
    this.camera.lookAt(saved.target);
    this.controls.enabled = true;
    this.controls.autoRotate = this.state.autoOrbit;
    this.controls.update();
    this.exteriorPose = null;
    this.store.setDoorOpen(false);
    if (!this.isMobile) this.setPanelCollapsed(false);
    this.updateModeUI();
    this.ui.srStatus.textContent = '已回到街区';
  }

  resetView() {
    if (this.state.transitioning || this.state.intro) return;
    if (this.state.mode === 'interior') {
      this.camera.position.set(DOOR_X, 1.73, -1.35);
      this.startInteriorLook(INTERIOR_TARGET);
      this.store.setDoorOpen(true);
      this.ui.srStatus.textContent = '视角已复位';
      return;
    }
    this.setAutoOrbit(false);
    this.controls.enabled = false;
    this.viewTween = {
      t: 0,
      duration: 1.05,
      fromPosition: this.camera.position.clone(),
      toPosition: this.heroPosition.clone(),
      fromTarget: this.controls.target.clone(),
      toTarget: this.heroTarget.clone(),
    };
    this.ui.srStatus.textContent = '视角已复位';
  }

  updateViewTween(dt) {
    const tw = this.viewTween;
    tw.t = Math.min(1, tw.t + dt / tw.duration);
    const e = easeInOutCubic(tw.t);
    this.camera.position.lerpVectors(tw.fromPosition, tw.toPosition, e);
    const look = new THREE.Vector3().lerpVectors(tw.fromTarget, tw.toTarget, e);
    this.camera.lookAt(look);
    this.controls.target.copy(look);
    if (tw.t >= 1) {
      this.viewTween = null;
      this.controls.enabled = true;
      this.controls.update();
    }
  }

  /* ---------------------------- pointer ---------------------------- */

  onCanvasPointerDown(event) {
    if (this.state.intro) this.finishIntro();
    if (this.state.mode !== 'interior' || this.state.transitioning) return;
    if (event.button !== undefined && event.button !== 0) return;
    this.dragLook = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };
    this.canvas.setPointerCapture?.(event.pointerId);
    this.ui.body.classList.add('is-dragging');
  }

  onCanvasPointerMove(event) {
    if (!this.dragLook || event.pointerId !== this.dragLook.id) return;
    const dx = event.clientX - this.dragLook.x;
    const dy = event.clientY - this.dragLook.y;
    this.dragLook.x = event.clientX;
    this.dragLook.y = event.clientY;
    const sens = event.pointerType === 'touch' ? 0.0034 : 0.0026;
    this.targetYaw -= dx * sens;
    this.targetPitch = clamp(this.targetPitch - dy * sens * 0.82, -1.02, 1.0);
  }

  endLookDrag(event) {
    if (!this.dragLook) return;
    if (event.pointerId !== undefined && event.pointerId !== this.dragLook.id) return;
    this.dragLook = null;
    this.canvas.releasePointerCapture?.(event.pointerId);
    this.ui.body.classList.remove('is-dragging');
  }

  onKeyDown(event) {
    const tag = event.target && event.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

    if (event.code === 'Escape') {
      if (this.state.mode === 'interior' && !this.state.transitioning) {
        this.exitStore();
      } else if (this.ui.atmospherePanel.classList.contains('is-collapsed')) {
        this.setPanelCollapsed(false);
      }
      return;
    }
    if (event.code === 'KeyE') {
      if (!this.state.transitioning) this.enterStore();
      return;
    }
    if (event.code === 'KeyR') {
      this.resetView();
      return;
    }
    if (event.code === 'KeyO') {
      if (this.state.mode === 'exterior') this.setAutoOrbit(!this.state.autoOrbit);
      return;
    }
    if (['Digit1', 'Digit2', 'Digit3', 'Digit4'].includes(event.code)) {
      const ids = ['clear', 'rain', 'snow', 'fog'];
      const id = ids[Number(event.code.slice(-1)) - 1];
      if (id) this.setWeather(id, this.state.intensity);
      return;
    }

    if (this.state.mode === 'interior' && !this.state.transitioning) {
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
        this.keys.add(event.code);
        event.preventDefault();
      }
    }
  }
}

try {
  window.__afterHours = new AfterHours();
} catch (error) {
  console.error(error);
  const fallback = document.querySelector('#webglError');
  if (fallback) fallback.hidden = false;
  document.body.classList.remove('is-loading');
}
