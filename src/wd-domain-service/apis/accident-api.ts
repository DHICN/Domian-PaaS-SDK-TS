/* eslint-disable */
/**
 * wd-domain-service
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
import { CloseGisValveInfo } from '../models'
// @ts-ignore
import { FindBurstPipeValvesBatch } from '../models'
// @ts-ignore
import { FindBurstPipeValvesInput } from '../models'
// @ts-ignore
import { GetValvesByPipeIdsInput } from '../models'
// @ts-ignore
import { GisValveInfo } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { SaveCloseGisValveInput } from '../models'
// @ts-ignore
import { SavePipeBurstInfoInput } from '../models'
// @ts-ignore
import { SaveWqAccidentInfoInput } from '../models'
// @ts-ignore
import { SceneDetailInfo } from '../models'
/**
 * AccidentApi - axios parameter creator
 * @export
 */
export const AccidentApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 删除事故基本信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBaseInfoDeleteGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/base-info/delete`
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
     * @summary 获取事故基本信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBaseInfoGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/base-info`
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
     * @summary 保存爆管事故信息
     * @param {SavePipeBurstInfoInput} [savePipeBurstInfoInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBurstPipeAddPost: async (
      savePipeBurstInfoInput?: SavePipeBurstInfoInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/burst-pipe/add`
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
        savePipeBurstInfoInput,
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
     * @summary 寻找爆管阀门（支持同一个事件发生多个爆管）
     * @param {FindBurstPipeValvesBatch} [findBurstPipeValvesBatch]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBurstPipeFindValvesPost: async (
      findBurstPipeValvesBatch?: FindBurstPipeValvesBatch,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/burst-pipe/find-valves`
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
        findBurstPipeValvesBatch,
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
     * @summary 寻找爆管阀门
     * @param {FindBurstPipeValvesInput} [findBurstPipeValvesInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBurstPipeValvesListPost: async (
      findBurstPipeValvesInput?: FindBurstPipeValvesInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/burst-pipe/valves/list`
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
        findBurstPipeValvesInput,
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
     * @summary 保存关阀信息
     * @param {SaveCloseGisValveInput} [saveCloseGisValveInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentCloseValveAddPost: async (
      saveCloseGisValveInput?: SaveCloseGisValveInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/close-valve/add`
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
        saveCloseGisValveInput,
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
     * @summary 根据方案id删除阀门
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentCloseValveDeleteByScenarioPost: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/close-valve/delete-by-scenario`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
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
     * @summary 删除阀门
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentCloseValveDeletePost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/close-valve/delete`
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
     * @summary 根据方案id 查询关阀信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentCloseValveListGet: async (
      scenarioId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/close-valve/list`
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
     * @summary 获取阀门信息
     * @param {GetValvesByPipeIdsInput} [getValvesByPipeIdsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentPipeValvesListPost: async (
      getValvesByPipeIdsInput?: GetValvesByPipeIdsInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/pipe/valves/list`
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
        getValvesByPipeIdsInput,
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
     * @summary 保存水质事故信息
     * @param {SaveWqAccidentInfoInput} [saveWqAccidentInfoInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentWqAccidentAddPost: async (
      saveWqAccidentInfoInput?: SaveWqAccidentInfoInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/domain-wd/accident/wq-accident/add`
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
        saveWqAccidentInfoInput,
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
     *
     * @summary 删除事故基本信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentBaseInfoDeleteGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentBaseInfoDeleteGet(scenarioId, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取事故基本信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentBaseInfoGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SceneDetailInfo>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1DomainWdAccidentBaseInfoGet(
        scenarioId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存爆管事故信息
     * @param {SavePipeBurstInfoInput} [savePipeBurstInfoInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentBurstPipeAddPost(
      savePipeBurstInfoInput?: SavePipeBurstInfoInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentBurstPipeAddPost(
          savePipeBurstInfoInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 寻找爆管阀门（支持同一个事件发生多个爆管）
     * @param {FindBurstPipeValvesBatch} [findBurstPipeValvesBatch]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentBurstPipeFindValvesPost(
      findBurstPipeValvesBatch?: FindBurstPipeValvesBatch,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GisValveInfo>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentBurstPipeFindValvesPost(
          findBurstPipeValvesBatch,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 寻找爆管阀门
     * @param {FindBurstPipeValvesInput} [findBurstPipeValvesInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentBurstPipeValvesListPost(
      findBurstPipeValvesInput?: FindBurstPipeValvesInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GisValveInfo>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentBurstPipeValvesListPost(
          findBurstPipeValvesInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存关阀信息
     * @param {SaveCloseGisValveInput} [saveCloseGisValveInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentCloseValveAddPost(
      saveCloseGisValveInput?: SaveCloseGisValveInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentCloseValveAddPost(
          saveCloseGisValveInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据方案id删除阀门
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentCloseValveDeleteByScenarioPost(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentCloseValveDeleteByScenarioPost(
          scenarioId,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除阀门
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentCloseValveDeletePost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentCloseValveDeletePost(
          requestBody,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据方案id 查询关阀信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentCloseValveListGet(
      scenarioId?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CloseGisValveInfo>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentCloseValveListGet(scenarioId, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取阀门信息
     * @param {GetValvesByPipeIdsInput} [getValvesByPipeIdsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentPipeValvesListPost(
      getValvesByPipeIdsInput?: GetValvesByPipeIdsInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GisValveInfo>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentPipeValvesListPost(
          getValvesByPipeIdsInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存水质事故信息
     * @param {SaveWqAccidentInfoInput} [saveWqAccidentInfoInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1DomainWdAccidentWqAccidentAddPost(
      saveWqAccidentInfoInput?: SaveWqAccidentInfoInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1DomainWdAccidentWqAccidentAddPost(
          saveWqAccidentInfoInput,
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
     *
     * @summary 删除事故基本信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBaseInfoDeleteGet(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1DomainWdAccidentBaseInfoDeleteGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取事故基本信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBaseInfoGet(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<SceneDetailInfo> {
      return localVarFp
        .apiV1DomainWdAccidentBaseInfoGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存爆管事故信息
     * @param {SavePipeBurstInfoInput} [savePipeBurstInfoInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBurstPipeAddPost(
      savePipeBurstInfoInput?: SavePipeBurstInfoInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1DomainWdAccidentBurstPipeAddPost(savePipeBurstInfoInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 寻找爆管阀门（支持同一个事件发生多个爆管）
     * @param {FindBurstPipeValvesBatch} [findBurstPipeValvesBatch]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBurstPipeFindValvesPost(
      findBurstPipeValvesBatch?: FindBurstPipeValvesBatch,
      options?: any,
    ): AxiosPromise<Array<GisValveInfo>> {
      return localVarFp
        .apiV1DomainWdAccidentBurstPipeFindValvesPost(findBurstPipeValvesBatch, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 寻找爆管阀门
     * @param {FindBurstPipeValvesInput} [findBurstPipeValvesInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentBurstPipeValvesListPost(
      findBurstPipeValvesInput?: FindBurstPipeValvesInput,
      options?: any,
    ): AxiosPromise<Array<GisValveInfo>> {
      return localVarFp
        .apiV1DomainWdAccidentBurstPipeValvesListPost(findBurstPipeValvesInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存关阀信息
     * @param {SaveCloseGisValveInput} [saveCloseGisValveInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentCloseValveAddPost(
      saveCloseGisValveInput?: SaveCloseGisValveInput,
      options?: any,
    ): AxiosPromise<number> {
      return localVarFp
        .apiV1DomainWdAccidentCloseValveAddPost(saveCloseGisValveInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据方案id删除阀门
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentCloseValveDeleteByScenarioPost(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1DomainWdAccidentCloseValveDeleteByScenarioPost(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除阀门
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentCloseValveDeletePost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<number> {
      return localVarFp
        .apiV1DomainWdAccidentCloseValveDeletePost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据方案id 查询关阀信息
     * @param {string} [scenarioId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentCloseValveListGet(
      scenarioId?: string,
      options?: any,
    ): AxiosPromise<Array<CloseGisValveInfo>> {
      return localVarFp
        .apiV1DomainWdAccidentCloseValveListGet(scenarioId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取阀门信息
     * @param {GetValvesByPipeIdsInput} [getValvesByPipeIdsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentPipeValvesListPost(
      getValvesByPipeIdsInput?: GetValvesByPipeIdsInput,
      options?: any,
    ): AxiosPromise<Array<GisValveInfo>> {
      return localVarFp
        .apiV1DomainWdAccidentPipeValvesListPost(getValvesByPipeIdsInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存水质事故信息
     * @param {SaveWqAccidentInfoInput} [saveWqAccidentInfoInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DomainWdAccidentWqAccidentAddPost(
      saveWqAccidentInfoInput?: SaveWqAccidentInfoInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiV1DomainWdAccidentWqAccidentAddPost(saveWqAccidentInfoInput, options)
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
   *
   * @summary 删除事故基本信息
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentBaseInfoDeleteGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentBaseInfoDeleteGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取事故基本信息
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentBaseInfoGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentBaseInfoGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存爆管事故信息
   * @param {SavePipeBurstInfoInput} [savePipeBurstInfoInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentBurstPipeAddPost(
    savePipeBurstInfoInput?: SavePipeBurstInfoInput,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentBurstPipeAddPost(savePipeBurstInfoInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 寻找爆管阀门（支持同一个事件发生多个爆管）
   * @param {FindBurstPipeValvesBatch} [findBurstPipeValvesBatch]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentBurstPipeFindValvesPost(
    findBurstPipeValvesBatch?: FindBurstPipeValvesBatch,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentBurstPipeFindValvesPost(findBurstPipeValvesBatch, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 寻找爆管阀门
   * @param {FindBurstPipeValvesInput} [findBurstPipeValvesInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentBurstPipeValvesListPost(
    findBurstPipeValvesInput?: FindBurstPipeValvesInput,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentBurstPipeValvesListPost(findBurstPipeValvesInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存关阀信息
   * @param {SaveCloseGisValveInput} [saveCloseGisValveInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentCloseValveAddPost(
    saveCloseGisValveInput?: SaveCloseGisValveInput,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentCloseValveAddPost(saveCloseGisValveInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据方案id删除阀门
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentCloseValveDeleteByScenarioPost(
    scenarioId?: string,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentCloseValveDeleteByScenarioPost(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除阀门
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentCloseValveDeletePost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentCloseValveDeletePost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据方案id 查询关阀信息
   * @param {string} [scenarioId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentCloseValveListGet(scenarioId?: string, options?: AxiosRequestConfig) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentCloseValveListGet(scenarioId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取阀门信息
   * @param {GetValvesByPipeIdsInput} [getValvesByPipeIdsInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentPipeValvesListPost(
    getValvesByPipeIdsInput?: GetValvesByPipeIdsInput,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentPipeValvesListPost(getValvesByPipeIdsInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存水质事故信息
   * @param {SaveWqAccidentInfoInput} [saveWqAccidentInfoInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AccidentApi
   */
  public apiV1DomainWdAccidentWqAccidentAddPost(
    saveWqAccidentInfoInput?: SaveWqAccidentInfoInput,
    options?: AxiosRequestConfig,
  ) {
    return AccidentApiFp(this.configuration)
      .apiV1DomainWdAccidentWqAccidentAddPost(saveWqAccidentInfoInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}