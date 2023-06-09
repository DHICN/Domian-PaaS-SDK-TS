/* eslint-disable */
/**
 * accident-manager-service
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
import { AddTsInput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { TsStruct } from '../models'
/**
 * TimeSeriesApi - axios parameter creator
 * @export
 */
export const TimeSeriesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 新增一个时间序列 Add a new time series
     * @param {AddTsInput} [addTsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentTsdataAddPost: async (
      addTsInput?: AddTsInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/tsdata/add`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        addTsInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary 批量删除时间序列 Batch delete time series by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentTsdataBatchDeletePost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/tsdata/batch-delete`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        requestBody,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary 根据ID删除时间序列 Delete a time series by id
     * @param {string} [tsId] 时间序列ID time series id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentTsdataDeletePost: async (
      tsId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/tsdata/delete`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tsId !== undefined) {
        localVarQueryParameter['tsId'] = tsId
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
     * @summary 查询时间序列 Get time series by id
     * @param {string} [tsId] 时间序列ID time series id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentTsdataListGet: async (
      tsId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/tsdata/list`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tsId !== undefined) {
        localVarQueryParameter['tsId'] = tsId
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
 * TimeSeriesApi - functional programming interface
 * @export
 */
export const TimeSeriesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TimeSeriesApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 新增一个时间序列 Add a new time series
     * @param {AddTsInput} [addTsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentTsdataAddPost(
      addTsInput?: AddTsInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentTsdataAddPost(
        addTsInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 批量删除时间序列 Batch delete time series by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentTsdataBatchDeletePost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentTsdataBatchDeletePost(
        requestBody,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据ID删除时间序列 Delete a time series by id
     * @param {string} [tsId] 时间序列ID time series id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentTsdataDeletePost(
      tsId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentTsdataDeletePost(
        tsId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 查询时间序列 Get time series by id
     * @param {string} [tsId] 时间序列ID time series id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentTsdataListGet(
      tsId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TsStruct>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentTsdataListGet(
        tsId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * TimeSeriesApi - factory interface
 * @export
 */
export const TimeSeriesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = TimeSeriesApiFp(configuration)
  return {
    /**
     *
     * @summary 新增一个时间序列 Add a new time series
     * @param {AddTsInput} [addTsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentTsdataAddPost(addTsInput?: AddTsInput, options?: any): AxiosPromise<boolean> {
      return localVarFp
        .apiV1AccidentTsdataAddPost(addTsInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 批量删除时间序列 Batch delete time series by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentTsdataBatchDeletePost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<number> {
      return localVarFp
        .apiV1AccidentTsdataBatchDeletePost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据ID删除时间序列 Delete a time series by id
     * @param {string} [tsId] 时间序列ID time series id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentTsdataDeletePost(tsId?: string, options?: any): AxiosPromise<number> {
      return localVarFp
        .apiV1AccidentTsdataDeletePost(tsId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 查询时间序列 Get time series by id
     * @param {string} [tsId] 时间序列ID time series id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentTsdataListGet(tsId?: string, options?: any): AxiosPromise<Array<TsStruct>> {
      return localVarFp
        .apiV1AccidentTsdataListGet(tsId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * TimeSeriesApi - object-oriented interface
 * @export
 * @class TimeSeriesApi
 * @extends {BaseAPI}
 */
export class TimeSeriesApi extends BaseAPI {
  /**
   *
   * @summary 新增一个时间序列 Add a new time series
   * @param {AddTsInput} [addTsInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TimeSeriesApi
   */
  public apiV1AccidentTsdataAddPost(addTsInput?: AddTsInput, options?: AxiosRequestConfig) {
    return TimeSeriesApiFp(this.configuration)
      .apiV1AccidentTsdataAddPost(addTsInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 批量删除时间序列 Batch delete time series by ids
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TimeSeriesApi
   */
  public apiV1AccidentTsdataBatchDeletePost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return TimeSeriesApiFp(this.configuration)
      .apiV1AccidentTsdataBatchDeletePost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据ID删除时间序列 Delete a time series by id
   * @param {string} [tsId] 时间序列ID time series id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TimeSeriesApi
   */
  public apiV1AccidentTsdataDeletePost(tsId?: string, options?: AxiosRequestConfig) {
    return TimeSeriesApiFp(this.configuration)
      .apiV1AccidentTsdataDeletePost(tsId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 查询时间序列 Get time series by id
   * @param {string} [tsId] 时间序列ID time series id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TimeSeriesApi
   */
  public apiV1AccidentTsdataListGet(tsId?: string, options?: AxiosRequestConfig) {
    return TimeSeriesApiFp(this.configuration)
      .apiV1AccidentTsdataListGet(tsId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
