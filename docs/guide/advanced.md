# 高级功能

## 多项目管理

AutoAPIGen 支持同时管理多个项目，适用于复杂团队开发场景。

### 配置多个项目

1. 在插件配置中，可以添加多个项目的配置信息
2. 支持为每个项目设置独立的认证信息和生成路径
3. 可以通过项目名称快速切换和管理不同项目

### 项目隔离

- 不同项目的接口代码会生成到不同的目录中
- 类型定义和接口函数名称不会冲突
- 支持项目级别的配置自定义

## 自定义代码生成

### 自定义返回函数

AutoAPIGen 支持通过自定义函数控制生成的代码格式，满足不同项目的需求。

#### 使用场景

1. 需要与项目现有的请求封装库集成
2. 需要添加特定的请求拦截器或响应处理逻辑
3. 需要生成符合特定框架要求的代码格式

#### 配置方法

在插件配置中设置自定义返回函数：

```javascript
function(options) {
  // 解构options参数
  const { 
    apiMethod, 
    apiPath, 
    apiFunctionName, 
    haveReqBody, 
    dataParamsType,
    pathParamsType,
    pathParams,
    queryParamsType
  } = options;
  
  // 构建自定义代码
  // 返回字符串格式的代码
}
```

### 自定义拓展函数

除了主接口函数外，还可以生成额外的辅助函数。

#### 使用场景

1. 生成与状态管理库（如 React Query、SWR）集成的自定义 Hook
2. 生成测试用的 Mock 函数
3. 生成特定业务场景下的封装函数

#### 配置方法

在插件配置中设置自定义拓展函数：

```javascript
function(options) {
  const { extraFunctionName, apiFunctionName } = options;
  
  return `export const ${extraFunctionName} = () => {
  // 自定义逻辑
  return useQuery(['${apiFunctionName}'], () => ${apiFunctionName}());
}`;
}
```

## 类型定义增强

### 类型拓展

AutoAPIGen 支持在生成的类型定义中添加动态属性支持：

```ts
interface ApiResponse {
  code: number;
  data: UserData;
  msg: string;
  [key: string]: any; // 类型拓展
}
```

### 复杂类型处理

插件能够正确处理复杂的嵌套类型和引用类型：

1. 对象类型的嵌套属性
2. 数组类型的元素类型
3. 通过 `$ref` 引用的外部类型定义
4. 枚举类型的联合类型定义

## 请求配置增强

### 项目ID支持

在多项目环境下，可以为每个请求添加项目标识：

```ts
const config = {
  ...axiosConfig,
  projectId: 12345
};
```

### 环境变量集成

支持与项目环境变量集成，自动切换不同环境的请求地址：

```ts
const url = `${env.SERVER_URL}${apiPath}`;
```

## 代码质量保障

### Prettier 集成

生成的代码会自动使用 Prettier 进行格式化，确保代码风格统一。

### ESLint 兼容

生成的代码符合 TypeScript 和 ESLint 规范，无需额外修改。

### 类型安全

所有生成的类型定义都经过严格检查，确保类型安全。

## 性能优化

### 增量更新

插件支持增量更新机制，只重新生成变更的接口代码，提高更新效率。

### 批量操作

支持批量生成多个接口代码，减少重复操作。

### 智能缓存

插件会缓存项目信息和接口数据，减少重复请求，提高响应速度。

## 故障排除

### 常见问题

1. **认证失败**：检查 Authorization 配置是否正确
2. **接口获取失败**：确认网络连接和项目ID配置
3. **代码生成失败**：检查生成路径权限和磁盘空间

### 日志查看

插件提供详细的日志信息，帮助定位问题：

1. 在 VSCode 输出面板中查看 AutoAPIGen 日志
2. 通过日志了解代码生成过程中的详细信息
3. 根据错误信息快速定位和解决问题

### 调试技巧

1. 使用插件的刷新功能同步最新接口信息
2. 检查插件配置是否完整和正确
3. 确认项目依赖是否安装完整