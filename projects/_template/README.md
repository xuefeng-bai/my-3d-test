# __PROJECT_TITLE__

__PROJECT_SUMMARY__

## 运行

本场景由仓库根目录的共享服务器托管。在仓库根目录执行：

```bash
npm start
```

或双击根目录的 `start.cmd`，然后访问：

**http://127.0.0.1:4173/projects/__PROJECT_SLUG__/**

页面使用 ES Modules，不能直接双击 `index.html` 打开。

## 操作

| 操作 | 效果 |
| --- | --- |
| 拖动 | 旋转视角 |
| 滚轮 / 双指 | 缩放 |
| 双击画布 | 复位视角 |

## 技术说明

- Three.js r169，通过 importmap 引用仓库共享的 `../../shared/vendor/three/`。
- 纯静态 ES Modules，无构建步骤、无外部网络请求。
- 入口：`index.html`；主逻辑：`js/main.js`；视觉样式：`styles.css`。

## 目录

```text
projects/__PROJECT_SLUG__/
├─ index.html
├─ styles.css
├─ js/
│  └─ main.js
├─ preview/          # 建议放一张 16:9 首图
└─ README.md
```

## 下一步

- 修改 `js/main.js`，替换模板中的 Torus Knot 场景。
- 截图保存到 `preview/hero.png`，并在根目录 `projects/registry.json` 的 `preview` 字段中登记。
- 在根 README 的「项目清单」表格中补一行。
