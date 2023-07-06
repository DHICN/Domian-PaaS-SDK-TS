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

// May contain unused imports in some cases
// @ts-ignore
import { RoleInfo } from './role-info'

/**
 *
 * @export
 * @interface UserInformation
 */
export interface UserInformation {
  /**
   *
   * @type {string}
   * @memberof UserInformation
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof UserInformation
   */
  userName?: string | null
  /**
   *
   * @type {string}
   * @memberof UserInformation
   */
  surName?: string | null
  /**
   *
   * @type {string}
   * @memberof UserInformation
   */
  phoneNumber?: string | null
  /**
   *
   * @type {string}
   * @memberof UserInformation
   */
  email?: string | null
  /**
   *
   * @type {Array<RoleInfo>}
   * @memberof UserInformation
   */
  roleInfos?: Array<RoleInfo> | null
}
