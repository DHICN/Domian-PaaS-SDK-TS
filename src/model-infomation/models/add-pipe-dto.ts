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

// May contain unused imports in some cases
// @ts-ignore
import { OperateEnum } from './operate-enum'

/**
 *
 * @export
 * @interface AddPipeDto
 */
export interface AddPipeDto {
  /**
   * 模型中管段ID pipe muid
   * @type {string}
   * @memberof AddPipeDto
   */
  muid?: string | null
  /**
   * 起始节点 from node
   * @type {string}
   * @memberof AddPipeDto
   */
  fromNode?: string | null
  /**
   * 终止节点 to node
   * @type {string}
   * @memberof AddPipeDto
   */
  toNode?: string | null
  /**
   * 管长 pipe length
   * @type {number}
   * @memberof AddPipeDto
   */
  length?: number
  /**
   * 管径 pipe diameter
   * @type {number}
   * @memberof AddPipeDto
   */
  diameter?: number
  /**
   * 管壁厚度 pipe wall thickness
   * @type {number}
   * @memberof AddPipeDto
   */
  thickness?: number
  /**
   * 管道状态 pipe status
   * @type {number}
   * @memberof AddPipeDto
   */
  pipeStatus?: number
  /**
   * 分区ID zone id
   * @type {string}
   * @memberof AddPipeDto
   */
  zoneID?: string | null
  /**
   * 粗糙度 pipe roughness
   * @type {number}
   * @memberof AddPipeDto
   */
  roughness?: number
  /**
   * 损失系数 loss coefficient
   * @type {number}
   * @memberof AddPipeDto
   */
  lossCoeff?: number
  /**
   * 管材 pipe material
   * @type {string}
   * @memberof AddPipeDto
   */
  material?: string | null
  /**
   * 建设时间 construction time
   * @type {string}
   * @memberof AddPipeDto
   */
  constructionYear?: string
  /**
   * 描述 description
   * @type {string}
   * @memberof AddPipeDto
   */
  description?: string | null
  /**
   * 数据源 data source
   * @type {string}
   * @memberof AddPipeDto
   */
  dataSource?: string | null
  /**
   * 资产名称 asset name
   * @type {string}
   * @memberof AddPipeDto
   */
  assetName?: string | null
  /**
   * 街道名称 street name
   * @type {string}
   * @memberof AddPipeDto
   */
  streetName?: string | null
  /**
   * 起始节点坐标X coordinate x of from-node
   * @type {number}
   * @memberof AddPipeDto
   */
  fromX?: number
  /**
   * 起始节点坐标Y coordinate y of from-node
   * @type {number}
   * @memberof AddPipeDto
   */
  fromY?: number
  /**
   * 终止节点坐标X coordinate x of to-node
   * @type {number}
   * @memberof AddPipeDto
   */
  toX?: number
  /**
   * 终止节点坐标Y coordinate y of to-node
   * @type {number}
   * @memberof AddPipeDto
   */
  toY?: number
  /**
   *
   * @type {OperateEnum}
   * @memberof AddPipeDto
   */
  operate?: OperateEnum
}
