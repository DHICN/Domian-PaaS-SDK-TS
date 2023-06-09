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
import { DeviceIndicatorInfo } from './device-indicator-info'

/**
 *
 * @export
 * @interface ValveInfo
 */
export interface ValveInfo {
  /**
   * 数据Id
   * @type {string}
   * @memberof ValveInfo
   */
  id?: string
  /**
   * 模型中的Id
   * @type {string}
   * @memberof ValveInfo
   */
  muid?: string | null
  /**
   * 租户信息
   * @type {string}
   * @memberof ValveInfo
   */
  tenantId?: string
  /**
   * 展示名
   * @type {string}
   * @memberof ValveInfo
   */
  showName?: string | null
  /**
   * 数据项类型
   * @type {string}
   * @memberof ValveInfo
   */
  itemType?: string | null
  /**
   * 边界点位对应的测点指标信息
   * @type {Array<DeviceIndicatorInfo>}
   * @memberof ValveInfo
   */
  deviceIndicatorInfos?: Array<DeviceIndicatorInfo> | null
}
