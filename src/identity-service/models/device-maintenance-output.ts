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

/**
 *
 * @export
 * @interface DeviceMaintenanceOutput
 */
export interface DeviceMaintenanceOutput {
  /**
   * 在线点位名称 online point name
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  onlinePoint?: string | null
  /**
   * 在线点位代码 online point code
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  pointCode?: string | null
  /**
   * 时间 time
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  time?: string
  /**
   * 位置 location
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  location?: string | null
  /**
   * 维护预警状态 maintenance alarm status
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  status?: string | null
  /**
   * 维护预警信息 maintenance alarm message
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  message?: string | null
  /**
   * 设备状态标签 device status label
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  label?: string | null
  /**
   * 清洗标签 data clean tag
   * @type {string}
   * @memberof DeviceMaintenanceOutput
   */
  tag?: string | null
  /**
   *
   * @type {number}
   * @memberof DeviceMaintenanceOutput
   */
  grade?: DeviceMaintenanceOutputGradeEnum
}

export const DeviceMaintenanceOutputGradeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
} as const

export type DeviceMaintenanceOutputGradeEnum =
  (typeof DeviceMaintenanceOutputGradeEnum)[keyof typeof DeviceMaintenanceOutputGradeEnum]
