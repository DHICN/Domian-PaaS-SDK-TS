/* eslint-disable */
/**
 * identity-service
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
 * @interface ButtonPerUnderRoleInput
 */
export interface ButtonPerUnderRoleInput {
  /**
   * 角色Id role id
   * @type {string}
   * @memberof ButtonPerUnderRoleInput
   */
  roleId?: string
  /**
   * 选中的菜单Id列表 checked menu ids
   * @type {Array<string>}
   * @memberof ButtonPerUnderRoleInput
   */
  menuIds?: Array<string> | null
}