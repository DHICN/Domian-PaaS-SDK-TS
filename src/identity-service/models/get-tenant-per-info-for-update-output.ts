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
 * @interface GetTenantPerInfoForUpdateOutput
 */
export interface GetTenantPerInfoForUpdateOutput {
  /**
   * 页面标题 page title
   * @type {string}
   * @memberof GetTenantPerInfoForUpdateOutput
   */
  title: string
  /**
   * 租户浏览器图标/客户端软件小图标 browser / client application icon
   * @type {string}
   * @memberof GetTenantPerInfoForUpdateOutput
   */
  icon: string
  /**
   * 租户系统Logo tenant system logo
   * @type {string}
   * @memberof GetTenantPerInfoForUpdateOutput
   */
  logo: string
  /**
   * 封面类型 cover type
   * @type {number}
   * @memberof GetTenantPerInfoForUpdateOutput
   */
  coverType?: GetTenantPerInfoForUpdateOutputCoverTypeEnum
  /**
   * 封面文件相对路径 cover relative path
   * @type {string}
   * @memberof GetTenantPerInfoForUpdateOutput
   */
  cover?: string | null
  /**
   * 图标存储绝对路径 icon absolute path
   * @type {string}
   * @memberof GetTenantPerInfoForUpdateOutput
   */
  iconAbsolutePath?: string | null
  /**
   * Logo存储绝对路径 logo absolute path
   * @type {string}
   * @memberof GetTenantPerInfoForUpdateOutput
   */
  logoAbsolutePath?: string | null
  /**
   * 封面存储绝对路径 cover absolute path
   * @type {string}
   * @memberof GetTenantPerInfoForUpdateOutput
   */
  coverAbsolutePath?: string | null
}

export const GetTenantPerInfoForUpdateOutputCoverTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
} as const

export type GetTenantPerInfoForUpdateOutputCoverTypeEnum =
  (typeof GetTenantPerInfoForUpdateOutputCoverTypeEnum)[keyof typeof GetTenantPerInfoForUpdateOutputCoverTypeEnum]
