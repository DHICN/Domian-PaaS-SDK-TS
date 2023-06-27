/* eslint-disable */
/**
 * 供水业务中台领域服务
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { Null } from './null'
// May contain unused imports in some cases
// @ts-ignore
import { WdComponentDetailInput } from './wd-component-detail-input'

/**
 *
 * @export
 * @interface WqEventDetailInput
 */
export interface WqEventDetailInput {
  /**
   * 0-PipeBurst(爆管) 1-CloseValve(关阀) 2-WQAccident(水质事件)
   * @type {number}
   * @memberof WqEventDetailInput
   */
  eventType?: WqEventDetailInputEventTypeEnum
  /**
   * 开始时间
   * @type {string}
   * @memberof WqEventDetailInput
   */
  startTime?: string
  /**
   * 结束时间
   * @type {string}
   * @memberof WqEventDetailInput
   */
  endTime?: string
  /**
   * 事件位置，对于爆管事件和水质事件，填模型id
   * @type {string}
   * @memberof WqEventDetailInput
   */
  location?: string | null
  /**
   * 排水量/泄水量
   * @type {Null}
   * @memberof WqEventDetailInput
   */
  dischargeValue?: Null
  /**
   * 污染物(水质事件使用)
   * @type {Array<WdComponentDetailInput>}
   * @memberof WqEventDetailInput
   */
  components?: Array<WdComponentDetailInput> | null
}

export const WqEventDetailInputEventTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
} as const

export type WqEventDetailInputEventTypeEnum =
  (typeof WqEventDetailInputEventTypeEnum)[keyof typeof WqEventDetailInputEventTypeEnum]
