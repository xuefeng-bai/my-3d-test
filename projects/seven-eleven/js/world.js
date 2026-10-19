import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  RNG,
  createNoise2D,
  clamp,
  lerp,
  smoothstep,
  damp,
  canvasTexture,
  makeRadialTexture,
  makeSnowflakeTexture,
  GLSL_NOISE,
} from './utils.js';

/* ------------------------------------------------------------------ *
 * Atmosphere presets
 * ------------------------------------------------------------------ */

export const WEATHER_PRESETS = {
  clear: {
    id: 'clear',
    label: '晴朗',
    short: '晴',
    icon: 'i-sun',
    cloud: 0.18,
    rain: 0,
    snow: 0,
    fogAmount: 0,
    wetness: 0.18,
    snowCover: 0,
    humidity: 52,
    tempOffset: 2,
    intensityLabel: '能见度',
    intensityNote: '晴 · 能见度良好',
  },
  rain: {
    id: 'rain',
    label: '小雨',
    short: '雨',
    icon: 'i-rain',
    cloud: 0.9,
    rain: 1,
    snow: 0,
    fogAmount: 0.36,
    wetness: 1,
    snowCover: 0,
    humidity: 88,
    tempOffset: -2,
    intensityLabel: '雨势',
    intensityNote: '雨 · 视程约 6 km',
  },
  snow: {
    id: 'snow',
    label: '小雪',
    short: '雪',
    icon: 'i-snow',
    cloud: 0.78,
    rain: 0,
    snow: 1,
    fogAmount: 0.52,
    wetness: 0.25,
    snowCover: 1,
    humidity: 76,
    tempOffset: -6,
    intensityLabel: '雪势',
    intensityNote: '雪 · 视程约 3 km',
  },
  fog: {
    id: 'fog',
    label: '薄雾',
    short: '雾',
    icon: 'i-fog',
    cloud: 0.64,
    rain: 0,
    snow: 0,
    fogAmount: 1,
    wetness: 0.32,
    snowCover: 0,
    humidity: 92,
    tempOffset: -1,
    intensityLabel: '雾的浓度',
    intensityNote: '雾 · 视程约 2 km',
  },
};

const COLOR_KEYS = ['top', 'horizon', 'ground', 'cloud', 'sun', 'fog', 'hemiSky', 'hemiGround'];

const TIME_KEYS = [
  {
    hour: 0,
    top: 0x020711,
    horizon: 0x0b1724,
    ground: 0x03070b,
    cloud: 0x0b131c,
    sun: 0x9fbfe3,
    fog: 0x07111a,
    hemiSky: 0x1c3044,
    hemiGround: 0x05090b,
    sunIntensity: 0.13,
    hemiIntensity: 0.48,
    exposure: 1.12,
    stars: 0.92,
    streetLights: 1,
    cityWindows: 1,
    fogDensity: 0.0065,
  },
  {
    hour: 4.8,
    top: 0x040c1a,
    horizon: 0x182a39,
    ground: 0x070c11,
    cloud: 0x16232e,
    sun: 0xaec7e1,
    fog: 0x0c1a25,
    hemiSky: 0x2e475d,
    hemiGround: 0x0a0f11,
    sunIntensity: 0.18,
    hemiIntensity: 0.5,
    exposure: 1.08,
    stars: 0.56,
    streetLights: 1,
    cityWindows: 0.98,
    fogDensity: 0.0075,
  },
  {
    hour: 6.3,
    top: 0x334e67,
    horizon: 0xe2a276,
    ground: 0x1b2328,
    cloud: 0x9e8a84,
    sun: 0xffbd84,
    fog: 0x6e777b,
    hemiSky: 0x7e98a8,
    hemiGround: 0x1d2224,
    sunIntensity: 0.95,
    hemiIntensity: 0.78,
    exposure: 0.94,
    stars: 0.02,
    streetLights: 0.62,
    cityWindows: 0.4,
    fogDensity: 0.0058,
  },
  {
    hour: 8.2,
    top: 0x6b9cbd,
    horizon: 0xd2dcdd,
    ground: 0x6d7778,
    cloud: 0xd7dbd7,
    sun: 0xfff0d8,
    fog: 0xb3c2c5,
    hemiSky: 0xb7ced8,
    hemiGround: 0x384346,
    sunIntensity: 2.8,
    hemiIntensity: 1.05,
    exposure: 0.98,
    stars: 0,
    streetLights: 0.08,
    cityWindows: 0.08,
    fogDensity: 0.0027,
  },
  {
    hour: 12,
    top: 0x5087b3,
    horizon: 0xc9dce2,
    ground: 0x7d8a8b,
    cloud: 0xeff1ed,
    sun: 0xfffaf0,
    fog: 0xb7c9cc,
    hemiSky: 0xb4d1df,
    hemiGround: 0x465555,
    sunIntensity: 3.7,
    hemiIntensity: 1.12,
    exposure: 0.98,
    stars: 0,
    streetLights: 0,
    cityWindows: 0.02,
    fogDensity: 0.0019,
  },
  {
    hour: 16,
    top: 0x648ca6,
    horizon: 0xd4d7d0,
    ground: 0x6f7979,
    cloud: 0xe1dcd2,
    sun: 0xfff0d8,
    fog: 0xaebec0,
    hemiSky: 0xb9d0d8,
    hemiGround: 0x3d4849,
    sunIntensity: 2.8,
    hemiIntensity: 1.04,
    exposure: 0.97,
    stars: 0,
    streetLights: 0.1,
    cityWindows: 0.08,
    fogDensity: 0.0028,
  },
  {
    hour: 18.25,
    top: 0x303f55,
    horizon: 0xef9d67,
    ground: 0x242625,
    cloud: 0x8f7c78,
    sun: 0xff9b58,
    fog: 0x9a8d85,
    hemiSky: 0x71889a,
    hemiGround: 0x27251f,
    sunIntensity: 1.22,
    hemiIntensity: 0.58,
    exposure: 0.98,
    stars: 0.03,
    streetLights: 0.7,
    cityWindows: 0.55,
    fogDensity: 0.0044,
  },
  {
    hour: 19.6,
    top: 0x0b1728,
    horizon: 0x483d3f,
    ground: 0x090e11,
    cloud: 0x2b2c2e,
    sun: 0xc29b86,
    fog: 0x2e3438,
    hemiSky: 0x3f566a,
    hemiGround: 0x0b0d0d,
    sunIntensity: 0.35,
    hemiIntensity: 0.45,
    exposure: 1.06,
    stars: 0.3,
    streetLights: 1,
    cityWindows: 0.9,
    fogDensity: 0.0056,
  },
  {
    hour: 22,
    top: 0x02070f,
    horizon: 0x0c1724,
    ground: 0x03070a,
    cloud: 0x0a121a,
    sun: 0x9ebde0,
    fog: 0x07111a,
    hemiSky: 0x1c3045,
    hemiGround: 0x05090a,
    sunIntensity: 0.16,
    hemiIntensity: 0.48,
    exposure: 1.13,
    stars: 0.82,
    streetLights: 1,
    cityWindows: 1,
    fogDensity: 0.0064,
  },
  {
    hour: 24,
    top: 0x020711,
    horizon: 0x0b1724,
    ground: 0x03070b,
    cloud: 0x0b131c,
    sun: 0x9fbfe3,
    fog: 0x07111a,
    hemiSky: 0x1c3044,
    hemiGround: 0x05090b,
    sunIntensity: 0.13,
    hemiIntensity: 0.48,
    exposure: 1.12,
    stars: 0.92,
    streetLights: 1,
    cityWindows: 1,
    fogDensity: 0.0065,
  },
];

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

function mesh(geo, mat, { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, cast = false, receive = false, name = '' } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = cast;
  m.receiveShadow = receive;
  if (name) m.name = name;
  return m;
}

function addColorKeys(source) {
  const result = {};
  for (const key of Object.keys(source)) {
    if (COLOR_KEYS.includes(key)) result[key] = new THREE.Color(source[key]);
    else result[key] = source[key];
  }
  return result;
}

const _c1 = new THREE.Color();
const _c2 = new THREE.Color();
const _c3 = new THREE.Color();

/* ------------------------------------------------------------------ *
 * CityWorld
 * ------------------------------------------------------------------ */

export class CityWorld {
  constructor(scene, renderer, { mobile = false } = {}) {
    this.scene = scene;
    this.renderer = renderer;
    this.mobile = mobile;
    this.group = new THREE.Group();
    this.group.name = 'CityWorld';
    scene.add(this.group);

    this.noiseA = createNoise2D(7812);
    this.noiseB = createNoise2D(4601);
    this.rng = new RNG(112711);

    this.hour = 22.68;
    this.targetHour = 22.68;
    this.weatherId = 'rain';
    this.intensity = 0.55;
    this.targetIntensity = 0.55;
    this.weatherWeights = { clear: 0, rain: 1, snow: 0, fog: 0 };
    this.targetWeatherWeights = { clear: 0, rain: 1, snow: 0, fog: 0 };
    this.wetness = 0.3;
    this.snowCover = 0;
    this.nightFactor = 0.9;
    this.exposure = 1.1;
    this.bloom = 0.54;
    this.time = 0;
    this.palette = {};

    for (const key of COLOR_KEYS) this.palette[key] = new THREE.Color();
    this.timeKeys = TIME_KEYS.map(addColorKeys);

    this.rainMaterial = null;
    this.snowMaterial = null;
    this.starMaterial = null;
    this.cityWindowMaterials = [];
    this.neonMaterials = [];
    this.streetLampLights = [];
    this.trafficSignalMaterials = [];
    this.reflectionMaterials = [];
    this.puddleRippleMaterials = [];
    this.puddleMaterials = [];
    this.fogSprites = [];
    this.snowGroundMaterial = null;
    this.snowBankMat = null;

    this.streetProps = new THREE.Group();
    this.group.add(this.streetProps);
    this.cityGroup = new THREE.Group();
    this.group.add(this.cityGroup);
    this.lightGroup = new THREE.Group();
    this.group.add(this.lightGroup);

    this.buildEnvironment();
    this.buildSky();
    this.buildStars();
    this.buildGround();
    this.buildCity();
    this.buildStreetFurniture();
    this.buildStreetWires();
    this.buildLighting();
    this.buildPuddles();
    this.buildReflections();
    this.buildRain();
    this.buildSnow();
    this.buildSnowGround();
    this.buildSteam();
    this.buildFogSprites();
    this.buildTrafficSignal();
    this.update(0, 0, null);
  }

  /* --------------------------- texturing --------------------------- */

  makeAsphaltTexture() {
    return canvasTexture(512, 512, (ctx, w, h) => {
      ctx.fillStyle = '#262a2b';
      ctx.fillRect(0, 0, w, h);
      const rng = new RNG(4455);
      for (let i = 0; i < 25000; i++) {
        const v = Math.floor(rng.float(30, 82));
        ctx.fillStyle = `rgba(${v},${v + 1},${v + 1},${rng.float(0.12, 0.5)})`;
        ctx.fillRect(rng.float(0, w), rng.float(0, h), rng.float(0.3, 1.8), rng.float(0.3, 1.8));
      }
      ctx.strokeStyle = 'rgba(8,9,10,.5)';
      for (let i = 0; i < 16; i++) {
        ctx.lineWidth = rng.float(0.5, 1.7);
        ctx.beginPath();
        let x = rng.float(0, w);
        let y = rng.float(0, h);
        ctx.moveTo(x, y);
        for (let j = 0; j < 5; j++) {
          x += rng.float(-35, 35);
          y += rng.float(18, 45);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }, {
      wrap: THREE.RepeatWrapping,
      repeat: [16, 16],
      anisotropy: 8,
    });
  }

  makeConcreteTexture() {
    return canvasTexture(512, 512, (ctx, w, h) => {
      ctx.fillStyle = '#6e7774';
      ctx.fillRect(0, 0, w, h);
      const rng = new RNG(2211);
      for (let i = 0; i < 12000; i++) {
        const v = Math.floor(rng.float(75, 140));
        ctx.fillStyle = `rgba(${v},${v},${v - 4},${rng.float(0.05, 0.2)})`;
        ctx.fillRect(rng.float(0, w), rng.float(0, h), rng.float(0.4, 2), rng.float(0.4, 2));
      }
      ctx.strokeStyle = 'rgba(35,42,41,.36)';
      ctx.lineWidth = 2;
      for (let x = 0; x <= w; x += 128) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += 128) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.strokeStyle = 'rgba(220,230,225,.08)';
      ctx.lineWidth = 1;
      for (let x = 2; x <= w; x += 128) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
    }, {
      wrap: THREE.RepeatWrapping,
      repeat: [4, 4],
      anisotropy: 8,
    });
  }

  buildEnvironment() {
    const texture = canvasTexture(1024, 512, (ctx, w, h) => {
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#040b12');
      sky.addColorStop(0.35, '#0b1c28');
      sky.addColorStop(0.49, '#253746');
      sky.addColorStop(0.52, '#121d23');
      sky.addColorStop(0.68, '#060a0c');
      sky.addColorStop(1, '#020405');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      const moon = ctx.createRadialGradient(w * 0.26, h * 0.26, 0, w * 0.26, h * 0.26, w * 0.15);
      moon.addColorStop(0, 'rgba(255,246,224,.95)');
      moon.addColorStop(0.08, 'rgba(201,224,243,.35)');
      moon.addColorStop(1, 'rgba(140,180,210,0)');
      ctx.fillStyle = moon;
      ctx.fillRect(0, 0, w, h);

      const warm = ctx.createLinearGradient(0, h * 0.48, 0, h * 0.58);
      warm.addColorStop(0, 'rgba(255,181,109,0)');
      warm.addColorStop(0.45, 'rgba(255,205,157,.24)');
      warm.addColorStop(1, 'rgba(255,153,72,0)');
      ctx.fillStyle = warm;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < 22; i++) {
        const x = w * (0.18 + this.rng.float(-0.15, 0.32));
        const y = h * (0.46 + this.rng.float(-0.02, 0.05));
        const rx = w * this.rng.float(0.01, 0.06);
        const ry = h * this.rng.float(0.002, 0.018);
        const g = ctx.createRadialGradient(x, y, 0, x, y, rx);
        g.addColorStop(0, i % 5 === 0 ? 'rgba(45,196,126,.28)' : 'rgba(255,211,166,.26)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(1, ry / rx);
        ctx.translate(-x, -y);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.globalCompositeOperation = 'source-over';
    }, {
      colorSpace: THREE.SRGBColorSpace,
      wrap: THREE.RepeatWrapping,
      anisotropy: 4,
    });
    texture.mapping = THREE.EquirectangularReflectionMapping;
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    pmrem.compileEquirectangularShader();
    const rt = pmrem.fromEquirectangular(texture);
    this.envMap = rt.texture;
    this.scene.environment = this.envMap;
    if ('environmentIntensity' in this.scene) this.scene.environmentIntensity = 0.8;
    pmrem.dispose();
    texture.dispose();
  }

  buildSky() {
    this.skyUniforms = {
      uTop: { value: new THREE.Color(0x02070f) },
      uHorizon: { value: new THREE.Color(0x0c1724) },
      uGround: { value: new THREE.Color(0x03070a) },
      uCloud: { value: new THREE.Color(0x0a121a) },
      uSunColor: { value: new THREE.Color(0x9ebde0) },
      uSunDir: { value: new THREE.Vector3(-0.4, 0.35, -0.8).normalize() },
      uMoonDir: { value: new THREE.Vector3(-0.45, 0.55, -0.72).normalize() },
      uCloudCover: { value: 0.85 },
      uSunStrength: { value: 0.6 },
      uMoonStrength: { value: 0.8 },
      uTime: { value: 0 },
      uFlash: { value: 0 },
    };
    const skyMat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uTop;
        uniform vec3 uHorizon;
        uniform vec3 uGround;
        uniform vec3 uCloud;
        uniform vec3 uSunColor;
        uniform vec3 uSunDir;
        uniform vec3 uMoonDir;
        uniform float uCloudCover;
        uniform float uSunStrength;
        uniform float uMoonStrength;
        uniform float uTime;
        uniform float uFlash;
        varying vec3 vDir;

        ${GLSL_NOISE}

        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          float upper = smoothstep(-0.03, 0.72, h);
          vec3 col = mix(uHorizon, uTop, pow(upper, 0.72));
          col = mix(uGround, col, smoothstep(-0.16, -0.005, h));

          float horizonHaze = exp(-max(h, 0.0) * 14.0);
          col += vec3(0.12, 0.075, 0.04) * horizonHaze * 0.74;
          col += uHorizon * horizonHaze * 0.16;

          float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
          float moonDot = max(dot(d, normalize(uMoonDir)), 0.0);
          col += uSunColor * (pow(sunDot, 1400.0) * 2.6 + pow(sunDot, 36.0) * 0.11) * uSunStrength;
          col += vec3(0.72, 0.82, 0.96) * (pow(moonDot, 2200.0) * 1.7 + pow(moonDot, 90.0) * 0.08) * uMoonStrength;

          vec2 cuv = d.xz / (max(d.y, 0.0) + 0.22) * 1.1;
          cuv += vec2(uTime * 0.0028, uTime * 0.0009);
          float broad = fbm2(cuv * 1.45 + vec2(2.1, -3.2));
          float fine = vnoise(cuv * 5.8 + vec2(-1.7, 3.4));
          float clouds = smoothstep(0.47, 0.78, broad) * smoothstep(0.26, 0.7, fine * 0.55 + broad * 0.65);
          clouds *= smoothstep(-0.01, 0.16, h);
          clouds *= smoothstep(0.96, 0.42, h) * 0.4 + 0.6;
          vec3 cloudColor = mix(uCloud, uHorizon * 1.12, smoothstep(0.0, 0.42, h));
          cloudColor = mix(cloudColor, uSunColor, pow(sunDot, 5.0) * 0.08);
          col = mix(col, cloudColor, clouds * uCloudCover * 0.92);

          float veil = smoothstep(0.04, 0.24, h) * smoothstep(0.8, 0.35, h);
          col = mix(col, uHorizon, veil * 0.11);
          col += vec3(0.23, 0.28, 0.34) * uFlash;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(520, 40, 24), skyMat);
    sky.frustumCulled = false;
    sky.renderOrder = -10;
    this.group.add(sky);
    this.sky = sky;

    const glowTex = makeRadialTexture(256, [
      [0, 'rgba(255,255,255,1)'],
      [0.08, 'rgba(255,245,223,.92)'],
      [0.25, 'rgba(221,235,249,.2)'],
      [0.6, 'rgba(166,199,222,.04)'],
      [1, 'rgba(150,190,215,0)'],
    ]);

    this.sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xffe2bc,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      fog: false,
      toneMapped: false,
    }));
    this.sunSprite.scale.set(46, 46, 1);
    this.sunSprite.renderOrder = -8;
    this.group.add(this.sunSprite);

    this.moonSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xdbe9ff,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      fog: false,
      toneMapped: false,
    }));
    this.moonSprite.scale.set(30, 30, 1);
    this.moonSprite.renderOrder = -8;
    this.group.add(this.moonSprite);
  }

  buildStars() {
    const count = this.mobile ? 520 : 1150;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const tints = new Float32Array(count * 3);
    const rng = new RNG(72014);
    const c = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const a = rng.float(0, Math.PI * 2);
      const elev = Math.asin(rng.float(0.04, 0.97));
      const radius = 430 + rng.float(0, 45);
      const ce = Math.cos(elev);
      positions[i * 3] = Math.cos(a) * ce * radius;
      positions[i * 3 + 1] = Math.sin(elev) * radius;
      positions[i * 3 + 2] = Math.sin(a) * ce * radius;
      sizes[i] = rng.next() < 0.05 ? rng.float(2.2, 3.8) : rng.float(0.5, 1.8);
      phases[i] = rng.float(0, Math.PI * 2);
      c.setHSL(rng.next() > 0.7 ? 0.1 : 0.58, 0.15, rng.float(0.72, 0.97));
      tints[i * 3] = c.r;
      tints[i * 3 + 1] = c.g;
      tints[i * 3 + 2] = c.b;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('aTint', new THREE.BufferAttribute(tints, 3));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.7 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aPhase;
        attribute vec3 aTint;
        uniform float uTime;
        uniform float uPixelRatio;
        varying vec3 vTint;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float twinkle = 0.68 + 0.32 * sin(uTime * 0.75 + aPhase) * sin(uTime * 0.31 + aPhase * 1.8);
          vAlpha = twinkle;
          vTint = aTint;
          gl_PointSize = aSize * uPixelRatio * (1.1 + 0.35 * sin(uTime * 0.5 + aPhase));
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        varying vec3 vTint;
        varying float vAlpha;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float core = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vTint, pow(core, 2.0) * uOpacity * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      fog: false,
    });
    this.starMaterial = material;
    const stars = new THREE.Points(geometry, material);
    stars.renderOrder = -7;
    stars.frustumCulled = false;
    this.group.add(stars);
    this.stars = stars;
  }

  /* ----------------------------- street ---------------------------- */

  buildGround() {
    const asphaltMap = this.makeAsphaltTexture();
    const asphaltBump = canvasTexture(256, 256, (ctx, w, h) => {
      const rng = new RNG(9812);
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 12000; i++) {
        const v = Math.floor(rng.float(60, 190));
        ctx.fillStyle = `rgba(${v},${v},${v},.2)`;
        ctx.fillRect(rng.float(0, w), rng.float(0, h), rng.float(0.5, 2), rng.float(0.5, 2));
      }
    }, {
      colorSpace: THREE.NoColorSpace,
      wrap: THREE.RepeatWrapping,
      repeat: [24, 24],
      anisotropy: 8,
    });

    this.asphaltMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x777b7c,
      map: asphaltMap,
      bumpMap: asphaltBump,
      bumpScale: 0.08,
      roughness: 0.55,
      metalness: 0.06,
      clearcoat: 0.15,
      clearcoatRoughness: 0.3,
      envMapIntensity: 0.45,
    });

    this.concreteMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x9a9c94,
      map: this.makeConcreteTexture(),
      roughness: 0.82,
      metalness: 0.02,
      clearcoat: 0.05,
      clearcoatRoughness: 0.45,
      envMapIntensity: 0.26,
    });

    const earth = new THREE.Mesh(
      new THREE.PlaneGeometry(130, 130),
      new THREE.MeshStandardMaterial({ color: 0x0b1110, roughness: 0.96 })
    );
    earth.rotation.x = -Math.PI / 2;
    earth.position.y = -0.04;
    earth.receiveShadow = true;
    this.group.add(earth);

    const road = new THREE.Mesh(new THREE.PlaneGeometry(110, 8), this.asphaltMaterial);
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0.012, 13);
    road.receiveShadow = true;
    this.group.add(road);
    this.road = road;

    const forecourt = new THREE.Mesh(new THREE.PlaneGeometry(25, 9), this.concreteMaterial);
    forecourt.rotation.x = -Math.PI / 2;
    forecourt.position.set(0, 0.025, 4.5);
    forecourt.receiveShadow = true;
    this.group.add(forecourt);
    this.forecourt = forecourt;

    const farWalk = new THREE.Mesh(new THREE.PlaneGeometry(110, 4.4), this.concreteMaterial);
    farWalk.rotation.x = -Math.PI / 2;
    farWalk.position.set(0, 0.02, 19.2);
    farWalk.receiveShadow = true;
    this.group.add(farWalk);
    this.farWalk = farWalk;

    for (const side of [-1, 1]) {
      const sideWalk = new THREE.Mesh(new THREE.PlaneGeometry(7, 19), this.asphaltMaterial);
      sideWalk.rotation.x = -Math.PI / 2;
      sideWalk.position.set(side * 10.5, 0.01, 5);
      sideWalk.receiveShadow = true;
      this.group.add(sideWalk);
    }

    const curbMat = new THREE.MeshStandardMaterial({
      color: 0x8f918b,
      roughness: 0.74,
      metalness: 0.02,
    });
    for (const z of [9.02, 17.02]) {
      for (const side of [-1, 1]) {
        const length = 48;
        const curb = mesh(new THREE.BoxGeometry(length, 0.15, 0.18), curbMat, {
          x: side * (length / 2 + 3.7),
          y: 0.08,
          z,
          receive: true,
        });
        this.group.add(curb);
      }
    }
    const ramp = mesh(new THREE.BoxGeometry(4.2, 0.05, 0.35), curbMat, {
      x: 2.2,
      y: 0.04,
      z: 9.03,
      rx: -0.05,
      receive: true,
    });
    this.group.add(ramp);

    const paintMat = new THREE.MeshStandardMaterial({
      color: 0xd9ddd2,
      roughness: 0.7,
      metalness: 0,
    });
    const crosswalk = new THREE.Group();
    for (let i = 0; i < 7; i++) {
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 6.8), paintMat);
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(0.15 + i * 0.67, 0.028, 13);
      stripe.receiveShadow = true;
      crosswalk.add(stripe);
    }
    this.group.add(crosswalk);

    for (let i = -9; i <= 9; i++) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.12), paintMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(i * 5.5, 0.029, 13);
      this.group.add(dash);
    }
    for (const z of [9.42, 16.62]) {
      const edge = new THREE.Mesh(new THREE.PlaneGeometry(100, 0.1), paintMat);
      edge.rotation.x = -Math.PI / 2;
      edge.position.set(0, 0.029, z);
      this.group.add(edge);
    }

    const metalMat = new THREE.MeshStandardMaterial({ color: 0x353d3d, roughness: 0.45, metalness: 0.7 });
    for (const [x, z, r] of [[-4.8, 11.4, 0.45], [7.2, 15.2, 0.35], [1.8, 5.9, 0.26]]) {
      this.group.add(mesh(new THREE.CylinderGeometry(r, r, 0.025, 24), metalMat, {
        x,
        y: 0.035,
        z,
        receive: true,
      }));
    }
    for (const [x, z] of [[-8.3, 9.12], [8.2, 9.12], [-8.4, 16.9]]) {
      this.group.add(mesh(new THREE.BoxGeometry(0.62, 0.03, 0.19), metalMat, {
        x,
        y: 0.03,
        z,
        receive: true,
      }));
    }

    const stripMat = new THREE.MeshBasicMaterial({
      color: 0x111717,
      transparent: true,
      opacity: 0.25,
      depthWrite: false,
    });
    for (const x of [-1.8, 2.3]) {
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 7.8), stripMat);
      strip.rotation.x = -Math.PI / 2;
      strip.position.set(x, 0.031, 13);
      this.group.add(strip);
    }
  }

  addPuddle(x, z, sx, sz, rotation = 0, y = 0.04) {
    const shape = new THREE.Shape();
    const n = 18;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const r = 0.72 + Math.sin(i * 4.1 + x * 3.2) * 0.09 + Math.sin(i * 7.3 + z) * 0.06;
      const px = Math.cos(a) * r;
      const py = Math.sin(a) * r;
      if (i === 0) shape.moveTo(px, py);
      else shape.lineTo(px, py);
    }
    shape.closePath();
    const geo = new THREE.ShapeGeometry(shape);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0x050b0d,
      roughness: 0.05,
      metalness: 0.28,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      envMapIntensity: 1.4,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const puddle = new THREE.Mesh(geo, mat);
    puddle.position.set(x, y, z);
    puddle.scale.set(sx, 1, sz);
    puddle.rotation.y = rotation;
    puddle.renderOrder = 1;
    this.group.add(puddle);
    this.puddleMaterials.push(mat);

    const rippleMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0 },
        uColor: { value: new THREE.Color(0xbad7df) },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform float uOpacity;
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
          vec2 p = (vUv - 0.5) * 2.0;
          float r = length(p);
          float edge = smoothstep(0.96, 0.6, r);
          float rings = 0.0;
          for (int i = 0; i < 3; i++) {
            float phase = fract(uTime * 0.24 + float(i) * 0.33);
            float radius = phase * 0.92;
            float ring = smoothstep(0.045, 0.0, abs(r - radius));
            rings += ring * (1.0 - phase);
          }
          float sparkle = sin((p.x * 34.0 + uTime * 2.4)) * sin((p.y * 25.0 - uTime * 1.9));
          sparkle = smoothstep(0.88, 1.0, sparkle) * 0.25;
          gl_FragColor = vec4(uColor, (rings * 0.32 + sparkle) * uOpacity * edge);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    const ripple = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 2.2), rippleMat);
    ripple.rotation.x = -Math.PI / 2;
    ripple.position.set(x, y + 0.004, z);
    ripple.scale.set(sx, sz, 1);
    ripple.rotation.z = rotation;
    ripple.renderOrder = 2;
    ripple.frustumCulled = false;
    this.group.add(ripple);
    this.puddleRippleMaterials.push(rippleMat);
    return puddle;
  }

  buildPuddles() {
    this.addPuddle(-2.4, 7.2, 1.7, 0.8, 0.2);
    this.addPuddle(4.8, 10.7, 1.15, 2.2, -0.22);
    this.addPuddle(-7.8, 12.6, 1.6, 0.7, 0.1);
    this.addPuddle(7.4, 14.6, 0.9, 1.8, -0.12);
    this.addPuddle(0.5, 5.35, 0.75, 0.45, 0.5);
  }

  buildReflections() {
    const makeStreakTexture = (warmth, green) => canvasTexture(128, 512, (ctx, w, h) => {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(255,255,255,0)');
      g.addColorStop(0.12, warmth);
      g.addColorStop(0.46, 'rgba(255,255,255,.05)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      const rng = new RNG(3812);
      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < 28; i++) {
        const x = rng.float(0, w);
        const y = rng.float(h * 0.1, h * 0.7);
        const rx = rng.float(1, 10);
        const ry = rng.float(7, 60);
        const gg = ctx.createRadialGradient(x, y, 0, x, y, rx);
        gg.addColorStop(0, green && i % 6 === 0 ? 'rgba(53,211,143,.2)' : 'rgba(255,225,184,.16)');
        gg.addColorStop(1, 'rgba(255,225,184,0)');
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(1, ry / rx);
        ctx.translate(-x, -y);
        ctx.fillStyle = gg;
        ctx.beginPath();
        ctx.arc(x, y, rx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.globalCompositeOperation = 'source-over';
    }, { anisotropy: 4 });
    const texWarm = makeStreakTexture('rgba(255,204,146,.32)', true);
    const texSign = makeStreakTexture('rgba(42,201,133,.22)', true);
    const texRed = makeStreakTexture('rgba(245,83,51,.2)', false);

    const addStreak = (x, z, width, length, texture, opacity) => {
      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0xffffff,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        toneMapped: true,
      });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, length), mat);
      plane.rotation.x = -Math.PI / 2;
      plane.rotation.z = Math.PI;
      plane.position.set(x, 0.036, z);
      plane.renderOrder = 2;
      this.group.add(plane);
      this.reflectionMaterials.push(mat);
    };

    addStreak(-3.9, 7.2, 2.0, 10.0, texWarm, 0.52);
    addStreak(-0.8, 7.6, 1.6, 9.0, texWarm, 0.42);
    addStreak(4.4, 8.3, 1.7, 8.6, texRed, 0.25);
    addStreak(1.4, 6.9, 2.3, 8.8, texSign, 0.32);
    addStreak(7.5, 9.4, 1.2, 6.8, texRed, 0.18);
  }

  /* ----------------------------- city ----------------------------- */

  makeWindowMaterial(seed, hue = 0.1, litRatio = 0.35) {
    const rng = new RNG(seed);
    const w = 512;
    const h = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#283134';
    ctx.fillRect(0, 0, w, h);
    const cols = 10;
    const rows = 24;
    const cw = w / cols;
    const ch = h / rows;
    for (let y = 0; y < rows; y++) {
      // Floor slabs / facade seams remain faintly visible at night and
      // give the towers real mass in daylight.
      ctx.fillStyle = 'rgba(9,14,17,.26)';
      ctx.fillRect(0, y * ch, w, 3);
      for (let x = 0; x < cols; x++) {
        const lit = rng.next() < litRatio;
        const px = x * cw + cw * 0.2;
        const py = y * ch + ch * 0.22;
        const pw = cw * 0.6;
        const ph = ch * 0.48;
        ctx.fillStyle = lit
          ? `hsla(${hue * 360 + rng.float(-16, 16)},${rng.float(14, 48)}%,${rng.float(36, 64)}%,${rng.float(0.32, 0.78)})`
          : `rgba(${rng.float(7, 20)},${rng.float(10, 24)},${rng.float(12, 26)},0.8)`;
        ctx.fillRect(px, py, pw, ph);
        if (lit && rng.next() > 0.5) {
          ctx.fillStyle = `rgba(255,247,220,${rng.float(0.08, 0.2)})`;
          ctx.fillRect(px + pw * 0.12, py + ph * 0.1, pw * 0.2, ph * 0.28);
        }
        if (rng.next() > 0.45) {
          ctx.fillStyle = 'rgba(5,8,9,.7)';
          ctx.fillRect(px, py + ph * 0.75, pw, ph * 0.25);
        }
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 4;
    texture.repeat.set(2, 2);
    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      color: 0x51585a,
      roughness: 0.88,
      metalness: 0.04,
      emissiveMap: texture,
      emissive: new THREE.Color(0xffd3a0),
      emissiveIntensity: 0.1,
    });
    this.cityWindowMaterials.push(mat);
    return mat;
  }

  addBuilding({ x, z, w, d, h, seed, hue = 0.1, lit = 0.35, rot = 0 }) {
    const mat = this.makeWindowMaterial(seed, hue, lit);
    this.cityGroup.add(mesh(new THREE.BoxGeometry(w, h, d), mat, {
      x, y: h / 2 - 0.2, z, ry: rot, receive: true,
    }));
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x101719, roughness: 0.88 });
    this.cityGroup.add(mesh(new THREE.BoxGeometry(w * 0.94, 0.45, d * 0.94), roofMat, {
      x, y: h + 0.1, z, ry: rot, receive: true,
    }));
    const rng = new RNG(seed + 4);
    for (let i = 0; i < 2 + (seed % 3); i++) {
      const bw = rng.float(0.7, 2.2);
      const bh = rng.float(0.35, 1.1);
      const bd = rng.float(0.8, 2.2);
      this.cityGroup.add(mesh(new THREE.BoxGeometry(bw, bh, bd), roofMat, {
        x: x + rng.float(-w * 0.3, w * 0.3),
        y: h + 0.35 + bh / 2,
        z: z + rng.float(-d * 0.3, d * 0.3),
        ry: rng.float(0, Math.PI),
      }));
    }
  }

  addNeonSign({ x, y, z, text, color, width = 2.4, height = 5.5, vertical = true, rot = 0, intensity = 1 }) {
    const canvas = document.createElement('canvas');
    canvas.width = vertical ? 256 : 640;
    canvas.height = vertical ? 720 : 220;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(8,12,12,.88)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = color;
    ctx.shadowBlur = 24;
    if (vertical) {
      const chars = [...text];
      ctx.font = `600 ${Math.min(130, (canvas.height - 60) / chars.length)}px "Microsoft YaHei", "Hiragino Sans GB", sans-serif`;
      chars.forEach((ch, i) => {
        const step = (canvas.height - 70) / chars.length;
        ctx.fillText(ch, canvas.width / 2, 44 + step * (i + 0.57));
      });
    } else {
      ctx.font = '600 120px "Microsoft YaHei", "Hiragino Sans GB", sans-serif';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 4);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      toneMapped: false,
      opacity: intensity,
      side: THREE.DoubleSide,
    });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
    sign.position.set(x, y, z);
    sign.rotation.y = rot;
    this.cityGroup.add(sign);
    this.neonMaterials.push(mat);
  }

  buildCity() {
    // Keep the central sky above the store readable; the tall city massing
    // sits to the sides and the deep skyline stays low and hazy.
    this.addBuilding({ x: -26, z: -28, w: 14, d: 12, h: 16, seed: 1101, hue: 0.09, lit: 0.27 });
    this.addBuilding({ x: 24, z: -32, w: 16, d: 14, h: 18, seed: 1203, hue: 0.56, lit: 0.22 });
    this.addBuilding({ x: -14, z: -66, w: 26, d: 16, h: 12, seed: 1307, hue: 0.08, lit: 0.28 });
    this.addBuilding({ x: 12, z: -72, w: 22, d: 14, h: 15, seed: 1409, hue: 0.54, lit: 0.18 });
    this.addBuilding({ x: 40, z: -58, w: 24, d: 20, h: 13, seed: 1511, hue: 0.08, lit: 0.22 });
    this.addBuilding({ x: -42, z: -52, w: 20, d: 16, h: 10, seed: 1601, hue: 0.57, lit: 0.2 });
    this.addBuilding({ x: 33, z: -14, w: 17, d: 19, h: 20, seed: 1709, hue: 0.09, lit: 0.25 });
    this.addBuilding({ x: -35, z: -8, w: 18, d: 22, h: 17, seed: 1811, hue: 0.55, lit: 0.17 });
    this.addBuilding({ x: 31, z: 11, w: 18, d: 22, h: 23, seed: 1901, hue: 0.57, lit: 0.2 });
    this.addBuilding({ x: -25, z: 30, w: 20, d: 16, h: 14, seed: 2003, hue: 0.09, lit: 0.25 });
    this.addBuilding({ x: 20, z: 32, w: 22, d: 14, h: 18, seed: 2105, hue: 0.55, lit: 0.17 });
    this.addBuilding({ x: -15.5, z: 1.8, w: 8, d: 12, h: 7.5, seed: 2121, hue: 0.08, lit: 0.25 });
    this.addBuilding({ x: 17.2, z: -4, w: 9, d: 15, h: 11, seed: 2213, hue: 0.56, lit: 0.18 });

    this.addNeonSign({ x: -11.4, y: 5.6, z: 3.2, text: '珈琲', color: '#ffb15b', width: 1.25, height: 3.5, rot: -Math.PI / 2, intensity: 0.92 });
    this.addNeonSign({ x: 21.7, y: 6.4, z: 2.6, text: 'カラオケ', color: '#f15f7a', width: 1.8, height: 5.1, vertical: true, rot: -Math.PI / 2, intensity: 0.82 });
    this.addNeonSign({ x: -18.1, y: 5.7, z: 7.9, text: '酒場', color: '#ff7956', width: 1.45, height: 3.4, vertical: true, intensity: 0.55 });

    const antennaMat = new THREE.MeshStandardMaterial({ color: 0x12181b, roughness: 0.65, metalness: 0.5 });
    for (const [x, z, h] of [[-18, -20, 25], [15, -27, 33], [31, 11, 23]]) {
      this.cityGroup.add(mesh(new THREE.CylinderGeometry(0.055, 0.075, 4.5, 6), antennaMat, {
        x: x + 2, y: h + 2.1, z: z - 1,
      }));
      this.cityGroup.add(mesh(new THREE.BoxGeometry(1.2, 0.08, 0.08), antennaMat, {
        x: x + 2, y: h + 3.6, z: z - 1,
      }));
    }
  }

  /* ------------------------ street furniture ---------------------- */

  addStreetLamp(x, z, withLight = true) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x1a2424, roughness: 0.5, metalness: 0.72 });
    this.streetProps.add(mesh(new THREE.CylinderGeometry(0.075, 0.12, 6.2, 10), mat, {
      x, y: 3.1, z, cast: true, receive: true,
    }));
    this.streetProps.add(mesh(new THREE.CylinderGeometry(0.055, 0.07, 1.8, 8), mat, {
      x: x + 0.75, y: 6.08, z, rz: Math.PI / 2, cast: true,
    }));
    this.streetProps.add(mesh(new THREE.BoxGeometry(0.65, 0.16, 0.34), mat, {
      x: x + 1.6, y: 5.98, z, cast: true,
    }));
    const bulbMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 1.1, 0.66), toneMapped: false });
    this.streetProps.add(mesh(new THREE.BoxGeometry(0.46, 0.025, 0.23), bulbMat, {
      x: x + 1.6, y: 5.89, z,
    }));
    const glow = makeRadialTexture(256, [
      [0, 'rgba(255,225,174,.75)'],
      [0.22, 'rgba(255,192,116,.16)'],
      [1, 'rgba(255,180,90,0)'],
    ]);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glow,
      color: 0xffd193,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      fog: false,
      toneMapped: false,
    }));
    sprite.position.set(x + 1.6, 5.9, z);
    sprite.scale.set(4.2, 2.0, 1);
    this.streetProps.add(sprite);
    let light = null;
    if (withLight) {
      light = new THREE.PointLight(0xffc77f, 18, 15, 1.8);
      light.position.set(x + 1.6, 5.7, z);
      this.lightGroup.add(light);
    }
    this.streetLampLights.push({ light, sprite });
  }

  addUtilityPole(x, z, height = 8.6) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x171c1c, roughness: 0.72, metalness: 0.25 });
    this.streetProps.add(mesh(new THREE.CylinderGeometry(0.12, 0.18, height, 10), mat, {
      x, y: height / 2, z, cast: true, receive: true,
    }));
    this.streetProps.add(mesh(new THREE.BoxGeometry(2.6, 0.1, 0.12), mat, {
      x, y: height - 1.1, z, cast: true,
    }));
    this.streetProps.add(mesh(new THREE.BoxGeometry(1.7, 0.08, 0.1), mat, {
      x, y: height - 2.0, z,
    }));
    for (let i = -1; i <= 1; i++) {
      this.streetProps.add(mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.22, 8), new THREE.MeshStandardMaterial({
        color: 0x5d6a68, roughness: 0.25, metalness: 0.1,
      }), {
        x: x + i * 0.95, y: height - 0.94, z,
      }));
    }
    this.streetProps.add(mesh(new RoundedBoxGeometry(0.6, 0.8, 0.45, 3, 0.07), mat, {
      x, y: height - 3.3, z, cast: true,
    }));
    return { x, z, height };
  }

  buildStreetFurniture() {
    this.addStreetLamp(-8.8, 18.7, false);
    this.addStreetLamp(13.4, 7.2, true);

    this.poleA = this.addUtilityPole(-13.5, 18.8, 9.2);
    this.poleB = this.addUtilityPole(20.5, 8.2, 8.7);

    const signPole = new THREE.MeshStandardMaterial({ color: 0x2d3434, roughness: 0.6, metalness: 0.45 });
    this.streetProps.add(mesh(new THREE.CylinderGeometry(0.055, 0.075, 4.6, 8), signPole, {
      x: 9.6, y: 2.3, z: 8.1,
    }));
    const signTexture = canvasTexture(256, 256, (ctx, w, h) => {
      ctx.fillStyle = '#e9e6da';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#28302f';
      ctx.lineWidth = 10;
      ctx.strokeRect(7, 7, w - 14, h - 14);
      ctx.fillStyle = '#202928';
      ctx.font = '700 62px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('P', w / 2, 100);
      ctx.font = '500 28px Arial';
      ctx.fillText('24H', w / 2, 158);
      ctx.font = '500 24px "Microsoft YaHei", sans-serif';
      ctx.fillText('駐車場', w / 2, 196);
    }, { anisotropy: 4 });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.62), new THREE.MeshBasicMaterial({
      map: signTexture,
      toneMapped: true,
    }));
    sign.position.set(9.6, 4.2, 8.1);
    sign.rotation.y = 0.2;
    this.streetProps.add(sign);

    const bollardMat = new THREE.MeshStandardMaterial({ color: 0x161d1e, roughness: 0.48, metalness: 0.7 });
    for (const x of [-10.4, -8.7, 9.2, 10.9]) {
      this.streetProps.add(mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.7, 10), bollardMat, {
        x, y: 0.35, z: 8.65, cast: true,
      }));
      this.streetProps.add(mesh(new THREE.BoxGeometry(0.15, 0.018, 0.15), new THREE.MeshBasicMaterial({
        color: 0xd8e1d2,
        toneMapped: false,
      }), {
        x, y: 0.62, z: 8.65,
      }));
    }

    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x574a2d,
      roughness: 0.9,
      side: THREE.DoubleSide,
    });
    const rng = new RNG(9134);
    for (let i = 0; i < 18; i++) {
      this.group.add(mesh(new THREE.CircleGeometry(rng.float(0.035, 0.1), 5), leafMat, {
        x: rng.float(-8, 8),
        y: 0.037,
        z: rng.float(8.8, 16.8),
        rx: -Math.PI / 2,
        ry: rng.float(0, Math.PI),
      }));
    }
  }

  buildStreetWires() {
    const catenary = (a, b, sag) => {
      const points = [];
      for (let i = 0; i <= 32; i++) {
        const t = i / 32;
        points.push(new THREE.Vector3(
          lerp(a.x, b.x, t),
          lerp(a.y, b.y, t) - Math.sin(t * Math.PI) * sag,
          lerp(a.z, b.z, t)
        ));
      }
      return new THREE.CatmullRomCurve3(points);
    };
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x131a1c,
      transparent: true,
      opacity: 0.8,
    });
    const wires = [
      catenary(new THREE.Vector3(-13.5, 8.2, 18.8), new THREE.Vector3(20.5, 7.8, 8.2), 0.9),
      catenary(new THREE.Vector3(-13.5, 7.2, 18.8), new THREE.Vector3(20.5, 6.8, 8.2), 0.8),
      catenary(new THREE.Vector3(-13.5, 8.2, 18.8), new THREE.Vector3(-48, 7.4, 15), 0.7),
      catenary(new THREE.Vector3(20.5, 7.8, 8.2), new THREE.Vector3(48, 7.1, 4), 0.8),
      catenary(new THREE.Vector3(-13.5, 7.3, 18.8), new THREE.Vector3(20.5, 6.9, 8.2), 0.7),
    ];
    for (const wire of wires) {
      const geo = new THREE.BufferGeometry().setFromPoints(wire.getPoints(60));
      this.streetProps.add(new THREE.Line(geo, wireMat));
    }
  }

  buildLighting() {
    this.hemi = new THREE.HemisphereLight(0x6c8fa0, 0x111614, 0.55);
    this.group.add(this.hemi);

    this.sunLight = new THREE.DirectionalLight(0xb9cff2, 0.5);
    this.sunLight.position.set(-15, 22, 10);
    this.sunLight.target.position.set(0, 0, 2);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(this.mobile ? 1024 : 2048, this.mobile ? 1024 : 2048);
    // Keep the whole store, forecourt and camera-side street inside the
    // shadow frustum. A too-small orthographic box was previously causing
    // the street beyond it to fall into shadow.
    this.sunLight.shadow.camera.left = -52;
    this.sunLight.shadow.camera.right = 52;
    this.sunLight.shadow.camera.top = 52;
    this.sunLight.shadow.camera.bottom = -52;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 180;
    this.sunLight.shadow.bias = 0;
    this.sunLight.shadow.normalBias = 0.02;
    this.sunLight.shadow.radius = 2;
    this.sunLight.shadow.camera.updateProjectionMatrix();
    this.group.add(this.sunLight, this.sunLight.target);

    this.fill = new THREE.DirectionalLight(0x7ba5bd, 0.25);
    this.fill.position.set(15, 8, 20);
    this.fill.target.position.set(0, 1, 0);
    this.group.add(this.fill, this.fill.target);

    this.ambient = new THREE.AmbientLight(0x263b46, 0.16);
    this.group.add(this.ambient);

    this.scene.fog = new THREE.FogExp2(0x0b1720, 0.0065);
  }

  /* --------------------------- rainfall ---------------------------- */

  buildRain() {
    const count = this.mobile ? 1700 : 3900;
    const rng = new RNG(55111);
    const anchors = new Float32Array(count * 2 * 3);
    const ends = new Float32Array(count * 2);
    const seeds = new Float32Array(count * 2);
    const lengths = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const x = rng.float(-25, 25);
      const y = rng.float(0, 18);
      const z = rng.float(-8, 28);
      const len = rng.float(0.42, 1.2);
      const seed = rng.next();
      for (let j = 0; j < 2; j++) {
        const idx = i * 2 + j;
        anchors[idx * 3] = x;
        anchors[idx * 3 + 1] = y;
        anchors[idx * 3 + 2] = z;
        ends[idx] = j;
        seeds[idx] = seed;
        lengths[idx] = len;
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(anchors, 3));
    geometry.setAttribute('aEnd', new THREE.BufferAttribute(ends, 1));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    geometry.setAttribute('aLength', new THREE.BufferAttribute(lengths, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: 0.55 },
        uWind: { value: 0.4 },
        uColor: { value: new THREE.Color(0xaecbd6) },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: /* glsl */ `
        attribute float aEnd;
        attribute float aSeed;
        attribute float aLength;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uWind;
        varying float vAlpha;
        void main() {
          vec3 p = position;
          float speed = mix(13.0, 21.0, aSeed);
          p.y = mod(p.y - uTime * speed, 18.0);
          p.x = mod(p.x + uWind * uTime * 2.7 + 25.0, 50.0) - 25.0;
          p.z = mod(p.z + uWind * uTime * 0.5 + 8.0, 36.0) - 8.0;
          vec3 streak = normalize(vec3(-0.12 - uWind * 0.08, -1.0, 0.03));
          p += streak * aLength * aEnd;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float visible = step(aSeed, uIntensity);
          float inStore = step(-6.35, p.x) * step(p.x, 6.35) * step(-9.4, p.z) * step(p.z, 0.45) * step(p.y, 3.6);
          vAlpha = visible * (1.0 - aEnd * 0.6) * mix(0.1, 0.42, aSeed) * (1.0 - inStore) * smoothstep(1.2, 4.0, -mv.z);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          if (vAlpha < 0.006) discard;
          gl_FragColor = vec4(uColor, vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      fog: false,
    });
    const rain = new THREE.LineSegments(geometry, material);
    rain.frustumCulled = false;
    rain.renderOrder = 8;
    this.group.add(rain);
    this.rain = rain;
    this.rainMaterial = material;
  }

  buildSnow() {
    const count = this.mobile ? 1700 : 4800;
    const rng = new RNG(99211);
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const seeds = new Float32Array(count);
    const angles = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = rng.float(-26, 26);
      positions[i * 3 + 1] = rng.float(0, 18);
      positions[i * 3 + 2] = rng.float(-8, 28);
      sizes[i] = rng.float(1.1, 4.6);
      seeds[i] = rng.next();
      angles[i] = rng.float(0, Math.PI * 2);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    geometry.setAttribute('aAngle', new THREE.BufferAttribute(angles, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: 0 },
        uWind: { value: 0.1 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uMap: { value: makeSnowflakeTexture(96) },
        uColor: { value: new THREE.Color(0xe6eef6) },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aSeed;
        attribute float aAngle;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uWind;
        uniform float uPixelRatio;
        varying float vAlpha;
        void main() {
          vec3 p = position;
          p.y = mod(p.y - uTime * mix(0.28, 0.8, aSeed), 18.0);
          p.x = mod(p.x + sin(uTime * 0.3 + aAngle) * 0.9 + uWind * uTime * 1.5 + 26.0, 52.0) - 26.0;
          p.z = mod(p.z + cos(uTime * 0.22 + aAngle * 1.4) * 0.5 + uWind * uTime * 0.18 + 8.0, 36.0) - 8.0;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float dist = max(3.0, -mv.z);
          gl_PointSize = clamp(aSize * uPixelRatio * (40.0 / dist), 1.0, 18.0 * uPixelRatio);
          float inStore = step(-6.35, p.x) * step(p.x, 6.35) * step(-9.4, p.z) * step(p.z, 0.45) * step(p.y, 3.6);
          vAlpha = step(aSeed, uIntensity) * (1.0 - inStore) * smoothstep(1.0, 5.0, dist) * mix(0.35, 0.9, aSeed);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a * vAlpha < 0.01) discard;
          gl_FragColor = vec4(uColor, tex.a * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.NormalBlending,
      fog: false,
    });
    const snow = new THREE.Points(geometry, material);
    snow.frustumCulled = false;
    snow.renderOrder = 8;
    this.group.add(snow);
    this.snow = snow;
    this.snowMaterial = material;
  }

  buildSnowGround() {
    const noiseTex = canvasTexture(512, 512, (ctx, w, h) => {
      const rng = new RNG(7177);
      // Mostly opaque snow, with a handful of shallow, wind-scoured gaps.
      // The alphaMap reads the green channel, so the base must stay bright.
      ctx.fillStyle = '#f4f4f4';
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 34; i++) {
        const x = rng.float(0, w);
        const y = rng.float(0, h);
        const r = rng.float(18, 74);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        const a = rng.float(0.04, 0.16);
        g.addColorStop(0, `rgba(0,0,0,${a})`);
        g.addColorStop(0.65, `rgba(0,0,0,${a * 0.4})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
    }, {
      colorSpace: THREE.NoColorSpace,
      wrap: THREE.RepeatWrapping,
      repeat: [18, 18],
      anisotropy: 4,
    });
    this.snowGroundMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1f5f5,
      roughness: 0.9,
      metalness: 0.01,
      emissive: 0x263a41,
      emissiveIntensity: 0.28,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      alphaMap: noiseTex,
      envMapIntensity: 0.16,
    });
    const snow = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), this.snowGroundMaterial);
    snow.rotation.x = -Math.PI / 2;
    snow.position.set(0, 0.043, 10);
    snow.receiveShadow = true;
    snow.renderOrder = 3;
    this.group.add(snow);
    this.snowGround = snow;

    this.snowBankGroup = new THREE.Group();
    this.snowBankMat = new THREE.MeshStandardMaterial({
      color: 0xeaf1f2,
      roughness: 0.9,
      metalness: 0.01,
      emissive: 0x203238,
      emissiveIntensity: 0.22,
      transparent: true,
      opacity: 0,
    });
    const bankGeo = new THREE.IcosahedronGeometry(1, 1);
    for (let i = 0; i < 16; i++) {
      const bank = new THREE.Mesh(bankGeo, this.snowBankMat);
      bank.position.set(this.rng.float(-15, 15), 0.08, this.rng.float(8.7, 9.3));
      bank.scale.set(this.rng.float(0.8, 2.6), this.rng.float(0.12, 0.28), this.rng.float(0.25, 0.6));
      bank.receiveShadow = true;
      this.snowBankGroup.add(bank);
    }
    this.group.add(this.snowBankGroup);
  }

  buildSteam() {
    const count = 16;
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = -7.6 + this.rng.float(-0.3, 1.2);
      positions[i * 3 + 1] = 0.1;
      positions[i * 3 + 2] = -1.2 + this.rng.float(-0.5, 0.6);
      phases[i] = this.rng.next();
      sizes[i] = this.rng.float(2, 5);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.22 },
        uMap: { value: makeRadialTexture(128, [[0, 'rgba(230,241,243,.5)'], [0.45, 'rgba(207,226,230,.12)'], [1, 'rgba(191,219,230,0)']]) },
      },
      vertexShader: /* glsl */ `
        attribute float aPhase;
        attribute float aSize;
        uniform float uTime;
        varying float vAlpha;
        void main() {
          vec3 p = position;
          float t = fract(uTime * 0.045 + aPhase);
          p.y += t * 4.2;
          p.x += sin(t * 5.0 + aPhase * 7.0) * 0.7;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp(aSize * (1.0 + t * 2.0) * (150.0 / max(5.0, -mv.z)), 2.0, 120.0);
          vAlpha = (1.0 - t) * 0.5;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(tex.rgb, tex.a * vAlpha * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      fog: false,
    });
    const steam = new THREE.Points(geo, mat);
    steam.frustumCulled = false;
    steam.renderOrder = 7;
    this.group.add(steam);
    this.steam = steam;
    this.steamMaterial = mat;
  }

  buildFogSprites() {
    this.fogGroup = new THREE.Group();
    const tex = makeRadialTexture(256, [
      [0, 'rgba(164,184,188,.28)'],
      [0.35, 'rgba(144,168,172,.12)'],
      [1, 'rgba(128,156,160,0)'],
    ]);
    for (let i = 0; i < 8; i++) {
      const mat = new THREE.SpriteMaterial({
        map: tex,
        color: 0x8fa8aa,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        depthTest: true,
        blending: THREE.NormalBlending,
        fog: true,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.position.set(this.rng.float(-32, 32), this.rng.float(0.6, 2.8), this.rng.float(4, 36));
      sprite.scale.set(this.rng.float(14, 28), this.rng.float(2, 6), 1);
      this.fogGroup.add(sprite);
      this.fogSprites.push({ mat, speed: this.rng.float(0.02, 0.08), phase: this.rng.float(0, Math.PI * 2) });
    }
    this.group.add(this.fogGroup);
  }

  buildTrafficSignal() {
    const mat = new THREE.MeshStandardMaterial({ color: 0x1a2324, roughness: 0.5, metalness: 0.65 });
    this.trafficSignal = new THREE.Group();
    this.trafficSignal.position.set(-8.8, 0, 17.65);
    this.trafficSignal.add(mesh(new THREE.CylinderGeometry(0.07, 0.11, 4.2, 10), mat, {
      y: 2.1, cast: true,
    }));
    this.trafficSignal.add(mesh(new THREE.BoxGeometry(0.5, 1.28, 0.32), mat, {
      x: 0.36, y: 3.55, z: 0.05, cast: true,
    }));
    const colors = [
      ['#ff3d25', 0.72],
      ['#ffb13f', 0.04],
      ['#20be72', 0.04],
    ];
    this.trafficSignalMaterials = colors.map(([color, opacity], i) => {
      const m = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        toneMapped: false,
        transparent: true,
        opacity,
      });
      const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.12, 20), m);
      lamp.position.set(0.36, 3.9 - i * 0.32, 0.22);
      this.trafficSignal.add(lamp);
      return m;
    });
    this.trafficSignal.rotation.y = -0.12;
    this.group.add(this.trafficSignal);
  }

  /* --------------------------- weather ----------------------------- */

  setTime(hour) {
    this.targetHour = ((hour % 24) + 24) % 24;
  }

  setWeather(id, intensity = this.intensity, immediate = false) {
    const preset = WEATHER_PRESETS[id] || WEATHER_PRESETS.rain;
    this.weatherId = preset.id;
    this.targetIntensity = clamp(intensity, 0, 1);
    for (const key of Object.keys(this.targetWeatherWeights)) {
      this.targetWeatherWeights[key] = key === preset.id ? 1 : 0;
    }
    if (immediate) {
      this.intensity = this.targetIntensity;
      this.weatherWeights = { ...this.targetWeatherWeights };
    }
    return preset;
  }

  setPixelRatio(ratio) {
    const pr = Math.min(ratio, 2);
    if (this.starMaterial) this.starMaterial.uniforms.uPixelRatio.value = pr;
    if (this.rainMaterial) this.rainMaterial.uniforms.uPixelRatio.value = pr;
    if (this.snowMaterial) this.snowMaterial.uniforms.uPixelRatio.value = pr;
  }

  getTimeMood(hour = this.targetHour) {
    const h = ((hour % 24) + 24) % 24;
    if (h < 5.2) return '深夜';
    if (h < 8) return '清晨';
    if (h < 11.5) return '上午';
    if (h < 16.5) return '午后';
    if (h < 19) return '黄昏';
    return '夜晚';
  }

  getTimeLabel(hour = this.targetHour) {
    const total = Math.round((((hour % 24) + 24) % 24) * 60);
    const h = Math.floor(total / 60) % 24;
    const m = total % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  getWeatherLabel() {
    const preset = WEATHER_PRESETS[this.weatherId];
    const intensity = this.targetIntensity;
    if (preset.id === 'clear') return '晴朗';
    if (preset.id === 'rain') {
      if (intensity < 0.28) return '细雨';
      if (intensity < 0.58) return '小雨';
      if (intensity < 0.82) return '中雨';
      return '大雨';
    }
    if (preset.id === 'snow') {
      if (intensity < 0.28) return '细雪';
      if (intensity < 0.58) return '小雪';
      if (intensity < 0.82) return '中雪';
      return '大雪';
    }
    if (intensity < 0.35) return '薄雾';
    if (intensity < 0.7) return '轻雾';
    return '浓雾';
  }

  getTemperature() {
    const preset = WEATHER_PRESETS[this.weatherId];
    const base = 11 + 6 * Math.sin(((this.targetHour - 9) * Math.PI) / 12);
    const extra = preset.id === 'rain' ? -1.8 - this.targetIntensity * 1.5
      : preset.id === 'snow' ? -5.2 - this.targetIntensity * 1.7
        : preset.id === 'fog' ? -0.8 : 0.8;
    return Math.round(base + extra);
  }

  getHumidity() {
    const w = this.targetWeatherWeights;
    return Math.round(
      WEATHER_PRESETS.clear.humidity * w.clear +
      WEATHER_PRESETS.rain.humidity * w.rain +
      WEATHER_PRESETS.snow.humidity * w.snow +
      WEATHER_PRESETS.fog.humidity * w.fog
    );
  }

  getSummary() {
    const preset = WEATHER_PRESETS[this.weatherId];
    const weatherLabel = this.getWeatherLabel();
    const time = this.getTimeLabel(this.targetHour);
    const mood = this.getTimeMood(this.targetHour);
    let note = preset.intensityNote;
    if (preset.id === 'clear') note = '晴 · 能见度良好';
    else if (preset.id === 'rain') note = `${weatherLabel} · 视程约 ${Math.max(2, Math.round(11 - this.targetIntensity * 7))} km`;
    else if (preset.id === 'snow') note = `${weatherLabel} · 视程约 ${Math.max(1, Math.round(7 - this.targetIntensity * 4))} km`;
    else note = `${weatherLabel} · 视程约 ${Math.max(1, Math.round(5 - this.targetIntensity * 3))} km`;
    return {
      time,
      mood,
      weatherId: preset.id,
      weatherLabel,
      weatherShort: preset.short,
      icon: preset.icon,
      temperature: this.getTemperature(),
      humidity: this.getHumidity(),
      intensity: Math.round(this.targetIntensity * 100),
      intensityLabel: preset.intensityLabel,
      note,
      isNight: this.nightFactor > 0.5,
      hour: this.targetHour,
    };
  }

  updateTimePalette() {
    let i = 0;
    while (i < this.timeKeys.length - 1 && this.hour >= this.timeKeys[i + 1].hour) i++;
    const a = this.timeKeys[i];
    const b = this.timeKeys[Math.min(i + 1, this.timeKeys.length - 1)];
    const span = Math.max(0.0001, b.hour - a.hour);
    const t = clamp((this.hour - a.hour) / span, 0, 1);
    const eased = t * t * (3 - 2 * t);
    for (const key of COLOR_KEYS) this.palette[key].copy(a[key]).lerp(b[key], eased);
    for (const key of ['sunIntensity', 'hemiIntensity', 'exposure', 'stars', 'streetLights', 'cityWindows', 'fogDensity']) {
      this.palette[key] = lerp(a[key], b[key], eased);
    }
  }

  update(dt, elapsed) {
    this.time = elapsed;
    const diff = ((this.targetHour - this.hour + 36) % 24) - 12;
    this.hour = (this.hour + diff * (1 - Math.exp(-2.4 * dt)) + 24) % 24;
    // The sun is the only shadow-casting mover. Refresh the static shadow
    // map a few times per second while the time of day is changing.
    this._shadowClock = (this._shadowClock || 0) + dt;
    if (this._shadowClock > 0.18) {
      if (Math.abs(this.hour - (this._lastShadowHour ?? -999)) > 0.012) {
        this.renderer.shadowMap.needsUpdate = true;
        this._lastShadowHour = this.hour;
      }
      this._shadowClock = 0;
    }
    this.intensity = damp(this.intensity, this.targetIntensity, 2.2, dt);
    for (const key of Object.keys(this.weatherWeights)) {
      this.weatherWeights[key] = damp(this.weatherWeights[key], this.targetWeatherWeights[key], 1.7, dt);
    }
    this.updateTimePalette();

    const theta = ((this.hour - 6.0) / 12) * Math.PI;
    const sunElevation = Math.sin(theta);
    const daylight = smoothstep(-0.12, 0.18, sunElevation);
    this.nightFactor = 1 - daylight;
    const sunDir = new THREE.Vector3(Math.cos(theta) * 0.82, Math.max(-0.4, sunElevation) * 0.92, 0.5).normalize();
    const moonDir = new THREE.Vector3(-0.43, 0.55, -0.7).normalize();

    const w = this.weatherWeights;
    const cloud = clamp(
      w.clear * WEATHER_PRESETS.clear.cloud +
      w.rain * WEATHER_PRESETS.rain.cloud +
      w.snow * WEATHER_PRESETS.snow.cloud +
      w.fog * WEATHER_PRESETS.fog.cloud,
      0, 1
    );
    const rainAmount = clamp(w.rain * this.intensity, 0, 1);
    const snowAmount = clamp(w.snow * this.intensity, 0, 1);
    const fogAmount = clamp(w.rain * this.intensity * 0.5 + w.snow * this.intensity * 0.5 + w.fog * this.intensity, 0, 1);

    const wetTarget = clamp(
      w.rain * (0.35 + this.intensity * 0.7) +
      w.snow * 0.12 +
      w.fog * 0.25 +
      w.clear * 0.12,
      0, 1
    );
    this.wetness = damp(this.wetness, wetTarget, 0.55, dt);
    const coverTarget = clamp(w.snow * Math.pow(this.intensity, 0.72), 0, 1);
    this.snowCover = damp(this.snowCover, coverTarget, coverTarget > this.snowCover ? 0.9 : 0.35, dt);

    // Weathered sky colours. Each value keeps its own color object so later
    // derived tints cannot overwrite an already-computed sky channel.
    const cTop = this.palette.top;
    const cHorizon = this.palette.horizon;
    const cGround = this.palette.ground;
    const cCloud = this.palette.cloud;
    const cSun = this.palette.sun;
    const cHemiSky = this.palette.hemiSky;
    const cHemiGround = this.palette.hemiGround;

    const rainTop = _c1.setHex(0x07141d).lerp(_c2.setHex(0x4b5a61), daylight);
    const top = new THREE.Color().copy(cTop).lerp(rainTop, w.rain * 0.9);
    _c1.setHex(0x0b151d).lerp(_c2.setHex(0x839096), daylight);
    top.lerp(_c1, w.snow * 0.82);
    _c1.setHex(0x121a1c).lerp(_c2.setHex(0x929b9d), daylight);
    top.lerp(_c1, w.fog * 0.82);

    const horizon = new THREE.Color();
    _c1.setHex(0x17262f).lerp(_c2.setHex(0x7d8c92), daylight);
    horizon.copy(cHorizon).lerp(_c1, w.rain * 0.82);
    _c1.setHex(0x20303c).lerp(_c2.setHex(0xd4dcdf), daylight);
    horizon.lerp(_c1, w.snow * 0.84);
    _c1.setHex(0x283437).lerp(_c2.setHex(0xb9c1c1), daylight);
    horizon.lerp(_c1, w.fog * 0.88);

    const skyGround = new THREE.Color().setHex(0x030608).lerp(new THREE.Color(0x7f898b), daylight).lerp(cGround, 0.32);
    const cloudColor = new THREE.Color().copy(cCloud)
      .lerp(horizon, 0.38 + daylight * 0.12)
      .lerp(new THREE.Color(0x78868b), w.rain * 0.32 + w.fog * 0.28);
    const fogColor = new THREE.Color().copy(horizon).lerp(skyGround, 0.25).lerp(new THREE.Color(0x4a5556), 0.3);
    const sunColor = new THREE.Color().copy(cSun)
      .lerp(new THREE.Color(0xbfd0d6), w.rain * 0.7 + w.fog * 0.6)
      .lerp(new THREE.Color(0xe8eef2), w.snow * 0.36);
    const hemiSky = new THREE.Color().copy(cHemiSky).lerp(new THREE.Color(0x7d8a8d), w.rain * 0.5 + w.fog * 0.4);
    const hemiGround = new THREE.Color().copy(cHemiGround);

    this.skyUniforms.uTop.value.copy(top);
    this.skyUniforms.uHorizon.value.copy(horizon);
    this.skyUniforms.uGround.value.copy(skyGround);
    this.skyUniforms.uCloud.value.copy(cloudColor);
    this.skyUniforms.uSunColor.value.copy(sunColor);
    this.skyUniforms.uSunDir.value.copy(sunDir);
    this.skyUniforms.uMoonDir.value.copy(moonDir);
    this.skyUniforms.uCloudCover.value = cloud;
    this.skyUniforms.uSunStrength.value = sunElevation > -0.12 ? 0.8 : 0.05;
    this.skyUniforms.uMoonStrength.value = (1 - daylight) * (1 - cloud * 0.7) * 0.85;
    this.skyUniforms.uTime.value = elapsed;

    this.sunSprite.position.copy(sunDir.clone().multiplyScalar(420));
    this.sunSprite.material.opacity = clamp(sunElevation * 2.4, 0, 0.9) * (1 - cloud * 0.72);
    this.sunSprite.material.color.copy(sunColor);
    this.sunSprite.visible = this.sunSprite.material.opacity > 0.01;
    this.moonSprite.position.copy(moonDir.clone().multiplyScalar(420));
    this.moonSprite.material.opacity = (1 - daylight) * (1 - cloud * 0.82) * 0.8;
    this.moonSprite.visible = this.moonSprite.material.opacity > 0.01;

    const lightBlend = daylight;
    this.sunLight.position.copy(new THREE.Vector3(-14, 23, 12)).lerp(sunDir.clone().multiplyScalar(36).add(new THREE.Vector3(0, 5, 4)), lightBlend);
    this.sunLight.color.copy(new THREE.Color(0xa9c6e5)).lerp(sunColor, lightBlend * 0.75);
    const weatherDarkness = 1 - cloud * 0.65 - rainAmount * 0.3 - snowAmount * 0.08;
    this.sunLight.intensity = this.palette.sunIntensity * (0.35 + lightBlend * 0.85) * clamp(weatherDarkness, 0.15, 1);
    this.hemi.color.copy(hemiSky);
    this.hemi.groundColor.copy(hemiGround);
    this.hemi.intensity = this.palette.hemiIntensity * (0.82 + daylight * 0.22) * (1 - rainAmount * 0.12);
    this.fill.color.copy(sunColor).lerp(new THREE.Color(0x6c98b4), 0.4);
    this.fill.intensity = (0.17 + (1 - lightBlend) * 0.23 + lightBlend * 0.34) * (1 - cloud * 0.22);
    this.ambient.color.copy(new THREE.Color(0x263b46)).lerp(new THREE.Color(0x8da6ad), daylight * 0.4);
    this.ambient.intensity = 0.1 + (1 - daylight) * 0.1 + cloud * 0.025;
    this.exposure = this.palette.exposure * lerp(1, 0.94, rainAmount) * lerp(1, 1.03, snowAmount * (1 - daylight * 0.4));
    this.bloom = clamp(0.26 + (1 - daylight) * 0.14 + cloud * 0.03, 0.2, 0.5);

    this.scene.fog.color.copy(fogColor);
    this.scene.fog.density = this.palette.fogDensity * (0.72 + cloud * 0.5) + rainAmount * 0.0045 + snowAmount * 0.004 + fogAmount * 0.009;
    if ('environmentIntensity' in this.scene) this.scene.environmentIntensity = 0.3 + this.wetness * 0.5 + daylight * 0.25;

    this.starMaterial.uniforms.uTime.value = elapsed;
    this.starMaterial.uniforms.uOpacity.value = clamp(this.palette.stars * (1 - cloud * 0.9) * (1 - w.fog * 0.8) - daylight * 0.2, 0, 0.92);

    for (const mat of this.cityWindowMaterials) {
      mat.emissiveIntensity = this.palette.cityWindows * 0.42;
      mat.color.setHex(0x394245).lerp(new THREE.Color(0x8c9697), daylight * 0.8);
    }
    for (const mat of this.neonMaterials) mat.opacity = 0.4 + this.nightFactor * 0.6;
    for (const item of this.streetLampLights) {
      const on = this.palette.streetLights;
      if (item.light) item.light.intensity = 18 * on;
      item.sprite.material.opacity = 0.12 + on * 0.72;
    }
    for (const m of this.trafficSignalMaterials) {
      m.opacity = m.opacity > 0.1 ? 0.55 + this.nightFactor * 0.45 : 0.03;
    }

    if (this.asphaltMaterial) {
      this.asphaltMaterial.roughness = lerp(0.58, 0.09, this.wetness);
      this.asphaltMaterial.clearcoat = lerp(0.1, 1, this.wetness);
      this.asphaltMaterial.clearcoatRoughness = lerp(0.35, 0.035, this.wetness);
      this.asphaltMaterial.envMapIntensity = lerp(0.2, 1.15, this.wetness);
      this.asphaltMaterial.color.setHex(0x777b7c).multiplyScalar(lerp(1, 0.64, this.wetness));
    }
    if (this.concreteMaterial) {
      this.concreteMaterial.roughness = lerp(0.84, 0.45, this.wetness);
      this.concreteMaterial.envMapIntensity = lerp(0.12, 0.52, this.wetness);
    }
    this.reflectionMaterials.forEach((mat) => {
      mat.opacity = this.wetness * (0.16 + this.intensity * 0.12) * (1 - this.snowCover * 0.8);
    });
    this.puddleMaterials.forEach((mat) => {
      mat.opacity = (0.35 + this.wetness * 0.5) * (1 - this.snowCover * 0.9);
    });
    this.puddleRippleMaterials.forEach((mat) => {
      mat.uniforms.uTime.value = elapsed;
      mat.uniforms.uOpacity.value = this.wetness * (0.22 + this.intensity * 0.78) * (1 - this.snowCover);
    });
    if (this.snowGroundMaterial) this.snowGroundMaterial.opacity = this.snowCover * 0.97;
    if (this.snowBankMat) this.snowBankMat.opacity = this.snowCover;
    if (this.snowGround) this.snowGround.visible = this.snowCover > 0.008;

    this.rainMaterial.uniforms.uTime.value = elapsed;
    this.rainMaterial.uniforms.uIntensity.value = rainAmount;
    this.rainMaterial.uniforms.uWind.value = 0.35 + this.intensity * 0.6;
    this.snowMaterial.uniforms.uTime.value = elapsed;
    this.snowMaterial.uniforms.uIntensity.value = snowAmount;
    this.snowMaterial.uniforms.uWind.value = 0.12 + this.intensity * 0.25;

    this.steamMaterial.uniforms.uTime.value = elapsed;
    this.steamMaterial.uniforms.uOpacity.value = 0.12 + this.nightFactor * 0.2 + rainAmount * 0.12;
    this.fogSprites.forEach(({ mat, speed, phase }, i) => {
      mat.opacity = fogAmount * 0.2 + rainAmount * 0.045;
      const child = this.fogGroup.children[i];
      if (child) child.position.x += Math.sin(elapsed * speed + phase) * 0.0015;
    });
  }
}
