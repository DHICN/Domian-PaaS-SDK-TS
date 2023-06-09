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
 * @interface TokenModelWithTenant
 */
export interface TokenModelWithTenant {
  /**
   *
   * @type {string}
   * @memberof TokenModelWithTenant
   */
  id_token?: string | null
  /**
   *
   * @type {string}
   * @memberof TokenModelWithTenant
   */
  access_token?: string | null
  /**
   *
   * @type {number}
   * @memberof TokenModelWithTenant
   */
  expires_in?: number
  /**
   *
   * @type {string}
   * @memberof TokenModelWithTenant
   */
  refresh_token?: string | null
  /**
   *
   * @type {string}
   * @memberof TokenModelWithTenant
   */
  scope?: string | null
  /**
   *
   * @type {string}
   * @memberof TokenModelWithTenant
   */
  error?: string | null
  /**
   *
   * @type {string}
   * @memberof TokenModelWithTenant
   */
  error_description?: string | null
  /**
   *
   * @type {string}
   * @memberof TokenModelWithTenant
   */
  token_type?: string | null
  /**
   *
   * @type {string}
   * @memberof TokenModelWithTenant
   */
  tenantId?: string | null
}
