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
import { AccidentDetailInfo } from '../models'
// @ts-ignore
import { AccidentDetailInput } from '../models'
// @ts-ignore
import { AccidentInfo } from '../models'
// @ts-ignore
import { AddAccidentInput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { UpdateAccidentInput } from '../models'
/**
 * AccidentApi - axios parameter creator
 * @export
 */
export const AccidentApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * 批量添加事故详细信息，包括关联的情景、事件、污染物等信息 Batch add accidents with detailed information including subordinate scenes, events, pollutants, etc.
     * @summary 批量添加事故详细信息 Batch add accidents with detailed information
     * @param {AccidentDetailInput} [accidentDetailInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentAddAccidentPost: async (
      accidentDetailInput?: AccidentDetailInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/accident/add-accident`
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
        accidentDetailInput,
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
     * @summary 添加一个事故信息 Add an accident
     * @param {AddAccidentInput} [addAccidentInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentAddPost: async (
      addAccidentInput?: AddAccidentInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/accident/add`
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
        addAccidentInput,
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
     * @summary 根据ID删除事故信息 Delete accidents by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentDeletePost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/accident/delete`
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
     * @summary 根据ID查询事故信息 Get accident by id
     * @param {string} [accidentId] 事故ID accident id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentDetailGet: async (
      accidentId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/accident/detail`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (accidentId !== undefined) {
        localVarQueryParameter['accidentId'] = accidentId
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
     * @summary 根据事故名称、等级、类型查询事故信息 Query accidents by accident name, level and type
     * @param {string} [name] 事故名称 accident name
     * @param {string} [accidentLevel] 事故等级 accident level
     * @param {string} [accidentType] 事故类型 accident type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentListGet: async (
      name?: string,
      accidentLevel?: string,
      accidentType?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/accident/list`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (name !== undefined) {
        localVarQueryParameter['Name'] = name
      }

      if (accidentLevel !== undefined) {
        localVarQueryParameter['AccidentLevel'] = accidentLevel
      }

      if (accidentType !== undefined) {
        localVarQueryParameter['AccidentType'] = accidentType
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
     * @summary 更新事故信息 Update an accident
     * @param {UpdateAccidentInput} [updateAccidentInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentUpdatePost: async (
      updateAccidentInput?: UpdateAccidentInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/accident/update`
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
        updateAccidentInput,
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
 * AccidentApi - functional programming interface
 * @export
 */
export const AccidentApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AccidentApiAxiosParamCreator(configuration)
  return {
    /**
     * 批量添加事故详细信息，包括关联的情景、事件、污染物等信息 Batch add accidents with detailed information including subordinate scenes, events, pollutants, etc.
     * @summary 批量添加事故详细信息 Batch add accidents with detailed information
     * @param {AccidentDetailInput} [accidentDetailInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentAccidentAddAccidentPost(
      accidentDetailInput?: AccidentDetailInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1AccidentAccidentAddAccidentPost(
          accidentDetailInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 添加一个事故信息 Add an accident
     * @param {AddAccidentInput} [addAccidentInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentAccidentAddPost(
      addAccidentInput?: AddAccidentInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccidentInfo>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentAccidentAddPost(
        addAccidentInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据ID删除事故信息 Delete accidents by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentAccidentDeletePost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentAccidentDeletePost(
        requestBody,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据ID查询事故信息 Get accident by id
     * @param {string} [accidentId] 事故ID accident id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentAccidentDetailGet(
      accidentId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccidentDetailInfo>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentAccidentDetailGet(
        accidentId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据事故名称、等级、类型查询事故信息 Query accidents by accident name, level and type
     * @param {string} [name] 事故名称 accident name
     * @param {string} [accidentLevel] 事故等级 accident level
     * @param {string} [accidentType] 事故类型 accident type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentAccidentListGet(
      name?: string,
      accidentLevel?: string,
      accidentType?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AccidentInfo>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentAccidentListGet(
        name,
        accidentLevel,
        accidentType,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新事故信息 Update an accident
     * @param {UpdateAccidentInput} [updateAccidentInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentAccidentUpdatePost(
      updateAccidentInput?: UpdateAccidentInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccidentInfo>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentAccidentUpdatePost(
        updateAccidentInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * AccidentApi - factory interface
 * @export
 */
export const AccidentApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AccidentApiFp(configuration)
  return {
    /**
     * 批量添加事故详细信息，包括关联的情景、事件、污染物等信息 Batch add accidents with detailed information including subordinate scenes, events, pollutants, etc.
     * @summary 批量添加事故详细信息 Batch add accidents with detailed information
     * @param {AccidentDetailInput} [accidentDetailInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentAddAccidentPost(
      accidentDetailInput?: AccidentDetailInput,
      options?: any,
    ): AxiosPromise<string> {
      return localVarFp
        .apiV1AccidentAccidentAddAccidentPost(accidentDetailInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 添加一个事故信息 Add an accident
     * @param {AddAccidentInput} [addAccidentInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentAddPost(
      addAccidentInput?: AddAccidentInput,
      options?: any,
    ): AxiosPromise<AccidentInfo> {
      return localVarFp
        .apiV1AccidentAccidentAddPost(addAccidentInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据ID删除事故信息 Delete accidents by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentDeletePost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1AccidentAccidentDeletePost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据ID查询事故信息 Get accident by id
     * @param {string} [accidentId] 事故ID accident id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentDetailGet(
      accidentId?: string,
      options?: any,
    ): AxiosPromise<AccidentDetailInfo> {
      return localVarFp
        .apiV1AccidentAccidentDetailGet(accidentId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据事故名称、等级、类型查询事故信息 Query accidents by accident name, level and type
     * @param {string} [name] 事故名称 accident name
     * @param {string} [accidentLevel] 事故等级 accident level
     * @param {string} [accidentType] 事故类型 accident type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentListGet(
      name?: string,
      accidentLevel?: string,
      accidentType?: string,
      options?: any,
    ): AxiosPromise<Array<AccidentInfo>> {
      return localVarFp
        .apiV1AccidentAccidentListGet(name, accidentLevel, accidentType, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新事故信息 Update an accident
     * @param {UpdateAccidentInput} [updateAccidentInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentAccidentUpdatePost(
      updateAccidentInput?: UpdateAccidentInput,
      options?: any,
    ): AxiosPromise<AccidentInfo> {
      return localVarFp
        .apiV1AccidentAccidentUpdatePost(updateAccidentInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * AccidentApi - object-oriented interface
 * @export
 * @class AccidentApi
 * @extends {BaseAPI}
 */
export class AccidentApi extends BaseAPI {
  /**
   * 批量添加事故详细信息，包括关联的情景、事件、污染物等信息 Batch add accidents with detailed information including subordinate scenes, events, pollutants, etc.
   * @summary 批量添加事故详细信息 Batch add accidents with detailed information
   * @param {AccidentDetailInput} [accidentDetailInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1AccidentAccidentAddAccidentPost(
    accidentDetailInput?: AccidentDetailInput,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1AccidentAccidentAddAccidentPost(accidentDetailInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 添加一个事故信息 Add an accident
   * @param {AddAccidentInput} [addAccidentInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1AccidentAccidentAddPost(
    addAccidentInput?: AddAccidentInput,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1AccidentAccidentAddPost(addAccidentInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据ID删除事故信息 Delete accidents by ids
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1AccidentAccidentDeletePost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1AccidentAccidentDeletePost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据ID查询事故信息 Get accident by id
   * @param {string} [accidentId] 事故ID accident id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1AccidentAccidentDetailGet(accidentId?: string, options?: AxiosRequestConfig) {
    return AccidentApiFp(this.configuration)
      .apiV1AccidentAccidentDetailGet(accidentId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据事故名称、等级、类型查询事故信息 Query accidents by accident name, level and type
   * @param {string} [name] 事故名称 accident name
   * @param {string} [accidentLevel] 事故等级 accident level
   * @param {string} [accidentType] 事故类型 accident type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1AccidentAccidentListGet(
    name?: string,
    accidentLevel?: string,
    accidentType?: string,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1AccidentAccidentListGet(name, accidentLevel, accidentType, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新事故信息 Update an accident
   * @param {UpdateAccidentInput} [updateAccidentInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1AccidentAccidentUpdatePost(
    updateAccidentInput?: UpdateAccidentInput,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1AccidentAccidentUpdatePost(updateAccidentInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
