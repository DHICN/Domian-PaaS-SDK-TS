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
 * @interface WqInfoValue
 */
export interface WqInfoValue {
  /**
   * 水质名称 water quality item
   * @type {string}
   * @memberof WqInfoValue
   */
  wqItem?: string | null
  /**
   * 水质浓度 water quality concentration
   * @type {number}
   * @memberof WqInfoValue
   */
  wqItemValue?: number
}