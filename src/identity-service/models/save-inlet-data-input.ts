/* eslint-disable */
/**
 * 用户认证管理服务
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
import { CodeUnit } from './code-unit'

/**
 *
 * @export
 * @interface SaveInletDataInput
 */
export interface SaveInletDataInput {
  /**
   * 方案ID scenario id
   * @type {string}
   * @memberof SaveInletDataInput
   */
  scenarioId?: string
  /**
   * 进水点 inlet
   * @type {string}
   * @memberof SaveInletDataInput
   */
  inlet?: string | null
  /**
   * 每一列的名称与单位 name and unit of each column
   * @type {Array<CodeUnit>}
   * @memberof SaveInletDataInput
   */
  colNames?: Array<CodeUnit> | null
  /**
   * 所有的时刻 all time steps
   * @type {Array<string>}
   * @memberof SaveInletDataInput
   */
  times?: Array<string> | null
  /**
   * 每一列每一时刻的数值 values of each column of each time step
   * @type {Array<Array<number>>}
   * @memberof SaveInletDataInput
   */
  values?: Array<Array<number>> | null
}
