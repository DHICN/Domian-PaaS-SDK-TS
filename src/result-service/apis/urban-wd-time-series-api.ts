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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { Configuration } from '../configuration'
import { URL } from '../../sdk-helper'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * UrbanWdTimeSeriesApi - axios parameter creator
 * @export
 */
export const UrbanWdTimeSeriesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 根据方案id获取计算结果的时间列表
     * @param {string} [scenarioId]
     * @param {string} [timeType]
     * @param {number} [frequency]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultUrbanWdResultAnalysisGetTimeInfoGet: async (
      scenarioId?: string,
      timeType?: string,
      frequency?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/result/urban-wd/result-analysis/get-time-info`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (scenarioId !== undefined) {
        localVarQueryParameter['scenarioId'] = scenarioId
      }

      if (timeType !== undefined) {
        localVarQueryParameter['timeType'] = timeType
      }

      if (frequency !== undefined) {
        localVarQueryParameter['frequency'] = frequency
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary 根据方案id获取水锤计算结果的时间列表
     * @param {string} [scenarioId]
     * @param {number} [frequency]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultUrbanWdResultAnalysisGetWaterhammerTimeInfoGet: async (
      scenarioId?: string,
      frequency?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/result/urban-wd/result-analysis/get-waterhammer-time-info`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (scenarioId !== undefined) {
        localVarQueryParameter['scenarioId'] = scenarioId
      }

      if (frequency !== undefined) {
        localVarQueryParameter['frequency'] = frequency
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * UrbanWdTimeSeriesApi - functional programming interface
 * @export
 */
export const UrbanWdTimeSeriesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UrbanWdTimeSeriesApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 根据方案id获取计算结果的时间列表
     * @param {string} [scenarioId]
     * @param {string} [timeType]
     * @param {number} [frequency]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ResultUrbanWdResultAnalysisGetTimeInfoGet(
      scenarioId?: string,
      timeType?: string,
      frequency?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ResultUrbanWdResultAnalysisGetTimeInfoGet(
          scenarioId,
          timeType,
          frequency,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据方案id获取水锤计算结果的时间列表
     * @param {string} [scenarioId]
     * @param {number} [frequency]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ResultUrbanWdResultAnalysisGetWaterhammerTimeInfoGet(
      scenarioId?: string,
      frequency?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ResultUrbanWdResultAnalysisGetWaterhammerTimeInfoGet(
          scenarioId,
          frequency,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * UrbanWdTimeSeriesApi - factory interface
 * @export
 */
export const UrbanWdTimeSeriesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = UrbanWdTimeSeriesApiFp(configuration)
  return {
    /**
     *
     * @summary 根据方案id获取计算结果的时间列表
     * @param {string} [scenarioId]
     * @param {string} [timeType]
     * @param {number} [frequency]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultUrbanWdResultAnalysisGetTimeInfoGet(
      scenarioId?: string,
      timeType?: string,
      frequency?: number,
      options?: any,
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .apiV1ResultUrbanWdResultAnalysisGetTimeInfoGet(scenarioId, timeType, frequency, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据方案id获取水锤计算结果的时间列表
     * @param {string} [scenarioId]
     * @param {number} [frequency]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ResultUrbanWdResultAnalysisGetWaterhammerTimeInfoGet(
      scenarioId?: string,
      frequency?: number,
      options?: any,
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .apiV1ResultUrbanWdResultAnalysisGetWaterhammerTimeInfoGet(scenarioId, frequency, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * UrbanWdTimeSeriesApi - object-oriented interface
 * @export
 * @class UrbanWdTimeSeriesApi
 * @extends {BaseAPI}
 */
export class UrbanWdTimeSeriesApi extends BaseAPI {
  /**
   *
   * @summary 根据方案id获取计算结果的时间列表
   * @param {string} [scenarioId]
   * @param {string} [timeType]
   * @param {number} [frequency]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UrbanWdTimeSeriesApi
   */
  public apiV1ResultUrbanWdResultAnalysisGetTimeInfoGet(
    scenarioId?: string,
    timeType?: string,
    frequency?: number,
    options?: AxiosRequestConfig,
  ) {
    return UrbanWdTimeSeriesApiFp(this.configuration)
      .apiV1ResultUrbanWdResultAnalysisGetTimeInfoGet(scenarioId, timeType, frequency, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据方案id获取水锤计算结果的时间列表
   * @param {string} [scenarioId]
   * @param {number} [frequency]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UrbanWdTimeSeriesApi
   */
  public apiV1ResultUrbanWdResultAnalysisGetWaterhammerTimeInfoGet(
    scenarioId?: string,
    frequency?: number,
    options?: AxiosRequestConfig,
  ) {
    return UrbanWdTimeSeriesApiFp(this.configuration)
      .apiV1ResultUrbanWdResultAnalysisGetWaterhammerTimeInfoGet(scenarioId, frequency, options)
      .then((request) => request(this.axios, this.basePath))
  }
}