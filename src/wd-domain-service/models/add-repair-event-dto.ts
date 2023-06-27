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
 * @interface AddRepairEventDto
 */
export interface AddRepairEventDto {
  /**
   * 事件点位
   * @type {string}
   * @memberof AddRepairEventDto
   */
  pointName: string
  /**
   * 点位坐标
   * @type {string}
   * @memberof AddRepairEventDto
   */
  location: string
  /**
   * 事件描述
   * @type {string}
   * @memberof AddRepairEventDto
   */
  description?: string | null
  /**
   * 事件时间
   * @type {string}
   * @memberof AddRepairEventDto
   */
  time?: string
  /**
   * 附件名，对应minio的fileName
   * @type {string}
   * @memberof AddRepairEventDto
   */
  fileName?: string | null
  /**
   * 附件对象路径，对应minio的objectName
   * @type {string}
   * @memberof AddRepairEventDto
   */
  objectName?: string | null
  /**
   * 事件关联的模型id
   * @type {string}
   * @memberof AddRepairEventDto
   */
  modelId: string
}