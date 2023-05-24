/* eslint-disable */
/**
 * wwtp-paas-infrastructure-service
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
 * @interface DosingLogDto
 */
export interface DosingLogDto {
  /**
   *
   * @type {string}
   * @memberof DosingLogDto
   */
  id?: string
  /**
   * 点位编码 point code
   * @type {string}
   * @memberof DosingLogDto
   */
  code?: string | null
  /**
   * 药剂类型 chemical category
   * @type {number}
   * @memberof DosingLogDto
   */
  category?: DosingLogDtoCategoryEnum
  /**
   * 加药类型：手动，自动 dosing type, including automatic and manual
   * @type {number}
   * @memberof DosingLogDto
   */
  additionType?: DosingLogDtoAdditionTypeEnum
  /**
   * 生产线 product line code
   * @type {string}
   * @memberof DosingLogDto
   */
  productLine?: string | null
  /**
   * 计算值 calculate dosage value
   * @type {number}
   * @memberof DosingLogDto
   */
  calValue?: number
  /**
   * 实际值 actual dosage value
   * @type {number}
   * @memberof DosingLogDto
   */
  value?: number
  /**
   * 药耗值 actual dosage cost
   * @type {number}
   * @memberof DosingLogDto
   */
  costValue?: number
  /**
   * 单位 dosage unit
   * @type {string}
   * @memberof DosingLogDto
   */
  unit?: string | null
  /**
   * 时间 dosing time
   * @type {string}
   * @memberof DosingLogDto
   */
  time?: string
}

export const DosingLogDtoCategoryEnum = {
  1: 1 as number,
  2: 2 as number,
  3: 3 as number,
  4: 4 as number,
} as const

export type DosingLogDtoCategoryEnum =
  (typeof DosingLogDtoCategoryEnum)[keyof typeof DosingLogDtoCategoryEnum]
export const DosingLogDtoAdditionTypeEnum = {
  1: 1 as number,
  2: 2 as number,
} as const

export type DosingLogDtoAdditionTypeEnum =
  (typeof DosingLogDtoAdditionTypeEnum)[keyof typeof DosingLogDtoAdditionTypeEnum]
