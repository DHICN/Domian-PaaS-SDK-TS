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

/**
 * 预警信息
 * @export
 * @interface PredictAlarmOut
 */
export interface PredictAlarmOut {
  /**
   * 指标 indicator code
   * @type {string}
   * @memberof PredictAlarmOut
   */
  code?: string | null
  /**
   * 时刻 alarm time
   * @type {string}
   * @memberof PredictAlarmOut
   */
  predictionTime?: string
  /**
   * 预测值 value
   * @type {number}
   * @memberof PredictAlarmOut
   */
  value?: number
  /**
   * 预警信息 alarm message
   * @type {string}
   * @memberof PredictAlarmOut
   */
  message?: string | null
  /**
   * 详细预警信息 alarm message detail
   * @type {string}
   * @memberof PredictAlarmOut
   */
  detailMessage?: string | null
  /**
   * 单位 unit
   * @type {string}
   * @memberof PredictAlarmOut
   */
  unit?: string | null
  /**
   * 预警类型 alarm type
   * @type {number}
   * @memberof PredictAlarmOut
   */
  alarmType?: PredictAlarmOutAlarmTypeEnum
}

export const PredictAlarmOutAlarmTypeEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
} as const

export type PredictAlarmOutAlarmTypeEnum =
  (typeof PredictAlarmOutAlarmTypeEnum)[keyof typeof PredictAlarmOutAlarmTypeEnum]
