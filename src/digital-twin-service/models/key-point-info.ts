/* eslint-disable */
/**
 * digital-twin-service
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
import { KeyPointDetailOutput } from './key-point-detail-output'
// May contain unused imports in some cases
// @ts-ignore
import { StringStringKeyValue } from './string-string-key-value'

/**
 *
 * @export
 * @interface KeyPointInfo
 */
export interface KeyPointInfo {
  /**
   * 重要点位ID key point id
   * @type {string}
   * @memberof KeyPointInfo
   */
  id?: string
  /**
   * 重要点位显示名称 key point show name
   * @type {string}
   * @memberof KeyPointInfo
   */
  showName?: string | null
  /**
   * 重要点位与模型点位对应关系 mapping relation of key point and model point
   * @type {Array<KeyPointDetailOutput>}
   * @memberof KeyPointInfo
   */
  keyPointDetails?: Array<KeyPointDetailOutput> | null
  /**
   * 重要点位属性信息 key point attributes
   * @type {Array<StringStringKeyValue>}
   * @memberof KeyPointInfo
   */
  attributes?: Array<StringStringKeyValue> | null
}