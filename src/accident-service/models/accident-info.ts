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

// May contain unused imports in some cases
// @ts-ignore
import { AccidentLevelEnum } from './accident-level-enum'
// May contain unused imports in some cases
// @ts-ignore
import { AccidentTypeEnum } from './accident-type-enum'

/**
 *
 * @export
 * @interface AccidentInfo
 */
export interface AccidentInfo {
  /**
   * 事故ID accident id
   * @type {string}
   * @memberof AccidentInfo
   */
  id?: string
  /**
   * 租户ID tenant id
   * @type {string}
   * @memberof AccidentInfo
   */
  tenantId?: string | null
  /**
   * 事故名称 accident name
   * @type {string}
   * @memberof AccidentInfo
   */
  name?: string | null
  /**
   *
   * @type {AccidentLevelEnum}
   * @memberof AccidentInfo
   */
  accidentLevel?: AccidentLevelEnum
  /**
   * 是否停止 if it is stopped
   * @type {boolean}
   * @memberof AccidentInfo
   */
  isStop?: boolean
  /**
   * 事故结果 accident result
   * @type {string}
   * @memberof AccidentInfo
   */
  result?: string | null
  /**
   *
   * @type {AccidentTypeEnum}
   * @memberof AccidentInfo
   */
  type?: AccidentTypeEnum
  /**
   * 事故备注 accident remark
   * @type {string}
   * @memberof AccidentInfo
   */
  remark?: string | null
}
