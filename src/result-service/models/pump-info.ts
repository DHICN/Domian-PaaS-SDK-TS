/* eslint-disable */
/**
 * result-analysis-service
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
 * @interface PumpInfo
 */
export interface PumpInfo {
  /**
   * 泵站id pump id
   * @type {string}
   * @memberof PumpInfo
   */
  assetID?: string | null
  /**
   * 泵站名称 pump name
   * @type {string}
   * @memberof PumpInfo
   */
  assetName?: string | null
  /**
   * 开关状态(0:关,1:开) switch status (0: off, 1: on)
   * @type {number}
   * @memberof PumpInfo
   */
  state?: number
  /**
   * 总补水时长，以分钟为单位 otal water make-up time (unit:minute)
   * @type {number}
   * @memberof PumpInfo
   */
  totalMinutes?: number
  /**
   * 总补水量 total make-up water
   * @type {number}
   * @memberof PumpInfo
   */
  totalVolume?: number
}