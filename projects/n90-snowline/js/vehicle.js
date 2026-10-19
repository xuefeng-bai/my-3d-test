import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  RNG,
  clamp,
  lerp,
  damp,
  smoothstep,
  canvasTexture,
  makeRadialTexture,
  roundRect,
} from './utils.js';

/* ------------------------------------------------------------------ *
 * Shape helpers
 * ------------------------------------------------------------------ */

const rb = (w, h, d, r = 0.04, seg = 3) => new RoundedBoxGeometry(w, h, d, seg, r);

function mesh(geometry, material, {
  x = 0, y = 0, z = 0,
  rx = 0, ry = 0, rz = 0,
  sx = 1, sy = 1, sz = 1,
  cast = true, receive = true, name = '',
} = {}) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.scale.set(sx, sy, sz);
  m.castShadow = cast;
  m.receiveShadow = receive;
  if (name) m.name = name;
  return m;
}

function superellipsePoint(theta, halfWidth, halfHeight, exp) {
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  return [
    Math.sign(c) * Math.pow(Math.abs(c), exp) * halfWidth,
    Math.sign(s) * Math.pow(Math.abs(s), exp) * halfHeight,
  ];
}

/* ------------------------------------------------------------------ *
 * Procedural cabin textures
 * ------------------------------------------------------------------ */

function makeLeatherTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#bcb5aa';
    ctx.fillRect(0, 0, w, h);
    const rng = new RNG(8234);
    ctx.globalAlpha = 0.22;
    for (let i = 0; i < 15000; i++) {
      const v = Math.floor(rng.float(50, 225));
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(rng.float(0, w), rng.float(0, h), rng.float(0.5, 2.2), rng.float(0.5, 2.2));
    }
    ctx.globalAlpha = 1;
    ctx.strokeStyle = 'rgba(85,75,66,.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 55; i++) {
      const y = rng.float(0, h);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(w * 0.3, y + rng.float(-8, 8), w * 0.6, y + rng.float(-8, 8), w, y + rng.float(-4, 4));
      ctx.stroke();
    }
    // Fine perforation pattern.
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#5f574e';
    for (let y = 14; y < h; y += 18) {
      for (let x = 14; x < w; x += 18) {
        ctx.beginPath();
        ctx.arc(x + (y % 36 === 0 ? 0 : 9), y, 1.05, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }, {
    wrap: THREE.RepeatWrapping,
    repeat: [3, 3],
    anisotropy: 8,
  });
}

function makeWoodTexture() {
  return canvasTexture(1024, 256, (ctx, w, h) => {
    ctx.fillStyle = '#5a4030';
    ctx.fillRect(0, 0, w, h);
    const rng = new RNG(551);
    for (let i = 0; i < 38; i++) {
      const y = rng.float(0, h);
      ctx.strokeStyle = `rgba(${rng.int(36, 95)},${rng.int(26, 61)},${rng.int(17, 46)},${rng.float(0.12, 0.42)})`;
      ctx.lineWidth = rng.float(0.6, 3.2);
      ctx.beginPath();
      ctx.moveTo(-20, y);
      const o = rng.float(-16, 16);
      ctx.bezierCurveTo(w * 0.24, y + o, w * 0.62, y - o * 1.4, w + 20, y + rng.float(-10, 10));
      ctx.stroke();
    }
    const sheen = ctx.createLinearGradient(0, 0, w, h);
    sheen.addColorStop(0, 'rgba(255,215,165,.08)');
    sheen.addColorStop(0.5, 'rgba(255,255,255,.02)');
    sheen.addColorStop(1, 'rgba(40,20,10,.15)');
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, w, h);
  }, {
    wrap: THREE.RepeatWrapping,
    repeat: [2, 1],
    anisotropy: 8,
  });
}

function makeScreenTexture() {
  return canvasTexture(1024, 576, (ctx, w, h) => {
    ctx.fillStyle = '#081219';
    ctx.fillRect(0, 0, w, h);

    const bg = ctx.createRadialGradient(w * 0.72, h * 0.18, 4, w * 0.72, h * 0.18, w * 0.8);
    bg.addColorStop(0, 'rgba(59,106,121,.22)');
    bg.addColorStop(0.55, 'rgba(12,31,42,.1)');
    bg.addColorStop(1, 'rgba(3,8,11,0)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Top status.
    ctx.fillStyle = 'rgba(222,240,247,.62)';
    ctx.font = '400 20px "Microsoft YaHei", sans-serif';
    ctx.fillText('17:42', 44, 52);
    ctx.fillStyle = 'rgba(222,240,247,.32)';
    ctx.fillText('雪线北坡 · 蓝调时刻', 124, 52);
    ctx.textAlign = 'right';
    ctx.fillText('−18°C   ·   4G', w - 40, 52);
    ctx.textAlign = 'left';

    // Header.
    ctx.fillStyle = 'rgba(245,250,252,.92)';
    ctx.font = '300 27px "Microsoft YaHei", sans-serif';
    ctx.fillText('N90 MAX', 44, 108);
    ctx.fillStyle = '#ff9a57';
    ctx.font = '500 15px "Microsoft YaHei", sans-serif';
    ctx.fillText('探索模式', 208, 105);

    // Central map / mountain horizon line.
    ctx.strokeStyle = 'rgba(142,186,204,.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(44, 180 + i * 58);
      ctx.bezierCurveTo(w * 0.28, 130 + i * 52, w * 0.6, 190 + i * 45, w - 44, 145 + i * 60);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(198,227,239,.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(44, 384);
    ctx.lineTo(w * 0.31, 308);
    ctx.lineTo(w * 0.44, 344);
    ctx.lineTo(w * 0.58, 260);
    ctx.lineTo(w * 0.7, 344);
    ctx.lineTo(w * 0.84, 298);
    ctx.lineTo(w - 44, 350);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(142,186,204,.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(44, 384);
    ctx.lineTo(w * 0.31, 308);
    ctx.lineTo(w * 0.44, 344);
    ctx.lineTo(w * 0.58, 260);
    ctx.lineTo(w * 0.7, 344);
    ctx.lineTo(w * 0.84, 298);
    ctx.lineTo(w - 44, 350);
    ctx.stroke();

    // Speed cluster.
    ctx.fillStyle = 'rgba(246,251,253,.96)';
    ctx.font = '200 114px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('0', 44, 510);
    ctx.fillStyle = 'rgba(205,231,241,.42)';
    ctx.font = '400 18px "Microsoft YaHei", sans-serif';
    ctx.fillText('km/h', 148, 506);
    ctx.fillStyle = 'rgba(205,231,241,.44)';
    ctx.fillText('档位 P   ·   剩余 1,162 km', 44, 554);

    // Side cards.
    roundRect(ctx, w - 278, 164, 234, 120, 20);
    ctx.fillStyle = 'rgba(255,255,255,.045)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(203,232,244,.12)';
    ctx.stroke();
    ctx.fillStyle = 'rgba(203,232,244,.4)';
    ctx.font = '400 17px "Microsoft YaHei", sans-serif';
    ctx.fillText('电池电量', w - 252, 202);
    ctx.fillStyle = 'rgba(242,249,252,.9)';
    ctx.font = '300 40px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('78%', w - 252, 253);
    ctx.fillStyle = 'rgba(255,150,88,.8)';
    ctx.fillRect(w - 252, 263, 168, 3);

    roundRect(ctx, w - 278, 302, 234, 174, 20);
    ctx.fillStyle = 'rgba(255,255,255,.035)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(203,232,244,.1)';
    ctx.stroke();
    ctx.fillStyle = 'rgba(203,232,244,.4)';
    ctx.font = '400 17px "Microsoft YaHei", sans-serif';
    ctx.fillText('车外环境', w - 252, 340);
    ctx.fillStyle = 'rgba(240,248,252,.88)';
    ctx.font = '300 27px "Microsoft YaHei", sans-serif';
    ctx.fillText('大雪  /  −18°C', w - 252, 382);
    ctx.fillStyle = 'rgba(203,232,244,.36)';
    ctx.font = '400 16px "Microsoft YaHei", sans-serif';
    ctx.fillText('西北风 4 级   视程 8 km', w - 252, 415);
    ctx.fillText('座舱 22.5°C   空气质量优', w - 252, 444);

    // Bottom dock icons.
    ctx.fillStyle = 'rgba(198,227,239,.25)';
    for (let i = 0; i < 4; i++) {
      ctx.fillRect(w - 44 - i * 52, 522, 28, 3);
    }
    ctx.fillStyle = '#ff9a57';
    ctx.fillRect(44, 522, 42, 3);
  }, { anisotropy: 8 });
}

function makeDriverScreenTexture() {
  return canvasTexture(768, 320, (ctx, w, h) => {
    ctx.fillStyle = '#071117';
    ctx.fillRect(0, 0, w, h);
    const bg = ctx.createRadialGradient(w * 0.5, h * 0.48, 0, w * 0.5, h * 0.48, w * 0.55);
    bg.addColorStop(0, 'rgba(46,97,113,.18)');
    bg.addColorStop(1, 'rgba(4,10,14,0)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(179,216,230,.16)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 1; i++) {
      ctx.beginPath();
      ctx.arc(w / 2, h / 2 + 30, 120, Math.PI * 1.15, Math.PI * 1.85);
      ctx.stroke();
    }

    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(240,248,251,.94)';
    ctx.font = '200 118px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('0', w / 2, 190);
    ctx.fillStyle = 'rgba(195,224,236,.38)';
    ctx.font = '400 20px "Microsoft YaHei", sans-serif';
    ctx.fillText('km/h  ·  驻车', w / 2, 222);
    ctx.fillStyle = '#ff9a57';
    ctx.font = '500 18px "Microsoft YaHei", sans-serif';
    ctx.fillText('观星模式', w / 2, 268);
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(195,224,236,.4)';
    ctx.font = '400 17px "Microsoft YaHei", sans-serif';
    ctx.fillText('P', 38, 52);
    ctx.textAlign = 'right';
    ctx.fillText('78%', w - 38, 52);
  }, { anisotropy: 8 });
}

function makeWordmarkTexture(text, {
  width = 1024, height = 256, color = '#eef5f8', font = '600 150px Arial', letterSpacing = 12, sub = '',
} = {}) {
  return canvasTexture(width, height, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = font;
    if ('letterSpacing' in ctx) ctx.letterSpacing = `${letterSpacing}px`;
    ctx.fillText(text, w / 2, sub ? h * 0.42 : h * 0.52);
    if (sub) {
      ctx.font = '400 38px "Microsoft YaHei", sans-serif';
      ctx.fillStyle = 'rgba(232,243,248,.5)';
      ctx.fillText(sub, w / 2, h * 0.76);
    }
  }, { anisotropy: 8 });
}

function makeLicensePlateTexture() {
  return canvasTexture(512, 128, (ctx, w, h) => {
    ctx.fillStyle = '#14382f';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(210,236,242,.5)';
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.fillStyle = '#e8f3f5';
    ctx.font = '500 55px "Microsoft YaHei", sans-serif';
    ctx.fillText('雪 A · N90M', 42, 84);
    ctx.fillStyle = 'rgba(232,243,245,.42)';
    ctx.font = '400 18px Arial';
    ctx.fillText('SNOWLINE EXPEDITION', 44, 112);
  });
}

/* ------------------------------------------------------------------ *
 * N90Vehicle
 * ------------------------------------------------------------------ */

export class N90Vehicle {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.root.name = 'XiaomiN90Max';
    scene.add(this.root);

    this.time = 0;
    this.roofOpen = false;
    this.roofAmount = 0;
    this.cabinMode = false;
    this.glassTarget = 0.84;
    this.wetness = 0;
    this.rng = new RNG(1946);

    this.canopySections = [
      { z: 1.2, w: 0.745, base: 0.95, top: 0.965 },
      { z: 1.045, w: 0.785, base: 0.95, top: 1.07 },
      { z: 0.86, w: 0.82, base: 0.95, top: 1.265 },
      { z: 0.64, w: 0.846, base: 0.95, top: 1.44 },
      { z: 0.4, w: 0.862, base: 0.95, top: 1.56 },
      { z: 0.12, w: 0.868, base: 0.95, top: 1.615 },
      { z: -0.42, w: 0.862, base: 0.95, top: 1.63 },
      { z: -0.88, w: 0.852, base: 0.95, top: 1.62 },
      { z: -1.22, w: 0.835, base: 0.95, top: 1.585 },
      { z: -1.47, w: 0.816, base: 0.95, top: 1.53 },
      { z: -1.7, w: 0.788, base: 0.95, top: 1.415 },
      { z: -1.9, w: 0.755, base: 0.95, top: 1.24 },
      { z: -2.06, w: 0.72, base: 0.95, top: 1.04 },
      { z: -2.16, w: 0.665, base: 0.95, top: 0.965 },
    ];

    this.initMaterials();
    this.buildBody();
    this.buildGlasshouse();
    this.buildRoof();
    this.buildLights();
    this.buildWheels();
    this.buildDetails();
    this.buildInterior();
    this.buildSnowDusting();
    this.finish();
  }

  /* --------------------------- materials --------------------------- */

  initMaterials() {
    this.leatherTexture = makeLeatherTexture();
    this.woodTexture = makeWoodTexture();

    this.materials = {
      paint: new THREE.MeshPhysicalMaterial({
        color: 0x548090,
        metalness: 0.64,
        roughness: 0.36,
        clearcoat: 0.65,
        clearcoatRoughness: 0.18,
        envMapIntensity: 0.7,
      }),
      paintDark: new THREE.MeshPhysicalMaterial({
        color: 0x4b6571,
        metalness: 0.7,
        roughness: 0.3,
        clearcoat: 0.8,
        clearcoatRoughness: 0.12,
        envMapIntensity: 1.2,
      }),
      blackGloss: new THREE.MeshPhysicalMaterial({
        color: 0x06090c,
        metalness: 0.48,
        roughness: 0.12,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        envMapIntensity: 1.6,
      }),
      cladding: new THREE.MeshStandardMaterial({
        color: 0x111619,
        metalness: 0.16,
        roughness: 0.73,
      }),
      rubber: new THREE.MeshStandardMaterial({
        color: 0x0c0e10,
        metalness: 0.02,
        roughness: 0.94,
      }),
      rubberEdge: new THREE.MeshStandardMaterial({
        color: 0x171b1e,
        metalness: 0.04,
        roughness: 0.84,
      }),
      chrome: new THREE.MeshStandardMaterial({
        color: 0xd3dbde,
        metalness: 1,
        roughness: 0.17,
        envMapIntensity: 1.8,
      }),
      darkMetal: new THREE.MeshStandardMaterial({
        color: 0x242b2f,
        metalness: 0.86,
        roughness: 0.32,
      }),
      rim: new THREE.MeshStandardMaterial({
        color: 0xb8bfc2,
        metalness: 0.96,
        roughness: 0.23,
        envMapIntensity: 1.45,
      }),
      rimDark: new THREE.MeshStandardMaterial({
        color: 0x2c3439,
        metalness: 0.86,
        roughness: 0.3,
      }),
      brakeDisc: new THREE.MeshStandardMaterial({
        color: 0x8c9295,
        metalness: 0.9,
        roughness: 0.42,
      }),
      caliper: new THREE.MeshStandardMaterial({
        color: 0xb85b2d,
        metalness: 0.5,
        roughness: 0.36,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: 0x0a1a24,
        metalness: 0.22,
        roughness: 0.075,
        clearcoat: 1,
        clearcoatRoughness: 0.035,
        transparent: true,
        opacity: 0.84,
        side: THREE.DoubleSide,
        depthWrite: false,
        envMapIntensity: 1.05,
      }),
      lensDark: new THREE.MeshPhysicalMaterial({
        color: 0x05090c,
        metalness: 0.5,
        roughness: 0.08,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
      }),
      headlight: new THREE.MeshStandardMaterial({
        color: 0xc6dce8,
        emissive: 0xb9ddf2,
        emissiveIntensity: 1.35,
        metalness: 0.32,
        roughness: 0.18,
      }),
      drl: new THREE.MeshBasicMaterial({
        color: new THREE.Color(1.9, 2.22, 2.5),
        toneMapped: false,
      }),
      tailLight: new THREE.MeshStandardMaterial({
        color: 0x460c08,
        emissive: 0xff2e16,
        emissiveIntensity: 2.7,
        metalness: 0.2,
        roughness: 0.22,
      }),
      tailStrip: new THREE.MeshBasicMaterial({
        color: new THREE.Color(1.85, 0.14, 0.06),
        toneMapped: false,
      }),
      amberLight: new THREE.MeshBasicMaterial({
        color: new THREE.Color(1.8, 0.7, 0.24),
        toneMapped: false,
      }),
      snow: new THREE.MeshStandardMaterial({
        color: 0xe8f0f4,
        roughness: 0.94,
        metalness: 0.02,
      }),
      leather: new THREE.MeshPhysicalMaterial({
        color: 0xa08d78,
        map: this.leatherTexture,
        bumpMap: this.leatherTexture,
        bumpScale: 0.018,
        roughness: 0.64,
        metalness: 0,
        clearcoat: 0.13,
        clearcoatRoughness: 0.5,
        sheen: 0.6,
        sheenColor: new THREE.Color(0xd7c0a5),
        sheenRoughness: 0.75,
      }),
      leatherDark: new THREE.MeshPhysicalMaterial({
        color: 0x27292b,
        map: this.leatherTexture,
        bumpMap: this.leatherTexture,
        bumpScale: 0.02,
        roughness: 0.6,
        metalness: 0,
        clearcoat: 0.2,
        clearcoatRoughness: 0.46,
        sheen: 0.5,
        sheenColor: new THREE.Color(0x8d857a),
        sheenRoughness: 0.72,
      }),
      seatInsert: new THREE.MeshPhysicalMaterial({
        color: 0xb8a693,
        map: this.leatherTexture,
        bumpMap: this.leatherTexture,
        bumpScale: 0.022,
        roughness: 0.66,
        metalness: 0,
        clearcoat: 0.12,
        clearcoatRoughness: 0.5,
        sheen: 0.7,
        sheenColor: new THREE.Color(0xe3cbb0),
        sheenRoughness: 0.7,
      }),
      cabinDark: new THREE.MeshStandardMaterial({
        color: 0x151719,
        metalness: 0.12,
        roughness: 0.8,
      }),
      cabinBlack: new THREE.MeshStandardMaterial({
        color: 0x090b0c,
        metalness: 0.3,
        roughness: 0.58,
      }),
      wood: new THREE.MeshPhysicalMaterial({
        color: 0xb9a28e,
        map: this.woodTexture,
        roughness: 0.32,
        metalness: 0.04,
        clearcoat: 1,
        clearcoatRoughness: 0.15,
      }),
      metalTrim: new THREE.MeshStandardMaterial({
        color: 0xb1a998,
        metalness: 0.92,
        roughness: 0.28,
      }),
      ambient: new THREE.MeshBasicMaterial({
        color: new THREE.Color(1.52, 0.64, 0.25),
        toneMapped: false,
      }),
      ambientCool: new THREE.MeshBasicMaterial({
        color: new THREE.Color(0.3, 0.82, 1.2),
        toneMapped: false,
      }),
      screen: null,
      driverScreen: null,
    };

    const screenTexture = makeScreenTexture();
    const driverTexture = makeDriverScreenTexture();
    this.materials.screen = new THREE.MeshBasicMaterial({
      map: screenTexture,
      toneMapped: true,
      color: 0xffffff,
    });
    this.materials.driverScreen = new THREE.MeshBasicMaterial({
      map: driverTexture,
      toneMapped: true,
      color: 0xffffff,
    });

    this.headlightSprites = [];
    this.groundPools = [];
    this.screenMaterials = [];
  }

  /* ----------------------------- body ------------------------------ */

  buildBody() {
    this.bodyGroup = new THREE.Group();
    this.bodyGroup.name = 'Body';
    this.root.add(this.bodyGroup);

    const sections = [
      { z: -2.46, w: 0.58, b: 0.62, t: 0.88 },
      { z: -2.39, w: 0.78, b: 0.56, t: 0.94 },
      { z: -2.22, w: 0.9, b: 0.52, t: 0.97 },
      { z: -1.95, w: 0.96, b: 0.5, t: 0.99 },
      { z: -1.62, w: 0.995, b: 0.48, t: 1.0 },
      { z: -1.2, w: 1.0, b: 0.47, t: 1.005 },
      { z: -0.55, w: 0.995, b: 0.465, t: 1.0 },
      { z: 0.15, w: 0.98, b: 0.465, t: 0.995 },
      { z: 0.72, w: 0.99, b: 0.47, t: 0.982 },
      { z: 1.25, w: 1.0, b: 0.475, t: 0.965 },
      { z: 1.72, w: 0.982, b: 0.49, t: 0.932 },
      { z: 2.08, w: 0.93, b: 0.51, t: 0.892 },
      { z: 2.32, w: 0.82, b: 0.56, t: 0.842 },
      { z: 2.45, w: 0.56, b: 0.62, t: 0.755 },
    ];

    const geometry = this.loft(sections, 22, 0.54, true);
    const hull = mesh(geometry, this.materials.paint, { name: 'PaintedHull' });
    hull.castShadow = true;
    hull.receiveShadow = true;
    this.bodyGroup.add(hull);

    // Dark lower body / sills.
    const sillMat = this.materials.cladding;
    for (const side of [-1, 1]) {
      const skirt = mesh(rb(0.08, 0.19, 3.08, 0.03, 2), sillMat, {
        x: side * 0.977, y: 0.5, z: -0.05, cast: true,
      });
      this.bodyGroup.add(skirt);

      const lowerDoor = mesh(rb(0.035, 0.22, 2.44, 0.02, 2), this.materials.blackGloss, {
        x: side * 0.986, y: 0.615, z: -0.24, cast: false,
      });
      this.bodyGroup.add(lowerDoor);
    }

    // Underbody and battery shield.
    this.bodyGroup.add(mesh(rb(1.52, 0.3, 3.72, 0.1, 3), this.materials.cabinBlack, {
      y: 0.38, z: -0.05, cast: true,
    }));
    this.bodyGroup.add(mesh(rb(1.18, 0.04, 2.4, 0.02, 2), this.materials.darkMetal, {
      y: 0.245, z: -0.05, cast: false,
    }));

    this.buildBumpers();
    this.buildWheelArches();
    this.buildSideDetails();
  }

  loft(sections, radialSegments, exp, caps) {
    const positions = [];
    const indices = [];
    const N = radialSegments;

    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      const mid = (s.b + s.t) * 0.5;
      const halfH = (s.t - s.b) * 0.5;
      for (let j = 0; j < N; j++) {
        const theta = (j / N) * Math.PI * 2;
        const [x, y] = superellipsePoint(theta, s.w, halfH, exp);
        positions.push(x, mid + y, s.z);
      }
    }

    for (let i = 0; i < sections.length - 1; i++) {
      for (let j = 0; j < N; j++) {
        const jn = (j + 1) % N;
        const a = i * N + j;
        const b = i * N + jn;
        const c = (i + 1) * N + jn;
        const d = (i + 1) * N + j;
        indices.push(a, b, c, a, c, d);
      }
    }

    if (caps) {
      const rear = sections[0];
      const front = sections[sections.length - 1];
      const rearCenter = positions.length / 3;
      positions.push(0, (rear.b + rear.t) * 0.5, rear.z);
      const frontCenter = positions.length / 3;
      positions.push(0, (front.b + front.t) * 0.5, front.z);

      for (let j = 0; j < N; j++) {
        const jn = (j + 1) % N;
        // Rear cap, facing −Z.
        indices.push(rearCenter, jn, j);
        // Front cap, facing +Z.
        const offset = (sections.length - 1) * N;
        indices.push(frontCenter, offset + j, offset + jn);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    return geometry;
  }

  buildBumpers() {
    const { cladding, blackGloss, chrome, darkMetal, paintDark, amberLight } = this.materials;

    // Front bumper volume.
    const frontBumper = mesh(rb(1.72, 0.3, 0.42, 0.08, 3), cladding, {
      y: 0.55, z: 2.28,
    });
    this.bodyGroup.add(frontBumper);

    const frontLip = mesh(rb(1.48, 0.1, 0.3, 0.04, 2), blackGloss, {
      y: 0.43, z: 2.37,
    });
    this.bodyGroup.add(frontLip);

    const skid = mesh(rb(1.22, 0.07, 0.3, 0.025, 2), chrome, {
      y: 0.455, z: 2.41, cast: false,
    });
    this.bodyGroup.add(skid);
    for (let i = -1; i <= 1; i++) {
      const slot = mesh(new THREE.BoxGeometry(0.16, 0.025, 0.02), darkMetal, {
        x: i * 0.24, y: 0.455, z: 2.568, cast: false,
      });
      this.bodyGroup.add(slot);
    }

    // Lower intake.
    const intake = mesh(rb(1.1, 0.16, 0.05, 0.025, 2), blackGloss, {
      y: 0.59, z: 2.49, cast: false,
    });
    this.bodyGroup.add(intake);
    for (let i = 0; i < 7; i++) {
      const slat = mesh(new THREE.BoxGeometry(0.012, 0.12, 0.025), darkMetal, {
        x: -0.42 + i * 0.14, y: 0.59, z: 2.516, cast: false,
      });
      this.bodyGroup.add(slat);
    }
    const radar = mesh(rb(0.22, 0.11, 0.035, 0.015, 2), blackGloss, {
      y: 0.7, z: 2.5, cast: false,
    });
    this.bodyGroup.add(radar);

    // Air curtains.
    for (const side of [-1, 1]) {
      this.bodyGroup.add(mesh(rb(0.1, 0.13, 0.16, 0.02, 2), darkMetal, {
        x: side * 0.84, y: 0.62, z: 2.29, cast: false,
      }));
    }

    // Front light signature.
    const lightCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.84, 0.932, 2.26),
      new THREE.Vector3(-0.6, 0.951, 2.385),
      new THREE.Vector3(-0.18, 0.972, 2.44),
      new THREE.Vector3(0.18, 0.972, 2.44),
      new THREE.Vector3(0.6, 0.951, 2.385),
      new THREE.Vector3(0.84, 0.932, 2.26),
    ], false, 'centripetal');
    const lightBar = new THREE.Mesh(new THREE.TubeGeometry(lightCurve, 72, 0.0095, 6, false), this.materials.drl);
    lightBar.castShadow = false;
    this.bodyGroup.add(lightBar);

    // A continuous smoked lamp band anchors the front light signature.
    this.bodyGroup.add(mesh(rb(1.56, 0.135, 0.07, 0.055, 3), this.materials.lensDark, {
      y: 0.878, z: 2.418, rx: -0.035,
    }));
    this.bodyGroup.add(mesh(rb(1.58, 0.018, 0.012, 0.006, 1), this.materials.chrome, {
      y: 0.96, z: 2.39, cast: false,
    }));

    for (const side of [-1, 1]) {
      const housing = mesh(rb(0.44, 0.105, 0.06, 0.045, 3), this.materials.blackGloss, {
        x: side * 0.55, y: 0.878, z: 2.448, rx: -0.04,
      });
      this.bodyGroup.add(housing);

      const smokedLens = mesh(rb(0.37, 0.072, 0.018, 0.03, 3), this.materials.lensDark, {
        x: side * 0.55, y: 0.876, z: 2.474, rx: -0.04, cast: false,
      });
      this.bodyGroup.add(smokedLens);

      // Fine projector texture behind the smoked cover.
      for (const dx of [-0.075, 0.075]) {
        const projector = mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.01, 16), this.materials.darkMetal, {
          x: side * 0.55 + dx, y: 0.864, z: 2.482, rx: Math.PI / 2, cast: false,
        });
        this.bodyGroup.add(projector);
      }

      const indicator = mesh(rb(0.075, 0.014, 0.01, 0.004, 1), this.materials.amberLight, {
        x: side * 0.79, y: 0.878, z: 2.405, ry: side * 0.35, cast: false,
      });
      this.bodyGroup.add(indicator);
    }

    // Front badge.
    const logoTexture = makeWordmarkTexture('mi', {
      width: 256, height: 256, color: '#dbe5e9', font: '700 160px Arial', letterSpacing: -5,
    });
    const logo = new THREE.Mesh(
      new THREE.PlaneGeometry(0.15, 0.15),
      new THREE.MeshBasicMaterial({
        map: logoTexture,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        toneMapped: true,
      })
    );
    logo.position.set(0, 0.785, 2.462);
    this.bodyGroup.add(logo);

    // Rear bumper.
    const rearBumper = mesh(rb(1.7, 0.31, 0.38, 0.08, 3), cladding, {
      y: 0.56, z: -2.27,
    });
    this.bodyGroup.add(rearBumper);
    this.bodyGroup.add(mesh(rb(1.3, 0.06, 0.25, 0.02, 2), chrome, {
      y: 0.43, z: -2.38, cast: false,
    }));

    for (let i = 0; i < 4; i++) {
      this.bodyGroup.add(mesh(rb(0.035, 0.14, 0.18, 0.01, 1), blackGloss, {
        x: -0.27 + i * 0.18, y: 0.48, z: -2.43, cast: false,
      }));
    }

    // Rear light bar and punctuation.
    const rearCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.82, 0.885, -2.34),
      new THREE.Vector3(-0.58, 0.905, -2.455),
      new THREE.Vector3(0, 0.915, -2.476),
      new THREE.Vector3(0.58, 0.905, -2.455),
      new THREE.Vector3(0.82, 0.885, -2.34),
    ], false, 'centripetal');
    const rearBar = new THREE.Mesh(new THREE.TubeGeometry(rearCurve, 64, 0.012, 6, false), this.materials.tailStrip);
    rearBar.castShadow = false;
    this.bodyGroup.add(rearBar);
    this.bodyGroup.add(mesh(rb(1.54, 0.065, 0.045, 0.015, 2), this.materials.lensDark, {
      y: 0.883, z: -2.424, cast: false,
    }));

    const rearLogo = makeWordmarkTexture('XIAOMI', {
      width: 1024, height: 240, color: 'rgba(230,240,244,.86)', font: '600 138px Arial', letterSpacing: 26,
    });
    const rearWord = new THREE.Mesh(
      new THREE.PlaneGeometry(0.8, 0.187),
      new THREE.MeshBasicMaterial({
        map: rearLogo, transparent: true, opacity: 0.8, depthWrite: false,
      })
    );
    rearWord.position.set(0, 0.79, -2.478);
    rearWord.rotation.y = Math.PI;
    this.bodyGroup.add(rearWord);

    const plateTex = makeLicensePlateTexture();
    const plate = new THREE.Mesh(
      new THREE.PlaneGeometry(0.42, 0.105),
      new THREE.MeshBasicMaterial({ map: plateTex, toneMapped: true })
    );
    plate.position.set(0, 0.63, -2.468);
    plate.rotation.y = Math.PI;
    this.bodyGroup.add(plate);

    const badgeTexture = makeWordmarkTexture('N90 MAX', {
      width: 768, height: 180, color: 'rgba(229,239,243,.8)', font: '500 92px Arial', letterSpacing: 10,
      sub: 'EXPLORER  EDITION',
    });
    const badge = new THREE.Mesh(
      new THREE.PlaneGeometry(0.56, 0.13),
      new THREE.MeshBasicMaterial({
        map: badgeTexture, transparent: true, opacity: 0.76, depthWrite: false,
      })
    );
    badge.position.set(-0.45, 0.71, -2.476);
    badge.rotation.y = Math.PI;
    this.bodyGroup.add(badge);

    // Rear fog / reflector units.
    for (const side of [-1, 1]) {
      this.bodyGroup.add(mesh(rb(0.13, 0.035, 0.03, 0.012, 2), this.materials.tailLight, {
        x: side * 0.64, y: 0.56, z: -2.452, cast: false,
      }));
    }

    // Third brake light on the tailgate.
    this.bodyGroup.add(mesh(rb(0.38, 0.018, 0.02, 0.008, 1), this.materials.tailLight, {
      y: 1.045, z: -2.265, cast: false,
    }));

    // Tow hook detail.
    const hook = mesh(new THREE.TorusGeometry(0.045, 0.011, 8, 20), amberLight, {
      x: 0.55, y: 0.44, z: 2.47, ry: Math.PI / 2, cast: false,
    });
    this.bodyGroup.add(hook);
  }

  buildWheelArches() {
    for (const side of [-1, 1]) {
      for (const wheelZ of [1.47, -1.47]) {
        // Mud flap.
        this.bodyGroup.add(mesh(rb(0.2, 0.28, 0.035, 0.02, 2), this.materials.cladding, {
          x: side * 0.9, y: 0.265, z: wheelZ - 0.53,
          rx: 0.04, cast: true,
        }));
      }
    }
  }

  buildSideDetails() {
    const { chrome, blackGloss, darkMetal, cladding } = this.materials;
    const sideLabelTexture = makeWordmarkTexture('N90 MAX', {
      width: 640, height: 160, color: 'rgba(238,246,249,.9)', font: '500 80px Arial', letterSpacing: 12,
      sub: 'SNOWLINE EDITION',
    });

    for (const side of [-1, 1]) {
      // Flush handles.
      for (const z of [0.22, -0.98]) {
        const handle = mesh(rb(0.012, 0.035, 0.25, 0.012, 2), chrome, {
          x: side * 1.004, y: 0.905, z, cast: false,
        });
        this.bodyGroup.add(handle);
        const handleLight = mesh(new THREE.BoxGeometry(0.004, 0.008, 0.16), this.materials.ambientCool, {
          x: side * 1.012, y: 0.92, z, cast: false,
        });
        handleLight.material = this.materials.ambientCool;
        this.bodyGroup.add(handleLight);
      }

      // Mirror.
      const mirrorGroup = new THREE.Group();
      const stalk = mesh(new THREE.CylinderGeometry(0.026, 0.036, 0.16, 10), blackGloss, {
        x: side * 0.36, y: 1.015, z: 0.58, rz: Math.PI / 2.25, cast: true,
      });
      mirrorGroup.add(stalk);
      const mirrorCap = mesh(rb(0.24, 0.105, 0.16, 0.05, 3), this.materials.paint, {
        x: side * 0.46, y: 1.065, z: 0.54, cast: true,
      });
      mirrorGroup.add(mirrorCap);
      const mirrorGlass = mesh(rb(0.18, 0.07, 0.006, 0.025, 2), blackGloss, {
        x: side * 0.46, y: 1.065, z: 0.462, cast: false,
      });
      mirrorGroup.add(mirrorGlass);
      const cameraDot = mesh(new THREE.SphereGeometry(0.018, 12, 8), this.materials.ambientCool, {
        x: side * 0.46, y: 1.04, z: 0.45, cast: false,
      });
      mirrorGroup.add(cameraDot);
      this.bodyGroup.add(mirrorGroup);

      // Side camera fender blade.
      this.bodyGroup.add(mesh(rb(0.05, 0.045, 0.18, 0.015, 2), blackGloss, {
        x: side * 1.0, y: 1.0, z: 0.98, cast: false,
      }));

      // Charging flap.
      const chargeFlap = mesh(rb(0.008, 0.115, 0.2, 0.03, 2), darkMetal, {
        x: side * 1.003, y: 0.67, z: -1.92, cast: false,
      });
      this.bodyGroup.add(chargeFlap);
      this.bodyGroup.add(mesh(new THREE.BoxGeometry(0.01, 0.025, 0.095), this.materials.ambientCool, {
        x: side * 1.01, y: 0.67, z: -1.92, cast: false,
      }));

      // Lower cladding line.
      for (let i = 0; i < 4; i++) {
        this.bodyGroup.add(mesh(rb(0.02, 0.022, 0.38, 0.01, 1), cladding, {
          x: side * 1.02, y: 0.505, z: -1.38 + i * 0.92, cast: false,
        }));
      }

      // Side badge.
      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(0.42, 0.105),
        new THREE.MeshBasicMaterial({
          map: sideLabelTexture, transparent: true, opacity: 0.66, depthWrite: false,
        })
      );
      label.position.set(side * 1.003, 0.805, -1.58);
      label.rotation.y = side * Math.PI / 2;
      this.bodyGroup.add(label);

      // Door shut lines, made as fine, shadowless curves.
      const shutMat = new THREE.LineBasicMaterial({
        color: 0x0d1418,
        transparent: true,
        opacity: 0.34,
      });
      for (const z of [0.7, -0.28, -1.65]) {
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(side * 1.001, 0.59, z),
          new THREE.Vector3(side * 1.005, 0.78, z - 0.03),
          new THREE.Vector3(side * 0.995, 0.96, z - 0.06),
        ]);
        const points = curve.getPoints(14);
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        this.bodyGroup.add(new THREE.Line(geo, shutMat));
      }
    }

    // A crowning shoulder line.
    for (const side of [-1, 1]) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.98, 0.85, 2.05),
        new THREE.Vector3(side * 1.0, 0.86, 1.3),
        new THREE.Vector3(side * 1.0, 0.86, 0.1),
        new THREE.Vector3(side * 0.99, 0.86, -1.1),
        new THREE.Vector3(side * 0.94, 0.85, -2.12),
      ]);
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(50)),
        new THREE.LineBasicMaterial({ color: 0xcfdde3, transparent: true, opacity: 0.18 })
      );
      this.bodyGroup.add(line);
    }
  }

  /* --------------------------- glasshouse -------------------------- */

  buildGlasshouse() {
    const N = 18;
    const positions = [];
    const indices = [];
    this.canopySections.forEach((s) => {
      for (let j = 0; j <= N; j++) {
        const theta = (j / N) * Math.PI;
        const x = Math.cos(theta) * s.w;
        const y = s.base + (s.top - s.base) * Math.pow(Math.sin(theta), 0.62);
        positions.push(x, y, s.z);
      }
    });
    for (let i = 0; i < this.canopySections.length - 1; i++) {
      const zMid = (this.canopySections[i].z + this.canopySections[i + 1].z) * 0.5;
      for (let j = 0; j < N; j++) {
        // Leave a genuine opening under the lifting roof panel. The panel is
        // opaque when lowered and reveals the sky when it rises.
        const inOpening = zMid <= 0.24 && zMid >= -1.12 && j >= 5 && j <= 12;
        if (inOpening) continue;
        const a = i * (N + 1) + j;
        const b = a + 1;
        const c = (i + 1) * (N + 1) + j + 1;
        const d = (i + 1) * (N + 1) + j;
        indices.push(a, b, c, a, c, d);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    this.glassMesh = new THREE.Mesh(geometry, this.materials.glass);
    this.glassMesh.renderOrder = 3;
    this.glassMesh.castShadow = false;
    this.glassMesh.receiveShadow = false;
    this.root.add(this.glassMesh);

    this.buildPillars();
  }

  buildPillars() {
    const { blackGloss, chrome } = this.materials;

    const addTube = (points, radius, material, closed = false) => {
      const curve = new THREE.CatmullRomCurve3(points);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, radius, 7, closed), material);
      tube.castShadow = true;
      this.root.add(tube);
      return tube;
    };

    const addBeam = (points, width, depth, material) => {
      for (let i = 0; i < points.length - 1; i++) {
        const a = points[i];
        const b = points[i + 1];
        const direction = b.clone().sub(a);
        const length = direction.length();
        if (length < 0.001) continue;
        const beam = new THREE.Mesh(new THREE.BoxGeometry(width, length, depth), material);
        beam.position.copy(a).add(b).multiplyScalar(0.5);
        beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
        beam.castShadow = true;
        this.root.add(beam);
      }
    };

    for (const side of [-1, 1]) {
      // A-pillar, now a shaped structural beam instead of an exposed tube.
      addBeam([
        new THREE.Vector3(side * 0.72, 0.958, 1.18),
        new THREE.Vector3(side * 0.66, 1.26, 0.9),
        new THREE.Vector3(side * 0.56, 1.5, 0.58),
        new THREE.Vector3(side * 0.52, 1.6, 0.36),
      ], 0.042, 0.078, blackGloss);

      // B-pillar.
      addBeam([
        new THREE.Vector3(side * 0.855, 0.955, -0.38),
        new THREE.Vector3(side * 0.79, 1.27, -0.4),
        new THREE.Vector3(side * 0.72, 1.5, -0.43),
        new THREE.Vector3(side * 0.64, 1.62, -0.44),
      ], 0.058, 0.095, blackGloss);

      // C-pillar.
      addBeam([
        new THREE.Vector3(side * 0.84, 0.955, -1.35),
        new THREE.Vector3(side * 0.78, 1.26, -1.42),
        new THREE.Vector3(side * 0.71, 1.48, -1.5),
      ], 0.068, 0.08, blackGloss);

      // Cant rail / upper window frame.
      addBeam([
        new THREE.Vector3(side * 0.52, 1.6, 0.36),
        new THREE.Vector3(side * 0.64, 1.62, -0.44),
        new THREE.Vector3(side * 0.71, 1.48, -1.5),
      ], 0.038, 0.06, blackGloss);

      // Chrome window belt.
      addTube([
        new THREE.Vector3(side * 0.76, 0.957, 1.15),
        new THREE.Vector3(side * 0.88, 0.956, 0.45),
        new THREE.Vector3(side * 0.88, 0.954, -0.5),
        new THREE.Vector3(side * 0.86, 0.952, -1.4),
        new THREE.Vector3(side * 0.75, 0.95, -2.05),
      ], 0.009, chrome);
    }

    // Flat windshield and rear-window headers.
    this.root.add(mesh(rb(1.28, 0.055, 0.12, 0.02, 2), blackGloss, {
      y: 1.62, z: 0.36, rx: 0.02, cast: true,
    }));
    this.root.add(mesh(rb(1.18, 0.05, 0.1, 0.018, 2), blackGloss, {
      y: 1.5, z: -1.52, rx: -0.04, cast: true,
    }));
    this.root.add(mesh(rb(1.08, 0.008, 0.018, 0.004, 1), chrome, {
      y: 1.649, z: 0.36, cast: false,
    }));

    // Black cowl panel ties the windshield to the bodywork.
    this.root.add(mesh(rb(1.26, 0.032, 0.16, 0.012, 2), blackGloss, {
      y: 0.975, z: 1.13, rx: -0.03, cast: true,
    }));
    this.root.add(mesh(rb(1.18, 0.008, 0.02, 0.004, 1), chrome, {
      y: 0.995, z: 1.07, cast: false,
    }));

    // Fixed frame around the roof aperture. It remains when the lid lifts.
    for (const side of [-1, 1]) {
      const pts = [];
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const z = lerp(0.235, -1.12, t);
        pts.push(new THREE.Vector3(side * 0.525, this.roofTopAt(z) - 0.088, z));
      }
      const frameCurve = new THREE.CatmullRomCurve3(pts);
      const frame = new THREE.Mesh(
        new THREE.TubeGeometry(frameCurve, 30, 0.018, 6, false),
        blackGloss
      );
      frame.castShadow = true;
      this.root.add(frame);
    }
    for (const z of [0.235, -1.12]) {
      this.root.add(mesh(rb(1.08, 0.028, 0.04, 0.012, 2), blackGloss, {
        y: this.roofTopAt(z) - 0.086, z, cast: true,
      }));
    }

    // Rear spoiler.
    const spoiler = mesh(rb(1.28, 0.035, 0.27, 0.015, 2), this.materials.blackGloss, {
      y: 1.175, z: -2.08, rx: -0.12, cast: true,
    });
    this.root.add(spoiler);
    this.root.add(mesh(rb(0.3, 0.012, 0.015, 0.005, 1), this.materials.tailLight, {
      y: 1.195, z: -2.17, cast: false,
    }));

    // Antenna / roof camera sensor.
    this.root.add(mesh(rb(0.18, 0.055, 0.06, 0.015, 2), this.materials.blackGloss, {
      y: 1.67, z: -1.88, cast: false,
    }));
  }

  buildWipers() {
    const mat = this.materials.blackGloss;
    const group = new THREE.Group();
    for (const side of [-1, 1]) {
      const pivot = new THREE.Vector3(side * 0.34, 1.1, 1.08);
      const arm = mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.58, 8), mat, {
        x: side * 0.34 + side * 0.25, y: 1.16, z: 1.045,
        rz: Math.PI / 2, ry: side * 0.1, cast: false,
      });
      group.add(arm);
      const blade = mesh(rb(0.5, 0.014, 0.022, 0.006, 1), this.materials.rubber, {
        x: side * 0.62, y: 1.19, z: 1.02, rz: 0.06, ry: side * 0.08, cast: false,
      });
      group.add(blade);
      // Wiper base.
      group.add(mesh(new THREE.CylinderGeometry(0.028, 0.032, 0.025, 10), mat, {
        x: pivot.x, y: pivot.y, z: pivot.z, rx: Math.PI / 2, cast: false,
      }));
    }
    this.root.add(group);
    this.wipers = group;
  }

  /* ----------------------------- roof ------------------------------ */

  roofTopAt(z) {
    const s = this.canopySections;
    if (z >= s[0].z) return s[0].top;
    if (z <= s[s.length - 1].z) return s[s.length - 1].top;
    for (let i = 0; i < s.length - 1; i++) {
      const a = s[i];
      const b = s[i + 1];
      if (z <= a.z && z >= b.z) {
        const t = (a.z - z) / (a.z - b.z);
        return lerp(a.top, b.top, t);
      }
    }
    return s[0].top;
  }

  buildRoof() {
    this.roofGroup = new THREE.Group();
    this.roofGroup.name = 'LiftRoof';
    this.root.add(this.roofGroup);

    const zStart = 0.34;
    const zEnd = -1.18;
    const zSegments = 26;
    const xSegments = 14;
    const halfWidth = 0.72;
    const positions = [];
    const indices = [];
    const uvs = [];

    for (let iz = 0; iz <= zSegments; iz++) {
      const t = iz / zSegments;
      const z = lerp(zStart, zEnd, t);
      const top = this.roofTopAt(z);
      for (let ix = 0; ix <= xSegments; ix++) {
        const xt = (ix / xSegments) * 2 - 1;
        const archDrop = Math.pow(Math.abs(xt), 2.3) * 0.055;
        const x = xt * halfWidth;
        const y = top + 0.022 - archDrop;
        positions.push(x, y, z);
        uvs.push(ix / xSegments, t);
      }
    }
    for (let iz = 0; iz < zSegments; iz++) {
      for (let ix = 0; ix < xSegments; ix++) {
        const a = iz * (xSegments + 1) + ix;
        const b = a + 1;
        const c = a + xSegments + 2;
        const d = a + xSegments + 1;
        indices.push(a, b, c, a, c, d);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    const roofPanel = new THREE.Mesh(geometry, this.materials.paint);
    roofPanel.castShadow = true;
    roofPanel.receiveShadow = true;
    this.roofGroup.add(roofPanel);
    this.roofPanel = roofPanel;

    // Build a real roof volume: a dark headliner below the painted skin.
    {
      const undersideGeo = geometry.clone();
      undersideGeo.translate(0, -0.052, 0);
      const underside = new THREE.Mesh(
        undersideGeo,
        new THREE.MeshStandardMaterial({
          color: 0x14191c,
          roughness: 0.86,
          metalness: 0.04,
          side: THREE.DoubleSide,
        })
      );
      underside.castShadow = false;
      underside.receiveShadow = true;
      this.roofGroup.add(underside);
      this.roofUnderside = underside;
    }

    // A recessed panoramic black panel within the painted lift roof.
    {
      const insetXSegments = 10;
      const insetZSegments = 20;
      const insetHalf = 0.545;
      const insetPositions = [];
      const insetIndices = [];
      const insetUvs = [];
      for (let iz = 0; iz <= insetZSegments; iz++) {
        const t = iz / insetZSegments;
        const z = lerp(0.21, -1.04, t);
        const top = this.roofTopAt(z);
        for (let ix = 0; ix <= insetXSegments; ix++) {
          const xt = (ix / insetXSegments) * 2 - 1;
          const x = xt * insetHalf;
          const archDrop = Math.pow(Math.abs(xt), 2.3) * 0.04;
          insetPositions.push(x, top + 0.032 - archDrop, z);
          insetUvs.push(ix / insetXSegments, t);
        }
      }
      for (let iz = 0; iz < insetZSegments; iz++) {
        for (let ix = 0; ix < insetXSegments; ix++) {
          const a = iz * (insetXSegments + 1) + ix;
          const b = a + 1;
          const c = a + insetXSegments + 2;
          const d = a + insetXSegments + 1;
          insetIndices.push(a, b, c, a, c, d);
        }
      }
      const insetGeo = new THREE.BufferGeometry();
      insetGeo.setAttribute('position', new THREE.Float32BufferAttribute(insetPositions, 3));
      insetGeo.setAttribute('uv', new THREE.Float32BufferAttribute(insetUvs, 2));
      insetGeo.setIndex(insetIndices);
      insetGeo.computeVertexNormals();
      const inset = new THREE.Mesh(insetGeo, this.materials.lensDark);
      inset.castShadow = false;
      inset.receiveShadow = true;
      inset.renderOrder = 1;
      this.roofGroup.add(inset);
      this.roofInset = inset;
    }

    // Edges give the lift roof a machined, thick perimeter.
    const edgeMat = this.materials.chrome;
    for (const side of [-1, 1]) {
      const points = [];
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const z = lerp(zStart, zEnd, t);
        const top = this.roofTopAt(z);
        points.push(new THREE.Vector3(side * halfWidth, top + 0.014, z));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const edge = new THREE.Mesh(new THREE.TubeGeometry(curve, 30, 0.008, 6, false), edgeMat);
      this.roofGroup.add(edge);
      points.forEach((point, index) => {
        point.y -= 0.035;
        if (index === 0 || index === points.length - 1) point.z += index === 0 ? 0.01 : -0.01;
      });
      const lowerCurve = new THREE.CatmullRomCurve3(points);
      const lowerEdge = new THREE.Mesh(new THREE.TubeGeometry(lowerCurve, 30, 0.022, 6, false), this.materials.blackGloss);
      this.roofGroup.add(lowerEdge);
    }
    this.roofGroup.add(mesh(rb(1.38, 0.04, 0.05, 0.015, 2), this.materials.blackGloss, {
      y: this.roofTopAt(zStart) - 0.01, z: zStart - 0.015, cast: true,
    }));
    this.roofGroup.add(mesh(rb(1.34, 0.04, 0.05, 0.015, 2), this.materials.blackGloss, {
      y: this.roofTopAt(zEnd) - 0.02, z: zEnd + 0.015, cast: true,
    }));

    // Low-profile roof rails and crossbars, part of the lift assembly.
    for (const side of [-1, 1]) {
      const rail = mesh(rb(0.05, 0.045, 1.48, 0.018, 2), this.materials.darkMetal, {
        x: side * 0.6, y: 1.66, z: -0.42, cast: true,
      });
      this.roofGroup.add(rail);
      for (const z of [0.22, -0.42, -1.04]) {
        const foot = mesh(rb(0.062, 0.085, 0.14, 0.015, 2), this.materials.blackGloss, {
          x: side * 0.6, y: 1.625, z, cast: false,
        });
        this.roofGroup.add(foot);
      }
    }
    for (const z of [-0.02, -0.84]) {
      this.roofGroup.add(mesh(rb(1.26, 0.026, 0.036, 0.012, 2), this.materials.darkMetal, {
        y: 1.674, z, cast: true,
      }));
    }

    // LiDAR pod and sensor ring.
    const lidar = new THREE.Group();
    lidar.position.set(0, 0, 0.26);
    lidar.add(mesh(rb(0.36, 0.06, 0.24, 0.02, 2), this.materials.blackGloss, {
      y: 1.627,
    }));
    lidar.add(mesh(new THREE.CylinderGeometry(0.082, 0.095, 0.06, 18), this.materials.darkMetal, {
      y: 1.677,
    }));
    lidar.add(mesh(new THREE.SphereGeometry(0.085, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2), this.materials.lensDark, {
      y: 1.692,
    }));
    lidar.add(mesh(new THREE.TorusGeometry(0.077, 0.006, 6, 30), this.materials.ambientCool, {
      y: 1.712, rx: Math.PI / 2, cast: false,
    }));
    this.roofGroup.add(lidar);

    // Underside ambient light and mechanism.
    this.roofAmbient = mesh(new THREE.BoxGeometry(0.72, 0.008, 0.026), this.materials.ambient, {
      y: 1.575, z: -0.34, cast: false,
    });
    this.roofGroup.add(this.roofAmbient);

    // Four hydraulic arms, anchored to the canopy frame.
    this.struts = new THREE.Group();
    this.root.add(this.struts);
    for (const side of [-1, 1]) {
      for (const z of [0.21, -1.02]) {
        const arm = mesh(new THREE.CylinderGeometry(0.013, 0.018, 0.46, 8), this.materials.chrome, {
          x: side * 0.65, y: 1.565, z, cast: false,
        });
        arm.scale.y = 0.001;
        this.struts.add(arm);
        const collar = mesh(new THREE.CylinderGeometry(0.027, 0.03, 0.04, 10), this.materials.darkMetal, {
          x: side * 0.65, y: 1.545, z, cast: false,
        });
        collar.visible = false;
        this.struts.add(collar);
        arm.userData.collar = collar;
        arm.userData.baseY = 1.545;
        arm.userData.side = side;
        arm.userData.z = z;
      }
    }
    this.struts.visible = false;

    this.roofSnow = new THREE.Group();
    const snowMat = this.materials.snow;
    const snowLumps = [
      [-0.46, 1.622, 0.12, 0.3, 0.014, 0.24],
      [0.14, 1.64, -0.1, 0.46, 0.016, 0.3],
      [0.44, 1.58, -0.58, 0.27, 0.014, 0.33],
      [-0.16, 1.605, -0.95, 0.4, 0.015, 0.23],
      [-0.53, 1.585, -0.84, 0.2, 0.012, 0.16],
    ];
    const snowGeo = new THREE.IcosahedronGeometry(1, 2);
    for (const [x, y, z, sx, sy, sz] of snowLumps) {
      this.roofSnow.add(mesh(snowGeo, snowMat, {
        x, y, z, sx, sy, sz, cast: false,
      }));
    }
    this.roofGroup.add(this.roofSnow);

    // Small snow strip along the roof rail feet.
    this.roofGroup.add(mesh(rb(1.2, 0.02, 0.07, 0.01, 2), snowMat, {
      y: 1.646, z: 0.3, cast: false,
    }));

    this.roofBaseY = this.roofGroup.position.y;
    this.roofOpen = false;
    this.roofAmount = 0;
  }

  /* ---------------------------- lighting --------------------------- */

  buildLights() {
    const poolTexture = makeRadialTexture(256, [
      [0, 'rgba(196,230,248,.54)'],
      [0.3, 'rgba(138,195,226,.18)'],
      [1, 'rgba(80,150,190,0)'],
    ]);

    for (const side of [-1, 1]) {
      const spot = new THREE.SpotLight(0xd9efff, 18, 26, 0.32, 0.84, 1.7);
      spot.position.set(side * 0.58, 0.9, 2.42);
      const target = new THREE.Object3D();
      target.position.set(side * 0.64, 0.04, 9.5);
      this.root.add(spot, target);
      spot.target = target;
      spot.castShadow = false;

      const pool = new THREE.Mesh(
        new THREE.PlaneGeometry(2.4, 5.6),
        new THREE.MeshBasicMaterial({
          map: poolTexture,
          transparent: true,
          opacity: 0.05,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          side: THREE.DoubleSide,
          fog: true,
          toneMapped: true,
        })
      );
      pool.position.set(side * 0.62, 0.035, 3.85);
      pool.rotation.x = -Math.PI / 2;
      pool.renderOrder = 2;
      this.root.add(pool);
      this.groundPools.push(pool);
    }

    // Tail light glow.
    const tailGlow = makeRadialTexture(256, [
      [0, 'rgba(255,99,53,.8)'],
      [0.25, 'rgba(255,42,16,.24)'],
      [1, 'rgba(255,30,10,0)'],
    ]);
    const tailMat = new THREE.SpriteMaterial({
      map: tailGlow,
      color: 0xff4a26,
      transparent: true,
      opacity: 0.62,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    const tailSprite = new THREE.Sprite(tailMat);
    tailSprite.position.set(0, 0.91, -2.49);
    tailSprite.scale.set(1.9, 0.5, 1);
    this.root.add(tailSprite);
    this.tailGlow = tailSprite;

    // Warm cabin fill.
    this.cabinLight = new THREE.PointLight(0xffb16f, 3.4, 4.6, 2);
    this.cabinLight.position.set(0, 1.35, 0.08);
    this.root.add(this.cabinLight);

    this.cabinFill = new THREE.PointLight(0xbcdde9, 1.2, 3.2, 2);
    this.cabinFill.position.set(0, 1.35, 0.8);
    this.root.add(this.cabinFill);

    this.roofLamp = new THREE.PointLight(0xffc28d, 0.7, 3.2, 2);
    this.roofLamp.position.set(0, 1.62, -0.3);
    this.root.add(this.roofLamp);
  }

  /* ----------------------------- wheels ---------------------------- */

  buildWheels() {
    this.wheels = [];
    this.wheelPivots = [];

    const tireProfile = [
      [0.305, -0.145],
      [0.36, -0.152],
      [0.43, -0.14],
      [0.465, -0.104],
      [0.485, -0.05],
      [0.49, 0],
      [0.485, 0.05],
      [0.465, 0.104],
      [0.43, 0.14],
      [0.36, 0.152],
      [0.305, 0.145],
    ];
    const tirePoints = tireProfile.map(([r, y]) => new THREE.Vector2(r, y));
    const tireGeometry = new THREE.LatheGeometry(tirePoints, 56);
    tireGeometry.rotateZ(Math.PI / 2);

    const lugGeometry = new THREE.BoxGeometry(0.29, 0.055, 0.1);
    const spokeGeometry = new THREE.BoxGeometry(0.055, 0.255, 0.052);
    const spokeGeometryShort = new THREE.BoxGeometry(0.045, 0.21, 0.04);
    const capTexture = makeWordmarkTexture('mi', {
      width: 256, height: 256, color: '#cfd8db', font: '700 158px Arial', letterSpacing: -4,
    });

    for (const side of [-1, 1]) {
      for (const wheelZ of [1.47, -1.47]) {
        const pivot = new THREE.Group();
        pivot.position.set(side * 0.89, 0.485, wheelZ);
        this.root.add(pivot);
        this.wheelPivots.push(pivot);

        const wheel = new THREE.Group();
        pivot.add(wheel);
        if (side === -1) wheel.rotation.y = Math.PI;

        const tire = new THREE.Mesh(tireGeometry, this.materials.rubber);
        tire.castShadow = true;
        tire.receiveShadow = true;
        wheel.add(tire);

        // Sidewall shoulders.
        for (const x of [-0.148, 0.148]) {
          const shoulder = new THREE.Mesh(
            new THREE.TorusGeometry(0.39, 0.027, 10, 48),
            this.materials.rubberEdge
          );
          shoulder.rotation.y = Math.PI / 2;
          shoulder.position.x = x;
          shoulder.castShadow = true;
          wheel.add(shoulder);
        }

        // Tread lugs.
        const lugCount = 30;
        const lugs = new THREE.InstancedMesh(lugGeometry, this.materials.rubberEdge, lugCount);
        const dummy = new THREE.Object3D();
        for (let i = 0; i < lugCount; i++) {
          const a = (i / lugCount) * Math.PI * 2;
          dummy.position.set(0, Math.cos(a) * 0.465, Math.sin(a) * 0.465);
          dummy.rotation.set(a, 0, 0);
          dummy.updateMatrix();
          lugs.setMatrixAt(i, dummy.matrix);
        }
        lugs.castShadow = true;
        lugs.receiveShadow = true;
        wheel.add(lugs);

        // Rim lip and barrel.
        const rimLip = new THREE.Mesh(
          new THREE.TorusGeometry(0.303, 0.02, 8, 48),
          this.materials.rim
        );
        rimLip.rotation.y = Math.PI / 2;
        rimLip.position.x = 0.128;
        rimLip.castShadow = true;
        wheel.add(rimLip);
        wheel.add(mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.24, 40, 1, true), this.materials.rimDark, {
          rx: 0, ry: 0, rz: Math.PI / 2, cast: true,
        }));

        // Brake disc and caliper.
        wheel.add(mesh(new THREE.CylinderGeometry(0.235, 0.235, 0.026, 32), this.materials.brakeDisc, {
          rz: Math.PI / 2, cast: false,
        }));
        const caliper = mesh(rb(0.055, 0.12, 0.06, 0.018, 2), this.materials.caliper, {
          x: 0.1, y: 0.02, z: -0.215, rx: 0.72, cast: false,
        });
        wheel.add(caliper);

        // Five twin spokes.
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2 + 0.18;
          for (const offset of [-0.055, 0.055]) {
            const angle = a + offset;
            const spoke = new THREE.Mesh(
              i % 2 === 0 ? spokeGeometry : spokeGeometryShort,
              this.materials.rim
            );
            spoke.position.set(0.125, Math.cos(angle) * 0.15, Math.sin(angle) * 0.15);
            spoke.rotation.set(angle, 0, 0);
            spoke.castShadow = true;
            wheel.add(spoke);
          }
        }

        // Center cap.
        const cap = new THREE.Mesh(
          new THREE.CylinderGeometry(0.065, 0.07, 0.02, 24),
          this.materials.blackGloss
        );
        cap.rotation.z = Math.PI / 2;
        cap.position.x = 0.14;
        wheel.add(cap);
        const capLogo = new THREE.Mesh(
          new THREE.PlaneGeometry(0.075, 0.075),
          new THREE.MeshBasicMaterial({
            map: capTexture, transparent: true, opacity: 0.8, depthWrite: false,
          })
        );
        capLogo.position.set(0.151, 0, 0);
        capLogo.rotation.y = Math.PI / 2;
        wheel.add(capLogo);

        // Dark wheel-well disc.
        const well = new THREE.Mesh(
          new THREE.CircleGeometry(0.53, 32),
          new THREE.MeshBasicMaterial({ color: 0x05080a, side: THREE.DoubleSide })
        );
        well.position.set(side * 0.87, 0.485, wheelZ);
        well.rotation.y = Math.PI / 2;
        well.castShadow = false;
        this.root.add(well);

        if (wheelZ > 0) pivot.rotation.y = side * 0.055;

        this.wheels.push(wheel);
      }
    }
  }

  /* ----------------------------- details --------------------------- */

  buildDetails() {
    const { chrome, darkMetal, blackGloss, cladding } = this.materials;

    // Hood creases and snow catch lines.
    for (const side of [-1, 1]) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.38, 0.922, 1.14),
        new THREE.Vector3(side * 0.32, 0.918, 1.55),
        new THREE.Vector3(side * 0.22, 0.86, 2.22),
      ]);
      this.bodyGroup.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(26)),
        new THREE.LineBasicMaterial({ color: 0xdce9ef, transparent: true, opacity: 0.12 })
      ));
    }

    // Rear roof spoiler side blades.
    for (const side of [-1, 1]) {
      this.bodyGroup.add(mesh(rb(0.06, 0.13, 0.26, 0.02, 2), blackGloss, {
        x: side * 0.75, y: 1.12, z: -2.07, cast: true,
      }));
    }

    // Sensor pods at the front corners.
    for (const side of [-1, 1]) {
      this.bodyGroup.add(mesh(new THREE.SphereGeometry(0.022, 12, 8), this.materials.ambientCool, {
        x: side * 0.8, y: 0.79, z: 2.37, cast: false,
      }));
    }

    // Rear wiper.
    this.root.add(mesh(rb(0.48, 0.012, 0.018, 0.005, 1), this.materials.rubber, {
      x: 0.12, y: 1.15, z: -2.12, rz: 0.14, cast: false,
    }));

    // A tiny orange expedition marker on the rear pillar.
    this.bodyGroup.add(mesh(rb(0.19, 0.018, 0.01, 0.005, 1), this.materials.amberLight, {
      x: -0.73, y: 1.25, z: -1.55, ry: 0.34, cast: false,
    }));

    // Snow along rear tailgate crevice.
    this.bodyGroup.add(mesh(rb(1.16, 0.018, 0.06, 0.008, 1), this.materials.snow, {
      y: 1.18, z: -2.0, cast: false,
    }));
  }

  /* ---------------------------- interior --------------------------- */

  buildInterior() {
    this.interior = new THREE.Group();
    this.interior.name = 'Interior';
    this.root.add(this.interior);

    const M = this.materials;
    const leather = M.leather;
    const leatherDark = M.leatherDark;
    const seatInsert = M.seatInsert;
    const cabinDark = M.cabinDark;
    const cabinBlack = M.cabinBlack;
    const blackGloss = M.blackGloss;
    const darkMetal = M.darkMetal;
    const wood = M.wood;
    const metal = M.metalTrim;

    // Cabin floor and rear bulkhead.
    this.interior.add(mesh(rb(1.63, 0.07, 3.3, 0.08, 2), cabinBlack, {
      y: 0.56, z: -0.4, cast: false, receive: true,
    }));
    this.interior.add(mesh(rb(1.52, 0.46, 0.06, 0.03, 2), cabinDark, {
      y: 0.82, z: -2.03, cast: false,
    }));
    this.interior.add(mesh(rb(1.56, 0.09, 0.08, 0.03, 2), cabinDark, {
      y: 1.01, z: 1.08, cast: false,
    }));

    // Dashboard.
    const dash = mesh(rb(1.64, 0.14, 0.58, 0.07, 3), cabinDark, {
      y: 0.98, z: 0.82, cast: false, receive: true,
    });
    this.interior.add(dash);
    const dashTop = mesh(rb(1.58, 0.07, 0.44, 0.05, 3), cabinBlack, {
      y: 1.045, z: 0.67, rx: -0.08, cast: false,
    });
    this.interior.add(dashTop);
    this.interior.add(mesh(rb(1.5, 0.025, 0.03, 0.01, 1), wood, {
      y: 0.99, z: 0.55, cast: false,
    }));
    this.interior.add(mesh(rb(1.46, 0.012, 0.018, 0.006, 1), M.ambient, {
      y: 0.935, z: 0.56, cast: false,
    }));

    // Vents.
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        this.interior.add(mesh(rb(0.23, 0.009, 0.015, 0.004, 1), metal, {
          x: side * 0.53, y: 0.985 + i * 0.013, z: 0.54, cast: false,
        }));
      }
      this.interior.add(mesh(rb(0.26, 0.09, 0.02, 0.01, 2), cabinBlack, {
        x: side * 0.53, y: 1.02, z: 0.55, cast: false,
      }));
    }

    // Center display.
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0.01, 1.22, 0.64);
    screenGroup.rotation.set(-0.14, Math.PI - 0.16, 0);
    screenGroup.add(mesh(rb(0.6, 0.36, 0.018, 0.025, 2), cabinBlack, {
      cast: false,
    }));
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.56, 0.315), M.screen);
    screen.position.z = 0.011;
    screenGroup.add(screen);
    this.interior.add(screenGroup);
    this.centerScreen = screenGroup;

    // Driver instrument cluster.
    const driverGroup = new THREE.Group();
    driverGroup.position.set(0.43, 1.19, 0.72);
    driverGroup.rotation.set(-0.12, Math.PI - 0.05, 0);
    driverGroup.add(mesh(rb(0.37, 0.17, 0.015, 0.04, 2), cabinBlack, { cast: false }));
    const driverScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.335, 0.135), M.driverScreen);
    driverScreen.position.z = 0.01;
    driverGroup.add(driverScreen);
    this.interior.add(driverGroup);

    // Steering wheel.
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(0.43, 1.13, 0.47);
    wheelGroup.rotation.x = -0.29;
    const rim = mesh(new THREE.TorusGeometry(0.162, 0.022, 12, 56), leatherDark, {
      cast: false,
    });
    wheelGroup.add(rim);
    wheelGroup.add(mesh(rb(0.135, 0.08, 0.06, 0.025, 2), cabinBlack, {
      y: 0.01, cast: false,
    }));
    for (const angle of [0.42, Math.PI - 0.42]) {
      const spoke = mesh(new THREE.BoxGeometry(0.14, 0.035, 0.032), metal, {
        x: Math.cos(angle) * 0.09, y: Math.sin(angle) * 0.09, rz: angle, cast: false,
      });
      wheelGroup.add(spoke);
    }
    wheelGroup.add(mesh(new THREE.BoxGeometry(0.045, 0.085, 0.03), cabinBlack, {
      y: -0.12, cast: false,
    }));
    const wheelLogo = new THREE.Mesh(
      new THREE.PlaneGeometry(0.055, 0.055),
      new THREE.MeshBasicMaterial({
        map: makeWordmarkTexture('mi', { width: 256, height: 256, color: '#c4ced2', font: '700 168px Arial' }),
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
      })
    );
    wheelLogo.position.set(0, 0.012, 0.033);
    wheelLogo.rotation.y = Math.PI;
    wheelGroup.add(wheelLogo);
    this.interior.add(wheelGroup);
    this.steeringWheel = wheelGroup;
    const column = mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.3, 12), cabinDark, {
      x: 0.43, y: 1.04, z: 0.65, rx: Math.PI / 2.25, cast: false,
    });
    this.interior.add(column);

    // Seats.
    this.createSeat(0.43, -0.11, true);
    this.createSeat(-0.43, -0.11, false);
    this.createRearBench();

    // Center console and armrest.
    this.interior.add(mesh(rb(0.37, 0.34, 1.14, 0.09, 3), cabinDark, {
      y: 0.76, z: -0.2, cast: false,
    }));
    this.interior.add(mesh(rb(0.36, 0.07, 1.2, 0.06, 3), leather, {
      y: 0.94, z: -0.21, cast: false,
    }));
    this.interior.add(mesh(new THREE.BoxGeometry(0.28, 0.04, 0.13), wood, {
      y: 0.98, z: -0.33, cast: false,
    }));
    const startButton = mesh(new THREE.CylinderGeometry(0.027, 0.027, 0.012, 16), M.ambient, {
      x: 0.1, y: 0.987, z: 0.13, cast: false,
    });
    this.interior.add(startButton);
    this.interior.add(mesh(new THREE.CylinderGeometry(0.048, 0.048, 0.008, 20), blackGloss, {
      x: -0.11, y: 0.971, z: 0.08, cast: false,
    }));
    this.interior.add(mesh(new THREE.CylinderGeometry(0.044, 0.044, 0.01, 20), blackGloss, {
      x: 0.08, y: 0.971, z: 0.08, cast: false,
    }));
    this.interior.add(mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.02, 18), metal, {
      x: 0, y: 0.953, z: -0.36, cast: false,
    }));

    // Cupholders.
    for (const x of [-0.1, 0.1]) {
      this.interior.add(mesh(new THREE.CylinderGeometry(0.043, 0.04, 0.015, 18), blackGloss, {
        x, y: 0.985, z: 0.06, cast: false,
      }));
    }

    // Door panels.
    for (const side of [-1, 1]) {
      this.buildDoorPanel(side);
    }

    // Pedals.
    this.interior.add(mesh(rb(0.09, 0.02, 0.12, 0.01, 1), metal, {
      x: 0.3, y: 0.61, z: 0.62, rx: -0.32, cast: false,
    }));
    this.interior.add(mesh(rb(0.075, 0.02, 0.09, 0.01, 1), darkMetal, {
      x: 0.43, y: 0.62, z: 0.63, rx: -0.32, cast: false,
    }));

    // Rear-view mirror and roof console.
    this.interior.add(mesh(rb(0.18, 0.052, 0.032, 0.014, 2), cabinBlack, {
      y: 1.53, z: 0.43, rx: 0.1, cast: false,
    }));
    this.interior.add(mesh(rb(0.16, 0.038, 0.004, 0.008, 1), this.materials.lensDark, {
      y: 1.53, z: 0.41, rx: 0.1, cast: false,
    }));
    this.interior.add(mesh(new THREE.CylinderGeometry(0.012, 0.016, 0.06, 8), cabinBlack, {
      y: 1.56, z: 0.43, cast: false,
    }));
    this.interior.add(mesh(rb(0.26, 0.05, 0.1, 0.018, 2), cabinDark, {
      y: 1.58, z: 0.32, cast: false,
    }));
    this.interior.add(mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.012, 12), M.ambient, {
      x: -0.08, y: 1.555, z: 0.32, cast: false,
    }));
    this.interior.add(mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.012, 12), M.ambientCool, {
      x: 0.08, y: 1.555, z: 0.32, cast: false,
    }));

    // Center vents below the display.
    this.interior.add(mesh(rb(0.48, 0.065, 0.025, 0.012, 2), cabinBlack, {
      y: 0.99, z: 0.59, cast: false,
    }));
    for (let i = 0; i < 5; i++) {
      this.interior.add(mesh(rb(0.4, 0.006, 0.012, 0.003, 1), metal, {
        y: 0.976 + i * 0.01, z: 0.6, cast: false,
      }));
    }

    // A-pillar interior trims.
    for (const side of [-1, 1]) {
      this.interior.add(mesh(rb(0.07, 0.64, 0.08, 0.025, 2), cabinDark, {
        x: side * 0.67, y: 1.32, z: 0.95, rx: -0.6, cast: false,
      }));
      this.interior.add(mesh(rb(0.06, 0.06, 1.24, 0.02, 2), cabinBlack, {
        x: side * 0.8, y: 1.56, z: -0.52, cast: false,
      }));
    }

    // Sun visors.
    for (const side of [-1, 1]) {
      this.interior.add(mesh(rb(0.31, 0.014, 0.145, 0.01, 2), cabinDark, {
        x: side * 0.33, y: 1.575, z: 0.52, rx: 0.06, cast: false,
      }));
    }

    // Seat belts.
    for (const side of [-1, 1]) {
      const belt = mesh(new THREE.BoxGeometry(0.055, 0.62, 0.008), cabinDark, {
        x: side * 0.68, y: 1.18, z: -0.44, rx: 0.04, rz: side * 0.28, cast: false,
      });
      belt.material = M.cabinDark;
      this.interior.add(belt);
      this.interior.add(mesh(new THREE.BoxGeometry(0.06, 0.035, 0.025), metal, {
        x: side * 0.5, y: 0.96, z: -0.34, cast: false,
      }));
    }

    // Ambient light behind the front seats.
    this.interior.add(mesh(new THREE.BoxGeometry(1.2, 0.01, 0.015), M.ambient, {
      y: 1.01, z: -1.83, cast: false,
    }));
  }

  createSeat(x, z, isDriver) {
    const M = this.materials;
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const base = mesh(rb(0.51, 0.15, 0.56, 0.055, 3), M.leatherDark, {
      y: 0.69, z: 0, cast: false, receive: true,
    });
    group.add(base);
    const cushion = mesh(rb(0.4, 0.075, 0.48, 0.045, 3), M.seatInsert, {
      y: 0.765, z: 0.02, cast: false,
    });
    group.add(cushion);
    for (const side of [-1, 1]) {
      const bolster = mesh(rb(0.09, 0.12, 0.5, 0.035, 3), M.leatherDark, {
        x: side * 0.22, y: 0.755, z: 0, cast: false,
      });
      group.add(bolster);
    }

    const backGroup = new THREE.Group();
    backGroup.position.set(0, 0.96, -0.25);
    backGroup.rotation.x = -0.17;
    const shell = mesh(rb(0.52, 0.66, 0.14, 0.055, 3), M.leatherDark, {
      cast: false, receive: true,
    });
    backGroup.add(shell);
    backGroup.add(mesh(rb(0.39, 0.52, 0.07, 0.04, 3), M.seatInsert, {
      y: 0.02, z: 0.055, cast: false,
    }));
    for (const side of [-1, 1]) {
      backGroup.add(mesh(rb(0.09, 0.58, 0.16, 0.04, 3), M.leatherDark, {
        x: side * 0.215, z: 0.035, cast: false,
      }));
    }
    backGroup.add(mesh(rb(0.27, 0.16, 0.1, 0.04, 3), M.leatherDark, {
      y: 0.42, z: -0.01, cast: false,
    }));
    group.add(backGroup);

    // Piping / accent.
    group.add(mesh(rb(0.01, 0.4, 0.008, 0.004, 1), M.ambient, {
      x: isDriver ? 0.245 : -0.245, y: 1.0, z: -0.12, cast: false,
    }));

    this.interior.add(group);
    return group;
  }

  createRearBench() {
    const M = this.materials;
    const bench = new THREE.Group();
    const base = mesh(rb(1.36, 0.16, 0.58, 0.055, 3), M.leatherDark, {
      y: 0.7, z: -1.25, cast: false,
    });
    bench.add(base);
    for (const x of [-0.36, 0.36]) {
      bench.add(mesh(rb(0.55, 0.07, 0.48, 0.04, 3), M.seatInsert, {
        x, y: 0.775, z: -1.22, cast: false,
      }));
    }
    const back = new THREE.Group();
    back.position.set(0, 0.98, -1.5);
    back.rotation.x = -0.16;
    back.add(mesh(rb(1.35, 0.54, 0.13, 0.055, 3), M.leatherDark, { cast: false }));
    for (const x of [-0.36, 0.36]) {
      back.add(mesh(rb(0.52, 0.42, 0.065, 0.04, 3), M.seatInsert, {
        x, y: 0.02, z: 0.05, cast: false,
      }));
      back.add(mesh(rb(0.22, 0.14, 0.08, 0.035, 3), M.leatherDark, {
        x, y: 0.34, z: -0.01, cast: false,
      }));
    }
    bench.add(back);
    this.interior.add(bench);
  }

  buildDoorPanel(side) {
    const M = this.materials;
    const panel = new THREE.Group();
    panel.position.x = side * 0.81;
    panel.add(mesh(rb(0.07, 0.47, 2.0, 0.04, 3), M.leatherDark, {
      y: 0.8, z: -0.35, cast: false,
    }));
    panel.add(mesh(rb(0.052, 0.17, 0.66, 0.03, 3), M.leather, {
      y: 0.88, z: 0.05, cast: false,
    }));
    panel.add(mesh(rb(0.035, 0.018, 0.66, 0.01, 2), M.ambient, {
      y: 0.965, z: -0.08, cast: false,
    }));
    panel.add(mesh(rb(0.02, 0.03, 0.58, 0.01, 2), M.wood, {
      y: 0.925, z: 0.03, cast: false,
    }));
    // Door speaker.
    const speaker = mesh(new THREE.CylinderGeometry(0.095, 0.095, 0.012, 24), M.cabinBlack, {
      x: -side * 0.045, y: 0.7, z: 0.05, rz: Math.PI / 2, cast: false,
    });
    panel.add(speaker);
    for (let ring = 0; ring < 3; ring++) {
      panel.add(mesh(new THREE.TorusGeometry(0.03 + ring * 0.02, 0.0025, 4, 24), M.metalTrim, {
        x: -side * 0.052, y: 0.7, z: 0.05, ry: Math.PI / 2, cast: false,
      }));
    }
    // Pull handle.
    panel.add(mesh(rb(0.02, 0.03, 0.16, 0.01, 2), M.metalTrim, {
      x: side * 0.013, y: 0.89, z: -0.44, cast: false,
    }));
    panel.add(mesh(rb(0.02, 0.12, 0.03, 0.01, 2), M.cabinBlack, {
      x: side * 0.005, y: 0.98, z: -0.62, cast: false,
    }));
    // Door map pocket.
    panel.add(mesh(rb(0.035, 0.13, 0.55, 0.025, 2), M.cabinDark, {
      y: 0.67, z: -0.3, cast: false,
    }));
    this.interior.add(panel);
  }

  /* ----------------------------- extras ---------------------------- */

  buildSnowDusting() {
    // A thin line of snow where the hood meets the windshield.
    this.bodyGroup.add(mesh(rb(1.18, 0.012, 0.055, 0.008, 1), this.materials.snow, {
      y: 0.963, z: 1.1, cast: false,
    }));
    // Snow gathered on the rear shoulder.
    this.bodyGroup.add(mesh(rb(0.56, 0.014, 0.08, 0.008, 1), this.materials.snow, {
      x: 0.48, y: 1.0, z: -2.03, rz: -0.05, cast: false,
    }));
    this.bodyGroup.add(mesh(rb(0.38, 0.012, 0.06, 0.008, 1), this.materials.snow, {
      x: -0.55, y: 0.985, z: -2.02, rz: 0.04, cast: false,
    }));
  }

  finish() {
    this.root.position.y = 0.012;
    this.root.traverse((child) => {
      if (!child.isMesh) return;
      if (child.material === this.materials.glass) {
        child.castShadow = false;
        child.receiveShadow = false;
        return;
      }
      if (child.material && child.material.transparent) {
        child.castShadow = false;
      }
    });

    // Low-key tail illumination.
    this.tailStripLight = new THREE.PointLight(0xff3b19, 0.45, 2.4, 2);
    this.tailStripLight.position.set(0, 0.9, -2.6);
    this.root.add(this.tailStripLight);

    // Contact shadow under the car.
    const shadowTexture = makeRadialTexture(256, [
      [0, 'rgba(0,0,0,.6)'],
      [0.3, 'rgba(0,0,0,.38)'],
      [0.7, 'rgba(0,0,0,.08)'],
      [1, 'rgba(0,0,0,0)'],
    ]);
    const contact = new THREE.Mesh(
      new THREE.PlaneGeometry(2.8, 5.5),
      new THREE.MeshBasicMaterial({
        map: shadowTexture,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
      })
    );
    contact.rotation.x = -Math.PI / 2;
    contact.position.y = 0.018;
    contact.renderOrder = 1;
    this.contactShadow = contact;
    this.root.add(contact);
  }

  /* ------------------------------- API ----------------------------- */

  setRoof(open) {
    this.roofOpen = Boolean(open);
    return this.roofOpen;
  }

  toggleRoof() {
    this.roofOpen = !this.roofOpen;
    return this.roofOpen;
  }

  setCabinMode(active) {
    this.cabinMode = Boolean(active);
    this.glassTarget = this.cabinMode ? 0.15 : 0.31;
    return this.cabinMode;
  }

  setWeather({ wetness = 0, snow = 0, rain = 0 } = {}) {
    this.wetness = wetness;
  }

  getCabinPose() {
    const position = new THREE.Vector3(0.4, 1.36, -0.34);
    const target = new THREE.Vector3(0.03, 1.04, 2.8);
    this.root.localToWorld(position);
    this.root.localToWorld(target);
    return { position, target };
  }

  getCabinEyeLocal() {
    return new THREE.Vector3(0.4, 1.36, -0.34);
  }

  update(dt, elapsed) {
    this.time = elapsed;
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = this.roofOpen ? 1 : 0;
    this.roofAmount = damp(this.roofAmount, target, reduced ? 12 : 3.6, dt);

    // Ease roof motion slightly for a mechanical feel.
    const e = this.roofAmount * this.roofAmount * (3 - 2 * this.roofAmount);
    const lift = e * 0.37;
    this.roofGroup.position.y = lift;
    this.struts.visible = e > 0.015;
    if (this.struts.visible) {
      for (const arm of this.struts.children) {
        if (!arm.userData.baseY) continue;
        const scale = Math.max(0.001, e);
        arm.scale.y = scale;
        arm.position.y = arm.userData.baseY + 0.23 * e;
        arm.position.x = arm.userData.side * (0.65 + e * 0.015);
        if (arm.userData.collar) {
          arm.userData.collar.visible = true;
          arm.userData.collar.position.y = arm.userData.baseY;
        }
      }
    }

    // Glass is deeply tinted from the snowfield, then clears for the cabin or
    // when the lift roof opens the cabin to the night sky.
    this.glassTarget = this.cabinMode ? 0.09 : (0.84 - e * 0.32);
    this.materials.glass.opacity = damp(this.materials.glass.opacity, this.glassTarget, 2.8, dt);
    this.materials.glass.roughness = this.wetness > 0.4 ? 0.12 : 0.075;

    // Weather-dependent paint response.
    const p = this.materials.paint;
    p.roughness = damp(p.roughness, lerp(0.27, 0.16, this.wetness), 1.4, dt);
    p.clearcoatRoughness = damp(p.clearcoatRoughness, lerp(0.085, 0.026, this.wetness), 1.5, dt);

    // Interior warmth, dimmed from outside so the tinted glass reads as glass.
    this.cabinLight.intensity = damp(
      this.cabinLight.intensity,
      (2.0 + e * 0.85) * (this.cabinMode ? 1.28 : 0.55),
      2.5,
      dt
    );
    this.cabinFill.intensity = damp(
      this.cabinFill.intensity,
      (0.72 + e * 0.3) * (this.cabinMode ? 2.15 : 0.55),
      2.5,
      dt
    );
    this.roofLamp.intensity = damp(
      this.roofLamp.intensity,
      (0.32 + e * 1.05) * (this.cabinMode ? 1.4 : 0.55),
      2.5,
      dt
    );

    // A gentle idle shimmer in the ambient strip.
    const shimmer = 0.94 + Math.sin(elapsed * 0.8) * 0.06;
    this.materials.ambient.color.setRGB(1.52 * shimmer, 0.64 * shimmer, 0.25 * shimmer);

    // Headlights breathe a little with the weather.
    if (this.tailGlow) this.tailGlow.material.opacity = 0.4 + Math.sin(elapsed * 1.2) * 0.016 + e * 0.04;
    for (const pool of this.groundPools) {
      pool.material.opacity = 0.035 + this.wetness * 0.045;
    }

    // Slight body settle — the car is alive but parked.
    this.bodyGroup.position.y = Math.sin(elapsed * 0.42) * 0.003;

    // Contact shadow remains flat on the snow.
    this.contactShadow.position.y = 0.019;
  }
}
