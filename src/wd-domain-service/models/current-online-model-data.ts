/* eslint-disable */
/**
 * 供水业务中台领域服务
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
 * @interface CurrentOnlineModelData
 */
export interface CurrentOnlineModelData {
  /**
   * 指标id
   * @type {string}
   * @memberof CurrentOnlineModelData
   */
  id?: string
  /**
   * 最新实测和模拟时间
   * @type {string}
   * @memberof CurrentOnlineModelData
   */
  currentTime?: string
  /**
   * 最新指标点位实测值
   * @type {number}
   * @memberof CurrentOnlineModelData
   */
  measureData?: number
  /**
   * 最新点位结果时序值
   * @type {number}
   * @memberof CurrentOnlineModelData
   */
  modelData?: number
}
