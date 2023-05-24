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

/**
 *
 * @export
 * @interface QueryIndicatorStatisticOutput
 */
export interface QueryIndicatorStatisticOutput {
  /**
   * 指标代码 indicator code
   * @type {string}
   * @memberof QueryIndicatorStatisticOutput
   */
  code?: string | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof QueryIndicatorStatisticOutput
   */
  unit?: string | null
  /**
   * 平均值 average value
   * @type {number}
   * @memberof QueryIndicatorStatisticOutput
   */
  mean?: number
  /**
   * 最小值 minimum value
   * @type {number}
   * @memberof QueryIndicatorStatisticOutput
   */
  min?: number
  /**
   * 最大值 maximum value
   * @type {number}
   * @memberof QueryIndicatorStatisticOutput
   */
  max?: number
  /**
   * 中位数 median value
   * @type {number}
   * @memberof QueryIndicatorStatisticOutput
   */
  median?: number
  /**
   * 上百分位 upper percentile
   * @type {number}
   * @memberof QueryIndicatorStatisticOutput
   */
  upperPercent?: number
  /**
   * 下百分位 lower percentile
   * @type {number}
   * @memberof QueryIndicatorStatisticOutput
   */
  lowerPercent?: number
}
