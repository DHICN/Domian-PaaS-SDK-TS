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

// May contain unused imports in some cases
// @ts-ignore
import { Coordinate } from './coordinate'

/**
 *
 * @export
 * @interface Envelope
 */
export interface Envelope {
  /**
   *
   * @type {boolean}
   * @memberof Envelope
   */
  isNull?: boolean
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  width?: number
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  height?: number
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  diameter?: number
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  minX?: number
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  maxX?: number
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  minY?: number
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  maxY?: number
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  area?: number
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  minExtent?: number
  /**
   *
   * @type {number}
   * @memberof Envelope
   */
  maxExtent?: number
  /**
   *
   * @type {Coordinate}
   * @memberof Envelope
   */
  centre?: Coordinate
}
