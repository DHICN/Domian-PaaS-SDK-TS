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
import { TsPairs } from './ts-pairs'

/**
 * 实测和模拟时序值组装对象
 * @export
 * @interface OnlineModelData
 */
export interface OnlineModelData {
  /**
   * 指标id
   * @type {string}
   * @memberof OnlineModelData
   */
  id?: string
  /**
   *
   * @type {TsPairs}
   * @memberof OnlineModelData
   */
  measureTsData?: TsPairs
  /**
   *
   * @type {TsPairs}
   * @memberof OnlineModelData
   */
  modelTsData?: TsPairs
}
