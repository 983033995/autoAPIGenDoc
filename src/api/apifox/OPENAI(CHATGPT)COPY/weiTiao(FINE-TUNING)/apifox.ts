/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck: 忽略类型错误 系统工具生成
import { useMutation, useSWRGet } from '@/services/swrv'
import type { IConfig } from '@galaxy/swrv'
import type { AxiosRequestConfig } from 'axios'
import qs from 'qs'
import type {
  getFineTuningJobsFineTuningJobIdRes,
  getJobsFineTuningJobIdEventsQuery,
  getJobsFineTuningJobIdEventsRes,
  getV1FineTuningJobsQuery,
  getV1FineTuningJobsRes,
  postJobsFineTuningJobIdCancelRes,
  postV1FineTuningJobsBody,
  postV1FineTuningJobsRes,
} from './interface'
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

/**
 * @description /创建微调作业
 * @url POST https://api.openai.com/v1/fine_tuning/jobs
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846094
 */
export const postV1FineTuningJobs = async (
  data: Expand<postV1FineTuningJobsBody>,
  axiosConfig?: AxiosRequestConfig,
): Promise<Expand<postV1FineTuningJobsRes>> => {
  return axios.post(
    'https://api.openai.com/v1/fine_tuning/jobs',
    data,
    axiosConfig,
  )
}

/**
 * 自定义函数：usepostV1FineTuningJobs
 * @description /创建微调作业
 * @url POST https://api.openai.com/v1/fine_tuning/jobs
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846094
 */

export const usePostV1FineTuningJobs = (axiosConfig?: AxiosRequestConfig) => {
  return useMutation<
    Expand<postV1FineTuningJobsRes>,
    Expand<postV1FineTuningJobsBody>
  >(postV1FineTuningJobs, axiosConfig)
}

/**
 * @description /列出微调作业
 * @url GET https://api.openai.com/v1/fine_tuning/jobs
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846095
 */
export const getV1FineTuningJobs = async (
  params: Expand<getV1FineTuningJobsQuery>,
  axiosConfig?: AxiosRequestConfig,
): Promise<Expand<getV1FineTuningJobsRes>> => {
  return axios.get(
    `https://api.openai.com/v1/fine_tuning/jobs?${qs.stringify(params)}`,
    axiosConfig,
  )
}

/**
 * 自定义函数：usegetV1FineTuningJobs
 * @description /列出微调作业
 * @url GET https://api.openai.com/v1/fine_tuning/jobs
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846095
 */

export const useGetV1FineTuningJobs = (
  params: Expand<getV1FineTuningJobsQuery | Ref<getV1FineTuningJobsQuery>>,
  swrvConfig: IConfig = {},
) => {
  const computedParams = computed(() => qs.stringify(unref(params)))
  return useSWRGet<Expand<getV1FineTuningJobsRes>>(
    () =>
      computedParams.value &&
      `https://api.openai.com/v1/fine_tuning/jobs?${computedParams.value}`,
    swrvConfig,
  )
}

/**
 * @description /检索微调作业
 * @url GET https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846096
 */
export const getFineTuningJobsFineTuningJobId = async (
  fine_tuning_job_id: string,
  axiosConfig?: AxiosRequestConfig,
): Promise<Expand<getFineTuningJobsFineTuningJobIdRes>> => {
  return axios.get(
    `https://api.openai.com/v1/fine_tuning/jobs/${fine_tuning_job_id}`,
    axiosConfig,
  )
}

/**
 * 自定义函数：usegetFineTuningJobsFineTuningJobId
 * @description /检索微调作业
 * @url GET https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846096
 */

export const useGetFineTuningJobsFineTuningJobId = (
  fine_tuning_job_id: string,
  swrvConfig: IConfig = {},
) => {
  return useSWRGet<Expand<getFineTuningJobsFineTuningJobIdRes>>(
    `https://api.openai.com/v1/fine_tuning/jobs/${fine_tuning_job_id}`,
    swrvConfig,
  )
}

/**
 * @description /取消微调
 * @url POST https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}/cancel
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846097
 */
export const postJobsFineTuningJobIdCancel = async (
  fine_tuning_job_id: string,
  axiosConfig?: AxiosRequestConfig,
): Promise<Expand<postJobsFineTuningJobIdCancelRes>> => {
  return axios.post(
    `https://api.openai.com/v1/fine_tuning/jobs/${fine_tuning_job_id}/cancel`,
    {},
    axiosConfig,
  )
}

/**
 * 自定义函数：usepostJobsFineTuningJobIdCancel
 * @description /取消微调
 * @url POST https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}/cancel
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846097
 */

export const usePostJobsFineTuningJobIdCancel = (
  axiosConfig?: AxiosRequestConfig,
) => {
  return useMutation<
    Expand<postJobsFineTuningJobIdCancelRes>,
    Expand<postJobsFineTuningJobIdCancelBody>
  >(postJobsFineTuningJobIdCancel, axiosConfig)
}

/**
 * @description /列出微调事件
 * @url GET https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}/events
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846098
 */
export const getJobsFineTuningJobIdEvents = async (
  fine_tuning_job_id: string,
  params: Expand<getJobsFineTuningJobIdEventsQuery>,
  axiosConfig?: AxiosRequestConfig,
): Promise<Expand<getJobsFineTuningJobIdEventsRes>> => {
  return axios.get(
    `https://api.openai.com/v1/fine_tuning/jobs/${fine_tuning_job_id}/events?${qs.stringify(params)}`,
    axiosConfig,
  )
}

/**
 * 自定义函数：usegetJobsFineTuningJobIdEvents
 * @description /列出微调事件
 * @url GET https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}/events
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846098
 */

export const useGetJobsFineTuningJobIdEvents = (
  fine_tuning_job_id: string,
  params: Expand<
    getJobsFineTuningJobIdEventsQuery | Ref<getJobsFineTuningJobIdEventsQuery>
  >,
  swrvConfig: IConfig = {},
) => {
  const computedParams = computed(() => qs.stringify(unref(params)))
  return useSWRGet<Expand<getJobsFineTuningJobIdEventsRes>>(
    () =>
      computedParams.value &&
      `https://api.openai.com/v1/fine_tuning/jobs/${fine_tuning_job_id}/events?${computedParams.value}`,
    swrvConfig,
  )
}
