# AI 工具支持

AutoAPIGen 提供了专为 AI 编程助手（Windsurf、Cursor、Claude Code、GitHub Copilot 等）设计的 **Skill 集成方案**，以及配套的 **`aag` CLI 工具**，让 AI 能够直接理解你的项目接口结构，并在开发时自动生成正确的 API 调用代码。

---

## 效果演示

配置完成后，你可以直接对 AI 说：

> "帮我调用店铺列表接口，带上分页参数"

AI 会自动执行：

```bash
aag query --group 店铺 --json
```

然后根据接口信息直接生成带完整类型的调用代码：

```typescript
import { useGetSuperAppShopList } from '@/services/apifox/ChaoJiAPP/dianPu/apifox'

const { data } = useGetSuperAppShopList({ page: 1, pageSize: 10 })
```

---

## 第一步：安装 aag CLI

`aag`（auto-api-gen-cli）是 AutoAPIGen 配套的命令行工具，让 AI 助手可以在终端查询接口信息。

### 全局安装

```bash
npm install -g auto-api-gen-cli
```

安装成功后验证：

```bash
aag --version
```

### 主要命令

| 命令 | 说明 |
|------|------|
| `aag query [关键词]` | 搜索接口，支持按名称或路径过滤 |
| `aag query --group 分组名` | 搜索指定分组的接口 |
| `aag query --json` | 以 JSON 格式输出，包含完整类型摘要（供 AI 读取） |
| `aag query --ids-only` | 仅输出接口 ID 列表（快速生成命令用） |
| `aag groups` | 查看所有接口分组树及接口 ID |
| `aag groups --json` | 以 JSON 格式输出分组树（供 AI 读取） |
| `aag generate <id>` | 根据接口 ID 生成代码文件 |
| `aag generate <id1> <id2>` | 批量生成多个接口代码 |

### 实际使用示例

**查看所有分组：**

```bash
aag groups
```

输出示例：

```
ChaoJiAPP/
  ├── 店铺 (3 个接口)  IDs: 324170228 324170229 324170227
  ├── 活动 (5 个接口)  IDs: 324170230 324170231 ...
  └── 直播 (2 个接口)  IDs: 324170240 324170241
```

**查询特定分组接口详情（AI 使用）：**

```bash
aag query --group 店铺 --json
```

**生成指定接口代码：**

```bash
aag generate 324170228 324170229
```

---

## 第二步：注入 Skill 到 AI 工具

在 VSCode 中打开项目，点击 AutoAPIGen 插件中的 **「启用 AI 支持」** 按钮，会自动将 Skill 文档注入到以下 AI 工具的规则文件中：

| AI 工具 | 注入目标文件 |
|---------|-------------|
| Windsurf | `.windsurfrules`、`.windsurf/rules/auto-api-gen.md` |
| Cursor | `.cursorrules`、`.cursor/rules/auto-api-gen.mdc` |
| Claude Code | `CLAUDE.md` |
| GitHub Copilot | `.github/copilot-instructions.md` |

注入后，AI 工具在该项目中会自动获得 AutoAPIGen 的使用知识，无需每次手动说明。

> **注意**：注入操作是**幂等的**，重复执行只会更新已有内容，不会产生重复。每次更新 `SKILL.md` 后，需要重新执行「启用 AI 支持」以同步最新内容。

### 手动注入（可选）

如果你希望手动管理，可以将以下内容添加到对应 AI 工具的规则文件中：

````markdown
<!-- AutoAPIGen:skill:start -->
[SKILL.md 内容]
<!-- AutoAPIGen:skill:end -->
````

---

## 第三步：配置项目（仅首次）

确保项目根目录下已有 `.vscode/autoApiGen.json` 配置文件（通过插件配置页保存后自动生成）。`aag` CLI 会自动读取此文件获取项目 ID 和认证信息。

配置文件示例：

```json
{
  "authorization": "",
  "cookie": "your-apifox-cookie",
  "appName": "ChaoJiAPP",
  "path": "src/services/apifox",
  "projects": [
    {
      "id": 3903128,
      "name": "超级APP",
      "useProjectName": false
    }
  ]
}
```

---

## AI 工作流说明

配置完成后，AI 助手会遵循以下工作流：

### 1. 优先使用本地已生成文件

AI 会先检查 `{path}/{appName}/` 下是否已有对应的 `apifox.ts` 和 `interface.ts`，如果存在则直接使用：

```typescript
// 直接 import 已有文件
import { useGetSuperAppShopList } from '@/services/apifox/ChaoJiAPP/dianPu/apifox'
```

### 2. 本地不存在时查询并生成

```bash
# 查看分组
aag groups

# 找到目标接口 ID，生成代码
aag generate 324170228

# 生成后即可 import 使用
```

### 3. 需要理解接口结构时

```bash
# 获取接口完整信息（函数签名、入参类型、响应类型）
aag query --group 店铺 --json
```

---

## 真实项目使用案例

### Next.js 项目（h5-nextjs）

生成的文件目录结构：

```
src/services/apifox/
├── ChaoJiAPP/
│   ├── dianPu/
│   │   ├── apifox.ts      # 包含 useGetSuperAppShopList 等 React Query hooks
│   │   └── interface.ts   # 包含完整 TypeScript 类型定义
│   ├── huoDong/
│   ├── zhiBo/
│   └── ...
└── AIBFFJieKou/
    └── huiHuaGuanLi/
```

生成的代码自动集成 `@tanstack/react-query`，包含：
- 原始请求函数（`getSuperAppShopList`）
- React Query hook（`useGetSuperAppShopList`）
- queryOptions 版本（`useOptiongetSuperAppShopList`）

### Monorepo 项目（admin-refactor）

多项目 Monorepo 场景下，通过 `useProjectName: true` 配置，生成路径会自动插入 PascalCase 项目名：

```
src/services/apifox/
├── CMS/
│   └── 用户管理/
│       ├── apifox.ts
│       └── interface.ts
└── Portal/
    └── 首页/
```

---

## 常见问题

**Q: `aag` 命令找不到？**

确认已全局安装：`npm install -g auto-api-gen-cli`，安装后重启终端。

**Q: 执行 `aag query` 提示无配置？**

确保当前终端工作目录是项目根目录（含 `.vscode/autoApiGen.json` 的目录）。

**Q: AI 生成的接口调用路径不对？**

检查 `.vscode/autoApiGen.json` 中的 `path` 和 `appName` 配置是否与实际生成目录一致。

**Q: 注入 Skill 后 AI 仍然不识别 `aag` 命令？**

在 Windsurf/Cursor 中重新打开项目，让 AI 重新加载规则文件。
