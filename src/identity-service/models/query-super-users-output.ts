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
import { GuidStringKeyValue } from './guid-string-key-value'
// May contain unused imports in some cases
// @ts-ignore
import { TenantBelongSystemDto } from './tenant-belong-system-dto'

/**
 *
 * @export
 * @interface QuerySuperUsersOutput
 */
export interface QuerySuperUsersOutput {
  /**
   * 用户ID user id
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  id?: string
  /**
   * 0-Normal(normal user) 1-Frozen(frozen user) 2-Cancelled(cancelled user)
   * @type {number}
   * @memberof QuerySuperUsersOutput
   */
  status?: QuerySuperUsersOutputStatusEnum
  /**
   * 用户名 user name
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  userName?: string | null
  /**
   * 姓氏 surname
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  surname?: string | null
  /**
   * 邮箱 email address
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  email?: string | null
  /**
   * 所属单位 working department
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  department?: string | null
  /**
   * 额外属性 extra properties
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  extraProperties?: string | null
  /**
   * 创建时间 create time
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  creationTime?: string
  /**
   * 租户ID tenant id
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  tenantId?: string | null
  /**
   * 用户角色 user roles
   * @type {Array<GuidStringKeyValue>}
   * @memberof QuerySuperUsersOutput
   */
  userRoles?: Array<GuidStringKeyValue> | null
  /**
   * 是否试用用户 if it is a trial user
   * @type {boolean}
   * @memberof QuerySuperUsersOutput
   */
  isTrialUser?: boolean
  /**
   * 试用截止日期 trial deadline
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  trialDeadline?: string | null
  /**
   * 电话号码 phonenumber
   * @type {string}
   * @memberof QuerySuperUsersOutput
   */
  phoneNumber?: string | null
  /**
   * 租户信息列表 tenants
   * @type {Array<TenantBelongSystemDto>}
   * @memberof QuerySuperUsersOutput
   */
  tenants?: Array<TenantBelongSystemDto> | null
}

export const QuerySuperUsersOutputStatusEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
} as const

export type QuerySuperUsersOutputStatusEnum =
  (typeof QuerySuperUsersOutputStatusEnum)[keyof typeof QuerySuperUsersOutputStatusEnum]
