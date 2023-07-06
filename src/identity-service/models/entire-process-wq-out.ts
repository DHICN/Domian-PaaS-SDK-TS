/* eslint-disable */
/**
 * 用户认证管理服务
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
import { EntireProcessTs } from './entire-process-ts'

/**
 *
 * @export
 * @interface EntireProcessWqOut
 */
export interface EntireProcessWqOut {
  /**
   * 指标 indicator code
   * @type {string}
   * @memberof EntireProcessWqOut
   */
  code?: string | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof EntireProcessWqOut
   */
  unit?: string | null
  /**
   * 全流程水质时间序列 entire process time-series data
   * @type {Array<EntireProcessTs>}
   * @memberof EntireProcessWqOut
   */
  tsData?: Array<EntireProcessTs> | null
}
