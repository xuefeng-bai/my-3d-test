# VITRINE · 3D 场景陈列馆

VITRINE 是一个用于试验 Three.js / WebGL 场景的本地场景库。每个场景是 `projects/` 下完全独立的静态项目，像展品一样陈列在根目录索引中；它们共享同一份 Three.js 依赖与预览服务器。

## 快速开始

需要 **Node.js 18+**。在仓库根目录执行：

```bash
npm start
```

或双击 `start.cmd`，浏览器会打开：

**http://127.0.0.1:4173/**

> 页面使用 ES Modules，必须通过本地服务器访问，不能直接双击各项目的 `index.html`。

## 目录结构

```text
vitrine/
├─ index.html                 # 场景索引首页（读取 registry.json）
├─ shared/
│  ├─ hub/                    # 索引页的样式与脚本
│  └─ vendor/three/           # Three.js r169 + addons（全仓库共享）
├─ projects/
│  ├─ registry.json           # 场景清单（首页数据源）
│  ├─ _template/              # 新项目模板
│  ├─ seven-eleven/           # 场景：AFTER HOURS · 街角 7-ELEVEN
│  └─ n90-snowline/           # 场景：澎湃雪线 · N90 Max（已归档）
├─ scripts/
│  ├─ new-project.mjs         # 新项目脚手架
│  └─ check-projects.mjs      # 仓库健康检查
├─ server.cjs                 # 零依赖静态服务器
├─ start.cmd                  # Windows 一键启动
├─ package.json
├─ .gitignore
└─ README.md
```

> 当前工作区目录名可能仍为 `my-3d-test/`；项目名与目录名相互独立。若需同步目录名，可在关闭 IDE 后将文件夹重命名为 `vitrine/`。

## 项目清单

| 场景 | 目录 | 入口 | 状态 |
| --- | --- | --- | --- |
| AFTER HOURS · 街角 7-ELEVEN | `projects/seven-eleven/` | `/projects/seven-eleven/` | 维护中 |
| 澎湃雪线 · N90 Max 探索版 | `projects/n90-snowline/` | `/projects/n90-snowline/` | 已归档 |

入口均相对于 `http://127.0.0.1:4173`。状态取值：`active`（维护中）、`wip`（开发中）、`archived`（已归档）。

## 新增项目

### 方式一：脚手架（推荐）

```bash
npm run new -- my-scene "我的场景" "一句话描述"
```

脚本会：

1. 复制 `projects/_template/` 到 `projects/<slug>/`；
2. 替换 HTML / CSS / JS / Markdown 中的占位符；
3. 以 `wip` 状态登记到 `projects/registry.json`。

然后编辑 `projects/<slug>/js/main.js`，刷新首页即可看到新卡片。

### 方式二：手动

1. 复制 `projects/_template/` 为 `projects/<slug>/`（目录名使用 kebab-case）。
2. 修改 `index.html` 的 importmap，保持共享依赖路径：

   ```json
   {
     "imports": {
       "three": "../../shared/vendor/three/three.module.js",
       "three/addons/": "../../shared/vendor/three/addons/"
     }
   }
   ```

3. 在 `projects/registry.json` 的 `projects` 数组增加条目，并在根 README 的「项目清单」补一行。
4. 截图放入 `projects/<slug>/preview/`，在 registry 中填写 `preview`。

## 场景规范

- **独立性**：每个项目自带 `index.html`、样式与脚本，项目之间不互相 import。
- **共享**：Three.js 只保留一份，位于 `shared/vendor/three/`；通过 importmap 相对路径引用。
- **入口**：每个项目必须有 `index.html` 和 `README.md`；入口 URL 固定为 `/projects/<slug>/`。
- **命名**：目录名使用小写 kebab-case，且与 `registry.json` 的 `slug` 一致。
- **资源**：优先程序化生成；确需静态资源时放在项目自己的目录下，使用相对路径。
- **预览图**：建议 16:9、小于 500 KB，命名为 `preview/hero.png` 或 `.jpg`。
- **无构建**：不引入打包器；保持 `npm start` 即可运行。

## 场景注册表

`projects/registry.json` 是首页的唯一数据源：

| 字段 | 说明 |
| --- | --- |
| `slug` | 项目目录名，唯一 |
| `title` | 卡片标题 |
| `summary` | 一句话描述 |
| `tags` | 展示用标签，最多显示前 4 个 |
| `status` | `active` / `wip` / `archived` |
| `entry` | 入口路径，如 `projects/my-scene/` |
| `preview` | 预览图路径；为 `null` 时显示占位图 |

新增后刷新首页即可，无需修改 `index.html`。

## 运行与端口

```bash
npm start                    # 默认 http://127.0.0.1:4173/
$env:PORT=5000; npm start    # PowerShell 换端口
```

`server.cjs` 零依赖，支持目录式 URL（自动补 `index.html`，缺少结尾斜杠时重定向），并为全仓库提供 MIME 与路径校验。服务器启动时会读取 registry，在终端列出所有场景地址。

## 健康检查

```bash
npm run check
```

校验根目录入口、registry 字段、场景目录 / README / 预览图，以及每个场景的 importmap 与 JS 模块引用是否都能在本地找到。新增、移动场景或升级共享依赖后建议运行一次。

## 归档约定

不再维护但想保留的场景：

1. 将 `registry.json` 中的 `status` 改为 `archived`；
2. 项目 README 顶部标注归档状态；
3. 保留目录与预览图，首页仍可访问。

## 共享依赖升级

`shared/vendor/three/` 目前为 Three.js r169。升级时替换该目录，并逐一回归 `projects/` 下的场景；各项目通过 importmap 自动使用新版本。

## 说明

所有场景均为个人视觉与图形练习，非官方作品；品牌与产品名称仅用于概念演示。
