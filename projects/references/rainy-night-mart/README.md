# 雨夜便利店街角 · Rainy Night Mart

一个雨夜日式便利店街角的三渲二微缩场景：雨、自动门、红绿灯、积水与店面内景，全部由程序化几何与 Canvas 贴图构成。

当前页面是 **VITRINE 外部参考案例**，不是本项目原创场景。

> 原作者：[givfei5-hash](https://github.com/givfei5-hash)  
> 上游：[givfei5-hash/rainy-night-mart](https://github.com/givfei5-hash/rainy-night-mart)  
> 在线演示：[GitHub Pages](https://givfei5-hash.github.io/rainy-night-mart/)  
> 许可证：MIT（见 [LICENSE](LICENSE)）

## 场景

- 雨夜便利店街角、自动门、自动贩卖机、自行车、垃圾桶、路灯、电线杆和道路交通信号灯。
- 发光店面、货架、饮料柜、便当区、收银台、咖啡机与关东煮柜台。
- 积水路面与霓虹反光；无 UI 浮层，拖动旋转、滚轮/双指缩放。

## 本地打开

从 VITRINE 根目录执行 `npm start`，打开：

**http://127.0.0.1:4173/projects/references/rainy-night-mart/**

## 同步信息

- 上游固定 commit：`fab61152105dfcc48ba05f7a978678bfa64587c6`
- 同步路径：上游单文件 `index.html`
- 本地改动：将 import map 从 jsDelivr Three.js r161 改为 VITRINE 共享的本地 Three.js r169；补充 favicon；注入 VITRINE 返回索引浮层。完整记录见 [SOURCE.md](SOURCE.md)。

## 免责声明

这是第三方开源项目的静态快照，仅作为 Three.js 场景参考。页面中的「雨晴MART」等名称为原项目的虚构设定，与任何真实便利店品牌无隶属或授权关系。
