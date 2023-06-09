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
 * @interface UpdateUserInput
 */
export interface UpdateUserInput {
  /**
   * 用户名 user name
   * @type {string}
   * @memberof UpdateUserInput
   */
  userName: string
  /**
   * 姓氏 surname
   * @type {string}
   * @memberof UpdateUserInput
   */
  surname?: string | null
  /**
   * 角色ID列表 role ids
   * @type {Array<string>}
   * @memberof UpdateUserInput
   */
  roles?: Array<string> | null
  /**
   * 手机号码 phone number
   * @type {string}
   * @memberof UpdateUserInput
   */
  phoneNumber?: string | null
  /**
   * 所属部门 working department
   * @type {string}
   * @memberof UpdateUserInput
   */
  department?: string | null
  /**
   * 0-Normal(normal user)  1-Frozen(frozen user)  2-Cancelled(cancelled user)
   * @type {number}
   * @memberof UpdateUserInput
   */
  status: UpdateUserInputStatusEnum
  /**
   * 是否试用用户 if it is a trial user
   * @type {boolean}
   * @memberof UpdateUserInput
   */
  isTrialUser?: boolean
  /**
   * 试用多少天 trial days
   * @type {number}
   * @memberof UpdateUserInput
   */
  trialDays?: number
  /**
   * 邮件 email address
   * @type {string}
   * @memberof UpdateUserInput
   */
  email?: string | null
  /**
   * 用户ID user id
   * @type {string}
   * @memberof UpdateUserInput
   */
  id: string
}

export const UpdateUserInputStatusEnum = {
  0: 0 as number,
  1: 1 as number,
  2: 2 as number,
} as const

export type UpdateUserInputStatusEnum =
  (typeof UpdateUserInputStatusEnum)[keyof typeof UpdateUserInputStatusEnum]
