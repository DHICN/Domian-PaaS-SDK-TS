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
 * @interface SaveBasicSettingsInput
 */
export interface SaveBasicSettingsInput {
  /**
   * 真实姓名 real name
   * @type {string}
   * @memberof SaveBasicSettingsInput
   */
  surname?: string | null
  /**
   * 所属部门 working department
   * @type {string}
   * @memberof SaveBasicSettingsInput
   */
  department?: string | null
  /**
   * 个人简介 personal profile
   * @type {string}
   * @memberof SaveBasicSettingsInput
   */
  profile?: string | null
  /**
   * 电话号码 phone number
   * @type {string}
   * @memberof SaveBasicSettingsInput
   */
  phoneNumber?: string | null
}
