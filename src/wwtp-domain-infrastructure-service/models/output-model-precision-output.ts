/* eslint-disable */
/**
 * wwtp-paas-infrastructure-service
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
 * @interface OutputModelPrecisionOutput
 */
export interface OutputModelPrecisionOutput {
  /**
   *
   * @type {string}
   * @memberof OutputModelPrecisionOutput
   */
  id?: string
  /**
   * 时间 time
   * @type {string}
   * @memberof OutputModelPrecisionOutput
   */
  time?: string
  /**
   * 精度百分比 precision ratio (onlineValue - modelResultValue / onlineValue)
   * @type {number}
   * @memberof OutputModelPrecisionOutput
   */
  stepValue?: number
  /**
   * 精度差值 precision difference (onlineValue - modelResultValue)
   * @type {number}
   * @memberof OutputModelPrecisionOutput
   */
  precisionDiffValue?: number
  /**
   * 模型节点 model node
   * @type {string}
   * @memberof OutputModelPrecisionOutput
   */
  nodeCode?: string | null
}
