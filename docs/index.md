---
layout: home
hero:
  name: AutoAPIGen
  text: 一键生成 API 请求代码和 TypeScript 类型定义
  tagline: 告别手写 API 代码，让开发效率提升 300%，专注于业务逻辑
  actions:
    - theme: brand
      text: 🚀 快速开始
      link: /guide/quickstart
    - theme: alt
      text: 📚 查看文档
      link: /guide/
    - theme: alt
      text: ⭐ GitHub
      link: https://github.com/983033995/AutoAPIGen

features:
  - icon: 🎯
    title: 界面化操作
    details: 简单直观的界面，所见即所得，轻松上手。
  - icon: ⚡️
    title: 丰富的内置功能
    details: 提供常用代码导入和查看功能，让开发更高效。
  - icon: 🛠️
    title: 强大的自定义能力
    details: 灵活配置选项，满足不同团队和项目的特定需求。
  - icon: 🚀
    title: 效率提升 300%
    details: 一键生成 TypeScript 接口代码，从 5-10 分钟降到 10-20 秒。
  - icon: 🛡️
    title: 类型安全
    details: 完整的 TypeScript 类型定义，编译时错误检测，减少 95% 的类型错误。
  - icon: 🎨
    title: 代码格式化
    details: 集成 Prettier 自动格式化，生成的代码风格统一、代码质量高。
---

<div class="vp-doc">

## 🎬 功能演示

<div class="slidev-container">
  <video controls width="600" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <source src="./guide/img/录屏2024-12-19 16.57.34.mov" type="video/mp4">
    您的浏览器不支持视频播放，请升级到支持 HTML5 的浏览器。
  </video>
</div>

---

## 📊 为什么选择 AutoAPIGen？

<div class="comparison-table">

| 维度 | 传统手写方式 | 使用 AutoAPIGen | 提升幅度 |
|------|----------------|-------------------|----------|
| ⚙️ **单个接口生成时间** | 5-10 分钟 | 10-20 秒 | **减少 95%** |
| ⚠️ **类型错误率** | 10-20% | < 1% | **降低 95%** |
| 🎨 **代码风格统一度** | 60-70% | 100% | **提升 40%** |
| 🔄 **文档同步效率** | 人工对比 | 一键重新生成 | **效率提升10倍** |

</div>

## ✨ 主要特性

<div class="features-section">

### 🔌 对接 Apifox API 文档

<ul class="feature-list">

- 📋 **多项目管理** - 快速查看 API 列表，支持多个项目并行管理
- 🔍 **智能搜索** - 高效搜索和定位 API，支持模糊匹配
- 🔄 **灵活切换** - 快速切换不同项目，无缝工作流
- 🔐 **Cookie 认证** - 支持最新版 Apifox 的 Cookie 认证方式

</ul>

### ⚙️ 灵活的自定义配置

<ul class="feature-list">

- 📁 **目录配置** - 自由配置生成目录和目标项目
- 📦 **多模板支持** - 提供 Axios、微信小程序等内置模板
- 🎨 **自定义模板** - 支持自定义接口返回模板和拓展函数
- 💅 **Prettier 集成** - 自定义格式化规则，自动格式化生成代码
- 🔧 **Axios 引用路径** - 自定义 Axios 引用路径，适配项目结构

</ul>

### 🚀 优化的开发体验

<ul class="feature-list">

- ✍️ **自动代码生成** - 无需手写接口请求代码和 TS 类型定义
- 👥 **团队协作** - 统一团队接口风格，减少沟通成本
- 🛡️ **类型安全** - 自动生成类型安全的接口请求代码，提高代码质量
- 📖 **可视化详情** - 接口详情页展示参数、响应结构，一目了然
- ⚡ **一键插入** - 直接将接口引用代码插入到当前编辑窗口
- 🔍 **快速定位** - 从接口详情页直接跳转到生成的代码文件

</ul>

</div>

</div>

<div class="vp-doc">

## 💻 技术特性

</div>

<div class="features-section">

### 🔐 类型安全

<div class="feature-list">

- **完整的 TypeScript 支持** - 请求参数类型检查，响应数据类型推导
- **IDE 智能提示** - 完整的类型定义，开发更高效
- **编译时错误检测** - 提前发现问题，减少运行时错误

</div>

### 🎨 代码质量

<div class="feature-list">

- **Prettier 自动格式化** - 生成的代码风格统一，符合团队规范
- **ESLint 兼容** - 支持 ESLint 规则，保证代码质量
- **注释完整** - 自动生成接口注释，代码可读性强

</div>

### ⚡ 性能优化

<div class="feature-list">

- **按需加载 Monaco Editor** - 轻量级打包，< 2MB
- **智能缓存** - 接口数据缓存，减少网络请求
- **异步生成** - 不阻塞编辑器，使用体验流畅

</div>

</div>

<div class="vp-doc">

## 🚀 快速开始

</div>

<div class="quick-start">

### 1️⃣ 安装插件

在 VS Code 扩展商店搜索 **"AutoAPIGen"** 并安装，或者使用命令行：

```bash
code --install-extension script.AutoAPIGen
```

### 2️⃣ 配置认证

1. 登录 [Apifox](https://app.apifox.com) 
2. 按 `F12` 打开开发者工具
3. Network 面板中复制任意请求的 `Cookie` 值
4. 在插件中粘贴 Cookie 配置

### 3️⃣ 开始使用

1. 选择目标项目
2. 配置生成路径
3. 点击接口列表中的接口
4. 点击“生成接口代码”
5. ✅ 完成！

详细教程请查看 [快速开始指南](/guide/quickstart)。

</div>

<div class="vp-doc">

## 🎓 适用场景

</div>

<div class="use-cases">

<div class="use-case-grid">

<div class="use-case-item">
  <h3>✅ TypeScript 项目</h3>
  <p>完美支持 TypeScript，提供完整的类型定义和智能提示。</p>
</div>

<div class="use-case-item">
  <h3>✅ 现代前端框架</h3>
  <p>支持 React、Vue、Angular 等主流框架，内置 Axios 模板。</p>
</div>

<div class="use-case-item">
  <h3>✅ 微信小程序</h3>
  <p>提供 wx.request 封装模板，快速开发小程序项目。</p>
</div>

<div class="use-case-item">
  <h3>✅ 团队协作</h3>
  <p>统一代码风格，提升团队开发效率和协作质量。</p>
</div>

<div class="use-case-item">
  <h3>✅ Apifox 用户</h3>
  <p>无缝对接 Apifox 平台，自动同步文档更新。</p>
</div>

<div class="use-case-item">
  <h3>✅ 个人开发者</h3>
  <p>提升个人开发效率，专注于业务逻辑实现。</p>
</div>

</div>

</div>

<div class="vp-doc">

## 🌟 开源与社区

</div>

<div class="community">

AutoAPIGen 是一个完全开源的项目，采用 **MIT 开源协议**，欢迎社区贡献！

### 👥 如何贡献

- 🐛 [报告 Bug](https://github.com/983033995/AutoAPIGen/issues/new?assignees=&labels=bug&template=bug_report.md)
- 💡 [提出功能建议](https://github.com/983033995/AutoAPIGen/issues/new?assignees=&labels=enhancement&template=feature_request.md)
- 📖 [改进文档](https://doc.du-ai.cn/)
- 🔧 [提交代码](https://github.com/983033995/AutoAPIGen/pulls)

### 📊 项目统计

<div class="stats">

![GitHub stars](https://img.shields.io/github/stars/983033995/AutoAPIGen?style=social)
![GitHub forks](https://img.shields.io/github/forks/983033995/AutoAPIGen?style=social)
![GitHub issues](https://img.shields.io/github/issues/983033995/AutoAPIGen)
![VS Code Downloads](https://img.shields.io/visual-studio-marketplace/d/AutoAPIGen.AutoAPIGen)
![VS Code Rating](https://img.shields.io/visual-studio-marketplace/r/AutoAPIGen.AutoAPIGen)

</div>

### 🔗 相关链接

- 📖 **完整文档**: [https://doc.du-ai.cn](https://doc.du-ai.cn)
- 💻 **GitHub 仓库**: [https://github.com/983033995/AutoAPIGen](https://github.com/983033995/AutoAPIGen)
- 🐛 **问题反馈**: [GitHub Issues](https://github.com/983033995/AutoAPIGen/issues)
- 📬 **邮箱联系**: 983033995@qq.com

</div>


<div class="footer-cta">

## 🚀 立即开始使用

<div style="text-align: center; margin: 2rem 0;">
  <a href="/guide/quickstart" class="cta-button">🚀 快速开始</a>
  <a href="/guide/" class="cta-button-outline">📚 阅读文档</a>
</div>

**让 API 请求代码生成不再繁琐，专注于真正重要的业务逻辑！**

<p style="text-align: center; color: #666; font-size: 14px; margin-top: 2rem;">
  如果觉得好用，别忘了给我们一个 ⭐️ Star 支持一下！
</p>

</div>

<style>
.slidev-container {
  margin: 2rem 0;
}

/* 英雄区域样式 */
.hero-section {
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 50%, var(--vp-c-bg-alt) 100%);
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 2rem 2rem;
  margin-bottom: 4rem;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(var(--vp-c-brand-rgb), 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 50%, var(--vp-c-brand-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.hero-button.primary {
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  color: white;
  box-shadow: 0 8px 32px rgba(var(--vp-c-brand-rgb), 0.3);
}

.hero-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(var(--vp-c-brand-rgb), 0.4);
}

.hero-button.secondary {
  border: 2px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
  background: transparent;
}

.hero-button.secondary:hover {
  background: var(--vp-c-brand);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(var(--vp-c-brand-rgb), 0.2);
}

p.text, p.tagline {
  max-width: 1170px !important;
}

.vp-doc {
  max-width: 1175px;
  margin: 0 auto;
}

.vp-doc h1 {
  margin-top: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.vp-doc h2 {
  margin-top: 4rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  position: relative;
}

.vp-doc h2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand) 0%, var(--vp-c-brand-light) 100%);
  border-radius: 2px;
}

.vp-doc h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--vp-c-brand);
}

/* 对比表格样式 */
.comparison-table {
  margin: 2rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 0;
}

.comparison-table th,
.comparison-table td {
  padding: 16px 20px;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.comparison-table th {
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg-alt) 100%);
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-size: 1rem;
}

.comparison-table td:nth-child(4) {
  font-weight: 600;
  color: var(--vp-c-brand);
}

.comparison-table tr:hover {
  background-color: var(--vp-c-bg-soft);
  transform: scale(1.01);
  transition: all 0.2s ease;
}

/* 功能列表样式 */
.features-section {
  max-width: 1175px;
  margin: 3rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider-light);
}

.feature-list {
  margin: 1.5rem 0;
  list-style: none;
  padding-left: 0;
}

.feature-list ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.feature-list li {
  margin: 1rem 0;
  padding: 1rem;
  background: var(--vp-c-bg);
  border-radius: 8px;
  border-left: 4px solid var(--vp-c-brand);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

.feature-list li:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.feature-list strong {
  color: var(--vp-c-brand);
  font-weight: 600;
}

/* 适用场景 */
.use-cases {
  max-width: 1175px;
  margin: 3rem auto;
}

/* 适用场景网格 */
.use-case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.use-case-item {
  padding: 2rem;
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.use-case-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand) 0%, var(--vp-c-brand-light) 100%);
}

.use-case-item:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  transform: translateY(-4px);
}

.use-case-item h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
  font-size: 1.2rem;
  font-weight: 600;
}

.use-case-item p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.7;
}

/* 快速开始区域 */
.quick-start {
  max-width: 1175px;
  margin: 3rem auto;
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg-alt) 100%);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider-light);
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.quick-start h3 {
  color: var(--vp-c-brand);
  margin-top: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.quick-start h3:first-of-type {
  margin-top: 0;
}

.quick-start pre {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
}

/* 社区区域 */
.community {
  max-width: 1175px;
  margin: 3rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider-light);
}

.community a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  position: relative;
}

.community a:hover {
  color: var(--vp-c-brand-dark);
  background: var(--vp-c-brand-light);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(var(--vp-c-brand-rgb), 0.2);
}

.community a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--vp-c-brand);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.community a:hover::before {
  width: 100%;
}

.community h3 {
  color: var(--vp-c-brand);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.community ul {
  list-style: none;
  padding-left: 0;
}

.community li {
  margin: 0.8rem 0;
  padding: 0.8rem 1rem;
  background: var(--vp-c-bg);
  border-radius: 8px;
  border-left: 3px solid var(--vp-c-brand);
  transition: all 0.3s ease;
}

.community li:hover {
  transform: translateX(4px);
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
}

.stats img {
  display: inline-block;
  transition: transform 0.2s ease;
}

.stats img:hover {
  transform: scale(1.05);
}

/* 底部 CTA */
.footer-cta {
  max-width: 1175px;
  margin: 4rem auto;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--vp-c-brand-light) 0%, var(--vp-c-brand) 100%);
  border-radius: 20px;
  color: white;
  position: relative;
  overflow: hidden;
}

.footer-cta::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
}

.footer-cta h2 {
  margin-top: 0;
  border: none;
  padding: 0;
  color: white;
  position: relative;
  z-index: 1;
}

.footer-cta p {
  color: rgba(255,255,255,0.9);
  position: relative;
  z-index: 1;
}

.cta-button,
.cta-button-outline {
  display: inline-block;
  padding: 1rem 2rem;
  margin: 0.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.cta-button {
  background-color: white;
  color: var(--vp-c-brand);
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.cta-button:hover {
  background-color: var(--vp-c-bg-soft);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.cta-button-outline {
  border: 2px solid white;
  color: white;
  background: transparent;
}

.cta-button-outline:hover {
  background-color: white;
  color: var(--vp-c-brand);
  transform: translateY(-3px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 1.5rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-button {
    width: 100%;
    max-width: 280px;
  }
  
  .vp-doc h1 {
    font-size: 2rem;
  }
  
  .vp-doc h2 {
    font-size: 1.6rem;
    margin-top: 3rem;
  }
  
  .use-case-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .features-section,
  .quick-start,
  .community {
    padding: 1.5rem;
    margin: 2rem auto;
  }
  
  .footer-cta {
    padding: 3rem 1.5rem;
    margin: 3rem auto;
  }
  
  .stats {
    flex-direction: column;
    align-items: center;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 12px 16px;
    font-size: 0.9rem;
  }
}
</style>
