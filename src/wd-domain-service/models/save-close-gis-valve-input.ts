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
import { GisValveInfo } from './gis-valve-info'

/**
 *
 * @export
 * @interface SaveCloseGisValveInput
 */
export interface SaveCloseGisValveInput {
  /**
   * 方案Id
   * @type {string}
   * @memberof SaveCloseGisValveInput
   */
  scenarioId: string
  /**
   * 事故id
   * @type {string}
   * @memberof SaveCloseGisValveInput
   */
  eventId: string
  /**
   * 数据
   * @type {Array<GisValveInfo>}
   * @memberof SaveCloseGisValveInput
   */
  data?: Array<GisValveInfo> | null
}
