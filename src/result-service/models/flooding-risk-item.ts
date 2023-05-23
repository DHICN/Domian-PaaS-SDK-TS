/* eslint-disable */
/**
 * result-analysis-service
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
 * @interface FloodingRiskItem
 */
export interface FloodingRiskItem {
  /**
   * 内涝风险区域的空间几何信息，采用GeoJSON格式 geometry in GeoJson format
   * @type {string}
   * @memberof FloodingRiskItem
   */
  geometry?: string | null
  /**
   * 内涝风险区域的面积 area
   * @type {number}
   * @memberof FloodingRiskItem
   */
  area?: number
}