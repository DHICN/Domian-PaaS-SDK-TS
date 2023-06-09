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

// May contain unused imports in some cases
// @ts-ignore
import { TenantAdminDto } from './tenant-admin-dto'

/**
 *
 * @export
 * @interface GetTenantsOutput
 */
export interface GetTenantsOutput {
  /**
   * 租户ID tenant id
   * @type {string}
   * @memberof GetTenantsOutput
   */
  id?: string
  /**
   * 系统ID system id
   * @type {string}
   * @memberof GetTenantsOutput
   */
  systemId?: string
  /**
   * 系统名称 system name
   * @type {string}
   * @memberof GetTenantsOutput
   */
  systemName?: string | null
  /**
   * 租户名称 tenant name
   * @type {string}
   * @memberof GetTenantsOutput
   */
  name?: string | null
  /**
   * 租户创建时间 tenant create time
   * @type {string}
   * @memberof GetTenantsOutput
   */
  creationTime?: string
  /**
   * 租户管理员账户信息 tenant administrators
   * @type {Array<TenantAdminDto>}
   * @memberof GetTenantsOutput
   */
  tenantAdmin?: Array<TenantAdminDto> | null
}
