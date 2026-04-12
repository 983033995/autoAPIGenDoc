# 配置说明

这一页只讲一件事：**`.vscode/autoApiGen.json` 里每个关键字段到底会影响什么。**

## 一份可工作的真实配置

下面这类配置，已经在真实项目中长期使用：

```json
{
  "appName": "apifox",
  "Authorization": "",
  "Cookie": "your-cookie",
  "path": "/src/services",
  "projectId": [1452077, 7940188],
  "model": "custom",
  "axiosPath": "import http from '@/services/http';",
  "axiosReturnKey": "data",
  "useProjectName": true,
  "useProjectId": true,
  "useTypeExtension": true,
  "alias": "src: @",
  "head": "import http from '@/services/http';",
  "customReturn": "...",
  "customExtraFunction": "...",
  "prettierSetting": "{ \"semi\": false, \"singleQuote\": true, \"parser\": \"typescript\" }"
}
```

## 字段总览

| 字段 | 是否关键 | 说明 |
| --- | --- | --- |
| `appName` | 必填 | 生成目录第一层名称，通常为 `apifox` |
| `Cookie` | 二选一 | 推荐的 Apifox 认证方式 |
| `Authorization` | 二选一 | 旧流程兼容方式 |
| `path` | 必填 | 生成代码的基础目录 |
| `projectId` | 必填 | 当前可操作的项目 ID 列表 |
| `model` | 建议配置 | `axios` / `微信小程序` / `custom` |
| `axiosPath` | axios/custom 常用 | 自定义请求实例 import |
| `axiosReturnKey` | axios/custom 常用 | 返回值解包字段，如 `data` |
| `useProjectName` | 推荐 | 是否在目录中插入项目名 |
| `useProjectId` | 推荐 | 是否在请求配置中带上项目 ID |
| `useTypeExtension` | 可选 | 是否在类型中追加索引签名 |
| `head` | custom 常用 | 生成文件顶部额外导入 |
| `customReturn` | custom 常用 | 自定义请求函数模板 |
| `customExtraFunction` | custom 常用 | 自定义额外辅助函数模板 |
| `prettierSetting` | 推荐 | 控制生成代码格式 |
| `alias` | 可选 | 用于快速插入时的路径别名替换 |

## 重点字段详解

## `appName`

它不是展示字段，而是**真实参与目录拼接**的：

```text
<path>/<appName>/...
```

例如：

```json
{
  "appName": "apifox"
}
```

会生成到：

```text
src/services/apifox/...
```

## `path`

这是这轮文档重点补齐的字段。

### 当前真实规则

插件和 CLI 统一按：

```text
项目根目录 + path
```

来拼接。

所以以下两种写法都可以：

```json
{ "path": "src/services" }
{ "path": "/src/services" }
```

在当前版本里，都会落到项目内的 `src/services`。

### 真实项目示例

| 项目 | 配置 | 实际落点 |
| --- | --- | --- |
| `h5-nextjs` | `"/src/services"` | `src/services/apifox/...` |
| `admin-refactor` | `"/apps/copilot/src/services"` | `apps/copilot/src/services/apifox/...` |

## `projectId`

可配置多个，但当前生成 / 查询时会使用**最后一个当前选中值**。

常见用途：

- 在多个 Apifox 项目间切换
- 保留历史项目配置
- 配合 `useProjectName` 做分目录输出

## `useProjectName`

打开后，生成目录会插入项目名目录，且会转换成 PascalCase。

规则：

```text
<path>/<appName>/<ProjectNamePascalCase>/<groupPath>/
```

例如：

```text
src/services/apifox/ChaoJiAPP/dianPu/
```

适合：

- 一个仓库里接多个后端项目
- 想避免不同项目分组重名

## `useProjectId`

打开后，生成模板可以在请求配置中自动透传当前项目 ID。

但要注意：

> **它只是把字段暴露给模板，不会强制修改你的自定义模板。**

也就是说，如果你使用 `custom` 模型，必须在 `customReturn` / `customExtraFunction` 里显式使用这个字段。

真实项目常见写法：

```ts
const config = options.useProjectId
  ? `{ ...fetchOptions, projectId: ${options.projectId} }`
  : 'fetchOptions'
```

## `model`

当前最常用的是：

| 模型 | 说明 |
| --- | --- |
| `axios` | 默认请求函数风格 |
| `微信小程序` | 生成 `wx.request` 风格代码 |
| `custom` | 完全交给自定义模板 |

如果你的项目已经有自己的：

- `http` 封装
- React Query hook 包装
- `queryOptions`
- `mutationFn`

通常直接使用 `custom` 最灵活。

## `head`

用来往 `apifox.ts` 顶部插入公共 import / 类型定义。

真实项目例子：

```ts
import http from '@/services/http'
import qs from 'qs'
import { useQuery, useMutation, queryOptions } from '@tanstack/react-query'

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never
```

## `customReturn` 与 `customExtraFunction`

这两个字段决定：

- 单个请求函数长什么样
- 是否额外生成 `useQuery` / `useMutation` / `queryOptions`

### `h5-nextjs` 的典型效果

- `getSuperAppShopList`
- `useGetSuperAppShopList`
- `useOptiongetSuperAppShopList`

### `admin-refactor` 的典型效果

- `postAiSessionCreate`
- `usePostAiSessionCreate`

## `axiosReturnKey`

如果后端响应结构固定为：

```json
{
  "code": 0,
  "data": {},
  "msg": ""
}
```

而你的 `http` 封装只返回 `data`，这里就应该配置：

```json
{
  "axiosReturnKey": "data"
}
```

否则生成类型会按完整响应体来推导。

## `alias`

这个字段主要影响插件里的“快速使用”和“复制引用”能力。

例如：

```json
{
  "alias": "src: @"
}
```

生成 import 时会把物理路径替换成 `@/...` 风格。

## 配置建议

### Next.js / React 单仓

推荐：

```json
{
  "path": "/src/services",
  "appName": "apifox",
  "useProjectName": true,
  "useProjectId": true,
  "model": "custom"
}
```

### Monorepo 子应用

推荐：

```json
{
  "path": "/apps/copilot/src/services",
  "appName": "apifox",
  "useProjectName": true,
  "useProjectId": true,
  "model": "custom"
}
```

## 最后一个判断标准

如果你不确定自己配得对不对，就看最终是否生成到了你预期的目录：

```text
<path>/<appName>/[<projectName(PascalCase)>/]<groupPath>/
├── apifox.ts
└── interface.ts
```

目录对了，后面模板和类型问题才值得继续排查。
