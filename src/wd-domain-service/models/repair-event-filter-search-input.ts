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
 * @interface RepairEventFilterSearchInput
 */
export interface RepairEventFilterSearchInput {
  /**
   *
   * @type {string}
   * @memberof RepairEventFilterSearchInput
   */
  streetName?: string | null
  /**
   *
   * @type {number}
   * @memberof RepairEventFilterSearchInput
   */
  diameter?: number | null
  /**
   *
   * @type {string}
   * @memberof RepairEventFilterSearchInput
   */
  material?: string | null
  /**
   *
   * @type {string}
   * @memberof RepairEventFilterSearchInput
   */
  startTime?: string | null
  /**
   *
   * @type {string}
   * @memberof RepairEventFilterSearchInput
   */
  endTime?: string | null
  /**
   *
   * @type {boolean}
   * @memberof RepairEventFilterSearchInput
   */
  bForceRefreshCache?: boolean
}