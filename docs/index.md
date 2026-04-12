---
layout: home
hero:
  name: AutoAPIGen
  text: 把 Apifox 接口生成、CLI 查询和 AI 工作流统一起来
  tagline: 一个同时面向 VS Code、命令行和 AI 助手的接口代码生成方案
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quickstart
    - theme: alt
      text: AI / CLI 指南
      link: /guide/ai-support
    - theme: alt
      text: GitHub
      link: https://github.com/983033995/AutoAPIGen
features:
  - icon: ⚡
    title: 插件内一键生成
    details: 在 VS Code 侧边栏查看接口、搜索分组、生成 apifox.ts 与 interface.ts。
  - icon: 🤖
    title: AI 原生工作流
    details: 用 aag query、aag groups、aag generate 让 AI 先查本地，再查摘要，再生成代码。
  - icon: 🧭
    title: 路径规则统一
    details: CLI 与插件共用同一套输出目录规则，适合历史项目和平滑升级。
  - icon: 🏗️
    title: 适配真实项目
    details: 已覆盖 Next.js 单仓与 pnpm monorepo 场景，支持 useProjectName 和 useProjectId。
  - icon: 🧩
    title: 高度可定制
    details: 支持 axios / 微信小程序 / custom 模型，支持自定义 head、return、extra function。
  - icon: 📚
    title: 文档导向接入
    details: 插件内置 AI 支持与使用文档入口，当前版本通过文档引导完成 CLI / AI 集成。
---

<div class="home-shell">
  <section class="home-band">
    <div class="home-band__item">
      <span class="home-band__label">统一目标</span>
      <strong>把接口文档变成标准 TypeScript 产物</strong>
    </div>
    <div class="home-band__item">
      <span class="home-band__label">推荐场景</span>
      <strong>Apifox + 前端服务层 + AI 辅助开发</strong>
    </div>
    <div class="home-band__item">
      <span class="home-band__label">当前重点</span>
      <strong>CLI、AI 工作流、路径规则彻底对齐</strong>
    </div>
  </section>

  <section class="home-section">
    <div class="home-video">
      <h2>功能演示</h2>
      <div class="home-video__frame">
        <video controls playsinline preload="metadata" poster="/guide/img/image5.png">
          <source src="/guide/img/home-demo.mp4" type="video/mp4">
          您的浏览器不支持视频播放，请升级到支持 HTML5 的浏览器。
        </video>
      </div>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section__head">
      <span class="home-kicker">Why AutoAPIGen</span>
      <h2>这类团队会立刻受益</h2>
      <p>不是为了“生成代码而生成代码”，而是为了把接口层从重复劳动、风格漂移和 AI 猜接口中解放出来。</p>
    </div>
    <div class="home-grid home-grid--2">
      <article class="home-card">
        <h3>适合的团队现状</h3>
        <ul class="home-list">
          <li>已经在用 Apifox 管接口</li>
          <li>团队接口层风格不统一</li>
          <li>希望 AI 能真正理解接口，而不是瞎猜</li>
          <li>一个仓库里有多个后台 / 多个子应用</li>
        </ul>
      </article>
      <article class="home-card">
        <h3>带来的直接价值</h3>
        <ul class="home-list">
          <li>统一函数命名、目录结构、类型定义和注释格式</li>
          <li>把 Query / Body / Response 生成成可维护的产物</li>
          <li>让 AI 通过 <code>aag query --json</code> 读取结构化摘要</li>
          <li>通过 <code>useProjectName</code>、<code>useProjectId</code> 解决目录冲突与请求区分</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section__head">
      <span class="home-kicker">What Changed</span>
      <h2>1.3.0 的核心变化</h2>
      <p>这次不是简单加命令，而是把插件、CLI 和 AI 使用链路真正串起来了。</p>
    </div>
    <div class="home-grid home-grid--3">
      <article class="home-card">
        <h3>CLI 成为一等能力</h3>
        <p>除了插件界面，现在也能在项目根目录直接查询分组、接口摘要，并按需生成代码。</p>
      </article>
      <article class="home-card">
        <h3>交互式树钻取</h3>
        <p><code>aag ui</code> 和无参数的 <code>aag generate</code> 可以直接进入树形浏览和多选生成。</p>
      </article>
      <article class="home-card">
        <h3>路径规则统一</h3>
        <p>CLI 和插件都使用同一套输出规则，历史项目里以 <code>/src/services</code> 开头的配置也能平滑兼容。</p>
      </article>
    </div>
    <div class="home-code">
      <div class="home-code__title">常用命令</div>
      <pre><code>aag init
aag groups
aag query 店铺 --json
aag generate 324170228
aag ui</code></pre>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section__head">
      <span class="home-kicker">Real Projects</span>
      <h2>真实项目里是怎么落地的</h2>
      <p>下面不是理论路径，而是当前项目组里真实存在的生成目录。</p>
    </div>
    <div class="home-grid home-grid--2">
      <article class="home-card">
        <span class="home-pill">Next.js 单仓</span>
        <h3>h5-nextjs</h3>
        <p>使用 <code>path: "/src/services"</code>、<code>useProjectName: true</code>、<code>useProjectId: true</code>，并生成 React Query hooks。</p>
        <pre><code>src/services/apifox/ChaoJiAPP/dianPu/
├── apifox.ts
└── interface.ts</code></pre>
      </article>
      <article class="home-card">
        <span class="home-pill">Monorepo 子应用</span>
        <h3>admin-refactor</h3>
        <p>使用 <code>path: "/apps/copilot/src/services"</code>，直接把生成结果落到具体子应用内部。</p>
        <pre><code>apps/copilot/src/services/apifox/AIBFFJieKou/huiHuaGuanLi/
├── apifox.ts
└── interface.ts</code></pre>
      </article>
    </div>
  </section>

  <section class="home-section">
    <div class="home-section__head">
      <span class="home-kicker">Next Step</span>
      <h2>从哪里开始最顺</h2>
      <p>建议不要一上来全量生成，先跑通一条最小链路，再接 AI。</p>
    </div>
    <div class="home-actions">
      <a class="home-linkcard" href="/guide/quickstart">
        <strong>快速开始</strong>
        <span>先在插件里完成配置并生成第一个接口</span>
      </a>
      <a class="home-linkcard" href="/guide/ai-support">
        <strong>AI / CLI 指南</strong>
        <span>再把 aag、AI 规则和“本地优先”工作流接上</span>
      </a>
      <a class="home-linkcard" href="/config/">
        <strong>配置说明</strong>
        <span>最后确认 path、useProjectName、useProjectId 的真实影响</span>
      </a>
    </div>
  </section>
</div>
