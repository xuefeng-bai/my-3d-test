import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  RNG,
  clamp,
  lerp,
  damp,
  canvasTexture,
  makeRadialTexture,
  roundRect,
} from './utils.js';

/* ------------------------------------------------------------------ *
 * Dimensions + helpers
 * ------------------------------------------------------------------ */

const W = 12;
const D = 9;
const SIDE_X = 6;
const CEIL_Y = 3.12;
const FLOOR_Y = 0.11;
const DOOR_X = 1.4;
const DOOR_W = 2.4;
const DOOR_H = 2.72;

function mesh(geo, mat, {
  x = 0, y = 0, z = 0,
  rx = 0, ry = 0, rz = 0,
  sx = 1, sy = 1, sz = 1,
  cast = false, receive = false, name = '',
} = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.scale.set(sx, sy, sz);
  m.castShadow = cast;
  m.receiveShadow = receive;
  if (name) m.name = name;
  return m;
}

function makeRounded(width, height, depth, radius = 0.05, segments = 3) {
  return new RoundedBoxGeometry(width, height, depth, segments, radius);
}

function cylinderBetween(a, b, radius, material, radialSegments = 8) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(radius, radius, len, radialSegments, 1);
  const m = new THREE.Mesh(geo, material);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  m.castShadow = true;
  return m;
}

function productColor(rng) {
  const palettes = [
    [0xc94532, 0xee9852, 0xe8c45b],
    [0x3d805d, 0x84b178, 0xd9e0b3],
    [0x396896, 0x78a7c4, 0xd7e0e4],
    [0xb95d81, 0xe2a8b6, 0xf0d9c7],
    [0x735f9e, 0xa98cc0, 0xe4d8e2],
    [0xe0d4b2, 0x906b45, 0x4e3c2d],
  ];
  const p = palettes[Math.floor(rng.next() * palettes.length)];
  return new THREE.Color(p[Math.floor(rng.next() * p.length)]);
}

/* ------------------------------------------------------------------ *
 * Textures
 * ------------------------------------------------------------------ */

function draw711Logo(ctx, w, h, { vertical = false, slogan = '24 HOURS' } = {}) {
  ctx.fillStyle = '#f7f3e9';
  ctx.fillRect(0, 0, w, h);

  const stripeH = Math.max(8, h * 0.045);
  const drawStripes = (y) => {
    ctx.fillStyle = '#00845b';
    ctx.fillRect(0, y, w, stripeH);
    ctx.fillStyle = '#f58220';
    ctx.fillRect(0, y + stripeH, w, stripeH * 0.62);
    ctx.fillStyle = '#e33b2f';
    ctx.fillRect(0, y + stripeH * 1.62, w, stripeH * 0.42);
  };
  drawStripes(h - stripeH * 2.04);

  if (vertical) {
    ctx.fillStyle = '#00845b';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `900 ${h * 0.46}px Arial, sans-serif`;
    ctx.fillText('7', w * 0.5, h * 0.38);
    ctx.font = `800 ${w * 0.25}px Arial, sans-serif`;
    ctx.fillText('ELEVEN', w * 0.5, h * 0.68);
    ctx.fillStyle = '#f58220';
    ctx.fillRect(w * 0.1, h * 0.75, w * 0.8, h * 0.012);
    ctx.fillStyle = '#e33b2f';
    ctx.font = `800 ${w * 0.19}px Arial, sans-serif`;
    ctx.fillText(slogan, w * 0.5, h * 0.84);
    ctx.fillStyle = 'rgba(0,0,0,.12)';
    ctx.font = '500 35px Arial';
    ctx.fillText('CONVENIENCE STORE', w * 0.5, h * 0.94);
    return;
  }

  // The oversized 7.
  ctx.fillStyle = '#00845b';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.font = `900 ${h * 0.8}px Arial, "Helvetica Neue", sans-serif`;
  ctx.fillText('7', w * 0.055, h * 0.49);
  const sevenW = ctx.measureText('7').width;

  // Orange sweep across the top of the seven.
  ctx.fillStyle = '#f58220';
  ctx.beginPath();
  ctx.moveTo(w * 0.055, h * 0.18);
  ctx.lineTo(w * 0.055 + sevenW * 0.74, h * 0.18);
  ctx.lineTo(w * 0.055 + sevenW * 0.58, h * 0.27);
  ctx.lineTo(w * 0.055, h * 0.27);
  ctx.closePath();
  ctx.fill();

  // ELEVEN wordmark.
  ctx.fillStyle = '#00845b';
  ctx.font = `800 ${h * 0.4}px Arial, "Helvetica Neue", sans-serif`;
  ctx.fillText('ELEVEN', w * 0.32, h * 0.5);
  ctx.fillStyle = '#e33b2f';
  ctx.fillRect(w * 0.33, h * 0.66, w * 0.49, h * 0.035);
  ctx.fillStyle = '#f58220';
  ctx.fillRect(w * 0.33, h * 0.615, w * 0.49, h * 0.015);

  ctx.fillStyle = '#2e3b35';
  ctx.font = `600 ${h * 0.095}px Arial, sans-serif`;
  ctx.fillText('CONVENIENCE STORE', w * 0.33, h * 0.79);
  ctx.fillStyle = '#e33b2f';
  ctx.font = `800 ${h * 0.13}px Arial, sans-serif`;
  ctx.textAlign = 'right';
  ctx.fillText(slogan, w - w * 0.045, h * 0.5);
  ctx.fillStyle = '#00845b';
  ctx.font = `600 ${h * 0.058}px "Microsoft YaHei", sans-serif`;
  ctx.fillText('便利店', w - w * 0.045, h * 0.68);
}

function logoTexture(vertical = false, slogan = '24 HOURS') {
  const w = vertical ? 512 : 2048;
  const h = vertical ? 1024 : 512;
  return canvasTexture(w, h, (ctx) => draw711Logo(ctx, w, h, { vertical, slogan }), {
    colorSpace: THREE.SRGBColorSpace,
    wrap: THREE.ClampToEdgeWrapping,
    anisotropy: 8,
  });
}

function posterTexture(kind) {
  const w = 512;
  const h = 768;
  return canvasTexture(w, h, (ctx) => {
    const rng = new RNG(kind === 'coffee' ? 77 : kind === 'food' ? 177 : 277);
    const theme = {
      coffee: ['#f5ead7', '#9e5e3c', '#412d23', '#f58220'],
      food: ['#f4dfc2', '#df6c32', '#4d2417', '#e33b2f'],
      oden: ['#e7eadf', '#f0b757', '#21352e', '#00845b'],
    }[kind];
    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, theme[0]);
    bg.addColorStop(1, '#ffffff');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = theme[3];
    ctx.fillRect(0, 0, w, 15);
    ctx.fillRect(0, h - 15, w, 15);
    ctx.textAlign = 'left';
    ctx.fillStyle = theme[2];
    ctx.font = '800 41px "Microsoft YaHei", "Hiragino Sans GB", sans-serif';
    ctx.fillText(kind === 'coffee' ? '现磨咖啡' : kind === 'food' ? '热食出炉' : '关东煮', 42, 88);
    ctx.fillStyle = theme[1];
    ctx.font = '600 20px Arial';
    ctx.fillText(kind === 'coffee' ? 'SEVEN CAFÉ' : kind === 'food' ? 'HOT SNACK' : 'ODEN · 24H', 44, 123);

    // Stylized product illustration.
    ctx.save();
    ctx.translate(w / 2, h * 0.52);
    if (kind === 'coffee') {
      const g = ctx.createLinearGradient(-130, -140, 150, 140);
      g.addColorStop(0, '#f7f0e3');
      g.addColorStop(1, '#cfb39b');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(0, 35, 146, 48, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f8f1e5';
      ctx.beginPath();
      ctx.moveTo(-105, -120);
      ctx.lineTo(105, -120);
      ctx.lineTo(78, 145);
      ctx.quadraticCurveTo(0, 185, -78, 145);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#36261e';
      ctx.beginPath();
      ctx.ellipse(0, -119, 106, 26, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#4e3021';
      ctx.beginPath();
      ctx.ellipse(0, -117, 92, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e9d8c5';
      ctx.fillRect(-62, -66, 124, 74);
      ctx.fillStyle = '#3f2d22';
      ctx.font = '800 25px "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('SEVEN', 0, -30);
      ctx.fillText('CAFÉ', 0, 3);
      ctx.strokeStyle = 'rgba(255,255,255,.52)';
      ctx.lineWidth = 7;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const x = -45 + i * 42;
        ctx.moveTo(x, -152);
        ctx.bezierCurveTo(x - 30, -204, x + 32, -228, x + 2, -278);
        ctx.stroke();
      }
    } else if (kind === 'food') {
      ctx.fillStyle = '#fff0d9';
      ctx.beginPath();
      ctx.ellipse(0, 88, 162, 40, 0, 0, Math.PI * 2);
      ctx.fill();
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        const x = Math.cos(a) * 75;
        const y = Math.sin(a) * 46 + 8;
        const g = ctx.createRadialGradient(x - 12, y - 20, 8, x, y, 69);
        g.addColorStop(0, '#f8c770');
        g.addColorStop(0.65, '#ca7237');
        g.addColorStop(1, '#8f4222');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(x, y, 58, 49, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = 'rgba(255,255,255,.55)';
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(-90 + i * 46, -80 - (i % 2) * 30, 4 + (i % 3) * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      ctx.fillStyle = '#c7c7ba';
      ctx.beginPath();
      ctx.ellipse(0, 84, 170, 58, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f8f0dc';
      ctx.beginPath();
      ctx.ellipse(0, 57, 158, 44, 0, 0, Math.PI * 2);
      ctx.fill();
      const broth = ctx.createRadialGradient(-30, 35, 4, 0, 50, 160);
      broth.addColorStop(0, '#e1a448');
      broth.addColorStop(1, '#9d5c24');
      ctx.fillStyle = broth;
      ctx.beginPath();
      ctx.ellipse(0, 55, 146, 37, 0, 0, Math.PI * 2);
      ctx.fill();
      for (let i = 0; i < 6; i++) {
        const x = -100 + i * 40;
        ctx.save();
        ctx.translate(x, 5);
        ctx.rotate((i - 2.5) * 0.12);
        ctx.fillStyle = i % 2 ? '#e7d19e' : '#d17b50';
        ctx.fillRect(-10, -95, 20, 130);
        ctx.fillStyle = 'rgba(255,255,255,.25)';
        ctx.fillRect(-5, -88, 4, 112);
        ctx.restore();
      }
      ctx.globalAlpha = 0.42;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 8;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(-40 + i * 33, -100);
        ctx.bezierCurveTo(-70 + i * 34, -160, 0 + i * 28, -190, -24 + i * 30, -238);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    ctx.restore();

    ctx.fillStyle = theme[2];
    ctx.textAlign = 'left';
    ctx.font = '800 33px "Microsoft YaHei", sans-serif';
    ctx.fillText(kind === 'coffee' ? '一杯，刚刚好。' : kind === 'food' ? '深夜也要好好吃饭。' : '热气腾腾，等你来。', 42, h - 148);
    ctx.fillStyle = theme[1];
    ctx.font = '600 20px Arial';
    ctx.fillText('7-ELEVEN · ALWAYS OPEN', 43, h - 106);
    ctx.fillStyle = theme[3];
    ctx.fillRect(42, h - 78, 178, 6);
    ctx.fillStyle = theme[2];
    ctx.font = '600 19px "Microsoft YaHei", sans-serif';
    ctx.fillText('24H / SINCE 1927', 43, h - 42);
  }, {
    colorSpace: THREE.SRGBColorSpace,
    anisotropy: 8,
  });
}

function packageTexture(kind) {
  return canvasTexture(256, 256, (ctx, w, h) => {
    if (kind === 'bag') {
      ctx.fillStyle = '#f1eadf';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(255,255,255,.55)';
      ctx.fillRect(0, 0, w, 22);
      ctx.fillStyle = 'rgba(42,52,48,.74)';
      ctx.fillRect(18, 30, 142, 12);
      ctx.fillStyle = 'rgba(238,222,187,.9)';
      ctx.fillRect(28, 80, 200, 105);
      ctx.strokeStyle = 'rgba(74,60,44,.4)';
      ctx.lineWidth = 3;
      ctx.strokeRect(28, 80, 200, 105);
      ctx.fillStyle = 'rgba(51,55,49,.75)';
      ctx.font = '700 19px Arial';
      ctx.fillText(kind === 'bag' ? 'SEVEN SELECT' : 'SEVEN', 40, 108);
      ctx.fillStyle = 'rgba(75,61,44,.35)';
      for (let i = 0; i < 8; i++) {
        ctx.fillRect(42 + i * 18, 154, 8, 18);
      }
      ctx.fillStyle = 'rgba(255,255,255,.28)';
      ctx.fillRect(0, 208, w, 3);
      ctx.fillStyle = 'rgba(48,60,54,.24)';
      ctx.beginPath();
      ctx.arc(200, 66, 26, 0, Math.PI * 2);
      ctx.fill();
    } else {
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, '#aeb7b4');
      g.addColorStop(0.18, '#e8e8df');
      g.addColorStop(0.32, '#c2c8c4');
      g.addColorStop(0.65, '#d9dbd3');
      g.addColorStop(0.86, '#9da8a5');
      g.addColorStop(1, '#e1e2db');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(26,48,42,.7)';
      ctx.fillRect(0, 38, w, 10);
      ctx.fillStyle = 'rgba(243,235,216,.92)';
      ctx.fillRect(0, 85, w, 76);
      ctx.fillStyle = 'rgba(31,53,45,.78)';
      ctx.font = '700 20px Arial';
      ctx.fillText('SEVEN', 26, 113);
      ctx.font = '400 13px Arial';
      ctx.fillText('PREMIUM', 27, 133);
      ctx.fillStyle = 'rgba(227,59,47,.72)';
      ctx.fillRect(0, 174, w, 5);
      ctx.fillStyle = 'rgba(20,28,26,.5)';
      ctx.fillRect(0, 196, w, 2);
      for (let i = 0; i < 13; i++) {
        ctx.fillRect(24 + i * 13, 208, 4 + (i % 3), 18);
      }
    }
  }, { colorSpace: THREE.SRGBColorSpace, anisotropy: 4 });
}

function softShadowTexture() {
  return canvasTexture(256, 256, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, 'rgba(0,0,0,.76)');
    g.addColorStop(0.4, 'rgba(0,0,0,.38)');
    g.addColorStop(0.78, 'rgba(0,0,0,.1)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }, { colorSpace: THREE.NoColorSpace, anisotropy: 2 });
}

function tileTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#d7d3c8';
    ctx.fillRect(0, 0, w, h);
    const rng = new RNG(7701);
    for (let y = 0; y < h; y += 128) {
      for (let x = 0; x < w; x += 128) {
        const shade = rng.float(-7, 7);
        ctx.fillStyle = `rgb(${215 + shade},${211 + shade},${200 + shade})`;
        ctx.fillRect(x + 2, y + 2, 124, 124);
        ctx.fillStyle = 'rgba(255,255,255,.08)';
        ctx.fillRect(x + 4, y + 4, 120, 3);
        for (let i = 0; i < 24; i++) {
          ctx.fillStyle = `rgba(90,90,78,${rng.float(0.02, 0.06)})`;
          ctx.fillRect(x + rng.float(6, 120), y + rng.float(6, 120), rng.float(0.5, 1.4), rng.float(0.5, 1.4));
        }
      }
    }
    ctx.strokeStyle = 'rgba(62,64,58,.55)';
    ctx.lineWidth = 3;
    for (let i = 0; i <= w; i += 128) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(255,255,255,.16)';
    ctx.lineWidth = 1;
    for (let i = 2; i <= w; i += 128) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i);
      ctx.stroke();
    }
  }, {
    wrap: THREE.RepeatWrapping,
    repeat: [3.7, 2.8],
    anisotropy: 8,
  });
}

function digitalDisplayTexture() {
  const texture = canvasTexture(512, 256, (ctx, w, h) => {
    ctx.fillStyle = '#07120e';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#2bdba3';
    ctx.font = '800 32px Arial';
    ctx.fillText('7-ELEVEN', 28, 46);
    ctx.fillStyle = 'rgba(218,247,235,.4)';
    ctx.font = '500 15px Arial';
    ctx.fillText('STORE No. 1127 / SHIBUYA', 28, 72);
    ctx.fillStyle = '#e9f4e8';
    ctx.font = '250 82px Arial';
    ctx.fillText('22:41', 28, 161);
    ctx.fillStyle = '#e9c87f';
    ctx.font = '500 18px "Microsoft YaHei", sans-serif';
    ctx.fillText('OPEN 24 HOURS', 30, 206);
    ctx.fillStyle = 'rgba(120,210,172,.7)';
    ctx.fillRect(30, 224, 452, 2);
  }, { anisotropy: 4 });
  return texture;
}

function clockTexture() {
  return canvasTexture(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 230, 0, Math.PI * 2);
    ctx.fillStyle = '#f7f4eb';
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#1d3f34';
    ctx.stroke();
    ctx.fillStyle = '#00845b';
    ctx.fillRect(136, 245, 240, 10);
    ctx.fillStyle = '#e33b2f';
    ctx.fillRect(156, 259, 200, 5);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(a);
      ctx.fillStyle = '#26352f';
      ctx.fillRect(-2, -212, i % 3 === 0 ? 6 : 3, i % 3 === 0 ? 28 : 16);
      ctx.restore();
    }
    ctx.textAlign = 'center';
    ctx.fillStyle = '#1e322b';
    ctx.font = '700 24px Arial';
    ctx.fillText('7-ELEVEN', w / 2, 394);
    ctx.font = '500 15px Arial';
    ctx.fillStyle = 'rgba(35,54,45,.55)';
    ctx.fillText('SHIBUYA · TOKYO', w / 2, 418);
  }, { anisotropy: 4 });
}

/* ------------------------------------------------------------------ *
 * ConvenienceStore
 * ------------------------------------------------------------------ */

export class ConvenienceStore {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'SevenElevenStore';
    scene.add(this.group);

    this.rng = new RNG(71127);
    this.timeHour = 22.68;
    this.doorOpenTarget = false;
    this.doorAmount = 0;
    this.snowCover = 0;
    this.elapsed = 0;

    this.products = {
      bags: { matrices: [], colors: [] },
      cans: { matrices: [], colors: [] },
    };
    this.interiorColliders = [];
    this.snowMaterials = [];

    this.materials = this.createMaterials();
    this.buildShell();
    this.buildFacade();
    this.buildDoors();
    this.buildInteriorShell();
    this.buildFridge();
    this.buildGondolas();
    this.buildMagazineRack();
    this.buildCounter();
    this.buildCeiling();
    this.buildInteriorDetails();
    this.buildExteriorProps();
    this.buildSnowCaps();
    this.buildLights();
    this.finalizeProducts();
    this.buildClock();
    this.setTime(this.timeHour);

    this.group.traverse((child) => {
      if (!child.isMesh) return;
      if (child.material === this.materials.glass || child.material === this.materials.doorGlass) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }

  createMaterials() {
    const logo = logoTexture(false);
    const logoSmall = logoTexture(false);
    const pylonLogo = logoTexture(true);
    const posterCoffee = posterTexture('coffee');
    const posterFood = posterTexture('food');
    const posterOden = posterTexture('oden');
    const packageBag = packageTexture('bag');
    const packageCan = packageTexture('can');
    this.shadowTexture = softShadowTexture();

    const mats = {
      wall: new THREE.MeshStandardMaterial({ color: 0xd5d2c9, roughness: 0.82, metalness: 0.04 }),
      wallSide: new THREE.MeshStandardMaterial({ color: 0xc7c2b8, roughness: 0.86, metalness: 0.03 }),
      wallInside: new THREE.MeshStandardMaterial({
        color: 0xe9dfd0,
        roughness: 0.8,
        metalness: 0.02,
        emissive: 0x171310,
        emissiveIntensity: 0.3,
      }),
      darkTrim: new THREE.MeshStandardMaterial({ color: 0x202727, roughness: 0.46, metalness: 0.42 }),
      metal: new THREE.MeshStandardMaterial({ color: 0xaeb4b2, roughness: 0.36, metalness: 0.72 }),
      shelfMetal: new THREE.MeshStandardMaterial({ color: 0xc3c8c5, roughness: 0.42, metalness: 0.48 }),
      shelfBack: new THREE.MeshStandardMaterial({ color: 0xe7e2d7, roughness: 0.78, metalness: 0.02 }),
      shelfPrice: new THREE.MeshBasicMaterial({ color: 0xf8f4e9 }),
      green: new THREE.MeshStandardMaterial({ color: 0x00845b, roughness: 0.46, metalness: 0.12 }),
      orange: new THREE.MeshStandardMaterial({ color: 0xf58220, roughness: 0.48, metalness: 0.1 }),
      red: new THREE.MeshStandardMaterial({ color: 0xe33b2f, roughness: 0.46, metalness: 0.08 }),
      floor: new THREE.MeshPhysicalMaterial({
        color: 0xf7ecdb,
        map: tileTexture(),
        roughness: 0.28,
        metalness: 0.06,
        clearcoat: 0.52,
        clearcoatRoughness: 0.19,
        envMapIntensity: 0.45,
      }),
      tileWhite: new THREE.MeshStandardMaterial({ color: 0xe6e2d8, roughness: 0.7 }),
      ceiling: new THREE.MeshStandardMaterial({
        color: 0xded4c3,
        roughness: 0.78,
        emissive: 0x2f2820,
        emissiveIntensity: 0.34,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: 0x9bbcc4,
        metalness: 0.06,
        roughness: 0.045,
        transparent: true,
        opacity: 0.14,
        side: THREE.DoubleSide,
        depthWrite: false,
        envMapIntensity: 1.15,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
      }),
      doorGlass: new THREE.MeshPhysicalMaterial({
        color: 0x9fbec6,
        metalness: 0.04,
        roughness: 0.04,
        transparent: true,
        opacity: 0.16,
        side: THREE.DoubleSide,
        depthWrite: false,
        envMapIntensity: 1.2,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
      }),
      lightPanel: new THREE.MeshBasicMaterial({ color: 0xffe8c9, toneMapped: true }),
      lightPanelCool: new THREE.MeshBasicMaterial({ color: 0xdff3fb, toneMapped: true }),
      ledGreen: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.5, 2.2, 1.5), toneMapped: false }),
      ledOrange: new THREE.MeshBasicMaterial({ color: new THREE.Color(2.1, 0.85, 0.25), toneMapped: false }),
      ledRed: new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 0.18, 0.1), toneMapped: false }),
      sign: new THREE.MeshBasicMaterial({ map: logo, color: 0xdedad0, toneMapped: true }),
      signSmall: new THREE.MeshBasicMaterial({ map: logoSmall, color: 0xdedad0, toneMapped: true }),
      signPylon: new THREE.MeshBasicMaterial({ map: pylonLogo, color: 0xc7c2b7, toneMapped: true }),
      posterCoffee: new THREE.MeshBasicMaterial({ map: posterCoffee, color: 0xdcd4c7, side: THREE.FrontSide, toneMapped: true }),
      posterFood: new THREE.MeshBasicMaterial({ map: posterFood, color: 0xdcd4c7, side: THREE.FrontSide, toneMapped: true }),
      posterOden: new THREE.MeshBasicMaterial({ map: posterOden, color: 0xdcd4c7, side: THREE.FrontSide, toneMapped: true }),
      white: new THREE.MeshStandardMaterial({ color: 0xf6f3e8, roughness: 0.64 }),
      counterTop: new THREE.MeshStandardMaterial({ color: 0x373f3c, roughness: 0.3, metalness: 0.16 }),
      black: new THREE.MeshStandardMaterial({ color: 0x121716, roughness: 0.4, metalness: 0.36 }),
      steel: new THREE.MeshStandardMaterial({ color: 0x838a88, roughness: 0.32, metalness: 0.8 }),
      counterGlass: new THREE.MeshPhysicalMaterial({
        color: 0xc7e0e0,
        metalness: 0.02,
        roughness: 0.06,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
      productBag: new THREE.MeshStandardMaterial({ color: 0xffffff, map: packageBag, roughness: 0.6, metalness: 0.03 }),
      productCan: new THREE.MeshStandardMaterial({ color: 0xffffff, map: packageCan, roughness: 0.28, metalness: 0.5 }),
      drinkBottle: new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0.16,
        metalness: 0.12,
        clearcoat: 0.7,
        clearcoatRoughness: 0.12,
      }),
      floorMat: new THREE.MeshStandardMaterial({ color: 0x1d392f, roughness: 0.92 }),
      wood: new THREE.MeshStandardMaterial({ color: 0x6a4c34, roughness: 0.52 }),
      skin: new THREE.MeshStandardMaterial({ color: 0x9a6a4e, roughness: 0.7 }),
      snow: new THREE.MeshStandardMaterial({
        color: 0xeaf1f3,
        roughness: 0.92,
        metalness: 0.01,
        emissive: 0x2a3a40,
        emissiveIntensity: 0.2,
        transparent: true,
        opacity: 0,
      }),
    };
    mats.snowCap = mats.snow;
    return mats;
  }

  /* ----------------------------- shell ---------------------------- */

  buildShell() {
    const m = this.materials;
    const g = this.group;

    // Low plinth below the shop floor. It must stay below FLOOR_Y or it
    // would cover the tiled interior with a plain slab.
    g.add(mesh(makeRounded(W + 0.7, 0.16, D + 0.7, 0.04, 2), m.darkTrim, {
      y: 0.02,
      z: -D / 2,
      receive: true,
    }));
    g.add(mesh(new THREE.BoxGeometry(W + 0.3, 0.03, D + 0.3), new THREE.MeshStandardMaterial({
      color: 0x84827a,
      roughness: 0.82,
    }), {
      y: 0.085,
      z: -D / 2,
      receive: true,
    }));

    // Back and side walls.
    g.add(mesh(new THREE.BoxGeometry(W + 0.3, 4.35, 0.22), m.wallSide, {
      y: 2.18,
      z: -D - 0.06,
      receive: true,
    }));
    for (const side of [-1, 1]) {
      g.add(mesh(new THREE.BoxGeometry(0.22, 4.35, D + 0.2), m.wallSide, {
        x: side * (SIDE_X + 0.05),
        y: 2.18,
        z: -D / 2,
        receive: true,
      }));
      // Exterior vertical expansion joints.
      for (let z = -1.4; z > -D; z -= 1.8) {
        g.add(mesh(new THREE.BoxGeometry(0.018, 3.8, 0.025), m.darkTrim, {
          x: side * (SIDE_X + 0.17),
          y: 2.05,
          z,
        }));
      }
    }

    // Header wall above the glasshouse, roof slab and parapet.
    g.add(mesh(new THREE.BoxGeometry(W + 0.3, 1.55, 0.25), m.wall, {
      y: 3.83,
      z: 0.02,
      receive: true,
    }));
    g.add(mesh(new THREE.BoxGeometry(W + 0.5, 0.22, D + 0.5), m.darkTrim, {
      y: 4.55,
      z: -D / 2,
    }));
    g.add(mesh(new THREE.BoxGeometry(W + 0.35, 0.4, 0.2), m.green, {
      y: 4.38,
      z: 0.17,
    }));
    g.add(mesh(new THREE.BoxGeometry(W + 0.35, 0.07, 0.21), m.orange, {
      y: 4.61,
      z: 0.18,
    }));
    g.add(mesh(new THREE.BoxGeometry(W + 0.35, 0.05, 0.22), m.red, {
      y: 4.66,
      z: 0.19,
    }));

    // Base cladding and front sill.
    g.add(mesh(new THREE.BoxGeometry(W + 0.32, 0.2, 0.14), m.darkTrim, {
      y: 0.26,
      z: 0.16,
      receive: true,
    }));
    g.add(mesh(new THREE.BoxGeometry(W + 0.32, 0.12, 0.18), m.metal, {
      y: 0.43,
      z: 0.12,
    }));

    // Interior floor is separate and slightly raised.
    g.add(mesh(new THREE.BoxGeometry(W - 0.22, 0.08, D - 0.22), m.darkTrim, {
      y: FLOOR_Y - 0.055,
      z: -D / 2 + 0.05,
      receive: true,
    }));
    g.add(mesh(new THREE.BoxGeometry(W - 0.3, 0.02, D - 0.3), m.floor, {
      y: FLOOR_Y,
      z: -D / 2 + 0.05,
      receive: true,
    }));

    // Side roof machinery.
    this.buildRoofEquipment();
  }

  buildRoofEquipment() {
    const m = this.materials;
    const metal = new THREE.MeshStandardMaterial({ color: 0x9ca09a, roughness: 0.6, metalness: 0.38 });
    const roofY = 4.72;
    for (const [x, z, w, d, h] of [[-3.2, -2.1, 1.7, 1.2, 0.65], [1.7, -6.2, 2.2, 1.3, 0.8]]) {
      this.group.add(mesh(new THREE.BoxGeometry(w, h, d), metal, {
        x,
        y: roofY + h / 2,
        z,
        cast: true,
        receive: true,
      }));
      const fan = new THREE.Mesh(new THREE.CircleGeometry(0.33, 18), m.darkTrim);
      fan.position.set(x, roofY + h + 0.005, z);
      fan.rotation.x = -Math.PI / 2;
      this.group.add(fan);
    }
    // Vent pipes and small antennas.
    this.group.add(mesh(new THREE.CylinderGeometry(0.08, 0.11, 1.25, 8), m.metal, {
      x: -5.2, y: 5.2, z: -7.2, cast: true,
    }));
    this.group.add(mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.55, 8), m.darkTrim, {
      x: 4.8, y: 4.95, z: -3.1, cast: true,
    }));
  }

  /* ---------------------------- facade ----------------------------- */

  buildFacade() {
    const m = this.materials;
    const g = this.group;

    // Glass panes split around the door.
    const glassLeftW = 5.92;
    const glassRightW = 3.02;
    const glassH = 2.63;
    const glassY = 1.75;
    const leftGlass = mesh(new THREE.PlaneGeometry(glassLeftW, glassH), m.glass, {
      x: -2.76,
      y: glassY,
      z: 0.0,
    });
    leftGlass.renderOrder = 4;
    const rightGlass = mesh(new THREE.PlaneGeometry(glassRightW, glassH), m.glass, {
      x: 4.26,
      y: glassY,
      z: 0.0,
    });
    rightGlass.renderOrder = 4;
    this.glassPanes = [leftGlass, rightGlass];
    g.add(leftGlass, rightGlass);

    // Aluminum window frame.
    const frameMat = m.darkTrim;
    for (const x of [-5.8, -2.8, 0.09, 2.71, 5.82]) {
      g.add(mesh(new THREE.BoxGeometry(0.075, 2.85, 0.12), frameMat, {
        x,
        y: 1.6,
        z: 0.03,
        cast: true,
      }));
    }
    g.add(mesh(new THREE.BoxGeometry(11.7, 0.075, 0.13), frameMat, {
      y: 3.02,
      z: 0.03,
      cast: true,
    }));
    g.add(mesh(new THREE.BoxGeometry(11.7, 0.13, 0.23), frameMat, {
      y: 0.43,
      z: 0.06,
      receive: true,
    }));

    // The canopy and its underlighting.
    const canopy = mesh(makeRounded(W + 0.35, 0.18, 1.38, 0.04, 2), m.white, {
      y: 3.1,
      z: 0.73,
      cast: true,
      receive: true,
    });
    g.add(canopy);
    g.add(mesh(new THREE.BoxGeometry(W + 0.35, 0.1, 0.12), m.green, {
      y: 3.06,
      z: 1.42,
    }));
    g.add(mesh(new THREE.BoxGeometry(W + 0.35, 0.035, 0.06), m.orange, {
      y: 3.13,
      z: 1.45,
    }));
    for (let i = 0; i < 6; i++) {
      const x = -5 + i * 2;
      g.add(mesh(new THREE.CircleGeometry(0.075, 16), m.lightPanel, {
        x,
        y: 3.0,
        z: 0.86,
        rx: -Math.PI / 2,
      }));
    }

    // Main backlit fascia sign.
    g.add(mesh(new THREE.BoxGeometry(11.8, 1.15, 0.24), m.darkTrim, {
      y: 3.74,
      z: 0.07,
    }));
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(11.5, 1.03), m.sign);
    sign.position.set(0, 3.74, 0.196);
    g.add(sign);
    // Thin green strip under the sign.
    const underSign = canvasTexture(2048, 96, (ctx, w, h) => {
      ctx.fillStyle = '#00845b';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#f7f3e8';
      ctx.font = '600 37px "Microsoft YaHei", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '8px';
      ctx.fillText('COFFEE  ·  ATM  ·  HOT FOOD  ·  OPEN 24 HOURS', w / 2, 62);
    }, { colorSpace: THREE.SRGBColorSpace, anisotropy: 8 });
    const underSignMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(11.7, 0.17),
      new THREE.MeshBasicMaterial({ map: underSign, toneMapped: true })
    );
    underSignMesh.position.set(0, 3.115, 0.22);
    g.add(underSignMesh);

    // Window adhesive band with brand stripe.
    const bandTexture = canvasTexture(2048, 128, (ctx, w, h) => {
      ctx.fillStyle = 'rgba(247,243,233,.92)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00845b';
      ctx.fillRect(0, 0, w, 14);
      ctx.fillStyle = '#f58220';
      ctx.fillRect(0, 14, w, 7);
      ctx.fillStyle = '#e33b2f';
      ctx.fillRect(0, 21, w, 5);
      ctx.fillStyle = '#173b31';
      ctx.font = '600 31px "Microsoft YaHei", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '6px';
      ctx.fillText('7-ELEVEN  ·  ALWAYS OPEN  ·  SHIBUYA 2-CHOME', w / 2, 68);
      ctx.fillStyle = 'rgba(23,59,49,.5)';
      ctx.font = '500 19px Arial';
      ctx.fillText('OPEN 24 HOURS / 365 DAYS', w / 2, 97);
    }, { colorSpace: THREE.SRGBColorSpace, anisotropy: 8 });
    const bandMat = new THREE.MeshBasicMaterial({
      map: bandTexture,
      transparent: true,
      opacity: 0.86,
      side: THREE.DoubleSide,
      toneMapped: true,
    });
    const band = new THREE.Mesh(new THREE.PlaneGeometry(5.8, 0.36), bandMat);
    band.position.set(-2.85, 2.82, 0.012);
    g.add(band);

    // Posters behind the glass, with a second inward-facing copy so the
    // typography remains readable from inside the store.
    const addWindowPoster = (material, x, y, width, height) => {
      const front = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
      front.position.set(x, y, -0.055);
      g.add(front);
      const back = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
      back.position.set(x, y, -0.062);
      back.rotation.y = Math.PI;
      g.add(back);
      // A slim dark frame keeps the white paper from melting into the glass.
      const frame = new THREE.Mesh(
        new THREE.PlaneGeometry(width + 0.06, height + 0.06),
        new THREE.MeshBasicMaterial({ color: 0x24332c, side: THREE.DoubleSide, toneMapped: true })
      );
      frame.position.set(x, y, -0.065);
      g.add(frame);
    };
    addWindowPoster(m.posterCoffee, -4.7, 1.55, 1.3, 1.94);
    addWindowPoster(m.posterFood, 4.65, 1.67, 1.06, 1.6);
    addWindowPoster(m.posterOden, 3.43, 1.66, 0.86, 1.3);

    // A slim white ledge below the glass and a doorstep.
    g.add(mesh(new THREE.BoxGeometry(11.85, 0.05, 0.34), m.metal, {
      y: 0.46,
      z: 0.16,
    }));
    const matTexture = canvasTexture(512, 256, (ctx, w, h) => {
      ctx.fillStyle = '#1e382e';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(240,237,223,.55)';
      ctx.lineWidth = 8;
      ctx.strokeRect(13, 13, w - 26, h - 26);
      ctx.fillStyle = '#e9e4d5';
      ctx.font = '800 44px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('WELCOME', w / 2, h * 0.47);
      ctx.fillStyle = '#f58220';
      ctx.fillRect(w * 0.22, h * 0.56, w * 0.56, 5);
      ctx.fillStyle = '#e9e4d5';
      ctx.font = '600 24px "Microsoft YaHei", sans-serif';
      ctx.fillText('いらっしゃいませ', w / 2, h * 0.72);
    }, { anisotropy: 4 });
    const doorMat = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 1.05), new THREE.MeshStandardMaterial({
      map: matTexture,
      roughness: 0.88,
    }));
    doorMat.rotation.x = -Math.PI / 2;
    doorMat.position.set(DOOR_X, 0.041, 1.04);
    doorMat.receiveShadow = true;
    g.add(doorMat);

    this.buildPylon();
  }

  buildPylon() {
    const m = this.materials;
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x2a3432, roughness: 0.4, metalness: 0.72 });
    const x = 8.0;
    const z = 2.25;
    const signY = 4.36;
    this.group.add(mesh(new THREE.BoxGeometry(0.7, 0.28, 0.7), new THREE.MeshStandardMaterial({
      color: 0x8c8b83,
      roughness: 0.8,
    }), {
      x,
      y: 0.16,
      z,
      receive: true,
    }));
    this.group.add(mesh(new THREE.CylinderGeometry(0.075, 0.115, 3.95, 10), poleMat, {
      x,
      y: 2.18,
      z,
      cast: true,
    }));
    this.group.add(mesh(new THREE.BoxGeometry(0.1, 0.9, 0.1), m.green, {
      x,
      y: 1.0,
      z: z + 0.07,
    }));
    this.group.add(mesh(makeRounded(1.2, 2.02, 0.28, 0.07, 3), m.white, {
      x,
      y: signY,
      z,
      cast: true,
    }));
    const face = new THREE.Mesh(new THREE.PlaneGeometry(1.06, 1.89), m.signPylon);
    face.position.set(x, signY, z + 0.15);
    this.group.add(face);
    this.group.add(mesh(new THREE.BoxGeometry(1.21, 0.085, 0.31), m.green, {
      x,
      y: signY + 0.99,
      z,
    }));
    this.group.add(mesh(new THREE.BoxGeometry(1.21, 0.05, 0.32), m.orange, {
      x,
      y: signY + 1.08,
      z,
    }));
    this.pylon = { x, z };
  }

  /* ----------------------------- doors ----------------------------- */

  buildDoors() {
    const m = this.materials;
    this.doorRoot = new THREE.Group();
    this.group.add(this.doorRoot);

    this.leftDoor = this.createDoorPanel(-1);
    this.rightDoor = this.createDoorPanel(1);
    this.doorRoot.add(this.leftDoor, this.rightDoor);
    this.leftDoorBaseX = DOOR_X - DOOR_W / 4;
    this.rightDoorBaseX = DOOR_X + DOOR_W / 4;
    this.leftDoor.position.x = this.leftDoorBaseX;
    this.rightDoor.position.x = this.rightDoorBaseX;

    // Track / header and floor guide.
    this.doorRoot.add(mesh(new THREE.BoxGeometry(DOOR_W + 0.3, 0.14, 0.19), m.darkTrim, {
      x: DOOR_X,
      y: 2.84,
      z: 0.02,
      cast: true,
    }));
    this.doorRoot.add(mesh(new THREE.BoxGeometry(DOOR_W + 0.28, 0.035, 0.18), m.metal, {
      x: DOOR_X,
      y: 0.47,
      z: 0.02,
    }));

    // Door sensor.
    const sensor = mesh(new THREE.BoxGeometry(0.44, 0.12, 0.15), m.darkTrim, {
      x: DOOR_X,
      y: 2.78,
      z: 0.13,
      cast: true,
    });
    this.doorRoot.add(sensor);
    const sensorLightMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(2.2, 0.18, 0.1),
      toneMapped: false,
      transparent: true,
      opacity: 0.8,
    });
    this.sensorLight = new THREE.Mesh(new THREE.CircleGeometry(0.017, 12), sensorLightMat);
    this.sensorLight.position.set(DOOR_X + 0.15, 2.78, 0.21);
    this.doorRoot.add(this.sensorLight);

    // Door decal sticker.
    this.buildDoorDecal();
  }

  createDoorPanel(side) {
    const m = this.materials;
    const panel = new THREE.Group();
    const width = DOOR_W / 2 - 0.035;
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(width - 0.08, DOOR_H - 0.18), m.doorGlass);
    glass.position.set(0, 1.59, 0.015);
    glass.renderOrder = 5;
    panel.add(glass);
    const frame = m.darkTrim;
    panel.add(mesh(new THREE.BoxGeometry(width, 0.07, 0.045), frame, {
      y: 0.17,
      z: 0,
    }));
    panel.add(mesh(new THREE.BoxGeometry(width, 0.07, 0.045), frame, {
      y: 2.91,
      z: 0,
    }));
    panel.add(mesh(new THREE.BoxGeometry(0.045, 2.8, 0.045), frame, {
      x: -width / 2 + 0.035,
      y: 1.54,
      z: 0,
    }));
    panel.add(mesh(new THREE.BoxGeometry(0.045, 2.8, 0.045), frame, {
      x: width / 2 - 0.035,
      y: 1.54,
      z: 0,
    }));
    // Vertical handle near the centre.
    panel.add(mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.78, 8), m.metal, {
      x: side * -0.08,
      y: 1.45,
      z: 0.075,
    }));
    panel.add(mesh(new THREE.BoxGeometry(0.06, 0.04, 0.06), m.metal, {
      x: side * -0.08,
      y: 1.03,
      z: 0.05,
    }));
    panel.add(mesh(new THREE.BoxGeometry(0.06, 0.04, 0.06), m.metal, {
      x: side * -0.08,
      y: 1.87,
      z: 0.05,
    }));
    return panel;
  }

  buildDoorDecal() {
    const texture = canvasTexture(384, 160, (ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(247,243,233,.88)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00845b';
      ctx.fillRect(0, 0, 12, h);
      ctx.fillStyle = '#f58220';
      ctx.fillRect(12, 0, 6, h);
      ctx.fillStyle = '#e33b2f';
      ctx.fillRect(18, 0, 4, h);
      ctx.fillStyle = '#173b31';
      ctx.font = '700 28px Arial';
      ctx.fillText('AUTO DOOR', 38, 55);
      ctx.font = '500 22px "Microsoft YaHei", sans-serif';
      ctx.fillText('自動ドア', 38, 88);
      ctx.fillStyle = '#e33b2f';
      ctx.font = '800 18px Arial';
      ctx.fillText('OPEN 24H', 38, 126);
    }, { anisotropy: 4 });
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      toneMapped: true,
    });
    const decal = new THREE.Mesh(new THREE.PlaneGeometry(0.72, 0.3), mat);
    decal.position.set(0, 2.12, 0.04);
    this.rightDoor.add(decal);
  }

  setDoorOpen(open) {
    this.doorOpenTarget = Boolean(open);
  }

  /* --------------------------- interior ---------------------------- */

  buildInteriorShell() {
    const m = this.materials;
    const g = this.group;

    // Inner back wall and side walls.
    const back = mesh(new THREE.PlaneGeometry(W - 0.23, CEIL_Y - FLOOR_Y), m.wallInside, {
      y: FLOOR_Y + (CEIL_Y - FLOOR_Y) / 2,
      z: -D + 0.13,
    });
    g.add(back);
    for (const side of [-1, 1]) {
      const wall = new THREE.Mesh(new THREE.PlaneGeometry(D - 0.2, CEIL_Y - FLOOR_Y), m.wallInside);
      wall.position.set(side * (SIDE_X - 0.13), FLOOR_Y + (CEIL_Y - FLOOR_Y) / 2, -D / 2);
      wall.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
      wall.receiveShadow = true;
      g.add(wall);
    }

    // Ceiling plane.
    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.25, D - 0.2), m.ceiling);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(0, CEIL_Y, -D / 2);
    ceiling.receiveShadow = true;
    g.add(ceiling);

    // An entrance mat inside.
    const innerMat = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.15), m.floorMat);
    innerMat.rotation.x = -Math.PI / 2;
    innerMat.position.set(DOOR_X, FLOOR_Y + 0.012, -0.74);
    g.add(innerMat);

    // Wall base band.
    for (const [w, d, x, z, ry] of [
      [W - 0.3, 0.04, 0, -D + 0.155, 0],
      [D - 0.3, 0.04, -SIDE_X + 0.155, -D / 2, Math.PI / 2],
      [D - 0.3, 0.04, SIDE_X - 0.155, -D / 2, Math.PI / 2],
    ]) {
      const band = mesh(new THREE.BoxGeometry(w, 0.15, d), m.green, {
        x,
        y: FLOOR_Y + 0.075,
        z,
        ry,
      });
      g.add(band);
    }

    // Collision bounds for walking.
    this.interiorBounds = {
      minX: -5.2,
      maxX: 5.2,
      minZ: -8.15,
      maxZ: -0.56,
    };
  }

  buildFridge() {
    const m = this.materials;
    const g = this.group;
    const x0 = -5.35;
    const x1 = 1.1;
    const z = -8.05;

    // Open refrigeration case: frame and a bright back panel, never a solid
    // front-facing box (that would hide the drinks behind the doors).
    g.add(mesh(new THREE.BoxGeometry(x1 - x0 + 0.22, 0.14, 0.86), m.darkTrim, {
      x: (x0 + x1) / 2,
      y: 2.59,
      z: z - 0.08,
    }));
    g.add(mesh(new THREE.BoxGeometry(x1 - x0 + 0.22, 0.18, 0.86), m.darkTrim, {
      x: (x0 + x1) / 2,
      y: 0.25,
      z: z - 0.08,
    }));
    for (const xx of [x0 - 0.04, x1 + 0.04]) {
      g.add(mesh(new THREE.BoxGeometry(0.16, 2.48, 0.82), m.darkTrim, {
        x: xx,
        y: 1.42,
        z: z - 0.08,
      }));
    }
    // Bright back panel with a pale cool cast.
    const backLight = new THREE.Mesh(
      new THREE.PlaneGeometry(x1 - x0, 2.25),
      new THREE.MeshBasicMaterial({ color: 0xdceff5, toneMapped: true })
    );
    backLight.position.set((x0 + x1) / 2, 1.42, z - 0.52);
    g.add(backLight);
    // Visible shelf-edge LED strips inside the case.
    for (const y of [0.55, 0.98, 1.41, 1.84, 2.27]) {
      g.add(mesh(new THREE.BoxGeometry(x1 - x0 - 0.12, 0.012, 0.016), m.lightPanelCool, {
        x: (x0 + x1) / 2,
        y: y + 0.015,
        z: z - 0.505,
      }));
    }
    // Frame + shelves.
    for (let i = 0; i < 4; i++) {
      const left = x0 + (i / 4) * (x1 - x0);
      const right = x0 + ((i + 1) / 4) * (x1 - x0);
      for (const y of [0.55, 0.98, 1.41, 1.84, 2.27]) {
        g.add(mesh(new THREE.BoxGeometry(right - left - 0.06, 0.028, 0.47), m.metal, {
          x: (left + right) / 2,
          y,
          z: z - 0.33,
        }));
      }
      for (const xx of [left + 0.012, right - 0.012]) {
        g.add(mesh(new THREE.BoxGeometry(0.025, 2.2, 0.5), m.darkTrim, {
          x: xx,
          y: 1.35,
          z: z - 0.31,
        }));
      }
      const door = new THREE.Mesh(new THREE.PlaneGeometry(right - left - 0.06, 2.13), m.glass);
      door.position.set((left + right) / 2, 1.42, z + 0.02);
      door.renderOrder = 4;
      g.add(door);
      // Door rails.
      g.add(mesh(new THREE.BoxGeometry(0.035, 2.17, 0.03), m.darkTrim, {
        x: left + 0.025,
        y: 1.42,
        z: z + 0.035,
      }));
      g.add(mesh(new THREE.BoxGeometry(0.035, 2.17, 0.03), m.darkTrim, {
        x: right - 0.025,
        y: 1.42,
        z: z + 0.035,
      }));
      g.add(mesh(new THREE.BoxGeometry(0.75, 0.018, 0.025), m.lightPanelCool, {
        x: (left + right) / 2,
        y: 2.36,
        z: z + 0.015,
      }));
      // Handles.
      g.add(mesh(new THREE.BoxGeometry(0.02, 0.48, 0.025), m.metal, {
        x: right - 0.12,
        y: 1.37,
        z: z + 0.065,
      }));

      // Stocked drinks.
      const rng = new RNG(700 + i);
      const cols = 10;
      for (const y of [0.55, 0.98, 1.41, 1.84, 2.27]) {
        for (let c = 0; c < cols; c++) {
          if (rng.next() < 0.08) continue;
          const x = left + 0.1 + c * ((right - left - 0.2) / (cols - 1));
          const color = new THREE.Color().setHSL(
            rng.float(0.02, 0.92),
            rng.float(0.32, 0.82),
            rng.float(0.38, 0.72)
          );
          const diameter = rng.float(0.82, 1.12);
          const height = rng.float(1.1, 1.5);
          this.addProduct('cans', new THREE.Vector3(x, y + 0.075, z - 0.26), new THREE.Vector3(diameter, height, diameter), color, rng.float(-0.12, 0.12));
        }
      }
    }
    // Cold drinks sign.
    const coldSign = canvasTexture(1024, 128, (ctx, w, h) => {
      ctx.fillStyle = '#e9f8ff';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00845b';
      ctx.font = '800 51px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('COLD DRINKS', w / 2, 64);
      ctx.fillStyle = '#173b31';
      ctx.font = '500 23px "Microsoft YaHei", sans-serif';
      ctx.fillText('つめた〜い飲みもの', w / 2, 100);
    }, { anisotropy: 4 });
    const signPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.35), new THREE.MeshBasicMaterial({
      map: coldSign,
      toneMapped: true,
    }));
    signPlane.position.set((x0 + x1) / 2, 2.8, z + 0.05);
    g.add(signPlane);

    this.interiorColliders.push({ x1: x0 - 0.15, x2: x1 + 0.15, z1: -8.9, z2: -7.7 });
  }

  buildGondolas() {
    const m = this.materials;
    const g = this.group;
    const rows = [
      { x: -3.9, z: -4.72, len: 4.05, seed: 10 },
      { x: -1.55, z: -4.72, len: 4.05, seed: 20 },
    ];
    for (const row of rows) {
      const rng = new RNG(row.seed + 3100);
      // Base plinth.
      g.add(mesh(makeRounded(0.76, 0.2, row.len + 0.1, 0.035, 2), m.darkTrim, {
        x: row.x,
        y: 0.32,
        z: row.z,
        receive: true,
      }));
      // Back / central panel.
      g.add(mesh(new THREE.BoxGeometry(0.06, 1.9, row.len), m.shelfBack, {
        x: row.x,
        y: 1.26,
        z: row.z,
        receive: true,
      }));
      const levels = [0.52, 0.94, 1.36, 1.78];
      for (const level of levels) {
        g.add(mesh(makeRounded(0.72, 0.038, row.len, 0.012, 2), m.shelfMetal, {
          x: row.x,
          y: level,
          z: row.z,
          receive: true,
        }));
        for (const side of [-1, 1]) {
          // White price lip.
          g.add(mesh(new THREE.BoxGeometry(0.016, 0.055, row.len), m.shelfPrice, {
            x: row.x + side * 0.365,
            y: level + 0.028,
            z: row.z,
          }));
          const count = 29;
          for (let i = 0; i < count; i++) {
            if (rng.next() < 0.06) continue;
            const z = row.z - row.len / 2 + 0.12 + i * ((row.len - 0.24) / (count - 1));
            const type = rng.next() > 0.4 ? 'bags' : 'cans';
            const color = productColor(rng);
            if (type === 'bags') {
              const sy = rng.float(0.14, 0.205);
              this.addProduct(
                'bags',
                new THREE.Vector3(row.x + side * 0.17, level + 0.022 + sy / 2, z),
                new THREE.Vector3(rng.float(0.82, 1.14), sy / 0.16, rng.float(0.8, 1.05)),
                color,
                side * Math.PI / 2 + rng.float(-0.12, 0.12)
              );
            } else {
              const sy = rng.float(0.11, 0.16);
              this.addProduct('cans', new THREE.Vector3(row.x + side * 0.17, level + 0.022 + sy / 2, z), new THREE.Vector3(rng.float(0.8, 1), sy / 0.16, rng.float(0.8, 1)), color, rng.float(-0.1, 0.1));
            }
          }
          // Shelf edge little promo tags.
          for (let t = 0; t < 3; t++) {
            const tag = mesh(new THREE.BoxGeometry(0.012, 0.085, 0.16), t === 0 ? m.orange : m.shelfPrice, {
              x: row.x + side * 0.375,
              y: level + 0.04,
              z: row.z - row.len * 0.28 + t * row.len * 0.25,
            });
            g.add(tag);
          }
        }
      }
      // Vertical supports.
      for (const z of [row.z - row.len / 2, row.z, row.z + row.len / 2]) {
        g.add(mesh(new THREE.BoxGeometry(0.08, 1.85, 0.08), m.shelfMetal, {
          x: row.x - 0.32,
          y: 1.08,
          z,
        }));
        g.add(mesh(new THREE.BoxGeometry(0.08, 1.85, 0.08), m.shelfMetal, {
          x: row.x + 0.32,
          y: 1.08,
          z,
        }));
      }
      // Aisle marker on end.
      const marker = mesh(new THREE.BoxGeometry(0.02, 0.2, 0.42), row.seed === 10 ? m.green : m.orange, {
        x: row.x,
        y: 2.0,
        z: row.z + row.len / 2 + 0.03,
      });
      g.add(marker);
      this.interiorColliders.push({
        x1: row.x - 0.47,
        x2: row.x + 0.47,
        z1: row.z - row.len / 2 - 0.1,
        z2: row.z + row.len / 2 + 0.1,
      });
    }
  }

  addProduct(kind, position, scale, color, rotation = 0) {
    const dummy = new THREE.Object3D();
    dummy.position.copy(position);
    dummy.rotation.y = rotation;
    dummy.scale.copy(scale);
    dummy.updateMatrix();
    this.products[kind].matrices.push(dummy.matrix.clone());
    this.products[kind].colors.push(color.clone());
  }

  finalizeProducts() {
    const bagGeo = makeRounded(0.105, 0.16, 0.055, 0.018, 2);
    const canGeo = new THREE.CylinderGeometry(0.033, 0.035, 0.16, 12);
    const makeInstanced = (kind, geometry, material) => {
      const data = this.products[kind];
      if (!data.matrices.length) return;
      const inst = new THREE.InstancedMesh(geometry, material, data.matrices.length);
      inst.instanceMatrix.setUsage(THREE.StaticDrawUsage);
      data.matrices.forEach((matrix, i) => {
        inst.setMatrixAt(i, matrix);
        inst.setColorAt(i, data.colors[i]);
      });
      inst.instanceMatrix.needsUpdate = true;
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
      inst.frustumCulled = false;
      inst.receiveShadow = true;
      inst.castShadow = false;
      this.group.add(inst);
    };
    makeInstanced('bags', bagGeo, this.materials.productBag);
    makeInstanced('cans', canGeo, this.materials.productCan);

    // Price label tags as one simple instanced mesh for extra shelf detail.
    const tagGeo = new THREE.BoxGeometry(0.012, 0.075, 0.13);
    const tagMat = new THREE.MeshBasicMaterial({ color: 0xf7f1df });
    const tagCount = 32;
    const tags = new THREE.InstancedMesh(tagGeo, tagMat, tagCount);
    const dummy = new THREE.Object3D();
    const rng = new RNG(8201);
    for (let i = 0; i < tagCount; i++) {
      const row = i % 2 === 0 ? -3.9 : -1.55;
      const side = i % 4 < 2 ? -1 : 1;
      const level = [0.52, 0.94, 1.36, 1.78][Math.floor(i / 2) % 4];
      dummy.position.set(row + side * 0.382, level + 0.055, -4.72 - 1.7 + rng.float(0, 3.4));
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      tags.setMatrixAt(i, dummy.matrix);
    }
    tags.frustumCulled = false;
    this.group.add(tags);
  }

  buildMagazineRack() {
    const m = this.materials;
    const g = this.group;
    // Low rack along the left window.
    g.add(mesh(makeRounded(0.25, 0.9, 2.35, 0.04, 2), m.darkTrim, {
      x: -5.25,
      y: 0.56,
      z: -1.82,
      receive: true,
    }));
    for (let row = 0; row < 3; row++) {
      const y = 0.3 + row * 0.28;
      g.add(mesh(new THREE.BoxGeometry(0.6, 0.035, 2.25), m.wood, {
        x: -4.97,
        y,
        z: -1.82,
        rx: -0.12,
        receive: true,
      }));
      for (let i = 0; i < 5; i++) {
        const coverCanvas = canvasTexture(220, 300, (ctx, w, h) => {
          const rng = new RNG(4300 + row * 10 + i);
          const hue = rng.float(0, 1);
          ctx.fillStyle = `hsl(${hue * 360},${rng.float(25, 62)}%,${rng.float(55, 86)}%)`;
          ctx.fillRect(0, 0, w, h);
          ctx.fillStyle = 'rgba(255,255,255,.86)';
          ctx.fillRect(14, 18, w - 28, h * 0.42);
          ctx.fillStyle = 'rgba(20,24,23,.75)';
          ctx.font = '800 22px "Microsoft YaHei", sans-serif';
          ctx.fillText(['CITY', 'TRAVEL', 'LIFE', 'POP', 'TOKYO'][i % 5], 25, h * 0.6);
          ctx.fillStyle = `hsl(${(hue * 360 + 180) % 360},55%,28%)`;
          ctx.font = '800 22px Arial';
          ctx.fillText('WEEKLY', 22, h * 0.73);
          ctx.fillStyle = 'rgba(255,255,255,.18)';
          for (let j = 0; j < 4; j++) ctx.fillRect(22, h * 0.8 + j * 9, w - 44, 2);
        }, { anisotropy: 4 });
        const cover = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.52), new THREE.MeshBasicMaterial({
          map: coverCanvas,
          side: THREE.DoubleSide,
          toneMapped: true,
        }));
        cover.position.set(-4.72, y + 0.28, -2.72 + i * 0.38);
        cover.rotation.set(-0.2, Math.PI / 2 + 0.1, 0);
        g.add(cover);
      }
    }
    this.interiorColliders.push({ x1: -5.5, x2: -4.4, z1: -3.05, z2: -0.55 });
  }

  buildCounter() {
    const m = this.materials;
    const g = this.group;

    // Main counter block.
    g.add(mesh(makeRounded(2.55, 0.94, 2.35, 0.04, 2), m.white, {
      x: 4.24,
      y: 0.61,
      z: -3.12,
      receive: true,
      cast: true,
    }));
    g.add(mesh(new THREE.BoxGeometry(2.58, 0.055, 2.38), m.counterTop, {
      x: 4.24,
      y: 1.1,
      z: -3.12,
    }));
    // Green/red/orange stripe on the customer-facing side.
    const stripeCanvas = canvasTexture(1024, 128, (ctx, w, h) => {
      ctx.fillStyle = '#f7f3e8';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00845b';
      ctx.fillRect(0, 26, w, 9);
      ctx.fillStyle = '#f58220';
      ctx.fillRect(0, 35, w, 5);
      ctx.fillStyle = '#e33b2f';
      ctx.fillRect(0, 40, w, 3);
      ctx.fillStyle = '#1b3e32';
      ctx.font = '700 30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('7-ELEVEN  ·  COFFEE & HOT FOOD  ·  OPEN 24H', w / 2, 91);
    }, { anisotropy: 4 });
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.42), new THREE.MeshBasicMaterial({
      map: stripeCanvas,
      toneMapped: true,
    }));
    stripe.position.set(4.24, 0.72, -1.94);
    g.add(stripe);

    // POS terminal on a stand.
    const screenCanvas = canvasTexture(512, 320, (ctx, w, h) => {
      ctx.fillStyle = '#07160f';
      ctx.fillRect(0, 0, w, h);
      const g2 = ctx.createLinearGradient(0, 0, w, h);
      g2.addColorStop(0, 'rgba(23,122,88,.35)');
      g2.addColorStop(1, 'rgba(7,22,15,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#e9f4e9';
      ctx.font = '700 27px Arial';
      ctx.fillText('7-ELEVEN', 26, 43);
      ctx.fillStyle = '#e9c979';
      ctx.font = '400 15px "Microsoft YaHei", sans-serif';
      ctx.fillText('セブン-イレブン', 26, 68);
      ctx.fillStyle = '#2bdba3';
      ctx.font = '800 56px Arial';
      ctx.fillText('¥ 1,284', 28, 149);
      ctx.fillStyle = 'rgba(225,242,230,.57)';
      ctx.font = '400 16px "Microsoft YaHei", sans-serif';
      ctx.fillText('コーヒー  ¥ 120', 30, 203);
      ctx.fillText('おでん  ¥ 96', 30, 229);
      ctx.fillText('からあげ  ¥ 238', 30, 255);
      ctx.fillStyle = '#e33b2f';
      ctx.fillRect(31, 279, 196, 4);
    }, { anisotropy: 4 });
    const stand = mesh(new THREE.BoxGeometry(0.45, 0.12, 0.28), m.black, {
      x: 3.7,
      y: 1.18,
      z: -2.55,
    });
    g.add(stand);
    g.add(mesh(new THREE.CylinderGeometry(0.028, 0.035, 0.34, 8), m.black, {
      x: 3.7,
      y: 1.35,
      z: -2.55,
    }));
    const pos = new THREE.Mesh(new THREE.PlaneGeometry(0.68, 0.42), new THREE.MeshBasicMaterial({
      map: screenCanvas,
      toneMapped: true,
    }));
    pos.position.set(3.7, 1.67, -2.43);
    pos.rotation.x = -0.08;
    g.add(pos);
    g.add(mesh(makeRounded(0.62, 0.42, 0.06, 0.02, 2), m.darkTrim, {
      x: 3.7, y: 1.67, z: -2.48, rx: -0.08,
    }));

    // Hot food warmer with a visible grill, glass rails and a dark sign.
    const warmerGroup = new THREE.Group();
    warmerGroup.position.set(4.95, 1.1, -2.58);
    warmerGroup.add(mesh(makeRounded(0.86, 0.12, 0.66, 0.03, 2), m.steel, {
      y: 0.06,
    }));
    const warmerGlass = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.44, 0.6), m.counterGlass);
    warmerGlass.position.y = 0.34;
    warmerGroup.add(warmerGlass);
    // Dark orange heated tray rather than a white emissive slab.
    warmerGroup.add(mesh(new THREE.BoxGeometry(0.77, 0.016, 0.55), new THREE.MeshStandardMaterial({
      color: 0x552b12,
      emissive: 0x8d320b,
      emissiveIntensity: 0.45,
      roughness: 0.35,
      metalness: 0.25,
    }), {
      y: 0.155,
    }));
    for (let i = 0; i < 5; i++) {
      warmerGroup.add(mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.5, 8), m.darkTrim, {
        x: -0.3 + i * 0.15,
        y: 0.19,
        z: 0,
        rz: Math.PI / 2,
      }));
    }
    for (let i = 0; i < 4; i++) {
      warmerGroup.add(mesh(new THREE.CylinderGeometry(0.045, 0.052, 0.3, 10), new THREE.MeshStandardMaterial({
        color: 0x9f5127,
        roughness: 0.55,
        metalness: 0.08,
      }), {
        x: -0.24 + i * 0.16,
        y: 0.24,
        z: 0.015,
        rx: Math.PI / 2,
      }));
    }
    // Glass rails and handle.
    for (const x of [-0.4, 0.4]) {
      warmerGroup.add(mesh(new THREE.BoxGeometry(0.024, 0.46, 0.024), m.darkTrim, {
        x,
        y: 0.34,
        z: 0.3,
      }));
      warmerGroup.add(mesh(new THREE.BoxGeometry(0.024, 0.46, 0.024), m.darkTrim, {
        x,
        y: 0.34,
        z: -0.3,
      }));
    }
    warmerGroup.add(mesh(new THREE.BoxGeometry(0.82, 0.025, 0.024), m.darkTrim, {
      y: 0.575,
      z: 0.3,
    }));
    warmerGroup.add(mesh(new THREE.BoxGeometry(0.5, 0.018, 0.028), m.metal, {
      y: 0.39,
      z: 0.315,
    }));
    const warmerLabel = new THREE.Mesh(new THREE.PlaneGeometry(0.68, 0.12), new THREE.MeshBasicMaterial({
      map: canvasTexture(512, 80, (ctx, w, h) => {
        ctx.fillStyle = '#f0e6d5';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#e33b2f';
        ctx.font = '800 42px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('HOT FOOD', w / 2, 56);
      }, { anisotropy: 4 }),
      color: 0xd9d1c4,
      toneMapped: true,
    }));
    warmerLabel.position.set(0, 0.7, 0.02);
    warmerGroup.add(warmerLabel);
    g.add(warmerGroup);

    // Card reader, receipt roll, lids and a small tissue box.
    g.add(mesh(makeRounded(0.14, 0.07, 0.11, 0.02, 2), m.black, {
      x: 3.35, y: 1.15, z: -2.96,
    }));
    g.add(mesh(new THREE.BoxGeometry(0.08, 0.018, 0.06), m.steel, {
      x: 3.35, y: 1.19, z: -2.96,
      rx: 0.08,
    }));
    g.add(mesh(makeRounded(0.16, 0.1, 0.1, 0.02, 2), m.white, {
      x: 3.38, y: 1.16, z: -3.7,
    }));
    for (let i = 0; i < 3; i++) {
      g.add(mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.018, 16), m.metal, {
        x: 5.02 + i * 0.075,
        y: 1.13,
        z: -1.84,
      }));
    }

    // Coffee machine.
    const coffee = new THREE.Group();
    coffee.position.set(5.35, 1.12, -3.25);
    coffee.add(mesh(makeRounded(0.55, 0.78, 0.48, 0.06, 3), m.black, {
      y: 0.39,
    }));
    coffee.add(mesh(new THREE.BoxGeometry(0.36, 0.22, 0.035), m.darkTrim, {
      y: 0.56,
      z: 0.245,
    }));
    const coffeeScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.24, 0.13), new THREE.MeshBasicMaterial({
      map: canvasTexture(384, 192, (ctx, w, h) => {
        ctx.fillStyle = '#0d1f18';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#7ee0b3';
        ctx.font = '700 28px Arial';
        ctx.fillText('COFFEE', 20, 46);
        ctx.fillStyle = '#fff3df';
        ctx.font = '400 18px "Microsoft YaHei", sans-serif';
        ctx.fillText('HOT  ·  ¥120', 20, 89);
        ctx.fillStyle = '#f58220';
        ctx.fillRect(20, 119, 190, 3);
        ctx.fillStyle = 'rgba(220,245,229,.35)';
        ctx.font = '400 12px Arial';
        ctx.fillText('SEVEN CAFÉ', 20, 150);
      }, { anisotropy: 4 }),
      toneMapped: true,
    }));
    coffeeScreen.position.set(0, 0.56, 0.265);
    coffee.add(coffeeScreen);
    coffee.add(mesh(new THREE.BoxGeometry(0.22, 0.015, 0.24), m.steel, {
      y: 0.16,
      z: 0.17,
    }));
    for (let i = 0; i < 3; i++) {
      coffee.add(mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.06, 14), m.white, {
        x: 0.27,
        y: 0.12 + i * 0.055,
        z: 0.03,
      }));
    }
    g.add(coffee);

    // Oden pot.
    const oden = new THREE.Group();
    oden.position.set(3.75, 1.12, -3.46);
    oden.add(mesh(makeRounded(0.7, 0.18, 0.48, 0.04, 2), m.steel, {
      y: 0.09,
    }));
    oden.add(mesh(new THREE.BoxGeometry(0.6, 0.04, 0.4), new THREE.MeshStandardMaterial({
      color: 0x9a5f2d,
      roughness: 0.28,
      metalness: 0.02,
      emissive: 0x2c1607,
      emissiveIntensity: 0.3,
    }), {
      y: 0.2,
    }));
    for (let i = 0; i < 5; i++) {
      oden.add(mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.42, 6), m.wood, {
        x: -0.22 + i * 0.11,
        y: 0.28,
        z: 0.03 + (i % 2) * 0.06,
        rz: 0.12,
      }));
    }
    g.add(oden);

    // Cup stacks and condiments.
    for (let i = 0; i < 3; i++) {
      g.add(mesh(new THREE.CylinderGeometry(0.045, 0.036, 0.085, 16), m.white, {
        x: 4.8 + i * 0.13,
        y: 1.17,
        z: -3.8,
      }));
    }
    for (let i = 0; i < 3; i++) {
      g.add(mesh(new THREE.CylinderGeometry(0.025, 0.022, 0.16, 12), i === 0 ? m.red : i === 1 ? m.orange : m.green, {
        x: 3.36 + i * 0.07,
        y: 1.25,
        z: -3.9,
      }));
    }

    // Hanging menu sign above the counter.
    const menuCanvas = canvasTexture(1024, 256, (ctx, w, h) => {
      ctx.fillStyle = '#f7f3e8';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00845b';
      ctx.fillRect(0, 0, w, 23);
      ctx.fillStyle = '#f58220';
      ctx.fillRect(0, 23, w, 8);
      ctx.fillStyle = '#e33b2f';
      ctx.fillRect(0, 31, w, 6);
      ctx.fillStyle = '#1b3b31';
      ctx.font = '800 58px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('COFFEE  ·  HOT FOOD  ·  ATM', w / 2, 128);
      ctx.fillStyle = '#56645c';
      ctx.font = '500 25px "Microsoft YaHei", sans-serif';
      ctx.fillText('24 小时营业 · 欢迎光临', w / 2, 186);
    }, { anisotropy: 8 });
    const menu = new THREE.Mesh(new THREE.PlaneGeometry(1.58, 0.39), new THREE.MeshBasicMaterial({
      map: menuCanvas,
      color: 0xded7ca,
      toneMapped: true,
    }));
    menu.position.set(2.5, 2.52, -5.25);
    menu.rotation.y = -0.05;
    g.add(menu);
    g.add(mesh(new THREE.BoxGeometry(1.64, 0.45, 0.04), m.darkTrim, {
      x: 2.5, y: 2.52, z: -5.3, ry: -0.05,
    }));
    for (const x of [1.86, 3.12]) {
      g.add(mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.5, 6), m.darkTrim, {
        x, y: 2.78, z: -5.29,
      }));
    }

    this.interiorColliders.push({ x1: 2.86, x2: 5.7, z1: -4.5, z2: -1.78 });
  }

  buildCeiling() {
    const m = this.materials;
    const g = this.group;
    const y = CEIL_Y - 0.035;

    // Ceiling beams.
    for (let z = -0.9; z > -D + 0.2; z -= 1.6) {
      g.add(mesh(new THREE.BoxGeometry(W - 0.4, 0.09, 0.1), m.metal, {
        y: y - 0.02,
        z,
      }));
    }
    for (let x = -4.8; x < 5.2; x += 2.4) {
      g.add(mesh(new THREE.BoxGeometry(0.08, 0.08, D - 0.3), m.metal, {
        x,
        y: y - 0.01,
        z: -D / 2,
      }));
    }
    // Fluorescent strips.
    for (let i = 0; i < 5; i++) {
      const x = -4.4 + i * 2.2;
      const fixture = mesh(makeRounded(0.24, 0.045, 2.8, 0.018, 2), m.lightPanel, {
        x,
        y: y - 0.045,
        z: -4.4,
      });
      fixture.rotation.x = 0;
      g.add(fixture);
      g.add(mesh(new THREE.BoxGeometry(0.29, 0.03, 2.88), m.metal, {
        x,
        y: y + 0.008,
        z: -4.4,
      }));
    }

    // Hanging aisle sign with an arrow.
    const aisleCanvas = canvasTexture(1024, 224, (ctx, w, h) => {
      ctx.fillStyle = '#f7f3e8';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00845b';
      ctx.fillRect(0, 0, w, 19);
      ctx.fillStyle = '#f58220';
      ctx.fillRect(0, 19, w, 7);
      ctx.fillStyle = '#e33b2f';
      ctx.fillRect(0, 26, w, 5);
      ctx.fillStyle = '#1b3b31';
      ctx.font = '800 70px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('SNACKS · DRINKS', 36, 132);
      ctx.font = '500 30px "Microsoft YaHei", sans-serif';
      ctx.fillStyle = '#5e6a62';
      ctx.fillText('お菓子・飲みもの  →', 36, 184);
    }, { anisotropy: 8 });
    const aisle = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.53), new THREE.MeshBasicMaterial({
      map: aisleCanvas,
      color: 0xe9e3d6,
      toneMapped: true,
      side: THREE.DoubleSide,
    }));
    aisle.position.set(-2.2, 2.39, -5.1);
    g.add(aisle);
    g.add(mesh(new THREE.BoxGeometry(2.46, 0.59, 0.04), m.darkTrim, {
      x: -2.2, y: 2.39, z: -5.13,
    }));
    for (const x of [-3.1, -1.3]) {
      g.add(mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.75, 6), m.darkTrim, {
        x, y: 2.86, z: -5.13,
      }));
    }

    // Security camera in the corner.
    g.add(mesh(new THREE.BoxGeometry(0.18, 0.12, 0.28), m.black, {
      x: 5.55,
      y: 2.9,
      z: -0.65,
      ry: -0.3,
    }));
    g.add(mesh(new THREE.CylinderGeometry(0.035, 0.05, 0.1, 12), m.darkTrim, {
      x: 5.5,
      y: 2.92,
      z: -0.52,
      rx: Math.PI / 2,
    }));
  }

  buildInteriorDetails() {
    const m = this.materials;
    const g = this.group;

    // Wall poster near the entrance.
    const poster = new THREE.Mesh(new THREE.PlaneGeometry(1.02, 1.5), m.posterOden);
    poster.position.set(4.5, 1.52, -8.82);
    g.add(poster);
    const posterFrame = new THREE.Mesh(
      new THREE.PlaneGeometry(1.1, 1.58),
      new THREE.MeshBasicMaterial({ color: 0x27362f, side: THREE.FrontSide, toneMapped: true })
    );
    posterFrame.position.set(4.5, 1.52, -8.84);
    g.add(posterFrame);

    // A little window bar / casual counter on the left wall.
    const bar = new THREE.Group();
    bar.position.set(-5.48, 0, -5.25);
    bar.add(mesh(makeRounded(0.62, 0.08, 2.55, 0.03, 2), m.wood, {
      x: 0.18, y: 1.03, z: 0, receive: true,
    }));
    bar.add(mesh(new THREE.BoxGeometry(0.1, 0.72, 0.1), m.darkTrim, { x: 0.18, y: 0.65, z: -1.05 }));
    bar.add(mesh(new THREE.BoxGeometry(0.1, 0.72, 0.1), m.darkTrim, { x: 0.18, y: 0.65, z: 1.05 }));
    bar.add(mesh(new THREE.BoxGeometry(0.64, 0.05, 0.05), m.green, { x: 0.18, y: 0.78, z: -1.05 }));
    bar.add(mesh(new THREE.BoxGeometry(0.64, 0.05, 0.05), m.green, { x: 0.18, y: 0.78, z: 1.05 }));
    for (const z of [-0.55, 0.55]) {
      bar.add(mesh(new THREE.CylinderGeometry(0.17, 0.19, 0.06, 16), m.darkTrim, {
        x: -0.14, y: 0.76, z,
      }));
      bar.add(mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.67, 8), m.metal, {
        x: -0.14, y: 0.42, z,
      }));
    }
    g.add(bar);
    this.interiorColliders.push({ x1: -5.86, x2: -5.1, z1: -6.65, z2: -3.85 });

    // Right-hand wall: posters and a brand panel.
    const addWallPoster = (material, x, y, z, width, height, ry) => {
      const wallPoster = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
      wallPoster.position.set(x, y, z);
      wallPoster.rotation.y = ry;
      g.add(wallPoster);
      const backing = new THREE.Mesh(
        new THREE.PlaneGeometry(width + 0.08, height + 0.08),
        new THREE.MeshBasicMaterial({ color: 0x1e332b, side: THREE.FrontSide, toneMapped: true })
      );
      backing.position.set(x + (ry > 0 ? -0.004 : 0.004), y, z);
      backing.rotation.y = ry;
      g.add(backing);
    };
    addWallPoster(m.posterCoffee, 5.84, 1.7, -3.55, 0.88, 1.28, -Math.PI / 2);
    addWallPoster(m.posterFood, 5.84, 1.63, -5.6, 0.8, 1.15, -Math.PI / 2);
    addWallPoster(m.posterCoffee, -5.84, 1.68, -6.8, 0.8, 1.15, Math.PI / 2);

    // Interior brand stripe along the wall heads.
    for (const { x, z, len, ry } of [
      { x: 0, z: -8.835, len: 11.65, ry: 0 },
      { x: -5.84, z: -4.5, len: 8.7, ry: Math.PI / 2 },
      { x: 5.84, z: -4.5, len: 8.7, ry: Math.PI / 2 },
    ]) {
      const stripe = mesh(new THREE.BoxGeometry(len, 0.055, 0.035), m.green, {
        x, y: 2.94, z, ry,
      });
      g.add(stripe);
      const orange = mesh(new THREE.BoxGeometry(len, 0.018, 0.04), m.orange, {
        x, y: 2.9, z, ry,
      });
      g.add(orange);
    }

    // Basket stack near the entrance.
    for (let i = 0; i < 4; i++) {
      g.add(mesh(makeRounded(0.42, 0.16, 0.3, 0.03, 2), m.white, {
        x: 3.0,
        y: 0.3 + i * 0.055,
        z: -0.92,
        rz: 0.02 * i,
      }));
    }
    // Inside umbrella stand (small).
    g.add(mesh(new THREE.CylinderGeometry(0.16, 0.19, 0.46, 16), m.darkTrim, {
      x: 0.2,
      y: 0.4,
      z: -0.85,
    }));
    // ATM along the right back wall.
    g.add(mesh(makeRounded(0.66, 1.25, 0.5, 0.05, 2), m.black, {
      x: 5.28,
      y: 0.84,
      z: -6.9,
    }));
    const atmScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.47, 0.3), new THREE.MeshBasicMaterial({
      map: canvasTexture(384, 256, (ctx, w, h) => {
        ctx.fillStyle = '#0b1b13';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#2bdba3';
        ctx.font = '800 30px Arial';
        ctx.fillText('ATM', 25, 48);
        ctx.fillStyle = '#dff6e8';
        ctx.font = '400 20px "Microsoft YaHei", sans-serif';
        ctx.fillText('24 小时可用', 25, 92);
        ctx.fillStyle = '#f0cc83';
        ctx.font = '400 14px Arial';
        ctx.fillText('SEVEN BANK', 25, 130);
        ctx.fillStyle = '#2bdba3';
        ctx.fillRect(25, 157, 280, 2);
      }, { anisotropy: 4 }),
      toneMapped: true,
    }));
    atmScreen.position.set(5.28, 1.2, -6.63);
    g.add(atmScreen);
    const atmSign = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.16), new THREE.MeshBasicMaterial({
      map: canvasTexture(512, 192, (ctx, w, h) => {
        ctx.fillStyle = '#00845b';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#f7f3e8';
        ctx.font = '800 84px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('ATM', w / 2, 122);
      }, { anisotropy: 4 }),
      toneMapped: true,
    }));
    atmSign.position.set(5.28, 2.09, -6.63);
    g.add(atmSign);
    this.interiorColliders.push({ x1: 4.8, x2: 5.7, z1: -7.3, z2: -6.4 });

    // A central promotional table gives the floor a focal point.
    this.buildPromoIsland();

    // Ceiling number plate / store id above the door.
    const idTexture = canvasTexture(640, 128, (ctx, w, h) => {
      ctx.fillStyle = 'rgba(247,243,233,.94)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00845b';
      ctx.font = '800 44px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('STORE No. 1127', w / 2, 58);
      ctx.fillStyle = '#5e6b63';
      ctx.font = '500 22px "Microsoft YaHei", sans-serif';
      ctx.fillText('OPEN 24 HOURS · SHIBUYA', w / 2, 96);
    }, { anisotropy: 4 });
    const idSign = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 0.27), new THREE.MeshBasicMaterial({
      map: idTexture,
      toneMapped: true,
    }));
    idSign.position.set(DOOR_X, 2.9, -0.32);
    g.add(idSign);

    // Grounding and glossy-floor cues.
    this.addFloorShadow(-3.9, -4.72, 1.15, 4.35, 0.44);
    this.addFloorShadow(-1.55, -4.72, 1.15, 4.35, 0.44);
    this.addFloorShadow(4.24, -3.12, 2.95, 2.7, 0.4);
    this.addFloorShadow(-2.12, -8.3, 6.85, 0.92, 0.38);
    this.addFloorShadow(-4.98, -1.82, 1.2, 2.55, 0.3);
    this.addFloorShadow(-5.45, -5.25, 1.0, 2.75, 0.32);
    this.addFloorShadow(0.18, -0.95, 1.2, 0.8, 0.2);
    for (const x of [-4.4, -2.2, 0, 2.2, 4.4]) {
      this.addFloorGlow(x, -4.4, 0.55, 2.8, 0.11);
    }
    this.addFloorGrid();

    // A back-wall menu board above the customer counter.
    const menuTexture = canvasTexture(1024, 320, (ctx, w, h) => {
      ctx.fillStyle = '#173c30';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00845b';
      ctx.fillRect(0, 0, w, 46);
      ctx.fillStyle = '#f4efe2';
      ctx.font = '800 30px Arial';
      ctx.fillText('7-ELEVEN  HOT FOOD & COFFEE', 32, 32);
      ctx.fillStyle = '#f7e5c8';
      ctx.font = '800 36px "Microsoft YaHei", sans-serif';
      ctx.fillText('今日推荐', 32, 100);
      ctx.fillStyle = '#f7f3e8';
      ctx.font = '600 25px "Microsoft YaHei", sans-serif';
      ctx.fillText('现磨咖啡    ¥120      关东煮  ¥96', 32, 154);
      ctx.fillText('炸鸡        ¥238      饭团    ¥140', 32, 196);
      ctx.fillStyle = '#f58220';
      ctx.fillRect(32, 222, 820, 4);
      ctx.fillStyle = '#9ad3b7';
      ctx.font = '500 18px Arial';
      ctx.fillText('OPEN 24 HOURS · FRESHLY MADE · ATM AVAILABLE', 32, 262);
    }, { anisotropy: 8 });
    const menuWall = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 0.62), new THREE.MeshBasicMaterial({
      map: menuTexture,
      color: 0xe9e0d3,
      toneMapped: true,
    }));
    menuWall.position.set(5.84, 2.18, -3.28);
    menuWall.rotation.y = -Math.PI / 2;
    g.add(menuWall);
    g.add(mesh(new THREE.BoxGeometry(0.02, 0.68, 2.06), m.darkTrim, {
      x: 5.862, y: 2.18, z: -3.28,
    }));
  }

  addFloorGrid() {
    const grout = new THREE.MeshStandardMaterial({
      color: 0x948c7e,
      roughness: 0.62,
      metalness: 0.02,
    });
    const top = FLOOR_Y + 0.013;
    for (let x = -5.6; x <= 5.6; x += 0.8) {
      this.group.add(mesh(new THREE.BoxGeometry(0.012, 0.0025, 8.2), grout, {
        x,
        y: top,
        z: -4.35,
        receive: true,
      }));
    }
    for (let z = -8.75; z <= -0.15; z += 0.8) {
      this.group.add(mesh(new THREE.BoxGeometry(11.35, 0.0025, 0.012), grout, {
        x: 0,
        y: top,
        z,
        receive: true,
      }));
    }
  }

  addFloorShadow(x, z, w, d, opacity = 0.35) {
    const material = new THREE.MeshBasicMaterial({
      map: this.shadowTexture,
      transparent: true,
      opacity,
      depthWrite: false,
      color: 0x000000,
      side: THREE.FrontSide,
      toneMapped: true,
    });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, d), material);
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(x, FLOOR_Y + 0.012, z);
    plane.renderOrder = 2;
    this.group.add(plane);
    return plane;
  }

  addFloorGlow(x, z, w, d, opacity = 0.06) {
    if (!this.glowTexture) {
      this.glowTexture = makeRadialTexture(256, [
        [0, 'rgba(255,246,224,.7)'],
        [0.3, 'rgba(255,239,208,.22)'],
        [0.72, 'rgba(255,234,197,.05)'],
        [1, 'rgba(255,234,197,0)'],
      ]);
    }
    const material = new THREE.MeshBasicMaterial({
      map: this.glowTexture,
      color: 0xfff0d4,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: true,
    });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, d), material);
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(x, FLOOR_Y + 0.016, z);
    plane.renderOrder = 3;
    this.group.add(plane);
  }

  buildPromoIsland() {
    const m = this.materials;
    const group = new THREE.Group();
    group.position.set(-0.12, FLOOR_Y, -3.15);
    group.add(mesh(new THREE.CylinderGeometry(0.38, 0.44, 0.7, 24), m.white, {
      y: 0.35,
      receive: true,
    }));
    group.add(mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.055, 32), m.wood, {
      y: 0.72,
      receive: true,
    }));
    group.add(mesh(new THREE.TorusGeometry(0.45, 0.025, 8, 28), m.green, {
      y: 0.045, rx: Math.PI / 2,
    }));
    const rng = new RNG(8822);
    for (let i = 0; i < 4; i++) {
      const box = mesh(makeRounded(0.3, 0.075, 0.21, 0.025, 2), i % 2 ? m.green : m.orange, {
        x: -0.22 + (i % 2) * 0.32,
        y: 0.79 + Math.floor(i / 2) * 0.08,
        z: 0.03 + Math.floor(i / 2) * 0.07,
        ry: rng.float(-0.18, 0.18),
        receive: true,
      });
      group.add(box);
    }
    group.add(mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.025, 16), m.white, {
      x: 0.16, y: 0.77, z: -0.22,
    }));
    group.add(mesh(makeRounded(0.18, 0.08, 0.14, 0.02, 2), m.red, {
      x: 0.14, y: 0.81, z: -0.2,
    }));
    const signTex = canvasTexture(256, 320, (ctx, w, h) => {
      ctx.fillStyle = '#f4efe2';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#e33b2f';
      ctx.fillRect(0, 0, w, 32);
      ctx.fillStyle = '#f7f3e8';
      ctx.font = '900 45px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('NEW', w / 2, 95);
      ctx.fillStyle = '#173b31';
      ctx.font = '700 30px "Microsoft YaHei", sans-serif';
      ctx.fillText('饭团', w / 2, 148);
      ctx.fillText('上市', w / 2, 186);
      ctx.fillStyle = '#00845b';
      ctx.fillRect(28, 214, w - 56, 4);
      ctx.fillStyle = '#555f56';
      ctx.font = '500 17px "Microsoft YaHei", sans-serif';
      ctx.fillText('7-ELEVEN', w / 2, 252);
    }, { anisotropy: 4 });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.27, 0.34), new THREE.MeshBasicMaterial({
      map: signTex,
      toneMapped: true,
    }));
    sign.position.set(0.04, 1.0, -0.04);
    sign.rotation.y = -0.2;
    group.add(sign);
    this.group.add(group);
    this.interiorColliders.push({ x1: -0.78, x2: 0.54, z1: -3.8, z2: -2.55 });
    this.addFloorShadow(-0.12, -3.15, 1.35, 1.35, 0.26);
    this.promoIsland = group;
  }

  buildClock() {
    const m = this.materials;
    const faceMat = new THREE.MeshBasicMaterial({
      map: clockTexture(),
      transparent: true,
      toneMapped: true,
    });
    const clock = new THREE.Group();
    clock.position.set(3.9, 2.73, -8.84);
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.46, 40), faceMat);
    clock.add(face);
    clock.add(mesh(new THREE.TorusGeometry(0.47, 0.02, 8, 48), m.darkTrim, {
      z: 0.01,
    }));
    const hourPivot = new THREE.Group();
    hourPivot.add(mesh(new THREE.BoxGeometry(0.035, 0.27, 0.018), m.darkTrim, {
      y: 0.13,
      z: 0.03,
    }));
    const minutePivot = new THREE.Group();
    minutePivot.add(mesh(new THREE.BoxGeometry(0.018, 0.36, 0.018), m.darkTrim, {
      y: 0.17,
      z: 0.035,
    }));
    const secondPivot = new THREE.Group();
    secondPivot.add(mesh(new THREE.BoxGeometry(0.008, 0.4, 0.008), m.red, {
      y: 0.18,
      z: 0.042,
    }));
    clock.add(hourPivot, minutePivot, secondPivot);
    const center = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.02, 12), m.orange, {
      rx: Math.PI / 2,
      z: 0.04,
    });
    clock.add(center);
    this.clock = { hourHand: hourPivot, minuteHand: minutePivot, secondHand: secondPivot, group: clock };
    this.group.add(clock);
  }

  /* ----------------------------- props ----------------------------- */

  buildExteriorProps() {
    this.buildAFrame();
    this.buildBicycle();
    this.buildBins();
    this.buildIceBox();
    this.buildOutdoorDetails();
  }

  addContactShadow(x, z, w, d, opacity = 0.35) {
    const texture = makeRadialTexture(128, [
      [0, `rgba(0,0,0,${opacity})`],
      [0.5, `rgba(0,0,0,${opacity * 0.45})`],
      [1, 'rgba(0,0,0,0)'],
    ]);
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      toneMapped: true,
    });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(x, 0.055, z);
    this.group.add(plane);
    return plane;
  }

  buildAFrame() {
    const m = this.materials;
    const g = new THREE.Group();
    g.position.set(-0.95, 0, 1.5);
    const boardTexture = canvasTexture(512, 640, (ctx, w, h) => {
      ctx.fillStyle = '#f2ede1';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00845b';
      ctx.fillRect(0, 0, w, 16);
      ctx.fillStyle = '#f58220';
      ctx.fillRect(0, 16, w, 7);
      ctx.fillStyle = '#e33b2f';
      ctx.fillRect(0, 23, w, 5);
      ctx.fillStyle = '#173b31';
      ctx.font = '800 53px "Microsoft YaHei", sans-serif';
      ctx.fillText('现磨咖啡', 38, 118);
      ctx.font = '700 35px Arial';
      ctx.fillText('¥120', 38, 173);
      ctx.fillStyle = '#4b5b52';
      ctx.font = '600 28px "Microsoft YaHei", sans-serif';
      ctx.fillText('SEVEN CAFÉ', 38, 224);
      ctx.strokeStyle = 'rgba(28,57,45,.25)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(38, 253);
      ctx.lineTo(w - 38, 253);
      ctx.stroke();
      ctx.fillStyle = '#e33b2f';
      ctx.font = '800 40px "Microsoft YaHei", sans-serif';
      ctx.fillText('关东煮', 38, 316);
      ctx.fillStyle = '#173b31';
      ctx.font = '600 24px "Microsoft YaHei", sans-serif';
      ctx.fillText('HOT FOOD / 24H', 38, 352);
      ctx.fillStyle = '#00845b';
      ctx.fillRect(38, 386, w - 76, 3);
      ctx.fillStyle = '#4e5d54';
      ctx.font = '500 21px "Microsoft YaHei", sans-serif';
      ctx.fillText('早餐 · 饭团 · 热咖啡', 38, 432);
      ctx.fillText('随时欢迎光临', 38, 469);
      ctx.fillStyle = '#00845b';
      ctx.font = '800 30px Arial';
      ctx.fillText('7-ELEVEN', 38, 540);
      ctx.fillStyle = '#f58220';
      ctx.fillRect(38, 558, w - 76, 5);
    }, { anisotropy: 4 });
    const boardMat = new THREE.MeshStandardMaterial({
      map: boardTexture,
      roughness: 0.64,
      metalness: 0.04,
    });
    for (const side of [-1, 1]) {
      const board = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 1.16), boardMat);
      board.position.set(0, 0.74, side * 0.16);
      board.rotation.y = side > 0 ? 0 : Math.PI;
      board.rotation.x = side * 0.12;
      g.add(board);
      g.add(mesh(new THREE.BoxGeometry(0.91, 1.28, 0.04), m.darkTrim, {
        y: 0.74,
        z: side * 0.18,
        rx: side * 0.12,
      }));
    }
    this.group.add(g);
    this.aframe = g;
    this.addContactShadow(-0.95, 1.5, 1.5, 0.8, 0.25);
  }

  buildBicycle() {
    const m = this.materials;
    const bike = new THREE.Group();
    bike.position.set(-3.9, 0.13, 1.16);
    bike.rotation.y = -0.2;
    const dark = m.darkTrim;
    const silver = m.metal;
    const r = 0.34;
    for (const x of [-0.52, 0.52]) {
      const wheel = new THREE.Mesh(new THREE.TorusGeometry(r, 0.022, 8, 28), m.black);
      wheel.position.set(x, r, 0);
      wheel.rotation.y = Math.PI / 2;
      bike.add(wheel);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        bike.add(cylinderBetween(
          new THREE.Vector3(x, r, 0),
          new THREE.Vector3(x, r + Math.sin(a) * (r - 0.02), Math.cos(a) * (r - 0.02)),
          0.004,
          silver,
          5
        ));
      }
    }
    const rear = new THREE.Vector3(-0.52, 0.34, 0);
    const front = new THREE.Vector3(0.52, 0.34, 0);
    const crank = new THREE.Vector3(-0.03, 0.34, 0);
    const seat = new THREE.Vector3(-0.13, 0.82, 0);
    const head = new THREE.Vector3(0.29, 0.73, 0);
    bike.add(cylinderBetween(rear, crank, 0.023, m.paintFrame || m.darkTrim));
    bike.add(cylinderBetween(crank, seat, 0.023, m.paintFrame || m.darkTrim));
    bike.add(cylinderBetween(seat, rear, 0.02, m.paintFrame || m.darkTrim));
    bike.add(cylinderBetween(seat, head, 0.02, m.paintFrame || m.darkTrim));
    bike.add(cylinderBetween(head, front, 0.015, m.paintFrame || m.darkTrim));
    bike.add(cylinderBetween(crank, front, 0.018, m.paintFrame || m.darkTrim));
    bike.add(cylinderBetween(head, new THREE.Vector3(0.32, 1.0, 0), 0.016, silver));
    bike.add(mesh(new THREE.BoxGeometry(0.22, 0.05, 0.04), m.black, {
      x: 0.32, y: 1.02, z: 0,
    }));
    bike.add(mesh(new THREE.BoxGeometry(0.28, 0.055, 0.15), m.black, {
      x: -0.13, y: 0.86, z: 0,
    }));
    bike.add(mesh(new THREE.BoxGeometry(0.24, 0.22, 0.05), m.darkTrim, {
      x: 0.34, y: 0.82, z: 0,
    }));
    bike.add(mesh(new THREE.BoxGeometry(0.35, 0.18, 0.28), m.metal, {
      x: 0.57, y: 0.63, z: 0,
      rx: 0.1,
    }));
    for (let i = 0; i < 4; i++) {
      bike.add(mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.28, 5), m.darkTrim, {
        x: 0.44 + (i % 2) * 0.25,
        y: 0.54,
        z: 0,
      }));
    }
    bike.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.group.add(bike);
    this.bicycle = bike;
    this.addContactShadow(-3.9, 1.16, 2.0, 0.7, 0.3);
  }

  buildBins() {
    const m = this.materials;
    const binGroup = new THREE.Group();
    binGroup.position.set(4.45, 0.12, 0.72);
    const colors = [m.green, m.orange, m.red];
    for (let i = 0; i < 3; i++) {
      const bin = mesh(makeRounded(0.52, 0.74, 0.46, 0.05, 2), i === 0 ? colors[2] : i === 1 ? colors[0] : colors[1], {
        x: (i - 1) * 0.58,
        y: 0.37,
        z: 0,
        cast: true,
        receive: true,
      });
      binGroup.add(bin);
      binGroup.add(mesh(new THREE.BoxGeometry(0.3, 0.055, 0.22), m.black, {
        x: (i - 1) * 0.58,
        y: 0.68,
        z: 0,
      }));
      const binLabel = mesh(
        new THREE.PlaneGeometry(0.32, 0.18),
        new THREE.MeshBasicMaterial({
          map: canvasTexture(384, 192, (ctx, w, h) => {
            ctx.fillStyle = '#f8f4ea';
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = '#25382e';
            ctx.font = '800 58px "Microsoft YaHei", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(['PET', '缶', '燃'][i], w / 2, 96);
            ctx.fillStyle = '#5e6a61';
            ctx.font = '500 24px "Microsoft YaHei", sans-serif';
            ctx.fillText(['饮料瓶', '易拉罐', '可燃'][i], w / 2, 142);
          }, { anisotropy: 4 }),
          toneMapped: true,
        }),
        {
          x: (i - 1) * 0.58,
          y: 0.36,
          z: 0.236,
        }
      );
      binGroup.add(binLabel);
    }
    this.group.add(binGroup);
    this.addContactShadow(4.45, 0.72, 2.0, 0.9, 0.25);
    this.bins = binGroup;
  }

  buildIceBox() {
    const m = this.materials;
    const box = new THREE.Group();
    box.position.set(-5.3, 0.12, 0.62);
    box.add(mesh(makeRounded(1.55, 0.75, 0.68, 0.08, 3), m.white, {
      y: 0.39,
      cast: true,
      receive: true,
    }));
    box.add(mesh(makeRounded(1.6, 0.08, 0.72, 0.03, 2), m.metal, {
      y: 0.79,
      cast: true,
    }));
    const iceCanvas = canvasTexture(512, 220, (ctx, w, h) => {
      ctx.fillStyle = '#edf4f4';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#1272a2';
      ctx.font = '900 105px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('ICE', w / 2, 129);
      ctx.fillStyle = '#e33b2f';
      ctx.font = '800 26px "Microsoft YaHei", sans-serif';
      ctx.fillText('冷たい氷', w / 2, 169);
      ctx.strokeStyle = '#00845b';
      ctx.lineWidth = 7;
      ctx.strokeRect(13, 13, w - 26, h - 26);
    }, { anisotropy: 4 });
    const label = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.5), new THREE.MeshBasicMaterial({
      map: iceCanvas,
      toneMapped: true,
    }));
    label.position.set(0, 0.43, 0.345);
    box.add(label);
    this.group.add(box);
    this.iceBox = box;
    this.addContactShadow(-5.3, 0.62, 1.9, 1.0, 0.25);
  }

  buildOutdoorDetails() {
    const m = this.materials;
    // Umbrella basket.
    const stand = new THREE.Group();
    stand.position.set(2.85, 0.12, 0.66);
    stand.add(mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.55, 16), m.darkTrim, {
      y: 0.27,
      cast: true,
    }));
    for (let i = 0; i < 4; i++) {
      const a = i * 1.6;
      const handle = mesh(new THREE.CylinderGeometry(0.01, 0.01, 1.2, 6), i % 2 ? m.steel : m.wood, {
        x: Math.cos(a) * 0.06,
        y: 0.85,
        z: Math.sin(a) * 0.06,
        rx: Math.cos(a) * 0.15,
        rz: Math.sin(a) * 0.15,
      });
      stand.add(handle);
    }
    this.group.add(stand);
    this.umbrellaStand = stand;

    // A small recycling bag and some wet leaves near the gutter.
    const paperMat = new THREE.MeshStandardMaterial({ color: 0xd9d0b6, roughness: 0.9 });
    const bag = mesh(new THREE.SphereGeometry(0.22, 10, 7), paperMat, {
      x: 5.9,
      y: 0.32,
      z: 1.35,
      cast: true,
    });
    bag.scale.set(1, 1.2, 0.8);
    this.group.add(bag);

    // Door light strip.
    this.group.add(mesh(new THREE.BoxGeometry(2.7, 0.035, 0.05), m.ledGreen, {
      x: DOOR_X,
      y: 2.89,
      z: 0.01,
    }));
    // Signage pointing to the car park (small auxiliary panel).
    const parkTex = canvasTexture(384, 256, (ctx, w, h) => {
      ctx.fillStyle = '#f4efe2';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = '#263d33';
      ctx.lineWidth = 10;
      ctx.strokeRect(8, 8, w - 16, h - 16);
      ctx.fillStyle = '#173b31';
      ctx.font = '900 72px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('P', w / 2, 106);
      ctx.fillStyle = '#e33b2f';
      ctx.font = '800 41px Arial';
      ctx.fillText('24H', w / 2, 166);
      ctx.fillStyle = '#00845b';
      ctx.font = '500 25px "Microsoft YaHei", sans-serif';
      ctx.fillText('駐車場', w / 2, 211);
    }, { anisotropy: 4 });
    const parkSign = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.75), new THREE.MeshStandardMaterial({
      map: parkTex,
      roughness: 0.55,
    }));
    parkSign.position.set(5.55, 1.7, 1.0);
    parkSign.rotation.y = 0.2;
    this.group.add(parkSign);
  }

  buildSnowCaps() {
    const mat = this.materials.snowCap;
    const group = new THREE.Group();
    const snowGeo = new THREE.IcosahedronGeometry(1, 2);
    const caps = [
      [-5.2, 3.2, 0.66, 1.9, 0.035, 0.32],
      [-2.8, 3.21, 0.7, 1.8, 0.04, 0.28],
      [0.2, 3.2, 0.64, 2.4, 0.032, 0.3],
      [3.2, 3.21, 0.7, 2.1, 0.04, 0.31],
      [5.2, 3.2, 0.68, 1.3, 0.028, 0.26],
      [0.1, 3.17, 1.38, 6.0, 0.028, 0.1],
      [0.1, 3.105, 1.43, 6.0, 0.035, 0.035],
      [8.0, 5.45, 2.25, 0.58, 0.03, 0.2],
      [-5.3, 0.86, 0.62, 0.9, 0.035, 0.22],
      [4.45, 0.82, 0.72, 0.7, 0.03, 0.18],
      [-0.95, 1.46, 1.5, 0.3, 0.018, 0.13],
      [-3.9, 0.96, 1.16, 0.2, 0.014, 0.08],
      [3.0, 1.0, 0.66, 0.15, 0.012, 0.1],
    ];
    for (const [x, y, z, sx, sy, sz] of caps) {
      group.add(mesh(snowGeo, mat, {
        x, y, z,
        sx, sy, sz,
        cast: false,
        receive: true,
      }));
    }
    group.visible = false;
    this.snowCaps = group;
    this.group.add(group);
  }

  /* ----------------------------- lights ---------------------------- */

  buildLights() {
    // Warm interior pools.
    this.interiorLights = [];
    const positions = [
      [-2.3, 2.88, -2.55, 9.5],
      [2.4, 2.88, -3.3, 9],
      [0, 2.88, -7.05, 10.5],
      [0.25, 2.82, -1.25, 5.5],
    ];
    for (const [x, y, z, intensity] of positions) {
      const l = new THREE.PointLight(0xffe7c4, intensity, 7.2, 2);
      l.position.set(x, y, z);
      this.group.add(l);
      this.interiorLights.push(l);
    }

    // Two broad, warm canopy pools carry the storefront light.
    this.canopyLights = [];
    for (const x of [-3.2, 4.4]) {
      const l = new THREE.PointLight(0xffd2a0, 7, 7.4, 2);
      l.position.set(x, 2.85, 1.02);
      this.group.add(l);
      this.canopyLights.push(l);
    }
  }

  /* ----------------------------- runtime --------------------------- */

  setTime(hour) {
    this.timeHour = hour;
    if (!this.clock) return;
    const minutes = (hour % 1) * 60;
    const hours12 = hour % 12;
    const minuteAngle = (minutes / 60) * Math.PI * 2;
    const hourAngle = (hours12 / 12) * Math.PI * 2 + minuteAngle / 12;
    this.clock.minuteHand.rotation.z = -minuteAngle;
    this.clock.hourHand.rotation.z = -hourAngle;
    this.clock.secondHand.rotation.z = -((minutes / 60) * Math.PI * 2);
  }

  setClock(hour) {
    this.setTime(hour);
  }

  setSnowCover(amount) {
    this.snowCover = clamp(amount, 0, 1);
    this.materials.snow.opacity = this.snowCover;
    this.materials.snow.transparent = this.snowCover > 0.01;
    this.snowCaps.visible = this.snowCover > 0.01;
  }

  update(dt, elapsed, state = {}) {
    this.elapsed = elapsed;
    this.doorAmount = damp(this.doorAmount, this.doorOpenTarget ? 1 : 0, 5.8, dt);
    const open = this.doorAmount;
    this.leftDoor.position.x = this.leftDoorBaseX - open * 1.22;
    this.rightDoor.position.x = this.rightDoorBaseX + open * 1.22;
    // Sensor LED gently pulses.
    if (this.sensorLight) {
      this.sensorLight.material.opacity = 0.65 + Math.sin(elapsed * 2.4) * 0.2;
    }
    if (typeof state.snowCover === 'number') this.setSnowCover(state.snowCover);
    if (this.clock && typeof state.hour === 'number' && Math.abs(state.hour - this.timeHour) > 0.0001) {
      this.setTime(state.hour);
    }
    // Small breathing of the warmer light.
    if (this.warmerLight) this.warmerLight.intensity = 3.1 + Math.sin(elapsed * 1.3) * 0.45;
  }

  /* ---------------------------- collision -------------------------- */

  getColliders() {
    return this.interiorColliders;
  }

  getBounds() {
    return this.interiorBounds;
  }

  getDoorPosition(inside = false) {
    return new THREE.Vector3(DOOR_X, inside ? 1.7 : 1.72, inside ? -1.25 : 1.15);
  }

  getInteriorPose() {
    return {
      position: new THREE.Vector3(DOOR_X, 1.72, -1.35),
      target: new THREE.Vector3(0.35, 1.14, -5.35),
    };
  }

  getDoorWorldXZ() {
    return { x: DOOR_X, z: 0 };
  }

  getFacadeHeight() {
    return 4.6;
  }
}
