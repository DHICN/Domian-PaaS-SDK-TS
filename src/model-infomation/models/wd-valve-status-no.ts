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
 * 0-Regulating 1-Open 2-Close -1-Undefined
 * @export
 * @enum {string}
 */

export const WdValveStatusNo = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
  NUMBER_MINUS_1: -1,
} as const

export type WdValveStatusNo = (typeof WdValveStatusNo)[keyof typeof WdValveStatusNo]
