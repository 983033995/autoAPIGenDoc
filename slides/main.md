---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: 'text-center'
highlighter: shiki
lineNumbers: false
info: |
  VSCode 扩展文档
  功能演示和使用指南的交互式演示
drawings:
  persist: false
css: unocss
---

# VSCode 扩展使用指南

交互式功能演示与教程

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    按空格键进入下一页 <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# 功能概览

<v-clicks>

- 主要功能
  - 代码智能提示
  - 自动格式化
  - 实时错误检测

- 开发工具集成
  - Git 版本控制
  - 调试支持
  - 任务自动化

- 自定义设置
  - 快捷键配置
  - 主题定制
  - 工作区设置

</v-clicks>

---

# 快速安装

```bash
code --install-extension your-extension-id
```

<div v-click>
或者通过 VS Code 应用商店安装：

1. 打开 VS Code
2. 进入扩展视图 (Ctrl+Shift+X)
3. 搜索 "扩展名称"
4. 点击安装按钮
</div>

---

# 使用演示

<div class="grid grid-cols-2 gap-4">
<div>

## 基础用法

```typescript
// 示例代码
const extension = new Extension();
extension.启用功能();
```

</div>
<div>

## 预期效果

- 提高开发效率
- 减少重复工作
- 增强代码质量

</div>
</div>

---

# 配置选项

```json
{
  "extension.设置1": true,
  "extension.设置2": "值",
  "extension.设置3": {
    "选项": "值"
  }
}
```

---

# 更多资源

[官方文档](/) · [GitHub](https://github.com/your-username/your-extension) · [问题反馈](https://github.com/your-username/your-extension/issues)

---

# 常见问题解答

<v-clicks>

- 问：如何更新扩展？
  - 答：VS Code 会自动检查并提示更新

- 问：支持哪些编程语言？
  - 答：支持所有主流编程语言

- 问：如何自定义设置？
  - 答：通过设置面板或 settings.json 文件配置

</v-clicks>

---
layout: center
class: text-center
---

# 感谢使用

如需帮助请访问我们的[支持页面](/)或[文档中心](/guide/)