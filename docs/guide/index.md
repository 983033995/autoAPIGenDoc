# 指南概览

AutoAPIGen 现在不是单一的 VS Code 插件能力，而是三部分组合：

| 能力层 | 你会用它做什么 |
| --- | --- |
| **VS Code 插件** | 查看接口树、搜索接口、生成代码、查看接口详情、快速插入引用 |
| **`aag` CLI** | 在终端查询分组、输出 JSON 摘要、批量生成接口、交互式浏览 |
| **AI 工作流** | 让 Cursor / Claude Code / Copilot 先读本地、再调用 CLI、最后生成接口代码 |

## 推荐阅读顺序

1. [安装](/guide/installation)
2. [快速开始](/guide/quickstart)
3. [基础用法](/guide/usage)
4. [AI 工具支持](/guide/ai-support)
5. [配置说明](/config/)

## 本版文档重点解决的问题

这轮文档更新主要补齐了之前最容易让人踩坑的几类问题：

- `config.path` 到底是相对路径还是绝对路径
- `useProjectName` 打开后，真实生成目录长什么样
- AI 接入到底是“自动注入”还是“文档引导”
- `aag query --json`、`aag groups`、`aag ui` 分别适合什么场景
- Next.js 单仓和 monorepo 项目里，AutoAPIGen 是怎么真正落地的

## 一句话理解当前推荐流程

### 人在用插件

先在插件里完成配置，再按接口或分组生成代码。

### AI 在用 AutoAPIGen

先检查本地是否已有 `apifox.ts` / `interface.ts`，没有再执行：

```bash
aag groups
aag query 关键词 --json
aag generate <ids...>
```
