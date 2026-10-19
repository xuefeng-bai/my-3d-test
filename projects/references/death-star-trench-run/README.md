# TRENCH RUN · Battle of Yavin

一段可驾驶的实时 3D 战壕突袭：X-wing、TIE fighter、死星表面、激光、鱼雷与电影感镜头，全部由代码生成。

当前页面是 **VITRINE 的 Claude 精选参考案例**，不是本项目原创场景。

> 上游：[PhiloLabs/fable51-worlds](https://github.com/PhiloLabs/fable51-worlds) 的 `death-star-trench-run/`  
> 制作模型：**Claude Fable 5.1**  
> 许可证：MIT（见 [LICENSE](LICENSE)）

## 体验

- `LAUNCH`：手动驾驶；`CINEMATIC (AUTO)`：自动电影式飞行。
- `W A S D` / 方向键转向，`Q E` 横滚，`Shift` 加速，`Space` 激光，`F` 鱼雷，`C` 切换自动驾驶，`P` 暂停。

## 本地打开

从 VITRINE 根目录执行 `npm start`，打开：

**http://127.0.0.1:4173/projects/references/death-star-trench-run/**

场景首次加载会编译着色器并构建战壕资产，可能需要一些时间。

## 同步信息

- 上游固定 commit：`d24028466530a15d58d3d94537e6317b84101589`
- 同步内容：由上游 Vite 源码构建的 `dist/` 静态站点。
- 本地改动：构建时使用相对 `base: './'`；补充 favicon、返回索引浮层、VITRINE 文档和预览图。
- 来源、构建与商标声明见 [SOURCE.md](SOURCE.md) 和 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 免责声明

这是第三方 MIT 开源项目的静态快照，也是《星球大战》的非官方同人致敬作品。*Star Wars*、X-wing、TIE fighter、Death Star 等名称归 Lucasfilm Ltd. 所有；本页面未使用或再分发任何电影素材、音频、模型或贴图。与 Lucasfilm 或 Disney 无隶属关系。
