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

/**
 *
 * @export
 * @interface WqSimulationIndicatorOutput
 */
export interface WqSimulationIndicatorOutput {
  /**
   * 指标ID indicator id
   * @type {string}
   * @memberof WqSimulationIndicatorOutput
   */
  id?: string
  /**
   * 指标代码 indicator code
   * @type {string}
   * @memberof WqSimulationIndicatorOutput
   */
  configName?: string | null
  /**
   * 指标描述 indicator description
   * @type {string}
   * @memberof WqSimulationIndicatorOutput
   */
  configDesc?: string | null
  /**
   * 是否展示 if display at the front end
   * @type {boolean}
   * @memberof WqSimulationIndicatorOutput
   */
  isDisplay?: boolean
  /**
   * 展示序号 display index
   * @type {number}
   * @memberof WqSimulationIndicatorOutput
   */
  index?: number
}
