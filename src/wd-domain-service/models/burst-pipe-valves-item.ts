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
 * @interface BurstPipeValvesItem
 */
export interface BurstPipeValvesItem {
  /**
   * 管段muid
   * @type {string}
   * @memberof BurstPipeValvesItem
   */
  pipeId?: string | null
  /**
   * 爆管的位置
   * @type {string}
   * @memberof BurstPipeValvesItem
   */
  gisId?: string | null
  /**
   * 爆管的位置 - X
   * @type {number}
   * @memberof BurstPipeValvesItem
   */
  x?: number
  /**
   * 爆管的位置 - Y
   * @type {number}
   * @memberof BurstPipeValvesItem
   */
  y?: number
}
