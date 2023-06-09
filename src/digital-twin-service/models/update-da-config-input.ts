/* eslint-disable */
/**
 * digital-twin-service
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
 * @interface UpdateDaConfigInput
 */
export interface UpdateDaConfigInput {
  /**
   * 实时校正点显示名称 DA point name
   * @type {string}
   * @memberof UpdateDaConfigInput
   */
  showName?: string | null
  /**
   * 河道名 branch name
   * @type {string}
   * @memberof UpdateDaConfigInput
   */
  branchName: string
  /**
   * 里程数 chainage
   * @type {number}
   * @memberof UpdateDaConfigInput
   */
  chainage: number
  /**
   * 0-WaterLevel(water level) 1-Discharge(discharge) 2-Concentration(concentration)
   * @type {number}
   * @memberof UpdateDaConfigInput
   */
  variableType: UpdateDaConfigInputVariableTypeEnum
  /**
   * 水质项序号 component number
   * @type {number}
   * @memberof UpdateDaConfigInput
   */
  component?: number
  /**
   * dfs0文件相对路径 dfs0 file path
   * @type {string}
   * @memberof UpdateDaConfigInput
   */
  file: string
  /**
   * dfs0文件中项的序号 dfs0 data item number
   * @type {number}
   * @memberof UpdateDaConfigInput
   */
  fileNum: number
  /**
   * 指标Id device indicator id
   * @type {string}
   * @memberof UpdateDaConfigInput
   */
  indicatorId?: string | null
  /**
   * 模板方案Id template scenario id
   * @type {string}
   * @memberof UpdateDaConfigInput
   */
  templateId: string
  /**
   * 实时校正点ID DA point id
   * @type {string}
   * @memberof UpdateDaConfigInput
   */
  id: string
}

export const UpdateDaConfigInputVariableTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
} as const

export type UpdateDaConfigInputVariableTypeEnum =
  (typeof UpdateDaConfigInputVariableTypeEnum)[keyof typeof UpdateDaConfigInputVariableTypeEnum]
