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
 *
 * @export
 * @interface DosingParamSettingDto
 */
export interface DosingParamSettingDto {
  /**
   *
   * @type {string}
   * @memberof DosingParamSettingDto
   */
  id?: string
  /**
   * 系统代码 corresponding system code
   * @type {string}
   * @memberof DosingParamSettingDto
   */
  sysCode?: string | null
  /**
   * 值 value
   * @type {number}
   * @memberof DosingParamSettingDto
   */
  value?: number
  /**
   * 单位 unit
   * @type {string}
   * @memberof DosingParamSettingDto
   */
  unit?: string | null
  /**
   * 序号 display index
   * @type {number}
   * @memberof DosingParamSettingDto
   */
  orderBy?: number
  /**
   * 是否为手动加药参数 if support manual dosage
   * @type {boolean}
   * @memberof DosingParamSettingDto
   */
  isEditManual?: boolean | null
  /**
   * 是否为智能加药参数 if support smart dosage
   * @type {boolean}
   * @memberof DosingParamSettingDto
   */
  isEditSmart?: boolean | null
  /**
   * 参数名称 parameter name
   * @type {string}
   * @memberof DosingParamSettingDto
   */
  name?: string | null
  /**
   * 参数编码 parameter code
   * @type {string}
   * @memberof DosingParamSettingDto
   */
  code?: string | null
  /**
   * 生产线 product line code
   * @type {string}
   * @memberof DosingParamSettingDto
   */
  productLine?: string | null
  /**
   * 药剂投加类别
   * @type {number}
   * @memberof DosingParamSettingDto
   */
  category?: DosingParamSettingDtoCategoryEnum
}

export const DosingParamSettingDtoCategoryEnum = {
  1: 1 as number,
  2: 2 as number,
  3: 3 as number,
  4: 4 as number,
} as const

export type DosingParamSettingDtoCategoryEnum =
  (typeof DosingParamSettingDtoCategoryEnum)[keyof typeof DosingParamSettingDtoCategoryEnum]
