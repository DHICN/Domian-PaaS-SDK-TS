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

// May contain unused imports in some cases
// @ts-ignore
import { ValueInfo } from './value-info'

/**
 * 物质信息
 * @export
 * @interface ComponentDetailInfo
 */
export interface ComponentDetailInfo {
  /**
   *
   * @type {string}
   * @memberof ComponentDetailInfo
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof ComponentDetailInfo
   */
  code?: string | null
  /**
   *
   * @type {string}
   * @memberof ComponentDetailInfo
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof ComponentDetailInfo
   */
  eventId?: string
  /**
   *
   * @type {Array<ValueInfo>}
   * @memberof ComponentDetailInfo
   */
  values?: Array<ValueInfo> | null
}
