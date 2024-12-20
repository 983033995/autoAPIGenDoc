/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck: 忽略类型错误 系统工具生成
import http from '@/services/http'
import qs from 'qs'
import type { AxiosRequestConfig } from 'axios'
import type { IConfig } from '@galaxy/swrv'
import type { deleteV1FilesFileIdRes, getFilesFileIdContentRes, getV1FilesFileIdRes, getV1FilesQuery, getV1FilesRes, postV1FilesBody, postV1FilesRes } from './interface';
import { useMutation, useSWRGet } from '@/services/swrv'
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;


/**
 * @description /删除文件
 * @url DELETE https://api.openai.com/v1/files/{file_id}
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846106
 */
export const deleteV1FilesFileId = async (file_id: string, axiosConfig?: AxiosRequestConfig): Promise<Expand<deleteV1FilesFileIdRes>> => {
  return axios.delete(`https://api.openai.com/v1/files/${file_id}`, axiosConfig);
}
  
/**
* 自定义函数：usedeleteV1FilesFileId
* @description /删除文件
* @url DELETE https://api.openai.com/v1/files/{file_id}
* @host https://app.apifox.com/link/project/5464284/apis/api-233846106
*/

export const useDeleteV1FilesFileId = (axiosConfig?: AxiosRequestConfig) => {
   return useMutation<Expand<deleteV1FilesFileIdRes>, Expand<deleteV1FilesFileIdBody>>(deleteV1FilesFileId, axiosConfig)
}


/**
 * @description /检索文件内容
 * @url GET https://api.openai.com/v1/files/{file_id}/content
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846108
 */
export const getFilesFileIdContent = async (file_id: string, axiosConfig?: AxiosRequestConfig): Promise<Expand<getFilesFileIdContentRes>> => {
  return axios.get(`https://api.openai.com/v1/files/${file_id}/content`, axiosConfig);
}
  
/**
* 自定义函数：usegetFilesFileIdContent
* @description /检索文件内容
* @url GET https://api.openai.com/v1/files/{file_id}/content
* @host https://app.apifox.com/link/project/5464284/apis/api-233846108
*/

export const useGetFilesFileIdContent = (file_id: string, swrvConfig: IConfig = {}) => {
    return useSWRGet<Expand<getFilesFileIdContentRes>>(`https://api.openai.com/v1/files/${file_id}/content`, swrvConfig)
}


/**
 * @description /列出文件
 * @url GET https://api.openai.com/v1/files _
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846109
 */
export const getV1Files = async (params: Expand<getV1FilesQuery>, axiosConfig?: AxiosRequestConfig): Promise<Expand<getV1FilesRes>> => {
  return axios.get(`https://api.openai.com/v1/files _?${qs.stringify(params)}`, axiosConfig);
}
  
/**
* 自定义函数：usegetV1Files
* @description /列出文件
* @url GET https://api.openai.com/v1/files _
* @host https://app.apifox.com/link/project/5464284/apis/api-233846109
*/

export const useGetV1Files = (params: Expand<getV1FilesQuery | Ref<getV1FilesQuery>>, swrvConfig: IConfig = {}) => {
   const computedParams = computed(() => qs.stringify(unref(params)))
    return useSWRGet<Expand<getV1FilesRes>>(() => computedParams.value && `https://api.openai.com/v1/files _?${computedParams.value}`, swrvConfig)
}


/**
 * @description /上传文件
 * @url POST https://api.openai.com/v1/files
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846105
 */
export const postV1Files = async (data: Expand<postV1FilesBody>, axiosConfig?: AxiosRequestConfig): Promise<Expand<postV1FilesRes>> => {
  return axios.post('https://api.openai.com/v1/files', data, axiosConfig);
}
  
/**
* 自定义函数：usepostV1Files
* @description /上传文件
* @url POST https://api.openai.com/v1/files
* @host https://app.apifox.com/link/project/5464284/apis/api-233846105
*/

export const usePostV1Files = (axiosConfig?: AxiosRequestConfig) => {
   return useMutation<Expand<postV1FilesRes>, Expand<postV1FilesBody>>(postV1Files, axiosConfig)
}
