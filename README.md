# AutoAPIGen 文档站

这是 AutoAPIGen 的独立文档仓库，基于 **VitePress + Slidev** 构建，负责承载：

- 官网首页与快速开始
- 插件配置说明
- AI / CLI 接入文档
- 真实项目示例与常见问题

## 本地开发

```bash
npm install
npm run docs:dev
```

默认启动后访问：

- 文档站：`http://localhost:5173`
- 如果需要单独调试演示幻灯片：`npm run slides:dev`

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run docs:dev` | 本地启动 VitePress |
| `npm run docs:build` | 仅构建文档站 |
| `npm run slides:dev` | 本地调试 Slidev 演示 |
| `npm run build` | 先构建 slides，再构建文档站 |

## 当前文档重点

本轮文档已针对以下内容做过补强：

- `1.3.0` 新增的 `aag` CLI 工作流
- `aag ui` / `aag generate` 交互式树钻取生成
- `query --json` 的 AI 友好摘要结构
- `config.path` 与插件路径规则完全对齐后的说明
- `h5-nextjs` 与 `admin-refactor` 两个真实项目的接入方式和目录落点

## 发布前建议检查

1. 文档中的命令、路径、字段名是否与主仓库当前实现一致
2. `guide/ai-support.md` 是否与当前 `README.md`、`skills/auto-api-gen/SKILL.md` 保持一致
3. 真实项目示例是否仍然能代表当前主流接入方式
