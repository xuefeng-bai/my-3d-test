const STATUS = {
  active: { label: '维护中', tone: 'active' },
  wip: { label: '开发中', tone: 'wip' },
  archived: { label: '已归档', tone: 'archived' },
};

const STATUS_ORDER = ['active', 'wip', 'archived'];

const grid = document.querySelector('[data-grid]');
const filterBar = document.querySelector('[data-filters]');
const countEl = document.querySelector('[data-count]');

if (location.protocol === 'http:' || location.protocol === 'https:') {
  const baseUrl = `${location.origin}/`;
  for (const node of document.querySelectorAll('[data-base-url]')) node.textContent = baseUrl;
  const portNode = document.querySelector('[data-port]');
  if (portNode) portNode.textContent = location.port || (location.protocol === 'https:' ? '443' : '80');
}

let projects = [];
let cards = [];
let activeFilter = 'all';

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createPlaceholder(project) {
  const wrap = make('div', 'preview-placeholder');
  wrap.append(make('span', 'placeholder-mark', '3D'));
  wrap.append(make('span', 'placeholder-title', project.title));
  return wrap;
}

function createCard(project, index) {
  const status = STATUS[project.status] || {
    label: project.status || '未标记',
    tone: 'archived',
  };

  const card = make('a', 'project-card');
  card.href = project.entry;
  card.setAttribute('aria-label', `打开场景：${project.title}`);
  card.style.setProperty('--i', String(index));

  const preview = make('div', 'card-preview');
  if (project.preview) {
    const img = make('img');
    img.src = project.preview;
    img.alt = `${project.title} 预览图`;
    img.loading = index < 2 ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.addEventListener('error', () => {
      img.remove();
      preview.classList.add('is-placeholder');
      preview.prepend(createPlaceholder(project));
    }, { once: true });
    preview.append(img);
  } else {
    preview.classList.add('is-placeholder');
    preview.append(createPlaceholder(project));
  }

  preview.append(make('span', `status-badge tone-${status.tone}`, status.label));
  preview.append(make('span', 'card-index', String(index + 1).padStart(2, '0')));

  const body = make('div', 'card-body');
  body.append(make('h3', 'card-title', project.title));
  body.append(make('p', 'card-summary', project.summary || '暂无描述。'));

  const tags = make('ul', 'card-tags');
  for (const tag of (project.tags || []).slice(0, 4)) {
    tags.append(make('li', '', tag));
  }
  body.append(tags);

  const meta = make('div', 'card-meta');
  meta.append(make('code', '', project.entry.replace(/\/$/, '')));
  meta.append(make('span', 'card-open', '打开场景 ↗'));
  body.append(meta);

  card.append(preview, body);
  return card;
}

function renderFilters() {
  const counts = new Map();
  for (const project of projects) {
    counts.set(project.status, (counts.get(project.status) || 0) + 1);
  }

  const options = [{ key: 'all', label: '全部', count: projects.length }];
  for (const key of STATUS_ORDER) {
    if (counts.has(key)) {
      options.push({ key, label: STATUS[key].label, count: counts.get(key) });
    }
  }

  filterBar.replaceChildren(...options.map((option) => {
    const button = make('button', 'filter-btn', `${option.label} ${option.count}`);
    button.type = 'button';
    button.dataset.filter = option.key;
    button.setAttribute('aria-pressed', String(option.key === activeFilter));
    button.addEventListener('click', () => applyFilter(option.key));
    return button;
  }));
}

function applyFilter(key) {
  activeFilter = key;
  for (const { project, card } of cards) {
    card.hidden = key !== 'all' && project.status !== key;
  }
  for (const button of filterBar.querySelectorAll('.filter-btn')) {
    button.setAttribute('aria-pressed', String(button.dataset.filter === key));
  }
}

function render() {
  countEl.textContent = String(projects.length);
  grid.replaceChildren();
  cards = [];

  if (projects.length === 0) {
    grid.append(make('p', 'grid-status', '还没有场景。执行 npm run new -- my-scene 创建第一个 3D 项目。'));
    filterBar.replaceChildren();
    return;
  }

  projects.forEach((project, index) => {
    const card = createCard(project, index);
    grid.append(card);
    cards.push({ project, card });
  });

  renderFilters();
  applyFilter(activeFilter);
}

async function load() {
  try {
    const response = await fetch('./projects/registry.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    projects = Array.isArray(data.projects)
      ? data.projects.filter((project) => project && project.title && project.entry)
      : [];
    render();
  } catch (error) {
    countEl.textContent = '0';
    const hint = make('p', 'grid-status is-error');
    hint.textContent = '无法读取 projects/registry.json。请通过 npm start 启动本地服务器后访问，而不是直接双击 index.html。';
    grid.replaceChildren(hint);
    filterBar.replaceChildren();
    console.error('[vitrine] 读取场景清单失败', error);
  }
}

load();
