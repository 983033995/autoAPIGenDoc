# 快速开始指南

以下是使用 AutoAPIGen 插件快速生成 API 接口的详细操作步骤：

---

## 前置要求

1. **API 文档准备**：团队的 API 文档已在 [Apifox](https://app.apifox.com) 上编写。
2. **环境准备**：
   - 安装并打开 **VSCode**。
   - 安装 **AutoAPIGen** 插件。

---

## 操作步骤

### 1. 打开项目并启动插件

- 在 VSCode 中打开一个项目。
- 打开 **AutoAPIGen 插件**。
- 点击右上角的 **配置按钮** 或界面中的 `去配置` 按钮。

![插件启动界面](./img/image1.png)

---

### 2. 获取认证配置

> **提示**：最新版 Apifox 已改为使用 **Cookie** 进行认证，推荐使用 Cookie 方式。如果您使用的是旧版本，仍可使用 Authorization 方式。

#### 方式一：Cookie 认证（推荐）

1. 在浏览器中打开 [Apifox](https://app.apifox.com) 并登录。
2. 按 `F12` 打开 **开发者工具**，切换到 **Network 面板**。
3. 点击任意接口，查看请求头（Headers）中的 `Cookie` 值。
4. 复制完整的 `Cookie` 值。

#### 方式二：Authorization 认证（旧版本）

1. 在浏览器中打开 [Apifox](https://app.apifox.com) 并登录。
2. 按 `F12` 打开 **开发者工具**，切换到 **Network 面板**。
3. 点击任意接口，查看请求头中的 `Authorization` 值。
4. 复制 `Authorization` 的值。

![获取认证信息](./img/image2.png)

---

### 3. 配置插件

- 将复制的 `Cookie` 或 `Authorization` 值粘贴到插件对应的配置项中。
- **Cookie 方式**：粘贴到 **Cookie 配置** 输入框。
- **Authorization 方式**：粘贴到 **Authorization 配置** 输入框。

> **注意**：只需配置其中一种认证方式即可，推荐使用 Cookie 方式。

![粘贴认证信息](./img/image3.png)

---

### 4. 获取项目列表

- 点击 **获取项目列表** 按钮。
- 在弹出的项目列表中，选择需要使用的项目。

![选择项目](./img/image4.png)

---

### 5. 项目配置

- 根据需要选择项目配置（具体配置说明请参考[配置说明](../config/index.md)）。
- 配置完成后，点击 **保存** 按钮。
- 在插件左侧的 **接口列表** 中可查看当前项目的所有接口。

![接口列表](./img/image5.png)

---

### 6. 生成接口代码

#### 批量生成接口

- 选中目标目录，点击 **生成接口** 按钮，即可生成目录下所有接口的代码。

#### 单个接口生成

- 选中需要生成的接口，点击 **生成接口** 按钮，仅生成该接口的代码。

<div style="display: flex; justify-content: space-between; align-items: center;">
  <img src="./img/image6.png" alt="alt text" style="width: 48%;" />
  <img src="./img/image7.png" alt="alt text" style="width: 48%;" />
</div>

---

### 7. 查看生成结果

- 接口生成完成后，在消息通知中查看生成结果。
- 点击 **查看** 按钮，选择需要查看的文件。

![生成结果](./img/image8.png)
![文件查看](./img/image9.png)

---

## 注意事项

- 如果项目配置或接口生成失败，请检查 **Cookie** 或 **Authorization** 值是否正确，以及项目配置的完整性。
- 推荐使用 **Cookie 认证方式**，这是 Apifox 最新版本的推荐方式。
- 认证信息有时效性，如果认证失败，请重新获取最新的 Cookie 或 Authorization 值。
- 可根据项目需求自定义生成路径和代码风格，以适配不同团队的开发规范。

---

通过以上步骤，您即可快速完成 API 接口代码的生成，极大提升开发效率。
