/*
 * @FilePath: /autoAPIGenDoc/docs/.vitepress/config.ts
 * @Description: 
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AutoAPIGen",
  description: "AutoAPIGen扩展的官方文档",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '../logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '配置', link: '/config/' },
      { text: 'API', link: '/api/' }
    ],
    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: '简介', link: '/guide/' },
          { text: '安装', link: '/guide/installation' },
          { text: '快速开始', link: '/guide/quickstart' }
        ]
      },
      {
        text: '配置说明',
        items: [
          { text: '基本设置', link: '/config/' },
          { text: '高级选项', link: '/config/advanced' }
        ]
      },
      {
        text: '使用指南',
        items: [
          { text: '基础用法', link: '/guide/usage' },
          { text: '示例', link: '/guide/examples' },
        ]
      },
      {
        text: 'API参考',
        items: [
          { text: 'options', link: '/api/' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/983033995/AutoAPIGen-Vsix' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024'
    }
  },
  base: '/'
})