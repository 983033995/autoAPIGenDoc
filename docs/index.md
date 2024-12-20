---
layout: home
hero:
  name: AutoAPIGen 扩展
  text: 根据API文档生成接口请求及TS类型
  tagline: 高效的API文档生成工具，让你不再为写接口请求的类型定义而烦恼
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/983033995/AutoAPIGen-Vsix

features:
  - icon: 📐
    title: 界面化
    details: 所见即所得的界面，直观的操作体验
  - icon: ⚡️
    title: 内置功能
    details: 提供常用的代码导入、查看功能，方便快捷
  - icon: 🛠️
    title: 自定义配置
    details: 灵活的配置选项，满足不同开发者的需求
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

### 对接 apifox API 文档

- 快速查看 API 列表
- 快速搜索 API
- 快速切换不同项目

### 自定义配置

- 自定义配置生成目录
- 自定义选择API项目
- 内置通用axios、ts版微信小程序的接口请求
- 支持自定义接口返回模版
- 支持自定义prettier配置生成的代码格式

### 开发体验

- 不需要自己写接口请求代码，不需要写TS类型定义
- 统一团队的接口请求定义
- 自动生成TS类型定义及带有TS类型定义的接口请求

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
