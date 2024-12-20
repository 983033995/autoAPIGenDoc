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
