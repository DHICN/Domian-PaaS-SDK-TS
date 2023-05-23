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
import { PumpInfo } from './pump-info'

/**
 * 河网泵运行预报统计
 * @export
 * @interface ModelResultRiverPumpStatisticOutput
 */
export interface ModelResultRiverPumpStatisticOutput {
  /**
   * 时间 time
   * @type {string}
   * @memberof ModelResultRiverPumpStatisticOutput
   */
  dt?: string | null
  /**
   * 泵站信息 pump details
   * @type {Array<PumpInfo>}
   * @memberof ModelResultRiverPumpStatisticOutput
   */
  pumpInfos?: Array<PumpInfo> | null
}