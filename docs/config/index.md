<!--
 * @FilePath: /autoAPIGenDoc/docs/config/index.md
 * @Description: 
-->
# 基本设置

> 注：会默认使用 `qs` 依赖来解析 `json` 格式的请求体，请确保项目安装了 `qs`。

> 注：本文档默认使用`apifox`上的公开项目 [OpenAI](https://app.apifox.com/project/2100343) 的接口文档作为示例

## 应用名

管理 API 接口文档的平台，目前仅支持 `apifox` 一个应用。（后续会看使用需求接入postman和apiPost）

## Authorization

用于获取项目信息的 token，获取方式：登录网页版`apifox`，`F12`打开开发者工具，选择 `Network` 选项卡，查看任意一个请求的 `Headers` 选项卡，找到 `Authorization` 字段，复制其值。

> 注：如果 `Authorization` 字段不配置，则无法获取项目信息，无法生成文档。

## 生成路径

会自动获取当前工作空间的目录结构，可以手动选择生成的接口文件的生成位置。

## 项目ID

获取`Authorization`后，点击 `获取项目列表`, 在下拉框中选择一个项目，即可获取该项目ID。在左侧接口列表中会展示该项目下的所有接口。

## 接口模型

目前支持 `axios`、`微信小程序`、`自定义` 三个接口模型（后续会内置基于`vueuse`和`vueHookPlus`这两个库对于接口请求的处理方式）。

- `axios`: 适用于 `axios` 请求方式，自动生成 `axios` 请求代码。（可以结合`axios引用路径`来进一步配置）

- `微信小程序`: 适用于 `wx.request` 请求方式，首次生成时会在`生成路径`目录下生成 `request` 文件夹，里面包含 `index.ts` 文件，该文件用于封装 `wx.request` 的ts方法，`不可删除，可以自行根据业务需求修改`，生成的接口文件会引用该文件。; 还包含 `interface.d.ts` 文件，该文件用于定义接口参数类型；和 `env.config.ts` 文件，该文件用于配置接口域名等环境变量。`interface.d.ts` 和 `env.config.ts` 文件可以自行删除或者修改，但是需要同步修改`index.ts` 文件的引用。

- `自定义`: 做为高级选项，适用于更复杂或者需要额外定制的场景，具体使用请查看下一节 `高级选项` 的配置。

## 使用项目名

开启后，生成的接口文件会多加一层`当前项目名字`的目录入口，用于在一个项目下调用多个后台项目接口时，可区分不同项目接口和避免不同项目下同名目录的冲突。

## axios引用路径

可以配置 `axios` 的引用路径，用于生成 `axios` 请求代码。若不配置，则默认使用用 `import axios from 'axios'`。可以基于自己的业务需求对 `axios` 进行二次封装。

> eg: 配置 `import http from '@/utils/http'`, 则在生成对应的接口请求时会使用 `http` 代替 `axios`。

## axios返回数据key

- 需要和后台约定，返回的数据使用统一的数据格式，比如 `{code: 0, data: {}, msg: ''}`。
- 在 `axios` 的二次封装中，默认只返回 `data` 字段的数据，在此处配置 `data`， 则最终生成的接口返回数据为 `data` 字段的数据，生成的接口定义中也只会有 `data` 部分的类型定义。也可返回多个字段，用英文逗号分隔。
- 配置为空，则返回 完整的接口数据。

> 注：需要结合 `axios` 的二次封装的返回结果和规范的后台数据格式来配置。

## prettier配置

配置 `prettier` 格式化代码的规则，用于生成接口文件时自动格式化。插件内置了 `prettier`，默认使用了 `prettier-plugin-sort-imports` 和 `prettier-plugin-organize-imports` 这两个插件来做为基本的格式化规则，其它的基础规则可以自行配置。

> 注：只能配置 `prettier` 的基本规则，需要依赖第三方 `prettier` 插件的不支持。

> 注：目前 `cursor` 编辑器内置格式化功能存在一些问题，会导致配置的 `prettier` 规则失效，但不影响生成接口文件，可以在生成接口文件后手动格式化或忽略。
