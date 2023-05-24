/* eslint-disable */
/**
 * wwtp-paas-main-bus-service
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
import { IntelligentDeniConfigInOut } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * IntelligentBusConfigApi - axios parameter creator
 * @export
 */
export const IntelligentBusConfigApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 添加智能加药展示配置信息 Add intelligent dosage page display config data
     * @param {Array<IntelligentDeniConfigInOut>} [intelligentDeniConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigAddIntelligentDeniDisplayConfigsPost: async (
      intelligentDeniConfigInOut?: Array<IntelligentDeniConfigInOut>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/IntelligentBusConfig/AddIntelligentDeniDisplayConfigs`
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
        intelligentDeniConfigInOut,
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
     * @summary 根据ID删除智能加药展示配置信息 Delete intelligent dosage page display config data by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigDeleteIntelligentDeniDisplayConfigsPost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/IntelligentBusConfig/DeleteIntelligentDeniDisplayConfigs`
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
     * @summary 获取所有的智能加药展示配置信息 Get all intelligent dosage page display config data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigGetAllIntelligentDeniDisplayConfigsGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/IntelligentBusConfig/GetAllIntelligentDeniDisplayConfigs`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

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
     * @summary 通过展示类型枚举获取配置信息 Get intelligent dosage page display config data by display type
     * @param {number} [displayType] 展示类型枚举 display type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigGetIntelligentDeniDisplayConfigByTypeGet: async (
      displayType?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/IntelligentBusConfig/GetIntelligentDeniDisplayConfigByType`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (displayType !== undefined) {
        localVarQueryParameter['displayType'] = displayType
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
     * @summary 更新智能加药展示配置信息 Update intelligent dosage page display config data
     * @param {Array<IntelligentDeniConfigInOut>} [intelligentDeniConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigUpdateIntelligentDeniDisplayConfigsPost: async (
      intelligentDeniConfigInOut?: Array<IntelligentDeniConfigInOut>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/IntelligentBusConfig/UpdateIntelligentDeniDisplayConfigs`
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
        intelligentDeniConfigInOut,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * IntelligentBusConfigApi - functional programming interface
 * @export
 */
export const IntelligentBusConfigApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = IntelligentBusConfigApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 添加智能加药展示配置信息 Add intelligent dosage page display config data
     * @param {Array<IntelligentDeniConfigInOut>} [intelligentDeniConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiIntelligentBusConfigAddIntelligentDeniDisplayConfigsPost(
      intelligentDeniConfigInOut?: Array<IntelligentDeniConfigInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiIntelligentBusConfigAddIntelligentDeniDisplayConfigsPost(
          intelligentDeniConfigInOut,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据ID删除智能加药展示配置信息 Delete intelligent dosage page display config data by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiIntelligentBusConfigDeleteIntelligentDeniDisplayConfigsPost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiIntelligentBusConfigDeleteIntelligentDeniDisplayConfigsPost(
          requestBody,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取所有的智能加药展示配置信息 Get all intelligent dosage page display config data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiIntelligentBusConfigGetAllIntelligentDeniDisplayConfigsGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<IntelligentDeniConfigInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiIntelligentBusConfigGetAllIntelligentDeniDisplayConfigsGet(
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过展示类型枚举获取配置信息 Get intelligent dosage page display config data by display type
     * @param {number} [displayType] 展示类型枚举 display type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiIntelligentBusConfigGetIntelligentDeniDisplayConfigByTypeGet(
      displayType?: number,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<IntelligentDeniConfigInOut>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiIntelligentBusConfigGetIntelligentDeniDisplayConfigByTypeGet(
          displayType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新智能加药展示配置信息 Update intelligent dosage page display config data
     * @param {Array<IntelligentDeniConfigInOut>} [intelligentDeniConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiIntelligentBusConfigUpdateIntelligentDeniDisplayConfigsPost(
      intelligentDeniConfigInOut?: Array<IntelligentDeniConfigInOut>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiIntelligentBusConfigUpdateIntelligentDeniDisplayConfigsPost(
          intelligentDeniConfigInOut,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * IntelligentBusConfigApi - factory interface
 * @export
 */
export const IntelligentBusConfigApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = IntelligentBusConfigApiFp(configuration)
  return {
    /**
     *
     * @summary 添加智能加药展示配置信息 Add intelligent dosage page display config data
     * @param {Array<IntelligentDeniConfigInOut>} [intelligentDeniConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigAddIntelligentDeniDisplayConfigsPost(
      intelligentDeniConfigInOut?: Array<IntelligentDeniConfigInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiIntelligentBusConfigAddIntelligentDeniDisplayConfigsPost(
          intelligentDeniConfigInOut,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据ID删除智能加药展示配置信息 Delete intelligent dosage page display config data by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigDeleteIntelligentDeniDisplayConfigsPost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiIntelligentBusConfigDeleteIntelligentDeniDisplayConfigsPost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取所有的智能加药展示配置信息 Get all intelligent dosage page display config data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigGetAllIntelligentDeniDisplayConfigsGet(
      options?: any,
    ): AxiosPromise<Array<IntelligentDeniConfigInOut>> {
      return localVarFp
        .apiIntelligentBusConfigGetAllIntelligentDeniDisplayConfigsGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过展示类型枚举获取配置信息 Get intelligent dosage page display config data by display type
     * @param {number} [displayType] 展示类型枚举 display type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigGetIntelligentDeniDisplayConfigByTypeGet(
      displayType?: number,
      options?: any,
    ): AxiosPromise<Array<IntelligentDeniConfigInOut>> {
      return localVarFp
        .apiIntelligentBusConfigGetIntelligentDeniDisplayConfigByTypeGet(displayType, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新智能加药展示配置信息 Update intelligent dosage page display config data
     * @param {Array<IntelligentDeniConfigInOut>} [intelligentDeniConfigInOut]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiIntelligentBusConfigUpdateIntelligentDeniDisplayConfigsPost(
      intelligentDeniConfigInOut?: Array<IntelligentDeniConfigInOut>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiIntelligentBusConfigUpdateIntelligentDeniDisplayConfigsPost(
          intelligentDeniConfigInOut,
          options,
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * IntelligentBusConfigApi - object-oriented interface
 * @export
 * @class IntelligentBusConfigApi
 * @extends {BaseAPI}
 */
export class IntelligentBusConfigApi extends BaseAPI {
  /**
   *
   * @summary 添加智能加药展示配置信息 Add intelligent dosage page display config data
   * @param {Array<IntelligentDeniConfigInOut>} [intelligentDeniConfigInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IntelligentBusConfigApi
   */
  public apiIntelligentBusConfigAddIntelligentDeniDisplayConfigsPost(
    intelligentDeniConfigInOut?: Array<IntelligentDeniConfigInOut>,
    options?: AxiosRequestConfig,
  ) {
    return IntelligentBusConfigApiFp(this.configuration)
      .apiIntelligentBusConfigAddIntelligentDeniDisplayConfigsPost(
        intelligentDeniConfigInOut,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据ID删除智能加药展示配置信息 Delete intelligent dosage page display config data by ids
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IntelligentBusConfigApi
   */
  public apiIntelligentBusConfigDeleteIntelligentDeniDisplayConfigsPost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return IntelligentBusConfigApiFp(this.configuration)
      .apiIntelligentBusConfigDeleteIntelligentDeniDisplayConfigsPost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取所有的智能加药展示配置信息 Get all intelligent dosage page display config data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IntelligentBusConfigApi
   */
  public apiIntelligentBusConfigGetAllIntelligentDeniDisplayConfigsGet(
    options?: AxiosRequestConfig,
  ) {
    return IntelligentBusConfigApiFp(this.configuration)
      .apiIntelligentBusConfigGetAllIntelligentDeniDisplayConfigsGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过展示类型枚举获取配置信息 Get intelligent dosage page display config data by display type
   * @param {number} [displayType] 展示类型枚举 display type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IntelligentBusConfigApi
   */
  public apiIntelligentBusConfigGetIntelligentDeniDisplayConfigByTypeGet(
    displayType?: number,
    options?: AxiosRequestConfig,
  ) {
    return IntelligentBusConfigApiFp(this.configuration)
      .apiIntelligentBusConfigGetIntelligentDeniDisplayConfigByTypeGet(displayType, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新智能加药展示配置信息 Update intelligent dosage page display config data
   * @param {Array<IntelligentDeniConfigInOut>} [intelligentDeniConfigInOut]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof IntelligentBusConfigApi
   */
  public apiIntelligentBusConfigUpdateIntelligentDeniDisplayConfigsPost(
    intelligentDeniConfigInOut?: Array<IntelligentDeniConfigInOut>,
    options?: AxiosRequestConfig,
  ) {
    return IntelligentBusConfigApiFp(this.configuration)
      .apiIntelligentBusConfigUpdateIntelligentDeniDisplayConfigsPost(
        intelligentDeniConfigInOut,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
