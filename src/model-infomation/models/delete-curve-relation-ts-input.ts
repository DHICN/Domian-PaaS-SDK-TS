/* eslint-disable */
/**
 * model-information-service
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
 * @interface DeleteCurveRelationTsInput
 */
export interface DeleteCurveRelationTsInput {
  /**
   * 方案Id scenario id
   * @type {string}
   * @memberof DeleteCurveRelationTsInput
   */
  scenarioId: string
  /**
   * 模型中曲线ID列表 curve muids
   * @type {Array<string>}
   * @memberof DeleteCurveRelationTsInput
   */
  ids: Array<string>
}
