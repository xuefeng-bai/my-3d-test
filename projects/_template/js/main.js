import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ---------------------------------------------------------------------------
// 模板场景：替换成你自己的 3D 实验。
// 共享依赖已通过 index.html 的 importmap 指向 ../../shared/vendor/three/。
// ---------------------------------------------------------------------------

const canvas = document.querySelector('#scene');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.background = new THREE.Color('#0a0c10');
scene.fog = new THREE.Fog('#0a0c10', 12, 38);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(5.2, 3.6, 7.4);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.target.set(0, 1.2, 0);
controls.minDistance = 3;
controls.maxDistance = 18;
controls.maxPolarAngle = Math.PI * 0.495;

scene.add(new THREE.HemisphereLight('#9fc8ff', '#1a1f28', 1.15));

const keyLight = new THREE.DirectionalLight('#fff2d8', 2.4);
keyLight.position.set(6, 9, 4);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight('#67d9ff', 1.1);
rimLight.position.set(-7, 4, -6);
scene.add(rimLight);

const ground = new THREE.Mesh(
  new THREE.CircleGeometry(24, 64),
  new THREE.MeshStandardMaterial({ color: '#12151b', roughness: 0.92, metalness: 0.05 })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const grid = new THREE.GridHelper(24, 24, '#2c3a46', '#171d24');
grid.position.y = 0.001;
scene.add(grid);

const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1.25, 0.36, 220, 32),
  new THREE.MeshStandardMaterial({
    color: '#7fe3b0',
    roughness: 0.24,
    metalness: 0.72,
    emissive: '#123c2c',
    emissiveIntensity: 0.7,
  })
);
knot.position.y = 2.1;
scene.add(knot);

const clock = new THREE.Clock();
const homePosition = camera.position.clone();
const homeTarget = controls.target.clone();

canvas.addEventListener('dblclick', () => {
  camera.position.copy(homePosition);
  controls.target.copy(homeTarget);
  controls.update();
});

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

window.addEventListener('resize', resize);

renderer.setAnimationLoop(() => {
  const time = clock.getElapsedTime();
  knot.rotation.set(time * 0.24, time * 0.36, 0);
  knot.position.y = 2.1 + Math.sin(time * 0.9) * 0.12;
  controls.update();
  renderer.render(scene, camera);
});
