/**
 * @description /创建聊天补全--接口请求Body参数
 * @url POST https://api.openai.com/v1/chat/completions
 */
export interface postV1ChatCompletionsBody {
  frequency_penalty?: number
  logit_bias?: any
  max_tokens?: number
  messages: postV1ChatCompletionsBodyMessagesItem[]
  model: string
  n?: number
  presence_penalty?: number
  response_format?: postV1ChatCompletionsBodyResponse_format
  seen?: number
  stop?: string
  stream?: boolean
  temperature?: number
  tool_choice: postV1ChatCompletionsBodyTool_choice
  tools: string[]
  top_p?: number
  user?: string
  [key: string]: any
}

/** 至今为止对话所包含的消息列表。Python 代码示例。 */
export interface postV1ChatCompletionsBodyMessagesItem {
  content?: string
  role?: string
  [key: string]: any
}

/** 指定模型必须输出的格式的对象。  将 { "type": "json_object" } 启用 JSON 模式,这可以确保模型生成的消息是有效的 JSON。  重要提示:使用 JSON 模式时,还必须通过系统或用户消息指示模型生成 JSON。如果不这样做,模型可能会生成无休止的空白流,直到生成达到令牌限制,从而导致延迟增加和请求“卡住”的外观。另请注意,如果 finish_reason="length",则消息内容可能会被部分切断,这表示生成超过了 max_tokens 或对话超过了最大上下文长度。  显示属性 */
export interface postV1ChatCompletionsBodyResponse_format {
  [key: string]: any
}

/** 控制模型调用哪个函数(如果有的话)。none 表示模型不会调用函数,而是生成消息。auto 表示模型可以在生成消息和调用函数之间进行选择。通过 {"type": "function", "function": {"name": "my_function"}} 强制模型调用该函数。  如果没有函数存在,默认为 none。如果有函数存在,默认为 auto。  显示可能的类型 */
export interface postV1ChatCompletionsBodyTool_choice {
  [key: string]: any
}

/**
 * @description /创建聊天补全--接口返回值
 * @url POST https://api.openai.com/v1/chat/completions
 */
export interface postV1ChatCompletionsRes {
  choices: postV1ChatCompletionsResChoicesItem[]
  created: number
  id: string
  object: string
  usage: postV1ChatCompletionsResUsage
  [key: string]: any
}

/** postV1ChatCompletionsResChoicesMessage */
export interface postV1ChatCompletionsResChoicesMessage {
  content: string
  role: string
  [key: string]: any
}

/** postV1ChatCompletionsResChoices */
export interface postV1ChatCompletionsResChoicesItem {
  finish_reason?: string
  index?: number
  message?: postV1ChatCompletionsResChoicesMessage
  [key: string]: any
}

/** postV1ChatCompletionsResUsage */
export interface postV1ChatCompletionsResUsage {
  completion_tokens: number
  prompt_tokens: number
  total_tokens: number
  [key: string]: any
}
