/* eslint-disable */
/**
 * scenario-manager-service
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
 * Library
 * @export
 * @interface Library
 */
export interface Library {
  /**
   * 库的ID library Id
   * @type {string}
   * @memberof Library
   */
  id: string
  /**
   * 租户ID tenant Id
   * @type {string}
   * @memberof Library
   */
  tenantId?: string | null
  /**
   * 对应的方案组ID scenario group Id
   * @type {string}
   * @memberof Library
   */
  scenariogroup: string
  /**
   * 库的名称 library name
   * @type {string}
   * @memberof Library
   */
  name: string
  /**
   * 库的类型 library type:  0-Undefined  1-AutoForecast  2-ManualForecast  3-Forecast  4-Schedule  5-Experience  6-ScenarioSimulation  7-WQAccident  8-OnlineHD  9-WaterHammer  10-Filling  11-PipeBurst  12-WQResponse  13-Planning  14-Flushing  15-OnlineWQAccident  16-CloseValve  17-WWTP  18-WWTPOptim  19-WWTPMLab
   * @type {number}
   * @memberof Library
   */
  type?: number
  /**
   * 库的业务类型 business type:  0-Undefined  1-WaterEnvironmnet  2-UrbanFlooding  3-WaterDistribution  4-RiverFlood  5-WWTP
   * @type {number}
   * @memberof Library
   */
  businessType?: number
  /**
   * 0代表可读写，1代表只读 0 for not readonly, 1 for readonly
   * @type {number}
   * @memberof Library
   */
  readonly?: number
  /**
   * 1表示库直接绑定一个模板方案，0表示不绑定 1 for bind a template directly, 0 for not
   * @type {number}
   * @memberof Library
   */
  bindTemplate?: number
  /**
   * 当BindTemplate为0，此项表示其绑定的库的类型 Bind library type for a template, in case of BindTemplate is 0:  0-Undefined  1-AutoForecast  2-ManualForecast  3-Forecast  4-Schedule  5-Experience  6-ScenarioSimulation  7-WQAccident  8-OnlineHD  9-WaterHammer  10-Filling  11-PipeBurst  12-WQResponse  13-Planning  14-Flushing
   * @type {number}
   * @memberof Library
   */
  bindType?: number
  /**
   * 当BindTemplate为0，此项表示其绑定的库的业务类型 Bind business type for a template, in case of BindTemplate is 0:  0-Undefined  1-WaterEnvironmnet  2-UrbanFlooding  3-WaterDistribution  4-RiverFlood
   * @type {number}
   * @memberof Library
   */
  bindBusinessType?: number
  /**
   * 0表示只能绑定单个模板方案，1表示可以绑定多个模板方案 0 for single template which is the default option, 1 for multiple templates
   * @type {number}
   * @memberof Library
   */
  enableMultiTemplate?: number | null
  /**
   * 库的描述 description
   * @type {string}
   * @memberof Library
   */
  description?: string | null
}