/* eslint-disable */
/**
 * accident-manager-service
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
 * @interface UpdateComponentInput
 */
export interface UpdateComponentInput {
  /**
   * 污染物ID pollutant id
   * @type {string}
   * @memberof UpdateComponentInput
   */
  id?: string
  /**
   * 污染物代码 pollutant code
   * @type {string}
   * @memberof UpdateComponentInput
   */
  code?: string | null
  /**
   * 污染物名称 pollutant name
   * @type {string}
   * @memberof UpdateComponentInput
   */
  name?: string | null
  /**
   * 污染物备注 pollutant remark
   * @type {string}
   * @memberof UpdateComponentInput
   */
  remark?: string | null
}
