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
 * @interface StatisticData
 */
export interface StatisticData {
  /**
   * 指标 indicator
   * @type {string}
   * @memberof StatisticData
   */
  code?: string | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof StatisticData
   */
  unit?: string | null
  /**
   * 最小值 minimum value
   * @type {number}
   * @memberof StatisticData
   */
  min?: number
  /**
   * 最大值 maximum value
   * @type {number}
   * @memberof StatisticData
   */
  max?: number
  /**
   * 平均值 average value
   * @type {number}
   * @memberof StatisticData
   */
  mean?: number
  /**
   * 在线值 online value if existed
   * @type {number}
   * @memberof StatisticData
   */
  online?: number | null
}
