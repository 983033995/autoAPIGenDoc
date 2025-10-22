<!--
 * @FilePath: /autoAPIGenDoc/docs/api/index.md
 * @Description: 
-->
# options 参数说明

```ts
const options: {
    pathParams: ApiDetailParametersQuery[];
    pathParamsType: string;
    queryParams: ApiDetailParametersQuery[];
    queryParamsType: string;
    apiMethod: string;
    apiReturnType: string;
    haveReqBody: boolean;
    dataParamsType: string;
    apiFunctionName: string;
    extraFunctionName: string;
    apiPath: string;
    buildParameters:  (parameters: ApiDetailParametersQuery) => string;
    log: (errorMessage: string, type?: "Info" | "Warning" | "Error") => void;
    useProjectId: boolean;
    projectId: string | number;
}
```

参数说明：

参数名 | 类型 | 说明
--- | --- | ---
pathParams  | ApiDetailParametersQuery[] | 路径参数（拼接在url上的参数，eg：v1/fine_tuning/jobs/{fine_tuning_job_id} fine_tuning_job_id是一个路径参数）
pathParamsType | string | 路径参数的 TypeScript 类型名
queryParams | ApiDetailParametersQuery[] | 接口的query参数
queryParamsType | string | query参数的 TypeScript 类型名
apiMethod | string | 接口的请求方法(get/post等)
apiReturnType | string | 接口请求返回值的 TypeScript 类型名
haveReqBody | boolean | 接口是否需要body请求体
dataParamsType | string | body请求体的 TypeScript 类型名
apiFunctionName | string | 接口方法的函数名
extraFunctionName | string | 额外拓展的函数名
apiPath | string | 接口的请求地址
buildParameters |  (parameters: ApiDetailParametersQuery) => string | 将接口文档中的参数信息转换为 TypeScript 类型
log | (errorMessage: string, type?: "Info" \| "Warning" \| "Error") => void | 日志输出，用于在编辑器中输出日志信息
useProjectId | boolean | 是否在请求配置中使用项目ID
projectId | string \| number | 项目ID，用于多项目环境下的请求区分

## 使用示例

### 自定义返回函数示例

```javascript
function(options) {
  const { 
    apiMethod, 
    apiPath, 
    apiFunctionName, 
    haveReqBody, 
    dataParamsType,
    pathParamsType,
    pathParams,
    queryParamsType,
    useProjectId,
    projectId
  } = options;
  
  // 构建函数参数
  const params = [];
  if (pathParams.length > 1) {
    params.push(`pathParams: Expand<${pathParamsType}>`);
  } else if (pathParams.length === 1) {
    params.push(`${pathParams[0].name}: ${buildParameters(pathParams[0])}`);
  }
  
  if (queryParamsType) {
    params.push(`params: Expand<${queryParamsType}>`);
  }
  
  if (haveReqBody) {
    params.push(`data: Expand<${dataParamsType}>`);
  }
  
  params.push('config?: RequestConfig');
  
  // 构建函数体
  const url = pathParams.length 
    ? `\`${apiPath}\`` 
    : `'${apiPath}'`;
    
  const dataParam = haveReqBody ? 'data' : '{}';
  
  const axiosConfig = useProjectId 
    ? `{ ...config, projectId: ${projectId} }` 
    : 'config';
  
  return `export const ${apiFunctionName} = async (${params.join(', ')}): Promise<Expand<${apiReturnType}>> => {
  return http.${apiMethod}(${url}, ${dataParam}, ${axiosConfig});
}`;
}
```

### 自定义拓展函数示例

```javascript
function(options) {
  const { extraFunctionName, apiFunctionName } = options;
  
  return `export const ${extraFunctionName} = () => {
  // 自定义逻辑
  return useQuery(['${apiFunctionName}'], () => ${apiFunctionName}());
}`;
}
```

## 类型定义

### ApiDetailParametersQuery

```ts
interface ApiDetailParametersQuery {
  name: string;
  type: string;
  required: boolean;
  description: string;
  example: string;
  schema: {
    type: string;
    format: string;
  };
  enum: string[];
  items: {
    type: string;
  };
}
```

### RequestConfig

```ts
interface RequestConfig {
  url: string;
  method: string;
  data: any;
  header: Record<string, string>;
  dataType: string;
  noShowMsg: boolean;
  loading: boolean;
  projectId: string | number;
}
```

## 注意事项

1. **参数处理**：在自定义函数中，需要正确处理各种参数组合，确保生成的代码语法正确。
2. **类型安全**：建议使用 `Expand<T>` 类型包装返回值，以获得更好的类型提示。
3. **错误处理**：使用 `log` 函数记录错误信息，便于调试。
4. **项目ID**：当 `useProjectId` 为 true 时，需要在请求配置中添加 `projectId` 字段。