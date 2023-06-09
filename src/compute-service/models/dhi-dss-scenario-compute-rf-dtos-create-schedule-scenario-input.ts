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
 * @interface DhiDssScenarioComputeRfDtosCreateScheduleScenarioInput
 */
export interface DhiDssScenarioComputeRfDtosCreateScheduleScenarioInput {
  /**
   * Template scenario id
   * @type {string}
   * @memberof DhiDssScenarioComputeRfDtosCreateScheduleScenarioInput
   */
  parentScenarioId?: string
  /**
   * Schedule scenario name
   * @type {string}
   * @memberof DhiDssScenarioComputeRfDtosCreateScheduleScenarioInput
   */
  newScenarioName?: string | null
  /**
   * Start time
   * @type {string}
   * @memberof DhiDssScenarioComputeRfDtosCreateScheduleScenarioInput
   */
  startTime?: string
  /**
   * End time
   * @type {string}
   * @memberof DhiDssScenarioComputeRfDtosCreateScheduleScenarioInput
   */
  endTime?: string
  /**
   * Scenario description
   * @type {string}
   * @memberof DhiDssScenarioComputeRfDtosCreateScheduleScenarioInput
   */
  description?: string | null
}
