# AGENTS.md

本仓库是「花事 Huashi」数字花卉杂志网站。所有工作遵循以下约定，降低每次会话的上下文成本。

## 工作前：只读最新版本

- 开始任何更新前，先执行 `git pull --ff-only`（或确认本地等于 `origin/main` 最新提交），所有读取都以最新版为准。
- 不要逐个阅读历史 `PRODUCT-MANUAL-vX.Y.md` 或旧设计文档作为当前事实来源；它们只用于追溯，不作为当前状态。
- 新会话优先加载：
  1. `PROJECT-CONTEXT.md`：结构化上下文，会话间长期记忆的唯一文件
  2. `README.md` 与最新的 `PRODUCT-MANUAL-*.md`
  3. 按需阅读 `index.html` / `styles.css` / `script.js` / `flowers-data.js` / `images/` / `docs/`

## 长时间工作后：更新上下文

- 连续工作约 2 小时后，必须更新根目录 `PROJECT-CONTEXT.md`。
- 更新内容必须包含：当前项目定位、关键决策、已完成部分、有效决定、整体架构思路、下一步。
- 保持结构化、简洁、面向下一次新会话直接加载；删除已过时内容，不把历史当现状。
- 新版本或新功能上线时，同步更新 `PROJECT-CONTEXT.md`；历史手册保留不动。

## 协作规则

- 纯静态站点，无构建步骤，直接双击 `index.html` 或静态托管即可。
- 图片来自 Wikimedia Commons，页面页脚标注作者与许可；新增图片继续遵守。
- 改动保持小步、可验证；完成后检查桌面 1440px 与手机 390px 双端。
