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
import { TsPair1 } from './ts-pair1'

/**
 *
 * @export
 * @interface SingleCodeDatasOutput
 */
export interface SingleCodeDatasOutput {
  /**
   * 指标代码 indicator code
   * @type {string}
   * @memberof SingleCodeDatasOutput
   */
  code?: string | null
  /**
   * 值 value
   * @type {Array<TsPair1>}
   * @memberof SingleCodeDatasOutput
   */
  value?: Array<TsPair1> | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof SingleCodeDatasOutput
   */
  unit?: string | null
}
