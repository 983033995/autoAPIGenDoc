/**
 * @description /创建转录--接口请求Body参数
 * @url GET https://api.openai.com/v1/audio/transcriptions
 */
export interface getV1AudioTranscriptionsBody {
  /** 要转录的音频文件对象(不是文件名),格式为:flac、mp3、mp4、mpeg、mpga、m4a、ogg、wav 或 webm。

 */
  file: File | Blob | ArrayBuffer | Uint8Array
  /** 要使用的模型 ID。目前只有 whisper-1 是可用的。

 */
  model: string
  /** 输入音频的语言。以 ISO-639-1 格式提供输入语言可以提高准确性和延迟。

 */
  language?: string
  /** 一个可选的文本来指导模型的风格或继续之前的音频段落。提示应该与音频语言匹配。

 */
  prompt?: string
  /** 默认为 json
转录输出的格式,可选择:json、text、srt、verbose_json 或 vtt。 */
  response_format?: string
  /** 默认为 0
采样温度,between 0 和 1。更高的值像 0.8 会使输出更随机,而更低的值像 0.2 会使其更集中和确定性。如果设置为 0,模型将使用对数概率自动增加温度直到达到特定阈值。 */
  temperature?: number
  [key: string]: any
}

/**
 * @description /创建转录--接口返回值
 * @url GET https://api.openai.com/v1/audio/transcriptions
 */
export interface getV1AudioTranscriptionsRes {
  text: string
  [key: string]: any
}

/**
 * @description /创建翻译--接口请求Body参数
 * @url GET https://api.openai.com/v1/audio/translations
 */
export interface getV1AudioTranslationsBody {
  /** 要翻译的音频文件对象(不是文件名),格式为:flac、mp3、mp4、mpeg、mpga、m4a、ogg、wav 或 webm。

 */
  file: File | Blob | ArrayBuffer | Uint8Array
  /** 要使用的模型 ID。目前只有 whisper-1 是可用的。

 */
  model: string
  /** 一个可选的文本,用于指导模型的风格或继续之前的音频段落。提示文本应该是英文。

 */
  prompt?: string
  /** 翻译结果的格式,可选择:json、text、srt、verbose_json 或 vtt。

 */
  response_format?: string
  /** 默认为 0
采样温度,介于 0 和 1 之间。更高的值如 0.8 会使输出更随机,而较低的值如 0.2 会使其更聚焦和确定性。如果设置为 0,模型将使用对数概率自动提高温度直到达到特定阈值。 */
  temperature?: number
  [key: string]: any
}

/**
 * @description /创建翻译--接口返回值
 * @url GET https://api.openai.com/v1/audio/translations
 */
export interface getV1AudioTranslationsRes {
  text: string
  [key: string]: any
}

/**
 * @description /创建语音--接口请求Body参数
 * @url GET https://api.openai.com/v1/audio/speech
 */
export interface getV1AudioSpeechBody {
        
            input: string;
            model: string;
            response_format?: string;
            speed?: number;
            voice: string;
        [key: string]: any
      }
    

/**
 * @description /创建语音--接口返回值
 * @url GET https://api.openai.com/v1/audio/speech
 */
    export interface getV1AudioSpeechRes {
        
        [key: string]: any
      }
    
