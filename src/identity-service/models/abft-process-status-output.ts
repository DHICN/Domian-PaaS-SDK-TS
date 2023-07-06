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
 * @interface AbftProcessStatusOutput
 */
export interface AbftProcessStatusOutput {
  /**
   * 指标代码 indicator code
   * @type {string}
   * @memberof AbftProcessStatusOutput
   */
  code?: string | null
  /**
   * 生化池工艺项 biochemical pool process item
   * @type {string}
   * @memberof AbftProcessStatusOutput
   */
  name?: string | null
  /**
   * 当前值 current value
   * @type {number}
   * @memberof AbftProcessStatusOutput
   */
  value?: number
  /**
   * 单位 unit
   * @type {string}
   * @memberof AbftProcessStatusOutput
   */
  unit?: string | null
}
