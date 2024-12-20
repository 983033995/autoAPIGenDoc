/**
 * @description /创建微调作业--接口请求Body参数
 * @url POST https://api.openai.com/v1/fine_tuning/jobs
 */
export interface postV1FineTuningJobsBody {
  hyperparameters?: postV1FineTuningJobsBodyHyperparameters
  model: string
  suffix: string
  training_file: string
  validation_file: string
  [key: string]: any
}

/** 用于微调工作的超参数。 */
export interface postV1FineTuningJobsBodyHyperparameters {
  batch_size?: string
  learning_rate_multiplier?: string
  n_epochs?: string
  [key: string]: any
}

/**
 * @description /创建微调作业--接口返回值
 * @url POST https://api.openai.com/v1/fine_tuning/jobs
 */
export interface postV1FineTuningJobsRes {
  [key: string]: any
}

/**
 * @description /列出微调作业--接口请求Query参数
 * @url GET https://api.openai.com/v1/fine_tuning/jobs
 */
export interface getV1FineTuningJobsQuery {
  /** 上一个分页请求中最后一个作业的标识符。

 */
  after?: number
  /** 要检索的微调作业的数量。

 */
  limit?: number
  [key: string]: any
}

/**
 * @description /列出微调作业--接口返回值
 * @url GET https://api.openai.com/v1/fine_tuning/jobs
 */
export type getV1FineTuningJobsRes = getV1FineTuningJobsResItemItem[]

/** getV1FineTuningJobsResItem */
export interface getV1FineTuningJobsResItemItem {
  created_at?: number
  data?: any
  id?: string
  level?: string
  message?: string
  object?: string
  type?: string
  [key: string]: any
}

/**
 * @description /检索微调作业--接口返回值
 * @url GET https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}
 */
export interface getFineTuningJobsFineTuningJobIdRes {
  [key: string]: any
}

/**
 * @description /取消微调--接口返回值
 * @url POST https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}/cancel
 */
export interface postJobsFineTuningJobIdCancelRes {
  [key: string]: any
}

/**
 * @description /列出微调事件--接口请求Query参数
 * @url GET https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}/events
 */
export interface getJobsFineTuningJobIdEventsQuery {
  /** 上一个分页请求中最后一个事件的标识符。

 */
  after?: string
  /** 要检索的事件数。

 */
  limit?: number
  [key: string]: any
}

/**
 * @description /列出微调事件--接口返回值
 * @url GET https://api.openai.com/v1/fine_tuning/jobs/{fine_tuning_job_id}/events
 */
export type getJobsFineTuningJobIdEventsRes =
  getJobsFineTuningJobIdEventsResItemItem[]

/** getJobsFineTuningJobIdEventsResItem */
export interface getJobsFineTuningJobIdEventsResItemItem {
  created_at: number
  data: any
  id: string
  level: string
  message: string
  object: string
  type: string
  [key: string]: any
}
