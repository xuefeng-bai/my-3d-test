# Factory Yard · 实时等距世界

一个由代码绘制的实时等距世界：Factory → Warehouse → Shop 的物流线，海边小镇、Sahel 新城、地铁、港口、Millbrook 农场和 Starbase 发射场，全部在一张持续运行的地图上。

当前页面是 **VITRINE 的 Claude 精选参考案例**，不是本项目原创场景。

> 上游：[Khalidabdi1/factory](https://github.com/Khalidabdi1/factory)  
> 制作：Claude Opus 5.5（上游 README 明确说明由 Claude 端到端生成）  
> 许可证：MIT（见 [LICENSE](LICENSE)）

## 体验

- 拖动平移，滚轮缩放；点击场景中的建筑、车辆、人物会显示实时信息卡。
- 地图上的物流、车辆、轮渡、地铁、天气和昼夜都在运行；界面顶部可以跳转到 Factory、Town、Sahel、Metro、Port、Village、Starbase 等区域。
- 静态导出由 Next.js 生成，无服务端、无外部 CDN。

## 本地打开

从 VITRINE 根目录执行 `npm start`，打开：

**http://127.0.0.1:4173/projects/references/factory-yard/**

首次加载需要初始化等距世界和模拟，可能等待一段时间；具体取决于设备性能。

## 同步信息

- 上游固定 commit：`438473a612ec8364f0046fb961133766da0c0be9`
- 同步内容：由上游 Next.js `output: 'export'` 构建出的 `out/` 静态站点。
- 构建时为 VITRINE 子路径设置了 `basePath: /projects/references/factory-yard`。
- 本地改动：补充 data favicon、返回索引浮层、VITRINE 文档与预览图；页面逻辑未改。
- 构建方式、字体许可证和改动记录见 [SOURCE.md](SOURCE.md) 与 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 免责声明

这是第三方 MIT 开源项目的静态快照，版权归原作者所有；页面中的地点与交通系统是程序化模拟，不代表任何真实机构或品牌。
