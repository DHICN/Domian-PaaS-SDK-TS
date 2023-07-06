/* eslint-disable */
/**
 * 用户认证管理服务
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
import { AddCustomInput } from '../models'
// @ts-ignore
import { GetCustomOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { UpdateCustomInput } from '../models'
/**
 * CustomManagerApi - axios parameter creator
 * @export
 */
export const CustomManagerApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 添加客户
     * @param {AddCustomInput} [addCustomInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CustomAddPost: async (
      addCustomInput?: AddCustomInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/custom/add`
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
        addCustomInput,
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
     * @summary 获取客户列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CustomListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/custom/list`
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
     * @summary 更新客户信息
     * @param {UpdateCustomInput} [updateCustomInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CustomUpdatePost: async (
      updateCustomInput?: UpdateCustomInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/custom/update`
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
        updateCustomInput,
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
 * CustomManagerApi - functional programming interface
 * @export
 */
export const CustomManagerApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = CustomManagerApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 添加客户
     * @param {AddCustomInput} [addCustomInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1CustomAddPost(
      addCustomInput?: AddCustomInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCustomOutput>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1CustomAddPost(
        addCustomInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取客户列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1CustomListGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetCustomOutput>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1CustomListGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新客户信息
     * @param {UpdateCustomInput} [updateCustomInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1CustomUpdatePost(
      updateCustomInput?: UpdateCustomInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCustomOutput>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1CustomUpdatePost(
        updateCustomInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * CustomManagerApi - factory interface
 * @export
 */
export const CustomManagerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = CustomManagerApiFp(configuration)
  return {
    /**
     *
     * @summary 添加客户
     * @param {AddCustomInput} [addCustomInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CustomAddPost(
      addCustomInput?: AddCustomInput,
      options?: any,
    ): AxiosPromise<GetCustomOutput> {
      return localVarFp
        .apiV1CustomAddPost(addCustomInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取客户列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CustomListGet(options?: any): AxiosPromise<Array<GetCustomOutput>> {
      return localVarFp.apiV1CustomListGet(options).then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新客户信息
     * @param {UpdateCustomInput} [updateCustomInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1CustomUpdatePost(
      updateCustomInput?: UpdateCustomInput,
      options?: any,
    ): AxiosPromise<GetCustomOutput> {
      return localVarFp
        .apiV1CustomUpdatePost(updateCustomInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * CustomManagerApi - object-oriented interface
 * @export
 * @class CustomManagerApi
 * @extends {BaseAPI}
 */
export class CustomManagerApi extends BaseAPI {
  /**
   *
   * @summary 添加客户
   * @param {AddCustomInput} [addCustomInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CustomManagerApi
   */
  public apiV1CustomAddPost(addCustomInput?: AddCustomInput, options?: AxiosRequestConfig) {
    return CustomManagerApiFp(this.configuration)
      .apiV1CustomAddPost(addCustomInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取客户列表
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CustomManagerApi
   */
  public apiV1CustomListGet(options?: AxiosRequestConfig) {
    return CustomManagerApiFp(this.configuration)
      .apiV1CustomListGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新客户信息
   * @param {UpdateCustomInput} [updateCustomInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CustomManagerApi
   */
  public apiV1CustomUpdatePost(
    updateCustomInput?: UpdateCustomInput,
    options?: AxiosRequestConfig,
  ) {
    return CustomManagerApiFp(this.configuration)
      .apiV1CustomUpdatePost(updateCustomInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}