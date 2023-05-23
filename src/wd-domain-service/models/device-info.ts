/* eslint-disable */
/**
 * wd-domain-service
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
 * @interface DeviceInfo
 */
export interface DeviceInfo {
  /**
   * 设备id
   * @type {string}
   * @memberof DeviceInfo
   */
  id?: string
  /**
   * 设备名
   * @type {string}
   * @memberof DeviceInfo
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof DeviceInfo
   */
  label?: string | null
  /**
   *
   * @type {string}
   * @memberof DeviceInfo
   */
  description?: string | null
  /**
   * 设备分组
   * @type {string}
   * @memberof DeviceInfo
   */
  group?: string | null
  /**
   * 位置
   * @type {string}
   * @memberof DeviceInfo
   */
  location?: string | null
  /**
   * 设备类型
   * @type {string}
   * @memberof DeviceInfo
   */
  type?: string | null
}