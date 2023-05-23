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

// May contain unused imports in some cases
// @ts-ignore
import { GateInfo } from './gate-info'

/**
 *
 * @export
 * @interface GateStatisticInfo
 */
export interface GateStatisticInfo {
  /**
   * 时间 time
   * @type {string}
   * @memberof GateStatisticInfo
   */
  dt?: string | null
  /**
   * 闸门信息 gate details
   * @type {Array<GateInfo>}
   * @memberof GateStatisticInfo
   */
  gateInfos?: Array<GateInfo> | null
}