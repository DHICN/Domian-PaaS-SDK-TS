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
 * @interface TenantPersonalizedInfoDto
 */
export interface TenantPersonalizedInfoDto {
  /**
   * 页面标题 page title
   * @type {string}
   * @memberof TenantPersonalizedInfoDto
   */
  title: string
  /**
   * 租户浏览器图标/客户端软件小图标 browser / client application icon
   * @type {string}
   * @memberof TenantPersonalizedInfoDto
   */
  icon: string
  /**
   * 租户系统Logo tenant system logo
   * @type {string}
   * @memberof TenantPersonalizedInfoDto
   */
  logo: string
  /**
   * 封面类型 cover type
   * @type {number}
   * @memberof TenantPersonalizedInfoDto
   */
  coverType?: TenantPersonalizedInfoDtoCoverTypeEnum
  /**
   * 封面文件相对路径 cover relative path
   * @type {string}
   * @memberof TenantPersonalizedInfoDto
   */
  cover?: string | null
}

export const TenantPersonalizedInfoDtoCoverTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
} as const

export type TenantPersonalizedInfoDtoCoverTypeEnum =
  (typeof TenantPersonalizedInfoDtoCoverTypeEnum)[keyof typeof TenantPersonalizedInfoDtoCoverTypeEnum]
