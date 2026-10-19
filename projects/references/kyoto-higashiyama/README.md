# 東山 · Higashiyama, Kyoto

从祇園白川到清水寺的京都东山南部可行走重建：约 2.3 km、爬升 76 m，终点是八坂塔与清水舞台。画面以 Three.js 实时渲染，并按手绘动画背景的方式做三渲二处理。

当前页面是 **VITRINE 的 Claude 精选参考案例**，不是本项目原创场景。

> 上游：[PhiloLabs/fable51-worlds](https://github.com/PhiloLabs/fable51-worlds) 的 `kyoto-higashiyama/`  
> 制作模型：**Claude Fable 5.1**（按上游 README，由 Claude agent swarm 端到端生成）  
> 许可证：MIT（见 [LICENSE](LICENSE)）

## 体验

- 从开头画面点击 **ENTER THE WORLD** 进入；左边是 52 个按步行顺序排列的取景索引。
- `W A S D` 行走，`Shift` 奔跑，拖动鼠标环顾，`E` 交互。
- `P` 总览，`F` 摄影模式，`T` 切换时间，`O` 水墨，`G` 调色，`M` 声音，`R` 返回，`F1` 调试 HUD。
- 页面是完全本地化的自包含 viewer，没有 CDN、外部贴图或远程模型请求。

## 本地打开

从 VITRINE 根目录执行 `npm start`，打开：

**http://127.0.0.1:4173/projects/references/kyoto-higashiyama/**

首次进入需要装配大量程序化场景，可能需要等待一段时间，具体取决于设备 GPU；进入后可直接沿路线步行。若你在较弱的集成显卡上打开，建议使用 Chrome / Edge 并留出一些启动时间。

## 同步信息

- 上游固定 commit：`d24028466530a15d58d3d94537e6317b84101589`
- 同步内容：由上游源码使用其 `vite build` + `viewer/build.mjs` 生成的单文件 viewer。
- 本地改动：移除可选 Google Fonts 外链以保证离线；补充 favicon、返回索引浮层、VITRINE 文档与预览图。
- 来源、构建过程、OSM/GSI 数据说明与修改记录见 [SOURCE.md](SOURCE.md) 和 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 免责声明

这是第三方 MIT 开源项目的静态快照，版权归原作者所有；其中包含对真实地点的程序化重建，不代表任何官方机构或品牌。画面与文字仅作为 Three.js 场景参考。
