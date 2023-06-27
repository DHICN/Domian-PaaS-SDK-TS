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
 * GISApi - axios parameter creator
 * @export
 */
export const GISApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 获取DMA GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetDmaGisGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/gis/get-dma-gis`
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
     * @summary 获取节点GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetJunctionGisGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/gis/get-junction-gis`
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
     * @summary 获取管道GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetPipeGisGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/gis/get-pipe-gis`
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
     * @summary 获取水泵GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetPumpGisGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/gis/get-pump-gis`
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
     * @summary 获取水池GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetTankGisGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/gis/get-tank-gis`
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
     * @summary 获取阀门GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetValveGisGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/gis/get-valve-gis`
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
 * GISApi - functional programming interface
 * @export
 */
export const GISApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = GISApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 获取DMA GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdGisGetDmaGisGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdGisGetDmaGisGet(
        scenarioId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取节点GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdGisGetJunctionGisGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdGisGetJunctionGisGet(
        scenarioId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取管道GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdGisGetPipeGisGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdGisGetPipeGisGet(
        scenarioId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取水泵GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdGisGetPumpGisGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdGisGetPumpGisGet(
        scenarioId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取水池GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdGisGetTankGisGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdGisGetTankGisGet(
        scenarioId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取阀门GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdGisGetValveGisGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdGisGetValveGisGet(
        scenarioId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * GISApi - factory interface
 * @export
 */
export const GISApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = GISApiFp(configuration)
  return {
    /**
     *
     * @summary 获取DMA GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetDmaGisGet(scenarioId?: string, options?: any): AxiosPromise<string> {
      return localVarFp
        .apiV1DomainWdGisGetDmaGisGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取节点GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetJunctionGisGet(scenarioId?: string, options?: any): AxiosPromise<string> {
      return localVarFp
        .apiV1DomainWdGisGetJunctionGisGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取管道GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetPipeGisGet(scenarioId?: string, options?: any): AxiosPromise<string> {
      return localVarFp
        .apiV1DomainWdGisGetPipeGisGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取水泵GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetPumpGisGet(scenarioId?: string, options?: any): AxiosPromise<string> {
      return localVarFp
        .apiV1DomainWdGisGetPumpGisGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取水池GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetTankGisGet(scenarioId?: string, options?: any): AxiosPromise<string> {
      return localVarFp
        .apiV1DomainWdGisGetTankGisGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取阀门GIS信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdGisGetValveGisGet(scenarioId?: string, options?: any): AxiosPromise<string> {
      return localVarFp
        .apiV1DomainWdGisGetValveGisGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * GISApi - object-oriented interface
 * @export
 * @class GISApi
 * @extends {BaseAPI}
 */
export class GISApi extends BaseAPI {
  /**
   *
   * @summary 获取DMA GIS信息
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GISApi
   */
  public apiV1DomainWdGisGetDmaGisGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return GISApiFp(this.configuration)
      .apiV1DomainWdGisGetDmaGisGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取节点GIS信息
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GISApi
   */
  public apiV1DomainWdGisGetJunctionGisGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return GISApiFp(this.configuration)
      .apiV1DomainWdGisGetJunctionGisGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取管道GIS信息
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GISApi
   */
  public apiV1DomainWdGisGetPipeGisGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return GISApiFp(this.configuration)
      .apiV1DomainWdGisGetPipeGisGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取水泵GIS信息
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GISApi
   */
  public apiV1DomainWdGisGetPumpGisGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return GISApiFp(this.configuration)
      .apiV1DomainWdGisGetPumpGisGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取水池GIS信息
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GISApi
   */
  public apiV1DomainWdGisGetTankGisGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return GISApiFp(this.configuration)
      .apiV1DomainWdGisGetTankGisGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取阀门GIS信息
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof GISApi
   */
  public apiV1DomainWdGisGetValveGisGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return GISApiFp(this.configuration)
      .apiV1DomainWdGisGetValveGisGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
