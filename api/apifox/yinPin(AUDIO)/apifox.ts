/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck: 忽略类型错误 系统工具生成

import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import type { getV1AudioSpeechBody, getV1AudioSpeechRes, getV1AudioTranscriptionsRes, getV1AudioTranslationsRes } from './interface';
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

/**
 * @description /创建转录
 * @url GET https://api.openai.com/v1/audio/transcriptions
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846089
 */
export const getV1AudioTranscriptions = async (
  axiosConfig?: AxiosRequestConfig,
): Promise<Expand<getV1AudioTranscriptionsRes>> => {
  return axios.get(
    'https://api.openai.com/v1/audio/transcriptions',
    axiosConfig,
  )
}

/**
 * @description /创建翻译
 * @url GET https://api.openai.com/v1/audio/translations
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846090
 */
export const getV1AudioTranslations = async (
  axiosConfig?: AxiosRequestConfig,
): Promise<Expand<getV1AudioTranslationsRes>> => {
  return axios.get('https://api.openai.com/v1/audio/translations', axiosConfig)
}

  
/**
 * @description /创建语音
 * @url GET https://api.openai.com/v1/audio/speech
 * @host https://app.apifox.com/link/project/5464284/apis/api-233846088
 */
export const getV1AudioSpeech = async (axiosConfig?: AxiosRequestConfig): Promise<Expand<getV1AudioSpeechRes>> => {
  return axios.get('https://api.openai.com/v1/audio/speech', axiosConfig);
}