# Union Square SF · 数字孪生

旧金山联合广场的程序化实时 3D 重建：Macy's、广场、Powell Street 一带的街道、商店、车辆、行人与可步行街区。

当前页面是 **VITRINE 的 Claude 精选参考案例**，不是本项目原创场景。

> 上游：[PhiloLabs/fable51-worlds](https://github.com/PhiloLabs/fable51-worlds) 的 `union-square-sf/`  
> 制作模型：**Claude Fable 5.1**  
> 许可证：MIT（见 [LICENSE](LICENSE)）

## 体验

- `Walk`：第一人称步行；点击画面锁定鼠标，`WASD` 行走，`Shift` 跑步，`E` 交互。
- `Orbit`：环绕观察；`Tour`：自动导览。
- 右上角可切换白天 / 日落 / 夜晚，打开 Viewpoint 索引和参考视图。
- 场景包含实时交通、行人、建筑立面、店内空间和夜间灯光。

## 本地打开

从 VITRINE 根目录执行 `npm start`，打开：

**http://127.0.0.1:4173/projects/references/union-square-sf/**

初始化会读取大量模型和数据，首次加载可能需要一段时间。

## 同步信息

- 上游固定 commit：`d24028466530a15d58d3d94537e6317b84101589`
- 同步内容：由上游源码用 Vite 构建的 `dist/`，包含本地 GLB 模型和 GIS/地形数据。
- 本地改动：构建时使用相对 `base: './'`；运行上游 `sync_data.mjs` 生成运行时数据；补充 favicon、返回索引浮层、文档和预览图。
- 来源、数据归属与改动记录见 [SOURCE.md](SOURCE.md) 和 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 免责声明

这是第三方 MIT 开源项目的静态快照。几何数据来自 OpenStreetMap 与公开地理数据；品牌和地名属于各自所有者。页面不代表任何官方机构。
