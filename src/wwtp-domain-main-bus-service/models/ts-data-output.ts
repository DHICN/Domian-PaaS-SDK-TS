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
 * @interface TsDataOutput
 */
export interface TsDataOutput {
  /**
   *
   * @type {string}
   * @memberof TsDataOutput
   */
  time?: string
  /**
   * 点位编码 point code
   * @type {string}
   * @memberof TsDataOutput
   */
  pointCode?: string | null
  /**
   * 值 value
   * @type {number}
   * @memberof TsDataOutput
   */
  value?: number
  /**
   * 标记 data clean tag
   * @type {string}
   * @memberof TsDataOutput
   */
  tag?: string | null
}
