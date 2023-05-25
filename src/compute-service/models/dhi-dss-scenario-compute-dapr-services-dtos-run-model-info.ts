/* eslint-disable */
/**
 * scenario-compute-service
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
 * @interface DhiDssScenarioComputeDaprServicesDtosRunModelInfo
 */
export interface DhiDssScenarioComputeDaprServicesDtosRunModelInfo {
  /**
   *
   * @type {string}
   * @memberof DhiDssScenarioComputeDaprServicesDtosRunModelInfo
   */
  modelType?: string | null
  /**
   *
   * @type {string}
   * @memberof DhiDssScenarioComputeDaprServicesDtosRunModelInfo
   */
  scenarioId?: string | null
  /**
   *
   * @type {string}
   * @memberof DhiDssScenarioComputeDaprServicesDtosRunModelInfo
   */
  tenantId?: string | null
  /**
   *
   * @type {string}
   * @memberof DhiDssScenarioComputeDaprServicesDtosRunModelInfo
   */
  templateScenarioId?: string | null
  /**
   * 0-Undefined(Undefined) 1-WaterEnvironment(Water environment) 2-UrbanFlooding(Urban flooding) 3-UrbanWD(Water distribution) 4-RiverFlood(River flood)
   * @type {number}
   * @memberof DhiDssScenarioComputeDaprServicesDtosRunModelInfo
   */
  businessType?: DhiDssScenarioComputeDaprServicesDtosRunModelInfoBusinessTypeEnum
  /**
   * 0-Undefined(Undefined) 1-AutoForecast(Auto forecast library) 2-ManualForecast(Manual forecast library) 3-Forecast(Forecast library) 4-Schedule(Schedule library) 5-Experience(Experience library) 6-ScenarioSimulation(Scenario simulation library) 7-WQAccident(Water quality accident library) 8-OnlineHD(WD Hydrodynamic library) 9-WaterHammer(WD water hammer library) 10-Filling(WD pipe filling library) 11-PipeBurst(WD pipe burst library) 12-WQResponse(Water quality accident response library) 13-Planning(WD planning library) 14-Flushing(WD flushing library) 15-OnlineWQAccident(Online Water quality accident library) 16-CloseValve(WD close valve library)
   * @type {number}
   * @memberof DhiDssScenarioComputeDaprServicesDtosRunModelInfo
   */
  libraryType?: DhiDssScenarioComputeDaprServicesDtosRunModelInfoLibraryTypeEnum
}

export const DhiDssScenarioComputeDaprServicesDtosRunModelInfoBusinessTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
  '3': 3 as number,
  '4': 4 as number,
} as const

export type DhiDssScenarioComputeDaprServicesDtosRunModelInfoBusinessTypeEnum =
  (typeof DhiDssScenarioComputeDaprServicesDtosRunModelInfoBusinessTypeEnum)[keyof typeof DhiDssScenarioComputeDaprServicesDtosRunModelInfoBusinessTypeEnum]
export const DhiDssScenarioComputeDaprServicesDtosRunModelInfoLibraryTypeEnum = {
  '0': 0 as number,
  '1': 1 as number,
  '2': 2 as number,
  '3': 3 as number,
  '4': 4 as number,
  '5': 5 as number,
  '6': 6 as number,
  '7': 7 as number,
  '8': 8 as number,
  '9': 9 as number,
  '10': 10 as number,
  '11': 11 as number,
  '12': 12 as number,
  '13': 13 as number,
  '14': 14 as number,
  '15': 15 as number,
  '16': 16 as number,
} as const

export type DhiDssScenarioComputeDaprServicesDtosRunModelInfoLibraryTypeEnum =
  (typeof DhiDssScenarioComputeDaprServicesDtosRunModelInfoLibraryTypeEnum)[keyof typeof DhiDssScenarioComputeDaprServicesDtosRunModelInfoLibraryTypeEnum]