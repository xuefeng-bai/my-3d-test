import * as THREE from 'three';
import {
  RNG,
  createNoise2D,
  fbm,
  ridgedNoise,
  clamp,
  lerp,
  smoothstep,
  smootherstep,
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
    label: '星野晴空',
    short: '晴',
    note: '月朗星稀 · 视程约 26 km',
    temp: -13,
    air: 61,
    windText: '西北风 · 2 级',
    windLevel: 2,
    skyTop: 0x030b18,
    skyHorizon: 0x3f5a6f,
    skyGround: 0x1a2731,
    sunColor: 0xd6e8ff,
    cloudColor: 0x1f3140,
    cloudCover: 0.24,
    fogColor: 0x415a6c,
    fogDensity: 0.0022,
    dirColor: 0xbcd8ff,
    dirIntensity: 2.05,
    hemiSky: 0x6e8da2,
    hemiGround: 0x3c474e,
    hemiIntensity: 0.42,
    fillColor: 0xffc79b,
    fillIntensity: 0.68,
    exposure: 0.93,
    bloom: 0.52,
    stars: 1,
    moon: 1,
    wind: 0.3,
    snow: 0,
    rain: 0,
    wetness: 0,
    envIntensity: 0.55,
    sparkle: 0.8,
    signal: 1,
  },
  snow: {
    id: 'snow',
    label: '漫天飞雪',
    short: '雪',
    note: '粉雪 · 视程约 8 km',
    temp: -18,
    air: 59,
    windText: '西北风 · 4 级',
    windLevel: 4,
    skyTop: 0x041125,
    skyHorizon: 0x587287,
    skyGround: 0x2f3e49,
    sunColor: 0xf5dfc4,
    cloudColor: 0x33495b,
    cloudCover: 0.58,
    fogColor: 0x687f91,
    fogDensity: 0.0042,
    dirColor: 0xcfe4f4,
    dirIntensity: 1.78,
    hemiSky: 0x809caf,
    hemiGround: 0x46535b,
    hemiIntensity: 0.5,
    fillColor: 0xffc392,
    fillIntensity: 1.3,
    exposure: 0.84,
    bloom: 0.38,
    stars: 0.08,
    moon: 0.32,
    wind: 0.9,
    snow: 1,
    rain: 0,
    wetness: 0,
    envIntensity: 0.78,
    sparkle: 0.55,
    signal: 2,
  },
  rain: {
    id: 'rain',
    label: '冷雨薄雾',
    short: '雨',
    note: '雨夹雪 · 视程约 3 km',
    temp: -4,
    air: 66,
    windText: '北风 · 5 级',
    windLevel: 5,
    skyTop: 0x03090f,
    skyHorizon: 0x31434e,
    skyGround: 0x111a20,
    sunColor: 0x9fb4c3,
    cloudColor: 0x141e26,
    cloudCover: 0.95,
    fogColor: 0x455763,
    fogDensity: 0.0078,
    dirColor: 0x9fb7c7,
    dirIntensity: 0.64,
    hemiSky: 0x627b8b,
    hemiGround: 0x424e56,
    hemiIntensity: 0.4,
    fillColor: 0xc4b09a,
    fillIntensity: 0.3,
    exposure: 0.78,
    bloom: 0.22,
    stars: 0,
    moon: 0,
    wind: 1.4,
    snow: 0.12,
    rain: 1,
    wetness: 1,
    envIntensity: 0.3,
    sparkle: 0.12,
    signal: 3,
  },
  storm: {
    id: 'storm',
    label: '白毛风暴',
    short: '风暴',
    note: '暴风雪 · 视程不足 1 km',
    temp: -26,
    air: 54,
    windText: '西北风 · 8 级',
    windLevel: 8,
    skyTop: 0x010508,
    skyHorizon: 0x1f2a32,
    skyGround: 0x080f14,
    sunColor: 0xb9cbd6,
    cloudColor: 0x0b1319,
    cloudCover: 1,
    fogColor: 0x3b4a54,
    fogDensity: 0.012,
    dirColor: 0x94adbd,
    dirIntensity: 0.38,
    hemiSky: 0x526b7a,
    hemiGround: 0x3d484f,
    hemiIntensity: 0.38,
    fillColor: 0xc9ad96,
    fillIntensity: 0.14,
    exposure: 0.68,
    bloom: 0.16,
    stars: 0,
    moon: 0,
    wind: 2.7,
    snow: 1.22,
    rain: 0.08,
    wetness: 0.8,
    envIntensity: 0.24,
    sparkle: 0.06,
    signal: 4,
  },
};

const COLOR_KEYS = [
  'skyTop',
  'skyHorizon',
  'skyGround',
  'sunColor',
  'cloudColor',
  'fogColor',
  'dirColor',
  'hemiSky',
  'hemiGround',
  'fillColor',
];

const NUMERIC_KEYS = [
  'fogDensity',
  'dirIntensity',
  'hemiIntensity',
  'fillIntensity',
  'exposure',
  'bloom',
  'stars',
  'moon',
  'wind',
  'snow',
  'rain',
  'wetness',
  'envIntensity',
  'cloudCover',
  'sparkle',
];

const _color = new THREE.Color();
const _color2 = new THREE.Color();

/* ------------------------------------------------------------------ *
 * SnowWorld
 * ------------------------------------------------------------------ */

export class SnowWorld {
  constructor(scene, renderer, { mobile = false } = {}) {
    this.scene = scene;
    this.renderer = renderer;
    this.mobile = mobile;
    this.group = new THREE.Group();
    this.group.name = 'SnowWorld';
    scene.add(this.group);

    this.weatherId = 'snow';
    this.intensity = 0.62;
    this.targetWeather = 'snow';
    this.time = 0;
    this.flashEnergy = 0;
    this.lightningCooldown = 7 + Math.random() * 8;
    this.onLightning = null;

    this.noiseA = createNoise2D(19217);
    this.noiseB = createNoise2D(78131);
    this.noiseC = createNoise2D(44109);
    this.rng = new RNG(90210);

    this.current = {};
    this.target = {};
    for (const key of COLOR_KEYS) {
      this.current[key] = new THREE.Color();
      this.target[key] = new THREE.Color();
    }
    for (const key of NUMERIC_KEYS) {
      this.current[key] = 0;
      this.target[key] = 0;
    }

    this.terrainMaterial = null;
    this.snowMaterial = null;
    this.rainMaterial = null;
    this.starMaterial = null;
    this.sparkleMaterial = null;
    this.moonMaterial = null;
    this._uniformTime = { value: 0 };
    this.precipitation = { snow: 0, rain: 0 };

    this.initEnvironment();
    this.initSky();
    this.initStars();
    this.initFarRanges();
    this.initTerrain();
    this.initTrees();
    this.initRocks();
    this.initTracks();
    this.initFlag();
    this.initLighting();
    this.initParticles();
    this.initSparkles();

    this.setWeather('snow', 0.62, true);
  }

  /* ----------------------------- terrain ---------------------------- */

  heightAt(x, z) {
    const d = Math.hypot(x, z);
    const flat = smootherstep(7, 19, d);
    if (flat <= 0.0001) return 0;

    let h = 0;

    // Broad, soft snow shelf around the car.
    h += fbm(this.noiseA, x * 0.055 + 3.2, z * 0.055 - 1.8, 4) * 0.55 * smoothstep(4, 18, d);

    // Low rolling snow fields.
    h += fbm(this.noiseC, x * 0.024 - 7.1, z * 0.024 + 2.4, 4) * 2.8 * smoothstep(14, 46, d);

    // Ridged alpine walls.
    const ridges = ridgedNoise(this.noiseB, x * 0.012 + 4.7, z * 0.012 - 2.1, 5);
    h += smoothstep(30, 128, d) * (3 + 16 * ridges);

    // Main massif behind the car, deliberately distant so the sky stays open.
    const dx = (x + 32) / 68;
    const dz = (z + 152) / 56;
    const mainDist = dx * dx + dz * dz;
    h += Math.exp(-mainDist) * (9 + 17 * ridges);

    // Secondary shoulders, left and right, to keep a 360° skyline.
    const dx2 = (x - 92) / 58;
    const dz2 = (z + 112) / 60;
    h += Math.exp(-(dx2 * dx2 + dz2 * dz2)) * (7 + 13 * ridges);

    const dx3 = (x + 108) / 56;
    const dz3 = (z + 74) / 68;
    h += Math.exp(-(dx3 * dx3 + dz3 * dz3)) * (6 + 11 * ridges);

    const dx4 = (x + 10) / 78;
    const dz4 = (z - 148) / 52;
    h += Math.exp(-(dx4 * dx4 + dz4 * dz4)) * (5 + 8 * ridges);

    // Rocky broken ridges near the high ground.
    h += Math.pow(smoothstep(38, 145, d), 2) * ridgedNoise(this.noiseC, x * 0.04, z * 0.04, 3) * 3.2;

    return h * flat;
  }

  surfaceNormal(x, z, out = new THREE.Vector3()) {
    const e = 0.35;
    const hL = this.heightAt(x - e, z);
    const hR = this.heightAt(x + e, z);
    const hD = this.heightAt(x, z - e);
    const hU = this.heightAt(x, z + e);
    out.set(hL - hR, 2 * e, hD - hU).normalize();
    return out;
  }

  initTerrain() {
    const size = 360;
    const segments = this.mobile ? 168 : 246;
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    geometry.rotateX(-Math.PI / 2);
    const pos = geometry.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const heights = new Float32Array(pos.count);
    const cols = segments + 1;
    const spacing = size / segments;
    const snowCold = new THREE.Color(0xaec2ce);
    const snowLight = new THREE.Color(0xdde9ef);
    const snowBlue = new THREE.Color(0x8299a8);
    const rock = new THREE.Color(0x333f47);
    const rockLight = new THREE.Color(0x5d6b72);
    const c = new THREE.Color();

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const y = this.heightAt(x, z);
      heights[i] = y;
      pos.setY(i, y);
    }

    for (let row = 0; row < cols; row++) {
      for (let col = 0; col < cols; col++) {
        const i = row * cols + col;
        const x = pos.getX(i);
        const z = pos.getZ(i);
        const y = heights[i];

        const left = heights[row * cols + Math.max(0, col - 1)];
        const right = heights[row * cols + Math.min(cols - 1, col + 1)];
        const down = heights[Math.max(0, row - 1) * cols + col];
        const up = heights[Math.min(cols - 1, row + 1) * cols + col];
        const gx = (right - left) / (2 * spacing);
        const gz = (up - down) / (2 * spacing);
        const slope = Math.sqrt(gx * gx + gz * gz);

        const grain = fbm(this.noiseA, x * 0.09 + 8.3, z * 0.09 - 4.7, 3);
        const fine = fbm(this.noiseC, x * 0.44 - 2.1, z * 0.44 + 5.5, 2);
        const rockMix = smoothstep(0.44, 1.05, slope) * (0.72 + 0.28 * fine);

        c.copy(snowCold).lerp(snowLight, clamp(grain * 0.55 + 0.46, 0, 1));
        c.lerp(snowBlue, smoothstep(22, 70, y) * 0.16);
        c.lerp(rock, rockMix * 0.92);
        c.lerp(rockLight, smoothstep(0.8, 1.5, slope) * 0.18);
        c.multiplyScalar(0.94 + fine * 0.08);

        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
    }

    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();

    const bump = canvasTexture(512, 512, (ctx, w, h) => {
      ctx.fillStyle = '#777';
      ctx.fillRect(0, 0, w, h);
      const rng = new RNG(5533);

      // Wind-carved sastrugi: paired light and shadow lines following the fall line.
      ctx.globalCompositeOperation = 'source-over';
      for (let i = 0; i < 160; i++) {
        const y = rng.float(-20, h + 20);
        const amp = rng.float(2, 12);
        const freq = rng.float(0.008, 0.024);
        const phase = rng.float(0, Math.PI * 2);
        const lift = rng.float(0.5, 2.4);
        for (const [offset, color] of [[-1.15, 'rgba(255,255,255,'], [0.9, 'rgba(22,22,22,']]) {
          ctx.strokeStyle = `${color}${rng.float(0.035, 0.11)})`;
          ctx.lineWidth = rng.float(1, 3.6);
          ctx.beginPath();
          for (let x = -10; x <= w + 10; x += 8) {
            const wave = Math.sin(x * freq + phase) * amp + Math.sin(x * freq * 2.7 + phase * 1.7) * amp * 0.25;
            const yy = y + wave + offset * lift;
            if (x === -10) ctx.moveTo(x, yy);
            else ctx.lineTo(x, yy);
          }
          ctx.stroke();
        }
      }

      // Fine crystalline grain.
      for (let i = 0; i < 8000; i++) {
        const x = rng.float(0, w);
        const y = rng.float(0, h);
        const v = rng.float(0, 1) > 0.5 ? 255 : 30;
        ctx.fillStyle = `rgba(${v},${v},${v},${rng.float(0.025, 0.09)})`;
        ctx.fillRect(x, y, rng.float(0.5, 1.8), rng.float(0.5, 1.4));
      }

      // A handful of larger drift pockets.
      for (let i = 0; i < 55; i++) {
        const x = rng.float(0, w);
        const y = rng.float(0, h);
        const r = rng.float(8, 40);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(255,255,255,${rng.float(0.025, 0.07)})`);
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
    }, {
      colorSpace: THREE.NoColorSpace,
      wrap: THREE.RepeatWrapping,
      repeat: [42, 42],
      anisotropy: 8,
    });

    this.snowBump = bump;

    // Tileable, organic normal map for soft wind-packed snow grain.
    const normalMap = canvasTexture(512, 512, (ctx, w, h) => {
      const image = ctx.createImageData(w, h);
      const TAU = Math.PI * 2;
      const wrng = new RNG(99173);
      const waves = [];
      for (let i = 0; i < 11; i++) {
        let fx = wrng.int(-8, 8);
        let fy = wrng.int(-8, 8);
        if (fx === 0 && fy === 0) fx = 1;
        const length = Math.hypot(fx, fy);
        waves.push({
          fx,
          fy,
          phase: wrng.float(0, TAU),
          amp: wrng.float(0.35, 1.2) / (1 + length * 0.55),
        });
      }
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const u = x / w;
          const v = y / h;
          let dx = 0;
          let dy = 0;
          for (const wave of waves) {
            const c = Math.cos(TAU * (wave.fx * u + wave.fy * v) + wave.phase);
            dx += wave.amp * wave.fx * c;
            dy += wave.amp * wave.fy * c;
          }
          let nx = -dx * 0.16;
          let ny = -dy * 0.16;
          let nz = 1;
          const len = Math.hypot(nx, ny, nz);
          nx /= len;
          ny /= len;
          nz /= len;
          const i = (y * w + x) * 4;
          image.data[i] = Math.round((nx * 0.5 + 0.5) * 255);
          image.data[i + 1] = Math.round((ny * 0.5 + 0.5) * 255);
          image.data[i + 2] = Math.round((nz * 0.5 + 0.5) * 255);
          image.data[i + 3] = 255;
        }
      }
      ctx.putImageData(image, 0, 0);
    }, {
      colorSpace: THREE.NoColorSpace,
      wrap: THREE.RepeatWrapping,
      repeat: [22, 22],
      anisotropy: 8,
    });
    this.snowNormal = normalMap;

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      vertexColors: true,
      roughness: 0.91,
      metalness: 0.015,
      bumpMap: bump,
      bumpScale: 0.22,
      normalMap,
      normalScale: new THREE.Vector2(0.3, 0.3),
      envMapIntensity: 0.3,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    mesh.name = 'SnowTerrain';
    this.group.add(mesh);
    this.terrain = mesh;
    this.terrainMaterial = material;
  }

  initEnvironment() {
    const texture = canvasTexture(1024, 512, (ctx, w, h) => {
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, '#0a1726');
      sky.addColorStop(0.32, '#3c5367');
      sky.addColorStop(0.49, '#9babb5');
      sky.addColorStop(0.53, '#73848d');
      sky.addColorStop(0.7, '#313a40');
      sky.addColorStop(1, '#10161a');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      // A soft, cool key source near the horizon.
      const glow = ctx.createRadialGradient(w * 0.29, h * 0.31, 0, w * 0.29, h * 0.31, w * 0.34);
      glow.addColorStop(0, 'rgba(255,244,223,.9)');
      glow.addColorStop(0.05, 'rgba(238,246,255,.55)');
      glow.addColorStop(0.22, 'rgba(172,202,222,.16)');
      glow.addColorStop(1, 'rgba(120,150,170,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Horizon warmth.
      const warm = ctx.createLinearGradient(0, h * 0.42, 0, h * 0.54);
      warm.addColorStop(0, 'rgba(255,181,133,0)');
      warm.addColorStop(0.55, 'rgba(255,179,127,.17)');
      warm.addColorStop(1, 'rgba(255,186,139,0)');
      ctx.fillStyle = warm;
      ctx.fillRect(0, 0, w, h);

      // Cloud bands, blurred with layered translucent ellipses.
      const rng = new RNG(4512);
      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < 36; i++) {
        const y = h * rng.float(0.18, 0.45);
        const x = w * rng.float(0, 1);
        const rx = w * rng.float(0.06, 0.23);
        const ry = h * rng.float(0.008, 0.035);
        const g = ctx.createRadialGradient(x, y, 0, x, y, rx);
        g.addColorStop(0, `rgba(184,204,217,${rng.float(0.015, 0.055)})`);
        g.addColorStop(1, 'rgba(184,204,217,0)');
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
      repeat: [1, 1],
      anisotropy: 4,
    });
    texture.mapping = THREE.EquirectangularReflectionMapping;

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    pmrem.compileEquirectangularShader();
    const rt = pmrem.fromEquirectangular(texture);
    this.envMap = rt.texture;
    this.scene.environment = this.envMap;
    if ('environmentIntensity' in this.scene) this.scene.environmentIntensity = 0.9;
    pmrem.dispose();
    texture.dispose();
  }

  initSky() {
    const uniforms = {
      uTopColor: { value: new THREE.Color(0x17293c) },
      uHorizonColor: { value: new THREE.Color(0x8b9da9) },
      uGroundColor: { value: new THREE.Color(0x53636e) },
      uSunColor: { value: new THREE.Color(0xf3e6d6) },
      uCloudColor: { value: new THREE.Color(0x718494) },
      uSunDir: { value: new THREE.Vector3(-0.42, 0.27, -0.86).normalize() },
      uWarmDir: { value: new THREE.Vector3(0.6, 0.08, -0.79).normalize() },
      uCloudCover: { value: 0.78 },
      uTime: { value: 0 },
      uFlash: { value: 0 },
      uStars: { value: 0.04 },
    };
    this.skyUniforms = uniforms;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uTopColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uGroundColor;
        uniform vec3 uSunColor;
        uniform vec3 uCloudColor;
        uniform vec3 uSunDir;
        uniform vec3 uWarmDir;
        uniform float uCloudCover;
        uniform float uTime;
        uniform float uFlash;
        uniform float uStars;
        varying vec3 vDir;

        ${GLSL_NOISE}

        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;

          float upper = smoothstep(-0.02, 0.66, h);
          vec3 col = mix(uHorizonColor, uTopColor, pow(upper, 0.76));
          col = mix(uGroundColor, col, smoothstep(-0.2, -0.005, h));

          // Broad blue-hour warmth near the opposite horizon.
          float warm = max(dot(normalize(vec3(d.x, 0.16, d.z)), uWarmDir), 0.0);
          col += vec3(0.19, 0.085, 0.032) * pow(warm, 3.2) * smoothstep(0.28, 0.0, abs(h));

          // Moon / hidden sun halo.
          float sd = max(dot(d, normalize(uSunDir)), 0.0);
          col += uSunColor * (pow(sd, 780.0) * 2.25 + pow(sd, 24.0) * 0.11 + pow(sd, 5.0) * 0.025);

          // Layered cloud field, slowly drifting across the sky.
          vec2 cuv = d.xz / (max(d.y, 0.0) + 0.22);
          cuv += vec2(uTime * 0.0045, uTime * 0.0015);
          float broad = fbm2(cuv * 1.45 + vec2(2.7, -1.2));
          float detail = vnoise(cuv * 6.2 + vec2(-3.4, 5.1));
          float wisps = smoothstep(0.48, 0.82, broad) * smoothstep(0.32, 0.76, detail * 0.7 + broad * 0.6);
          wisps *= smoothstep(-0.02, 0.22, d.y);
          wisps *= 0.55 + 0.45 * smoothstep(0.1, 0.7, d.y);
          vec3 cloud = mix(uCloudColor, uHorizonColor * 1.24, smoothstep(0.0, 0.55, d.y));
          cloud = mix(cloud, uSunColor, pow(sd, 5.0) * 0.2);
          col = mix(col, cloud, wisps * uCloudCover * 0.82);

          // A faint silver lining near the moon.
          col += uSunColor * pow(sd, 9.0) * wisps * 0.1;

          // High-altitude veil.
          float veil = smoothstep(0.06, 0.32, h) * smoothstep(0.9, 0.45, h);
          col = mix(col, uHorizonColor * 1.1, veil * 0.07);

          // Lightning lifts the whole dome for a split second.
          col += vec3(0.55, 0.63, 0.7) * uFlash;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });

    const mesh = new THREE.Mesh(new THREE.SphereGeometry(720, 48, 24), material);
    mesh.name = 'SkyDome';
    mesh.frustumCulled = false;
    mesh.renderOrder = -10;
    this.group.add(mesh);
    this.sky = mesh;

    // A separate luminous moon sprite that catches the bloom pass.
    const moonTexture = makeRadialTexture(256, [
      [0, 'rgba(255,255,255,1)'],
      [0.045, 'rgba(255,252,243,1)'],
      [0.09, 'rgba(255,246,226,.9)'],
      [0.22, 'rgba(219,235,250,.24)'],
      [0.55, 'rgba(174,204,229,.07)'],
      [1, 'rgba(160,194,220,0)'],
    ]);
    const moonMaterial = new THREE.SpriteMaterial({
      map: moonTexture,
      color: 0xfff4dc,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      fog: false,
      toneMapped: false,
    });
    this.moonMaterial = moonMaterial;
    const moon = new THREE.Sprite(moonMaterial);
    moon.position.copy(uniforms.uSunDir.value).multiplyScalar(430);
    moon.scale.set(73, 73, 1);
    moon.renderOrder = -9;
    this.group.add(moon);
    this.moon = moon;
  }

  initStars() {
    const count = this.mobile ? 700 : 1550;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const tints = new Float32Array(count * 3);
    const rng = new RNG(3344);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const azimuth = rng.float(0, Math.PI * 2);
      const elevation = Math.asin(rng.float(0.03, 0.985));
      const radius = 470 + rng.float(0, 60);
      const ce = Math.cos(elevation);
      positions[i * 3] = Math.cos(azimuth) * ce * radius;
      positions[i * 3 + 1] = Math.sin(elevation) * radius;
      positions[i * 3 + 2] = Math.sin(azimuth) * ce * radius;
      sizes[i] = rng.next() < 0.04 ? rng.float(2.4, 4.4) : rng.float(0.55, 2.2);
      phases[i] = rng.float(0, Math.PI * 2);
      const tint = rng.next();
      color.setHSL(tint > 0.72 ? 0.09 : 0.58, tint > 0.72 ? 0.28 : 0.12, rng.float(0.72, 0.98));
      tints[i * 3] = color.r;
      tints[i * 3 + 1] = color.g;
      tints[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('aTint', new THREE.BufferAttribute(tints, 3));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.04 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aPhase;
        attribute vec3 aTint;
        uniform float uTime;
        uniform float uPixelRatio;
        varying vec3 vTint;
        varying float vTwinkle;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          float twinkle = 0.68 + 0.32 * sin(uTime * 0.9 + aPhase) * sin(uTime * 0.37 + aPhase * 1.7);
          vTwinkle = twinkle;
          vTint = aTint;
          gl_PointSize = aSize * uPixelRatio * (1.2 + 0.4 * sin(uTime * 0.5 + aPhase));
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        varying vec3 vTint;
        varying float vTwinkle;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float core = smoothstep(0.5, 0.0, d);
          float alpha = pow(core, 2.0) * uOpacity * vTwinkle;
          gl_FragColor = vec4(vTint * (0.8 + core), alpha);
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
    stars.name = 'Stars';
    stars.renderOrder = -8;
    this.group.add(stars);
    this.stars = stars;
  }

  initFarRanges() {
    const layers = [
      { radius: 236, height: 52, colorA: 0x263845, colorB: 0x728b9c, seed: 33, topNoise: 0.017 },
      { radius: 322, height: 68, colorA: 0x3a4e5e, colorB: 0x839aa9, seed: 77, topNoise: 0.011 },
    ];

    this.farRanges = layers.map((layer, layerIndex) => {
      const segments = this.mobile ? 110 : 180;
      const positions = new Float32Array((segments + 1) * 2 * 3);
      const colors = new Float32Array((segments + 1) * 2 * 3);
      const indices = [];
      const noise = createNoise2D(layer.seed);
      const rock = new THREE.Color(layer.colorA);
      const snow = new THREE.Color(layer.colorB);
      const c = new THREE.Color();

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const a = t * Math.PI * 2;
        const n = ridgedNoise(noise, t * 16 + layerIndex * 3, layerIndex * 2.4, 5);
        const n2 = ridgedNoise(noise, t * 42 + 5, layerIndex * 8 + 2, 3);
        const height = layer.height * (0.22 + n * 0.75 + n2 * 0.15);
        const radius = layer.radius + fbm(noise, t * 9, 4.1, 3) * 25;
        const x = Math.cos(a) * radius;
        const z = Math.sin(a) * radius;
        const top = -14 + height;
        const base = -18;

        positions[i * 6] = x;
        positions[i * 6 + 1] = base;
        positions[i * 6 + 2] = z;
        positions[i * 6 + 3] = x;
        positions[i * 6 + 4] = top;
        positions[i * 6 + 5] = z;

        c.copy(rock).lerp(snow, clamp((height / layer.height) * 0.9 + 0.1, 0, 1));
        colors[i * 6] = c.r * 0.62;
        colors[i * 6 + 1] = c.g * 0.62;
        colors[i * 6 + 2] = c.b * 0.62;
        c.copy(rock).lerp(snow, clamp((height / layer.height) * 1.2, 0, 1));
        colors[i * 6 + 3] = c.r;
        colors[i * 6 + 4] = c.g;
        colors[i * 6 + 5] = c.b;
      }

      for (let i = 0; i < segments; i++) {
        const a = i * 2;
        const b = i * 2 + 1;
        const c2 = i * 2 + 2;
        const d = i * 2 + 3;
        indices.push(a, b, c2, b, d, c2);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();

      const material = new THREE.MeshBasicMaterial({
        vertexColors: true,
        side: THREE.DoubleSide,
        fog: true,
        toneMapped: true,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = `FarRange${layerIndex}`;
      mesh.frustumCulled = false;
      this.group.add(mesh);
      return mesh;
    });
  }

  initTrees() {
    const treeCount = this.mobile ? 26 : 46;
    const rng = new RNG(56031);
    const layerSpecs = [
      { r: 1.65, h: 2.2, y: 0.7 },
      { r: 1.28, h: 2.0, y: 1.8 },
      { r: 0.9, h: 1.75, y: 2.8 },
    ];

    const greenMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.88,
      metalness: 0.02,
      flatShading: true,
    });
    const snowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
      metalness: 0.02,
      flatShading: true,
    });
    const trunkMaterial = new THREE.MeshStandardMaterial({
      color: 0x2c2722,
      roughness: 0.96,
      metalness: 0,
      flatShading: true,
    });

    const timeUniform = this._uniformTime;
    const addWind = (material) => {
      material.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = timeUniform;
        shader.vertexShader = shader.vertexShader
          .replace('void main() {', 'uniform float uTime;\nvoid main() {')
          .replace(
            '#include <begin_vertex>',
            /* glsl */ `
              #include <begin_vertex>
              float windPhase = instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.23;
              float windStrength = smoothstep(0.0, 3.6, position.y);
              transformed.x += sin(uTime * 0.68 + windPhase) * 0.055 * windStrength;
              transformed.z += cos(uTime * 0.52 + windPhase * 0.73) * 0.035 * windStrength;
            `
          );
      };
      material.customProgramCacheKey = () => 'pine-wind-v1';
    };
    addWind(greenMaterial);
    addWind(snowMaterial);

    const layerMeshes = layerSpecs.map((spec) => {
      const geometry = new THREE.ConeGeometry(1, 1, 7, 1);
      geometry.translate(0, 0.5, 0);
      const green = new THREE.InstancedMesh(geometry, greenMaterial, treeCount);
      const snow = new THREE.InstancedMesh(geometry, snowMaterial, treeCount);
      green.castShadow = true;
      green.receiveShadow = true;
      green.frustumCulled = false;
      snow.castShadow = false;
      snow.receiveShadow = true;
      snow.frustumCulled = false;
      green.instanceMatrix.setUsage(THREE.StaticDrawUsage);
      snow.instanceMatrix.setUsage(THREE.StaticDrawUsage);
      this.group.add(green, snow);
      return {
        green,
        snow,
        spec,
        greenColor: new THREE.Color(),
        snowColor: new THREE.Color(),
      };
    });

    const trunkGeometry = new THREE.CylinderGeometry(0.075, 0.13, 1.35, 5, 1);
    trunkGeometry.translate(0, 0.675, 0);
    const trunks = new THREE.InstancedMesh(trunkGeometry, trunkMaterial, treeCount);
    trunks.castShadow = true;
    trunks.receiveShadow = true;
    trunks.frustumCulled = false;
    this.group.add(trunks);

    const dummy = new THREE.Object3D();
    const greenBase = new THREE.Color(0x24362f);
    const greenTip = new THREE.Color(0x41554a);
    const snowA = new THREE.Color(0xe9f2f6);
    const snowB = new THREE.Color(0xc4d8e2);
    let placed = 0;

    // Sparse, curated stands of conifers leave breathing room for the massif.
    const clusters = [
      { x: -36, z: -17, r: 12, count: 8, scale: 1.06 },
      { x: 33, z: -25, r: 10, count: 7, scale: 0.95 },
      { x: -58, z: -54, r: 16, count: 8, scale: 1.1 },
      { x: 61, z: -53, r: 14, count: 6, scale: 1.02 },
      { x: -51, z: 17, r: 12, count: 4, scale: 0.9 },
      { x: 51, z: 13, r: 11, count: 4, scale: 0.86 },
      { x: -24, z: 45, r: 13, count: 4, scale: 1.0 },
      { x: 30, z: 48, r: 14, count: 3, scale: 1.0 },
    ];

    const addTree = (x, z, scaleBase) => {
      if (placed >= treeCount) return;
      if (Math.hypot(x, z) < 29) return;
      const radius = Math.hypot(x, z);
      const s = scaleBase * rng.float(0.78, 1.25) * (radius > 65 ? rng.float(1.05, 1.35) : 1);
      const rot = rng.float(0, Math.PI * 2);
      const lean = rng.float(-0.025, 0.025);
      const baseY = this.heightAt(x, z) - 0.1;

      dummy.position.set(x, baseY, z);
      dummy.rotation.set(lean, rot, lean * 0.7);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      trunks.setMatrixAt(placed, dummy.matrix);
      trunks.setColorAt(placed, new THREE.Color().setHSL(0.08, 0.1, rng.float(0.08, 0.14)));

      layerSpecs.forEach((spec, layerIndex) => {
        const entry = layerMeshes[layerIndex];
        const layerR = spec.r * s * rng.float(0.84, 1.14);
        const layerH = spec.h * s * rng.float(0.88, 1.12);
        const layerY = baseY + (spec.y + rng.float(-0.1, 0.1)) * s;

        dummy.position.set(x, layerY, z);
        dummy.rotation.set(lean, rot + rng.float(-0.1, 0.1), lean * 0.7);
        dummy.scale.set(layerR, layerH, layerR);
        dummy.updateMatrix();
        entry.green.setMatrixAt(placed, dummy.matrix);
        const gc = new THREE.Color().lerpColors(greenBase, greenTip, rng.float(0, 1));
        entry.green.setColorAt(placed, gc);

        dummy.position.set(x, layerY + layerH * 0.43, z);
        dummy.scale.set(layerR * 0.94, layerH * 0.66, layerR * 0.94);
        dummy.updateMatrix();
        entry.snow.setMatrixAt(placed, dummy.matrix);
        const sc = new THREE.Color().lerpColors(snowA, snowB, rng.float(0, 1));
        entry.snow.setColorAt(placed, sc);
      });

      placed++;
    };

    for (const cluster of clusters) {
      for (let i = 0; i < cluster.count; i++) {
        const a = rng.float(0, Math.PI * 2);
        const r = Math.sqrt(rng.next()) * cluster.r;
        addTree(
          cluster.x + Math.cos(a) * r,
          cluster.z + Math.sin(a) * r * 0.82,
          cluster.scale
        );
        if (this.mobile && placed >= treeCount) break;
      }
      if (this.mobile && placed >= treeCount) break;
    }

    // A handful of distant silhouettes across the open snowfield.
    let attempts = 0;
    while (placed < treeCount && attempts < 60) {
      attempts++;
      addTree(rng.float(-90, 90), rng.float(-95, 95), rng.float(0.8, 1.25));
    }

    // Hide unused instances far below the terrain.
    const hidden = new THREE.Matrix4().makeTranslation(0, -500, 0);
    for (let i = placed; i < treeCount; i++) {
      for (const entry of layerMeshes) {
        entry.green.setMatrixAt(i, hidden);
        entry.snow.setMatrixAt(i, hidden);
      }
      trunks.setMatrixAt(i, hidden);
    }

    for (const entry of layerMeshes) {
      entry.green.instanceMatrix.needsUpdate = true;
      entry.snow.instanceMatrix.needsUpdate = true;
      if (entry.green.instanceColor) entry.green.instanceColor.needsUpdate = true;
      if (entry.snow.instanceColor) entry.snow.instanceColor.needsUpdate = true;
    }
    trunks.instanceMatrix.needsUpdate = true;
    if (trunks.instanceColor) trunks.instanceColor.needsUpdate = true;
    this.trees = { layerMeshes, trunks };
  }

  initRocks() {
    const count = this.mobile ? 8 : 16;
    const rng = new RNG(8831);
    const geometry = new THREE.DodecahedronGeometry(1, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.92,
      metalness: 0.06,
      flatShading: true,
    });
    const rocks = new THREE.InstancedMesh(geometry, material, count);
    rocks.castShadow = true;
    rocks.receiveShadow = true;
    rocks.frustumCulled = false;
    const dummy = new THREE.Object3D();
    const dark = new THREE.Color(0x39434a);
    const light = new THREE.Color(0x68757c);

    for (let i = 0; i < count; i++) {
      const angle = rng.float(0, Math.PI * 2);
      const radius = 11 + Math.pow(rng.next(), 0.7) * 22;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const s = rng.float(0.18, 0.62);
      dummy.position.set(x, this.heightAt(x, z) - s * 0.58, z);
      dummy.rotation.set(rng.float(0, Math.PI), rng.float(0, Math.PI), rng.float(0, Math.PI));
      dummy.scale.set(s * rng.float(0.7, 1.5), s * rng.float(0.36, 0.8), s * rng.float(0.7, 1.4));
      dummy.updateMatrix();
      rocks.setMatrixAt(i, dummy.matrix);
      rocks.setColorAt(i, new THREE.Color().lerpColors(dark, light, rng.float(0, 1)));
    }
    rocks.instanceMatrix.needsUpdate = true;
    if (rocks.instanceColor) rocks.instanceColor.needsUpdate = true;
    this.group.add(rocks);
  }

  initDrifts() {
    const count = this.mobile ? 16 : 34;
    const rng = new RNG(7219);
    const geometry = new THREE.IcosahedronGeometry(1, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0xe2edf3,
      roughness: 0.9,
      metalness: 0.01,
      flatShading: false,
      envMapIntensity: 0.4,
    });
    const drifts = new THREE.InstancedMesh(geometry, material, count);
    drifts.castShadow = true;
    drifts.receiveShadow = true;
    drifts.frustumCulled = false;
    const dummy = new THREE.Object3D();
    const hidden = new THREE.Matrix4().makeTranslation(0, -500, 0);
    for (let i = 0; i < count; i++) {
      const angle = rng.float(0, Math.PI * 2);
      const radius = 6.5 + Math.pow(rng.next(), 0.8) * 28;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      if (Math.hypot(x, z) < 5.5) {
        drifts.setMatrixAt(i, hidden);
        continue;
      }
      const sx = rng.float(1.2, 5.2);
      const sy = rng.float(0.22, 0.85);
      const sz = rng.float(1.1, 4.0);
      dummy.position.set(x, this.heightAt(x, z) - sy * 0.55, z);
      dummy.rotation.set(0, rng.float(0, Math.PI * 2), 0);
      dummy.scale.set(sx, sy, sz);
      dummy.updateMatrix();
      drifts.setMatrixAt(i, dummy.matrix);
    }
    drifts.instanceMatrix.needsUpdate = true;
    this.drifts = drifts;
    this.group.add(drifts);
  }

  initTracks() {
    const alpha = canvasTexture(64, 512, (ctx, w, h) => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);

      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(255,255,255,.92)');
      g.addColorStop(0.4, 'rgba(255,255,255,.75)');
      g.addColorStop(0.78, 'rgba(255,255,255,.32)');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(5, 0, w - 10, h);

      // Center groove.
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,.38)';
      ctx.fillRect(w / 2 - 1.2, 0, 2.4, h);
      ctx.globalCompositeOperation = 'destination-in';
      const edge = ctx.createLinearGradient(0, 0, w, 0);
      edge.addColorStop(0, 'rgba(0,0,0,0)');
      edge.addColorStop(0.22, 'rgba(0,0,0,1)');
      edge.addColorStop(0.78, 'rgba(0,0,0,1)');
      edge.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = edge;
      ctx.fillRect(0, 0, w, h);

      // Tread chevrons along the track.
      ctx.globalCompositeOperation = 'destination-out';
      const rng = new RNG(2231);
      for (let y = 20; y < h; y += rng.float(28, 42)) {
        ctx.fillStyle = `rgba(0,0,0,${rng.float(0.08, 0.22)})`;
        ctx.save();
        ctx.translate(w / 2, y);
        ctx.rotate(rng.float(-0.2, 0.2));
        ctx.fillRect(-w * 0.28, -1, w * 0.56, 2);
        ctx.restore();
      }
    }, {
      colorSpace: THREE.NoColorSpace,
      wrap: THREE.ClampToEdgeWrapping,
      anisotropy: 4,
    });

    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, -1.9),
      new THREE.Vector3(-0.3, 0, -4.8),
      new THREE.Vector3(-1.9, 0, -9.5),
      new THREE.Vector3(-5.3, 0, -17),
      new THREE.Vector3(-10.2, 0, -27),
      new THREE.Vector3(-14.5, 0, -40),
      new THREE.Vector3(-17.0, 0, -56),
    ], false, 'centripetal', 0.35);

    const material = new THREE.MeshStandardMaterial({
      color: 0x43545f,
      roughness: 0.72,
      metalness: 0.02,
      transparent: true,
      opacity: 0.62,
      alphaMap: alpha,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });

    const makeRibbon = (offset) => {
      const segments = 120;
      const positions = [];
      const uvs = [];
      const indices = [];
      const p = new THREE.Vector3();
      const tangent = new THREE.Vector3();
      const normal = new THREE.Vector3();

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        curve.getPointAt(t, p);
        curve.getTangentAt(t, tangent);
        tangent.y = 0;
        tangent.normalize();
        normal.set(-tangent.z, 0, tangent.x);
        const half = 0.145;
        for (let side = 0; side < 2; side++) {
          const sign = side === 0 ? -1 : 1;
          const x = p.x + normal.x * offset + normal.x * half * sign;
          const z = p.z + normal.z * offset + normal.z * half * sign;
          const y = this.heightAt(x, z) + 0.035;
          positions.push(x, y, z);
          uvs.push(side, t);
        }
        if (i < segments) {
          const a = i * 2;
          indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      const mesh = new THREE.Mesh(geometry, material);
      mesh.receiveShadow = true;
      mesh.renderOrder = 1;
      this.group.add(mesh);
    };

    makeRibbon(-0.83);
    makeRibbon(0.83);
    this.trackRibbons = true;
  }

  initFlag() {
    const flagTexture = canvasTexture(256, 144, (ctx, w, h) => {
      ctx.fillStyle = '#cc5f27';
      ctx.fillRect(0, 0, w, h);
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, 'rgba(255,255,255,.16)');
      grad.addColorStop(1, 'rgba(35,20,10,.16)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(10,18,23,.8)';
      ctx.fillRect(0, h * 0.72, w, h * 0.06);
      ctx.font = '700 64px Arial';
      ctx.fillStyle = 'rgba(250,243,235,.94)';
      ctx.fillText('N90', 22, 76);
      ctx.font = '600 18px Arial';
      ctx.letterSpacing = '4px';
      ctx.fillStyle = 'rgba(250,243,235,.72)';
      ctx.fillText('SNOWLINE', 25, 108);
      ctx.strokeStyle = 'rgba(255,255,255,.16)';
      ctx.lineWidth = 2;
      ctx.strokeRect(10, 10, w - 20, h - 20);
    }, { anisotropy: 4 });

    const group = new THREE.Group();
    const x = -5.4;
    const z = -5.4;
    const y = this.heightAt(x, z);

    const poleMaterial = new THREE.MeshStandardMaterial({
      color: 0x2c3338,
      roughness: 0.5,
      metalness: 0.65,
    });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.04, 2.7, 8), poleMaterial);
    pole.position.set(0, 1.35, 0);
    pole.castShadow = true;
    group.add(pole);

    const flagMaterial = new THREE.MeshStandardMaterial({
      map: flagTexture,
      roughness: 0.8,
      metalness: 0.01,
      side: THREE.DoubleSide,
    });
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.26, 0.72, 16, 4), flagMaterial);
    flag.position.set(0.65, 2.22, 0);
    flag.castShadow = true;
    flag.userData.basePositions = flag.geometry.attributes.position.array.slice();
    group.add(flag);

    const top = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 10, 8),
      new THREE.MeshBasicMaterial({ color: 0xff9d58, toneMapped: false })
    );
    top.position.set(0, 2.72, 0);
    group.add(top);

    group.position.set(x, y, z);
    group.rotation.y = -0.25;
    this.group.add(group);
    this.flag = flag;
    this.flagGroup = group;
  }

  initLighting() {
    const hemi = new THREE.HemisphereLight(0xa9c1d2, 0x8a9aa5, 0.98);
    this.group.add(hemi);
    this.hemi = hemi;

    const key = new THREE.DirectionalLight(0xddecfb, 2.18);
    key.position.set(-26, 31, -36);
    key.target.position.set(0, 0.6, 0);
    key.castShadow = true;
    key.shadow.mapSize.set(this.mobile ? 1024 : 2048, this.mobile ? 1024 : 2048);
    key.shadow.camera.left = -12;
    key.shadow.camera.right = 12;
    key.shadow.camera.top = 13;
    key.shadow.camera.bottom = -9;
    key.shadow.camera.near = 6;
    key.shadow.camera.far = 78;
    key.shadow.bias = -0.00035;
    key.shadow.normalBias = 0.04;
    key.shadow.radius = 2.4;
    this.group.add(key, key.target);
    this.keyLight = key;

    // Warm reflected fill from the snow and the unseen western sky.
    const fill = new THREE.DirectionalLight(0xffd1a8, 0.55);
    fill.position.set(20, 9, 18);
    fill.target.position.set(0, 0.8, 0);
    this.group.add(fill, fill.target);
    this.fillLight = fill;

    this.scene.fog = new THREE.FogExp2(0x93a6b4, 0.0082);
  }

  initParticles() {
    this.initSnow();
    this.initRain();
  }

  initSnow() {
    const count = this.mobile ? 2800 : 7600;
    const rng = new RNG(7311);
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const seeds = new Float32Array(count);
    const angle = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = rng.float(-38, 38);
      positions[i * 3 + 1] = rng.float(0, 30);
      positions[i * 3 + 2] = rng.float(-38, 38);
      sizes[i] = rng.float(0.85, 4.1);
      seeds[i] = rng.next();
      angle[i] = rng.float(0, Math.PI * 2);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    geometry.setAttribute('aAngle', new THREE.BufferAttribute(angle, 1));

    const map = makeSnowflakeTexture(96);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: 0.62 },
        uWind: { value: 0.9 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uMap: { value: map },
        uColor: { value: new THREE.Color(0xe1edf8) },
        uFogColor: { value: new THREE.Color(0x93a6b4) },
        uFogDensity: { value: 0.0082 },
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
        varying float vSeed;
        void main() {
          vec3 p = position;
          float speed = mix(0.65, 1.8, aSeed);
          p.y = mod(p.y - uTime * speed * 1.85, 30.0);
          p.x = mod(p.x + uWind * uTime * 1.3 + sin(uTime * 0.7 + aAngle) * 1.1 + 38.0, 76.0) - 38.0;
          p.z = mod(p.z + cos(uTime * 0.41 + aAngle * 1.7) * 0.65 + uWind * uTime * 0.32 + 38.0, 76.0) - 38.0;

          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          float dist = max(4.0, -mvPosition.z);
          gl_PointSize = clamp(aSize * uPixelRatio * (32.0 / dist), 1.0, 18.0 * uPixelRatio);
          float visible = step(aSeed, uIntensity);
          float depthFade = smoothstep(2.0, 8.0, dist) * (1.0 - smoothstep(32.0, 60.0, dist) * 0.55);
          vAlpha = visible * depthFade * mix(0.35, 0.9, aSeed);
          vSeed = aSeed;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform vec3 uColor;
        uniform vec3 uFogColor;
        uniform float uFogDensity;
        varying float vAlpha;
        varying float vSeed;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          float alpha = tex.a * vAlpha;
          if (alpha < 0.012) discard;
          vec3 color = mix(uColor, vec3(0.7, 0.82, 0.94), vSeed * 0.3);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.NormalBlending,
      fog: false,
    });

    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    points.renderOrder = 6;
    points.name = 'Snowfall';
    this.group.add(points);
    this.snow = points;
    this.snowMaterial = material;
  }

  initRain() {
    const count = this.mobile ? 1100 : 2600;
    const rng = new RNG(99831);
    const anchors = new Float32Array(count * 2 * 3);
    const ends = new Float32Array(count * 2);
    const seeds = new Float32Array(count * 2);
    const lengths = new Float32Array(count * 2);

    for (let i = 0; i < count; i++) {
      const x = rng.float(-36, 36);
      const y = rng.float(0, 28);
      const z = rng.float(-36, 36);
      const len = rng.float(0.55, 1.7);
      const seed = rng.next();
      for (let v = 0; v < 2; v++) {
        const idx = i * 2 + v;
        anchors[idx * 3] = x;
        anchors[idx * 3 + 1] = y;
        anchors[idx * 3 + 2] = z;
        ends[idx] = v;
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
        uIntensity: { value: 0 },
        uWind: { value: 1.4 },
        uColor: { value: new THREE.Color(0xb8d4e3) },
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
          float speed = mix(12.0, 19.0, aSeed);
          p.y = mod(p.y - uTime * speed, 28.0);
          p.x = mod(p.x + uWind * uTime * 3.8 + 36.0, 72.0) - 36.0;
          p.z = mod(p.z + uWind * uTime * 0.6 + 36.0, 72.0) - 36.0;

          vec3 streak = normalize(vec3(-0.1 - uWind * 0.055, -1.0, 0.03));
          p += streak * aLength * aEnd;

          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          float visible = step(aSeed, uIntensity);
          float dist = max(3.0, -mvPosition.z);
          vAlpha = visible * (1.0 - aEnd * 0.72) * mix(0.16, 0.46, aSeed) * smoothstep(1.0, 5.0, dist);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          if (vAlpha < 0.01) discard;
          gl_FragColor = vec4(uColor, vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      fog: false,
    });

    const lines = new THREE.LineSegments(geometry, material);
    lines.frustumCulled = false;
    lines.renderOrder = 7;
    lines.name = 'Rain';
    this.group.add(lines);
    this.rain = lines;
    this.rainMaterial = material;
  }

  initSparkles() {
    const count = this.mobile ? 180 : 440;
    const rng = new RNG(6117);
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const a = rng.float(0, Math.PI * 2);
      const r = 2.5 + Math.pow(rng.next(), 0.65) * 24;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      positions[i * 3] = x;
      positions[i * 3 + 1] = this.heightAt(x, z) + rng.float(0.04, 0.28);
      positions[i * 3 + 2] = z;
      sizes[i] = rng.float(0.4, 1.8);
      phases[i] = rng.float(0, Math.PI * 2);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 0.6 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        attribute float aPhase;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vAlpha;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          float twinkle = pow(max(0.0, sin(uTime * 1.3 + aPhase)), 8.0);
          gl_PointSize = aSize * uPixelRatio * (0.7 + twinkle * 1.6);
          vAlpha = twinkle;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float core = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vec3(0.83, 0.93, 1.0) * 1.4, core * vAlpha * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      fog: false,
    });
    this.sparkleMaterial = material;
    const sparks = new THREE.Points(geometry, material);
    sparks.frustumCulled = false;
    sparks.renderOrder = 4;
    sparks.name = 'SnowSparkles';
    this.group.add(sparks);
    this.sparkles = sparks;
  }

  /* ---------------------------- weather ----------------------------- */

  setWeather(id, intensity = this.intensity, immediate = false) {
    const preset = WEATHER_PRESETS[id] || WEATHER_PRESETS.snow;
    this.weatherId = preset.id;
    this.intensity = clamp(intensity, 0, 1);

    for (const key of COLOR_KEYS) {
      if (immediate) this.current[key].setHex(preset[key]);
      this.target[key].setHex(preset[key]);
    }

    const target = {
      fogDensity: preset.fogDensity,
      dirIntensity: preset.dirIntensity,
      hemiIntensity: preset.hemiIntensity,
      fillIntensity: preset.fillIntensity,
      exposure: preset.exposure,
      bloom: preset.bloom,
      stars: preset.stars,
      moon: preset.moon,
      wind: preset.wind,
      snow: clamp(preset.snow * this.intensity, 0, 1.1),
      rain: clamp(preset.rain * this.intensity, 0, 1),
      wetness: preset.wetness,
      envIntensity: preset.envIntensity,
      cloudCover: preset.cloudCover,
      sparkle: preset.sparkle,
    };

    for (const key of Object.keys(target)) this.target[key] = target[key];

    if (immediate) {
      for (const key of Object.keys(target)) this.current[key] = target[key];
      this.applyState(0, true);
    }

    if (id === 'storm' || id === 'rain') {
      this.lightningCooldown = Math.min(this.lightningCooldown, 4 + Math.random() * 7);
    }
    return preset;
  }

  setPixelRatio(ratio) {
    const pr = Math.min(ratio, 2);
    if (this.snowMaterial) this.snowMaterial.uniforms.uPixelRatio.value = pr;
    if (this.rainMaterial) this.rainMaterial.uniforms.uPixelRatio.value = pr;
    if (this.starMaterial) this.starMaterial.uniforms.uPixelRatio.value = pr;
    if (this.sparkleMaterial) this.sparkleMaterial.uniforms.uPixelRatio.value = pr;
  }

  update(dt, elapsed) {
    this.time = elapsed;
    const lambda = 1.65;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const transitionSpeed = reduced ? 8 : 1.6;

    for (const key of COLOR_KEYS) {
      this.current[key].lerp(this.target[key], 1 - Math.exp(-transitionSpeed * dt));
    }
    for (const key of NUMERIC_KEYS) {
      this.current[key] = damp(this.current[key], this.target[key], transitionSpeed, dt);
    }

    this.applyState(dt, false);

    // Wind and particle uniforms.
    this._uniformTime.value = elapsed;
    this.skyUniforms.uTime.value = elapsed;
    if (this.starMaterial) this.starMaterial.uniforms.uTime.value = elapsed;
    if (this.sparkleMaterial) {
      this.sparkleMaterial.uniforms.uTime.value = elapsed;
      this.sparkleMaterial.uniforms.uOpacity.value = this.current.sparkle * smoothstep(0, 0.4, this.current.snow);
    }
    if (this.snowMaterial) {
      this.snowMaterial.uniforms.uTime.value = elapsed;
      this.snowMaterial.uniforms.uIntensity.value = this.current.snow;
      this.snowMaterial.uniforms.uWind.value = this.current.wind;
    }
    if (this.rainMaterial) {
      this.rainMaterial.uniforms.uTime.value = elapsed;
      this.rainMaterial.uniforms.uIntensity.value = this.current.rain;
      this.rainMaterial.uniforms.uWind.value = this.current.wind;
    }

    // Flag motion.
    if (this.flag) {
      const attr = this.flag.geometry.attributes.position;
      const base = this.flag.userData.basePositions;
      const amp = 0.035 + this.current.wind * 0.035;
      for (let i = 0; i < attr.count; i++) {
        const x = base[i * 3];
        const y = base[i * 3 + 1];
        const wave = Math.sin(elapsed * (1.8 + this.current.wind * 0.45) + x * 4.2 + y * 2.1);
        attr.setZ(i, wave * amp * smoothstep(-0.65, 0.65, x));
        attr.setY(i, y + Math.sin(elapsed * 1.2 + x * 3.1) * amp * 0.25);
      }
      attr.needsUpdate = true;
    }

    // Lightning, exclusive to the storm and rain states.
    this.lightningCooldown -= dt;
    if (!reduced && this.lightningCooldown <= 0 && (this.weatherId === 'storm' || this.weatherId === 'rain')) {
      this.lightningCooldown = 7 + Math.random() * 12;
      this.flashEnergy = this.weatherId === 'storm' ? 1 : 0.68;
      if (this.onLightning) this.onLightning(this.flashEnergy);
    }
    if (this.flashEnergy > 0.002) {
      this.flashEnergy *= Math.exp(-7.5 * dt);
    } else {
      this.flashEnergy = 0;
    }
    if (this.skyUniforms) this.skyUniforms.uFlash.value = this.flashEnergy * 0.55;
    if (this.hemi) this.hemi.intensity += this.flashEnergy * 8;
    if (this.keyLight) this.keyLight.intensity += this.flashEnergy * 9;
  }

  applyState(dt, immediate) {
    const s = this.current;
    const sky = this.skyUniforms;
    if (sky) {
      sky.uTopColor.value.copy(s.skyTop);
      sky.uHorizonColor.value.copy(s.skyHorizon);
      sky.uGroundColor.value.copy(s.skyGround);
      sky.uSunColor.value.copy(s.sunColor);
      sky.uCloudColor.value.copy(s.cloudColor);
      sky.uCloudCover.value = s.cloudCover;
      sky.uStars.value = s.stars;
    }
    if (this.moonMaterial) this.moonMaterial.opacity = s.moon * 0.82;
    if (this.starMaterial) this.starMaterial.uniforms.uOpacity.value = s.stars * 0.7;

    if (this.scene.fog) {
      this.scene.fog.color.copy(s.fogColor);
      this.scene.fog.density = s.fogDensity;
    }
    if ('environmentIntensity' in this.scene) this.scene.environmentIntensity = s.envIntensity;

    if (this.keyLight) {
      this.keyLight.color.copy(s.dirColor);
      this.keyLight.intensity = s.dirIntensity;
    }
    if (this.hemi) {
      this.hemi.color.copy(s.hemiSky);
      this.hemi.groundColor.copy(s.hemiGround);
      this.hemi.intensity = s.hemiIntensity;
    }
    if (this.fillLight) {
      this.fillLight.color.copy(s.fillColor);
      this.fillLight.intensity = s.fillIntensity;
    }

    if (this.terrainMaterial) {
      this.terrainMaterial.roughness = lerp(0.91, 0.55, s.wetness);
      this.terrainMaterial.bumpScale = lerp(0.22, 0.1, s.wetness);
      this.terrainMaterial.envMapIntensity = lerp(0.38, 1.1, s.wetness);
    }

    if (this.snowMaterial) {
      this.snowMaterial.uniforms.uFogColor.value.copy(s.fogColor);
      this.snowMaterial.uniforms.uFogDensity.value = s.fogDensity;
    }
    if (this.rainMaterial) this.rainMaterial.uniforms.uColor.value.setHex(0xb8d4e3);
  }

  getSummary() {
    const preset = WEATHER_PRESETS[this.weatherId];
    return {
      preset,
      weatherId: this.weatherId,
      intensity: this.intensity,
      temperature: preset.temp,
      air: preset.air,
      windText: preset.windText,
      windLevel: preset.windLevel,
      signal: preset.signal,
      exposure: this.current.exposure,
      bloom: this.current.bloom,
      snow: this.current.snow,
      rain: this.current.rain,
      wind: this.current.wind,
      wetness: this.current.wetness,
    };
  }
}
