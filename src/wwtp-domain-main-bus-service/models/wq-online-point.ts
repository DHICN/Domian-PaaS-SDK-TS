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
 * @interface WqOnlinePoint
 */
export interface WqOnlinePoint {
  /**
   * 进水点或工艺线 inlet name or product line name
   * @type {string}
   * @memberof WqOnlinePoint
   */
  productLine?: string | null
  /**
   * 系统点位列表 system point codes/indicators
   * @type {Array<string>}
   * @memberof WqOnlinePoint
   */
  codes?: Array<string> | null
  /**
   * 单位列表 units
   * @type {Array<string>}
   * @memberof WqOnlinePoint
   */
  units?: Array<string> | null
  /**
   * 在线点位列表 corresponding online point codes
   * @type {Array<string>}
   * @memberof WqOnlinePoint
   */
  pointCodes?: Array<string> | null
}