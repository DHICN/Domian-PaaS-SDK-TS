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
import { AddEventInput } from '../models'
// @ts-ignore
import { EventDetailInfo } from '../models'
// @ts-ignore
import { EventInfo } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { UpdateEventInput } from '../models'
/**
 * EventApi - axios parameter creator
 * @export
 */
export const EventApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 新增一个事件 Add a new event
     * @param {AddEventInput} [addEventInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventAddPost: async (
      addEventInput?: AddEventInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/event/add`
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
        addEventInput,
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
     * @summary 通过情景ID删除事件 Delete events by scene ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventDeleteByScenePost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/event/delete-by-scene`
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
     * @summary 通过ID删除事件 Delete events by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventDeletePost: async (
      requestBody?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/event/delete`
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
     * 根据情景ID查询事件的详细信息，包括污染物信息 Get event detailed information including subordinate pollutants, etc. by scene id
     * @summary 根据情景ID查询事件的详细信息 Get event detailed information by scene id
     * @param {string} [sceneId] 情景Id scene id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventDetailGet: async (
      sceneId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/event/Detail`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (sceneId !== undefined) {
        localVarQueryParameter['sceneId'] = sceneId
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
     * @summary 根据情景ID获取事件列表 Get events by scene id
     * @param {string} [sceneId] 情景Id scene id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventListGet: async (
      sceneId?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/event/list`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (sceneId !== undefined) {
        localVarQueryParameter['sceneId'] = sceneId
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
     * @summary 更新事件基本信息 Update event information
     * @param {UpdateEventInput} [updateEventInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventUpdatePost: async (
      updateEventInput?: UpdateEventInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/accident/event/update`
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
        updateEventInput,
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
 * EventApi - functional programming interface
 * @export
 */
export const EventApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = EventApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 新增一个事件 Add a new event
     * @param {AddEventInput} [addEventInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentEventAddPost(
      addEventInput?: AddEventInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventInfo>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentEventAddPost(
        addEventInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过情景ID删除事件 Delete events by scene ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentEventDeleteByScenePost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentEventDeleteByScenePost(
        requestBody,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过ID删除事件 Delete events by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentEventDeletePost(
      requestBody?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentEventDeletePost(
        requestBody,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据情景ID查询事件的详细信息，包括污染物信息 Get event detailed information including subordinate pollutants, etc. by scene id
     * @summary 根据情景ID查询事件的详细信息 Get event detailed information by scene id
     * @param {string} [sceneId] 情景Id scene id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentEventDetailGet(
      sceneId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EventDetailInfo>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentEventDetailGet(
        sceneId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据情景ID获取事件列表 Get events by scene id
     * @param {string} [sceneId] 情景Id scene id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentEventListGet(
      sceneId?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EventInfo>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentEventListGet(
        sceneId,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新事件基本信息 Update event information
     * @param {UpdateEventInput} [updateEventInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1AccidentEventUpdatePost(
      updateEventInput?: UpdateEventInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventInfo>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1AccidentEventUpdatePost(
        updateEventInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * EventApi - factory interface
 * @export
 */
export const EventApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = EventApiFp(configuration)
  return {
    /**
     *
     * @summary 新增一个事件 Add a new event
     * @param {AddEventInput} [addEventInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventAddPost(
      addEventInput?: AddEventInput,
      options?: any,
    ): AxiosPromise<EventInfo> {
      return localVarFp
        .apiV1AccidentEventAddPost(addEventInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过情景ID删除事件 Delete events by scene ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventDeleteByScenePost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1AccidentEventDeleteByScenePost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过ID删除事件 Delete events by ids
     * @param {Array<string>} [requestBody]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventDeletePost(
      requestBody?: Array<string>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1AccidentEventDeletePost(requestBody, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据情景ID查询事件的详细信息，包括污染物信息 Get event detailed information including subordinate pollutants, etc. by scene id
     * @summary 根据情景ID查询事件的详细信息 Get event detailed information by scene id
     * @param {string} [sceneId] 情景Id scene id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventDetailGet(
      sceneId?: string,
      options?: any,
    ): AxiosPromise<Array<EventDetailInfo>> {
      return localVarFp
        .apiV1AccidentEventDetailGet(sceneId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据情景ID获取事件列表 Get events by scene id
     * @param {string} [sceneId] 情景Id scene id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventListGet(sceneId?: string, options?: any): AxiosPromise<Array<EventInfo>> {
      return localVarFp
        .apiV1AccidentEventListGet(sceneId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新事件基本信息 Update event information
     * @param {UpdateEventInput} [updateEventInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1AccidentEventUpdatePost(
      updateEventInput?: UpdateEventInput,
      options?: any,
    ): AxiosPromise<EventInfo> {
      return localVarFp
        .apiV1AccidentEventUpdatePost(updateEventInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * EventApi - object-oriented interface
 * @export
 * @class EventApi
 * @extends {BaseAPI}
 */
export class EventApi extends BaseAPI {
  /**
   *
   * @summary 新增一个事件 Add a new event
   * @param {AddEventInput} [addEventInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventApi
   */
  public apiV1AccidentEventAddPost(addEventInput?: AddEventInput, options?: AxiosRequestConfig) {
    return EventApiFp(this.configuration)
      .apiV1AccidentEventAddPost(addEventInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过情景ID删除事件 Delete events by scene ids
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventApi
   */
  public apiV1AccidentEventDeleteByScenePost(
    requestBody?: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return EventApiFp(this.configuration)
      .apiV1AccidentEventDeleteByScenePost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过ID删除事件 Delete events by ids
   * @param {Array<string>} [requestBody]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventApi
   */
  public apiV1AccidentEventDeletePost(requestBody?: Array<string>, options?: AxiosRequestConfig) {
    return EventApiFp(this.configuration)
      .apiV1AccidentEventDeletePost(requestBody, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据情景ID查询事件的详细信息，包括污染物信息 Get event detailed information including subordinate pollutants, etc. by scene id
   * @summary 根据情景ID查询事件的详细信息 Get event detailed information by scene id
   * @param {string} [sceneId] 情景Id scene id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventApi
   */
  public apiV1AccidentEventDetailGet(sceneId?: string, options?: AxiosRequestConfig) {
    return EventApiFp(this.configuration)
      .apiV1AccidentEventDetailGet(sceneId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据情景ID获取事件列表 Get events by scene id
   * @param {string} [sceneId] 情景Id scene id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventApi
   */
  public apiV1AccidentEventListGet(sceneId?: string, options?: AxiosRequestConfig) {
    return EventApiFp(this.configuration)
      .apiV1AccidentEventListGet(sceneId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新事件基本信息 Update event information
   * @param {UpdateEventInput} [updateEventInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EventApi
   */
  public apiV1AccidentEventUpdatePost(
    updateEventInput?: UpdateEventInput,
    options?: AxiosRequestConfig,
  ) {
    return EventApiFp(this.configuration)
      .apiV1AccidentEventUpdatePost(updateEventInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
