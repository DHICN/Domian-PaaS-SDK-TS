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

// May contain unused imports in some cases
// @ts-ignore
import { DailyAccumulationValue } from './daily-accumulation-value'

/**
 *
 * @export
 * @interface DosingLogOutput
 */
export interface DosingLogOutput {
  /**
   * 列名 column name
   * @type {Array<string>}
   * @memberof DosingLogOutput
   */
  colNames?: Array<string> | null
  /**
   * 所有时刻 all time steps
   * @type {Array<string>}
   * @memberof DosingLogOutput
   */
  times?: Array<string> | null
  /**
   * value of each column of each time step
   * @type {Array<Array<string>>}
   * @memberof DosingLogOutput
   */
  values?: Array<Array<string>> | null
  /**
   *
   * @type {DailyAccumulationValue}
   * @memberof DosingLogOutput
   */
  calValueAcc?: DailyAccumulationValue
  /**
   *
   * @type {DailyAccumulationValue}
   * @memberof DosingLogOutput
   */
  valueAcc?: DailyAccumulationValue
}
