# AI 集成（CLI + Skill）

这页文档只做两件事：

1. **指导你安装 `aag` CLI**
2. **指导你把 AutoAPIGen 的 skill 配到 AI 工具里**

如果你是从插件面板点击 **AI 支持** 进来的，直接按下面步骤操作即可。

## 接入结果是什么

配置完成后，AI 工具就知道如何在你的项目里：

- 先检查本地是否已有 `apifox.ts` / `interface.ts`
- 再使用 `aag groups` / `aag query --json` 查询接口
- 最后按需执行 `aag generate`

也就是说，AI 不再靠猜接口名写代码，而是会按 AutoAPIGen 的真实工作流来走。

## 第 1 步：安装 CLI

推荐直接全局安装：

```bash
npm install -g auto-api-gen-cli
```

安装后验证：

```bash
aag --version
aag init
```

## 第 2 步：确认项目配置已经可读

`aag` 会读取当前项目根目录的：

```text
.vscode/autoApiGen.json
```

执行：

```bash
aag init
```

如果能看到 `appName`、`projectId`、`path`，说明 CLI 已经接通。

## 第 3 步：把 skill 配到 AI 工具里

最简单的做法是：

1. 复制下面的 skill 内容
2. 粘贴到你正在使用的 AI 工具规则文件中

### Cursor

可选任一位置：

- `.cursorrules`
- `.cursor/rules/auto-api-gen.mdc`

### Claude Code

写入：

- `CLAUDE.md`

### GitHub Copilot

写入：

- `.github/copilot-instructions.md`

### Windsurf

可选任一位置：

- `.windsurfrules`
- `.windsurf/rules/auto-api-gen.md`

## 推荐写法

建议用 marker 包住，方便后续更新：

````md
<!-- AutoAPIGen:skill:start -->
[把下方 skill 内容完整贴进来]
<!-- AutoAPIGen:skill:end -->
````

## 可直接复制的 Skill 内容

````md
---
name: auto-api-gen
description: 使用 AutoAPIGen 的 `aag` CLI 在已配置 `.vscode/autoApiGen.json` 的项目里查询 Apifox 接口并生成 TypeScript 服务代码。只要用户提到接口、API、Apifox、服务层、生成接口、调用某个接口、查看接口参数或返回值、批量生成接口、根据接口写请求代码，甚至只是说“帮我接一下这个接口”“帮我找店铺列表接口”“看看这个接口怎么调”时，都应该使用这个技能。尤其当任务需要先判断本地是否已有 `apifox.ts` / `interface.ts`，再决定是否查询或生成代码时，必须使用这个技能。
---

# AutoAPIGen

## 这个技能解决什么问题

这个技能让 AI 按 AutoAPIGen 的真实工作流来处理接口相关任务，而不是凭接口名猜参数或直接手写请求代码。

它适合的任务包括：

- 找某个接口在哪个分组
- 看接口的 Query、Body、响应结构
- 生成一个接口或一组接口
- 读取已经生成好的 `apifox.ts` / `interface.ts`
- 在业务代码里正确引用生成好的函数和类型

## 前提条件

开始前先确认两件事：

1. 当前项目根目录存在 `.vscode/autoApiGen.json`
2. 当前环境已经安装 `aag` CLI

如果配置文件不存在，先告诉用户需要在 VS Code 插件里完成 AutoAPIGen 配置。

## 核心工作方式

### 原则 1：先看本地，后查 CLI

只要用户要调用、修改、理解某个接口，先检查本地是否已经存在生成结果。

优先查找：

```text
<config.path>/<appName>/[<projectName(PascalCase)>/]<groupPath>/
├── apifox.ts
└── interface.ts
```

如果本地已经有对应文件：

- 直接读取 `apifox.ts`
- 直接读取 `interface.ts`
- 用本地文件回答问题或继续写业务代码

### 原则 2：只有本地没有时，才调用 `aag`

当本地不存在对应生成文件时，再根据任务选择 CLI 命令：

- 想看分组结构：`aag groups`
- 想让 AI 读取结构化接口摘要：`aag query <关键词> --json`
- 想只拿某个分组的接口 ID：`aag query --group <分组名> --ids-only`
- 想直接生成：`aag generate <ids...>`

### 原则 3：生成后再读一次文件

无论是单接口生成还是批量生成，生成完成后都要重新读取生成出来的 `apifox.ts` 和 `interface.ts`，再继续帮用户写调用代码。

## 推荐决策流程

```text
用户提到某个接口
      ↓
先检查本地是否已有 apifox.ts / interface.ts
      ↓
有
  → 直接读取本地文件并使用

没有
  → 先决定是看分组还是看接口摘要
      ↓
  需要看分组
    → aag groups / aag groups --json

  需要看参数和响应
    → aag query <关键词> --json

  已经知道目标接口 ID
    → aag generate <id>

  已经知道目标分组下的一组 ID
    → aag generate <id1> <id2> ...
```

## 命令手册

### 1. 检查配置

```bash
aag init
```

### 2. 查看分组

```bash
aag groups
aag groups --json
```

### 3. 查询接口

```bash
aag query
aag query <keyword>
aag query <keyword> --json
aag query --group <groupName> --ids-only
aag query --limit 20
```

### 4. 生成代码

```bash
aag generate 123456
aag generate 111 222 333 444
aag generate /api/user
aag generate --all
aag generate 123456 --dry-run
```

### 5. 交互式浏览

```bash
aag ui
```

默认情况下，AI 更应该优先使用非交互式命令。

## 关键输出结构

### `aag query --json` 最值得看的字段

重点关注 `summary`：

- `functionName`
- `method`
- `path`
- `pathParams`
- `queryParams`
- `body`
- `response200`

### 生成目录规则

```text
<config.path>/<appName>/[<projectName(PascalCase)>/]<groupPath>/
├── apifox.ts
└── interface.ts
```

## 配置里最关键的字段

`.vscode/autoApiGen.json` 里最值得关心的是：

| 字段 | 作用 |
| --- | --- |
| `appName` | 生成目录第一层名称 |
| `projectId` | 当前项目 ID |
| `path` | 生成代码的基础目录 |
| `model` | 代码模板，如 `axios`、`custom` |
| `axiosPath` | 自定义请求实例导入 |
| `axiosReturnKey` | 返回值解包字段 |
| `head` | 文件头部导入 |
| `customReturn` | 自定义请求函数模板 |
| `customExtraFunction` | 自定义附加函数模板 |
| `useProjectName` | 是否在目录中插入项目名 |
| `useProjectId` | 是否在请求配置里带上项目 ID |

## 执行任务时的输出要求

当你使用这个技能帮助用户时，尽量给出这些信息：

1. 本次是直接复用本地文件，还是新生成的
2. 最终使用的函数名
3. 关键参数类型来源于哪里
4. 生成文件或读取文件的路径
5. 如果做了假设，要明确说明

## 示例

### 示例 1：用户说“帮我调用店铺列表接口”

1. 先检查本地是否已有相关目录，如 `.../dianPu/apifox.ts`
2. 如果有，直接读本地文件
3. 如果没有，执行：

```bash
aag query 店铺 --json
```

4. 确认接口后执行：

```bash
aag generate 324170228
```

5. 再读取生成后的文件，写最终调用代码

### 示例 2：用户说“把支付分组整组生成”

```bash
aag groups --json
aag generate 111 222 333 444 555
```

### 示例 3：用户说“看一下这个接口返回什么字段”

优先选择：

```bash
aag query <关键词> --json
```

如果本地已有 `interface.ts`，则直接读取它更快更准。

## 不要这样做

- 不要在本地已有生成文件时还重复执行 `aag query`
- 不要只凭接口名称猜函数名和参数结构
- 不要生成完代码却不回读生成文件
- 不要在用户没有要求的情况下直接 `aag generate --all`
- 不要默认使用 `aag ui` 代替结构化命令
````

## 第 4 步：验证 Skill 是否生效

把 skill 配好之后，在你的 AI 工具里直接问一类典型问题，比如：

> 帮我调用店铺列表接口

如果配置正确，AI 应该会优先做这些动作：

1. 检查本地是否已有生成文件
2. 如果没有，执行：

```bash
aag query 店铺 --json
```

或者：

```bash
aag groups
```

3. 确认接口后再执行：

```bash
aag generate 324170228
```

## 常用命令速查

| 命令 | 作用 |
| --- | --- |
| `aag init` | 检查当前项目配置 |
| `aag groups` | 查看接口分组树和接口 ID |
| `aag groups --json` | 输出结构化分组树，适合 AI 读取 |
| `aag query <关键词>` | 搜索接口 |
| `aag query <关键词> --json` | 输出结构化接口摘要 |
| `aag query --group <分组> --ids-only` | 只拿分组下接口 ID |
| `aag generate <ids...>` | 生成指定接口 |
| `aag ui` | 进入交互式树形浏览 |

## 一条推荐工作流

### 人工使用

```bash
aag init
aag groups
aag query 店铺 --json
aag generate 324170228
```

### AI 使用

让 AI 遵守这条顺序：

1. 先查本地已生成的 `apifox.ts` / `interface.ts`
2. 本地没有，再用 `aag query --json`
3. 最后才用 `aag generate`

## 常见问题

### 找不到 `aag`

优先检查：

- 是否已全局安装
- 终端是否需要重开

### 配了 skill 但 AI 还是不会用

优先检查：

- 规则文件是不是放在 AI 工具真正会读取的位置
- 有没有把上面的 skill 内容完整复制进去
- 修改规则文件后，AI 工具是否已经重载项目上下文

### `aag init` 提示找不到配置文件

说明当前终端目录不是业务项目根目录，或者项目里还没有：

```text
.vscode/autoApiGen.json
```

### 要不要每次都重新复制 skill

只有当 AutoAPIGen 更新了 skill 内容时，才需要同步更新规则文件内容。
