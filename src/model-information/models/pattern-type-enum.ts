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
 * 1-NodeDemands(需水) 2-WaterQuality(水质) 3-TankWater(水池) 4-EnergyPrice(能耗) 5-Undefined
 * @export
 * @enum {string}
 */

export const PatternTypeEnum = {
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_3: 3,
  NUMBER_4: 4,
  NUMBER_5: 5,
} as const

export type PatternTypeEnum = (typeof PatternTypeEnum)[keyof typeof PatternTypeEnum]