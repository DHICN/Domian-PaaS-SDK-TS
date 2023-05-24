/* eslint-disable */
/**
 * wwtp-paas-infrastructure-service
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
 * @interface ModelParameterInputOutput
 */
export interface ModelParameterInputOutput {
  /**
   *
   * @type {string}
   * @memberof ModelParameterInputOutput
   */
  id?: string
  /**
   * 方案名称 scenario name
   * @type {string}
   * @memberof ModelParameterInputOutput
   */
  scenarioName: string
  /**
   * 模型参数节点 parameter code
   * @type {string}
   * @memberof ModelParameterInputOutput
   */
  paraCode: string
  /**
   * 参数配置值 parameter value
   * @type {number}
   * @memberof ModelParameterInputOutput
   */
  value?: number
}
