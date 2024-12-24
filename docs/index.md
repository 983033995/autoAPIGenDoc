---
layout: home
hero:
  name: AutoAPIGen 扩展
  text: 根据 API 文档一键生成接口请求代码及 TS 类型定义
  tagline: 高效的 API 文档生成工具，提升开发效率，减少重复工作
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 查看 GitHub 仓库
      link: https://github.com/983033995/AutoAPIGen-Vsix

features:
  - icon: 📐
    title: 界面化操作
    details: 简单直观的界面，所见即所得，轻松上手。
  - icon: ⚡️
    title: 丰富的内置功能
    details: 提供常用代码导入和查看功能，让开发更高效。
  - icon: 🛠️
    title: 强大的自定义能力
    details: 灵活配置选项，满足不同团队和项目的特定需求。
---

<div class="vp-doc">

# 功能演示

<div class="slidev-container">
  <!-- <iframe 
    src="http://localhost:3030/1" 
    style="width: 100%; height: 480px; border: none; border-radius: 8px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);"
    allow="fullscreen"
  ></iframe> -->
  <video controls width="600">
    <source src="./guide/img/录屏2024-12-19 16.57.34.mov" type="video/mp4">
    您的浏览器不支持视频播放，请升级到支持 HTML5 的浏览器。
  </video>
</div>

## 主要特性

### 对接 Apifox API 文档

- 快速查看 API 列表，支持多项目管理
- 高效搜索和定位 API
- 快速切换不同项目，灵活管理

### 灵活的自定义配置

- 配置生成目录和目标项目
- 提供 axios 和 TS 微信小程序的接口请求模板
- 支持自定义接口返回模板，满足多样化需求
- 自定义 Prettier 配置，自动格式化生成代码

### 优化的开发体验

- 无需手写接口请求代码和 TS 类型定义
- 统一团队接口风格，减少沟通成本
- 自动生成类型安全的接口请求代码，提高代码质量
- 自动生成接口文档，减少文档编写成本

</div>

<style>
.slidev-container {
  margin: 2rem 0;
}
p.text, p.tagline {
  max-width: 1170px !important;
}
.vp-doc {
  max-width: 1175px;
  margin: 0 auto;
}
.vp-doc h1 {
  margin-top: 2rem;
}

.vp-doc h2 {
  margin-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1.5rem;
}

.vp-doc h3 {
  margin-top: 1rem;
}
</style>
