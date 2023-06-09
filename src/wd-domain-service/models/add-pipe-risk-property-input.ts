/* eslint-disable */
/**
 * 供水业务中台领域服务
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
 * @interface AddPipeRiskPropertyInput
 */
export interface AddPipeRiskPropertyInput {
  /**
   * 管道模型id
   * @type {string}
   * @memberof AddPipeRiskPropertyInput
   */
  pipeModelId: string
  /**
   * 管材
   * @type {number}
   * @memberof AddPipeRiskPropertyInput
   */
  pipeMaterial: number
  /**
   * 管龄
   * @type {number}
   * @memberof AddPipeRiskPropertyInput
   */
  pipeAge: number
  /**
   * 接口类型
   * @type {number}
   * @memberof AddPipeRiskPropertyInput
   */
  interfaceType: number
  /**
   * 爆管次数
   * @type {number}
   * @memberof AddPipeRiskPropertyInput
   */
  pipeBrokenNum: number
  /**
   * 覆土类型
   * @type {number}
   * @memberof AddPipeRiskPropertyInput
   */
  earthingType: number
  /**
   * 路面负荷
   * @type {number}
   * @memberof AddPipeRiskPropertyInput
   */
  roadLoad: number
  /**
   * 压力波动
   * @type {number}
   * @memberof AddPipeRiskPropertyInput
   */
  pressureWave: number
}
