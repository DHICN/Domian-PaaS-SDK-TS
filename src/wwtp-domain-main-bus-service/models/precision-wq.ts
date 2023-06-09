/* eslint-disable */
/**
 * wwtp-paas-main-bus-service
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
 * 预测出水水质
 * @export
 * @interface PrecisionWq
 */
export interface PrecisionWq {
  /**
   * 指标 indicator code
   * @type {string}
   * @memberof PrecisionWq
   */
  code?: string | null
  /**
   * 展示信息 display message
   * @type {string}
   * @memberof PrecisionWq
   */
  displayMsg?: string | null
  /**
   * 最大值 maximum value
   * @type {number}
   * @memberof PrecisionWq
   */
  maxValue?: number
  /**
   * 最小值 minimum value
   * @type {number}
   * @memberof PrecisionWq
   */
  minValue?: number
  /**
   * 平均值 average value
   * @type {number}
   * @memberof PrecisionWq
   */
  averageValue?: number
  /**
   * 差值 difference value
   * @type {number}
   * @memberof PrecisionWq
   */
  deviationValue?: number
  /**
   * 时间序列值 time-series data
   * @type {Array<TsPair1>}
   * @memberof PrecisionWq
   */
  tsData?: Array<TsPair1> | null
}
