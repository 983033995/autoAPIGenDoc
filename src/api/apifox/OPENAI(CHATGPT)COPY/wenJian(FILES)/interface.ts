
/**
 * @description /删除文件--接口返回值
 * @url DELETE https://api.openai.com/v1/files/{file_id}
 */
export interface deleteV1FilesFileIdRes {
        [key: string]: any
}

/**
 * @description /检索文件--接口返回值
 * @url GET https://api.openai.com/v1/files/{file_id}
 */
export interface getV1FilesFileIdRes {
        [key: string]: any
}

/**
 * @description /检索文件内容--接口返回值
 * @url GET https://api.openai.com/v1/files/{file_id}/content
 */
export interface getFilesFileIdContentRes {
        [key: string]: any
}

/**
 * @description /列出文件--接口请求Query参数
 * @url GET https://api.openai.com/v1/files _
 */
export interface getV1FilesQuery {
    /** Only return files with the given purpose.

 */
 purpose?: string
     [key: string]: any
}

/**
 * @description /列出文件--接口返回值
 * @url GET https://api.openai.com/v1/files _
 */
export type getV1FilesRes = getV1FilesResItemItem[]
    
 /** getV1FilesResItem */
export interface getV1FilesResItemItem {
    
     bytes: number;
     created_at: number;
     filename: string;
     id: string;
     object: string;
     purpose: string;
    [key: string]: any
}

/**
 * @description /上传文件--接口请求Body参数
 * @url POST https://api.openai.com/v1/files
 */
export interface postV1FilesBody {
    /** 要上传的[JSONL](https://jsonlines.readthedocs.io/en/latest/)文件的名称。  如果`purpose`设置为“微调”，则每一行都是一个 JSON 记录，其中包含代表您的[训练示例](https://platform.openai.com/docs/guides/fine-tuning/prepare-training-data)的“提示”和“完成”字段。   */
    file: File | Blob | ArrayBuffer | Uint8Array
/** 上传文件的预期目的。  使用“fine-tune”进行[微调](https://platform.openai.com/docs/api-reference/fine-tuning)，使用“assistants”进行[助手](https://platform.openai.com/docs/api-reference/assistants)和[消息](https://platform.openai.com/docs/api-reference/messages)。这使我们能够验证上传文件的格式是否正确以进行微调。  example: fine-tune */
    purpose: string
    [key: string]: any
}


/**
 * @description /上传文件--接口返回值
 * @url POST https://api.openai.com/v1/files
 */
export interface postV1FilesRes {
        [key: string]: any
}

