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
 * LoginTokenRep
 * @export
 * @interface LoginTokenRep
 */
export interface LoginTokenRep {
  /**
   *
   * @type {string}
   * @memberof LoginTokenRep
   */
  access_token: string
  /**
   *
   * @type {number}
   * @memberof LoginTokenRep
   */
  expires_in: number
  /**
   *
   * @type {string}
   * @memberof LoginTokenRep
   */
  token_type: string
  /**
   *
   * @type {string}
   * @memberof LoginTokenRep
   */
  refresh_token: string
  /**
   *
   * @type {string}
   * @memberof LoginTokenRep
   */
  scope: string
}
