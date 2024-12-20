/**
 * @description /创建完成--接口请求Body参数
 * @url POST https://api.openai.com/v1/completions
 */
export interface postV1CompletionsBody {
  best_of?: number
  echo?: boolean
  frequency_penalty?: number
  logit_bias?: postV1CompletionsBodyLogit_bias
  logprobs?: any
  max_tokens?: number
  model: string
  n?: number
  presence_penalty?: number
  prompt: string
  seed?: number
  stop?: string
  stream?: boolean
  suffix?: string
  temperature?: number
  top_p?: number
  user: string
  [key: string]: any
}

/** 默认为null 修改完成中指定令牌出现的可能性。  接受一个JSON对象,该对象将令牌(由GPT令牌化器中的令牌ID指定)映射到关联偏差值,-100到100。您可以使用这个令牌化器工具(适用于GPT-2和GPT-3)将文本转换为令牌ID。从数学上讲,偏差在对模型进行采样之前添加到生成的logit中。确切效果因模型而异,但-1至1之间的值应降低或提高选择的可能性;像-100或100这样的值应导致相关令牌的禁用或专属选择。  例如,您可以传递{"50256": -100}来防止生成<|endoftext|>令牌。 */
export interface postV1CompletionsBodyLogit_bias {
  [key: string]: any
}

/**
 * @description /创建完成--接口返回值
 * @url POST https://api.openai.com/v1/completions
 */
export interface postV1CompletionsRes {
  choices: postV1CompletionsResChoicesItem[]
  created: number
  id: string
  model: string
  object: string
  system_fingerprint: string
  usage: postV1CompletionsResUsage
  [key: string]: any
}

/** postV1CompletionsResChoices */
export interface postV1CompletionsResChoicesItem {
  finish_reason?: string
  index?: number
  logprobs?: any
  text?: string
  [key: string]: any
}

/** postV1CompletionsResUsage */
export interface postV1CompletionsResUsage {
  completion_tokens: number
  prompt_tokens: number
  total_tokens: number
  [key: string]: any
}
