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
import { UserInformation } from './user-information'

/**
 *
 * @export
 * @interface OrganizationWithUserInfoOutput
 */
export interface OrganizationWithUserInfoOutput {
  /**
   *
   * @type {string}
   * @memberof OrganizationWithUserInfoOutput
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof OrganizationWithUserInfoOutput
   */
  name?: string | null
  /**
   *
   * @type {string}
   * @memberof OrganizationWithUserInfoOutput
   */
  levelCode?: string | null
  /**
   *
   * @type {string}
   * @memberof OrganizationWithUserInfoOutput
   */
  parentLevelCode?: string | null
  /**
   *
   * @type {Array<UserInformation>}
   * @memberof OrganizationWithUserInfoOutput
   */
  users?: Array<UserInformation> | null
  /**
   *
   * @type {boolean}
   * @memberof OrganizationWithUserInfoOutput
   */
  isHasChildren?: boolean
  /**
   *
   * @type {Array<OrganizationWithUserInfoOutput>}
   * @memberof OrganizationWithUserInfoOutput
   */
  children?: Array<OrganizationWithUserInfoOutput> | null
}
