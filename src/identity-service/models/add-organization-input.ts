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
 * @interface AddOrganizationInput
 */
export interface AddOrganizationInput {
  /**
   * 组织架构名称
   * @type {string}
   * @memberof AddOrganizationInput
   */
  name: string
  /**
   * 父级层级代码
   * @type {string}
   * @memberof AddOrganizationInput
   */
  parentLevelCode?: string | null
}
