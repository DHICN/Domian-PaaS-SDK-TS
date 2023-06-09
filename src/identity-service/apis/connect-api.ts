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
import { AuthByQrCodeInput } from '../models'
// @ts-ignore
import { AuthResultOutput } from '../models'
// @ts-ignore
import { InlineResponse200 } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * ConnectApi - axios parameter creator
 * @export
 */
export const ConnectApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * 仅返回操作是否成功，具体授权的结果调用auth-result查看
     * @summary 授权
     * @param {AuthByQrCodeInput} [authByQrCodeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ConnectAuthByMobilePost: async (
      authByQrCodeInput?: AuthByQrCodeInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/connect/auth-by-mobile`
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
        authByQrCodeInput,
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
     * @summary 授权结果
     * @param {string} [key]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ConnectAuthResultGet: async (
      key?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/connect/auth-result`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (key !== undefined) {
        localVarQueryParameter['key'] = key
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
     * @summary 获取授权二维码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ConnectQrcodeGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/connect/qrcode`
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
     * @summary 授权-网页
     * @param {string} [tenantId]
     * @param {string} [clientId]
     * @param {string} [grantType]
     * @param {string} [clientSecret]
     * @param {string} [username]
     * @param {string} [password]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    connectTokenPost: async (
      tenantId?: string,
      clientId?: string,
      grantType?: string,
      clientSecret?: string,
      username?: string,
      password?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/connect/token`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any
      const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)()

      if (tenantId != null) {
        localVarHeaderParameter['TenantId'] = String(tenantId)
      }

      if (clientId !== undefined) {
        localVarFormParams.append('client_id', clientId as any)
      }

      if (grantType !== undefined) {
        localVarFormParams.append('grant_type', grantType as any)
      }

      if (clientSecret !== undefined) {
        localVarFormParams.append('client_secret', clientSecret as any)
      }

      if (username !== undefined) {
        localVarFormParams.append('username', username as any)
      }

      if (password !== undefined) {
        localVarFormParams.append('password', password as any)
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = localVarFormParams

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * ConnectApi - functional programming interface
 * @export
 */
export const ConnectApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ConnectApiAxiosParamCreator(configuration)
  return {
    /**
     * 仅返回操作是否成功，具体授权的结果调用auth-result查看
     * @summary 授权
     * @param {AuthByQrCodeInput} [authByQrCodeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ConnectAuthByMobilePost(
      authByQrCodeInput?: AuthByQrCodeInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ConnectAuthByMobilePost(
        authByQrCodeInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 授权结果
     * @param {string} [key]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ConnectAuthResultGet(
      key?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthResultOutput>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ConnectAuthResultGet(
        key,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取授权二维码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ConnectQrcodeGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1ConnectQrcodeGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 授权-网页
     * @param {string} [tenantId]
     * @param {string} [clientId]
     * @param {string} [grantType]
     * @param {string} [clientSecret]
     * @param {string} [username]
     * @param {string} [password]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async connectTokenPost(
      tenantId?: string,
      clientId?: string,
      grantType?: string,
      clientSecret?: string,
      username?: string,
      password?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.connectTokenPost(
        tenantId,
        clientId,
        grantType,
        clientSecret,
        username,
        password,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ConnectApi - factory interface
 * @export
 */
export const ConnectApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ConnectApiFp(configuration)
  return {
    /**
     * 仅返回操作是否成功，具体授权的结果调用auth-result查看
     * @summary 授权
     * @param {AuthByQrCodeInput} [authByQrCodeInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ConnectAuthByMobilePost(
      authByQrCodeInput?: AuthByQrCodeInput,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ConnectAuthByMobilePost(authByQrCodeInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 授权结果
     * @param {string} [key]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ConnectAuthResultGet(key?: string, options?: any): AxiosPromise<AuthResultOutput> {
      return localVarFp
        .apiV1ConnectAuthResultGet(key, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取授权二维码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ConnectQrcodeGet(options?: any): AxiosPromise<void> {
      return localVarFp.apiV1ConnectQrcodeGet(options).then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 授权-网页
     * @param {string} [tenantId]
     * @param {string} [clientId]
     * @param {string} [grantType]
     * @param {string} [clientSecret]
     * @param {string} [username]
     * @param {string} [password]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    connectTokenPost(
      tenantId?: string,
      clientId?: string,
      grantType?: string,
      clientSecret?: string,
      username?: string,
      password?: string,
      options?: any,
    ): AxiosPromise<InlineResponse200> {
      return localVarFp
        .connectTokenPost(tenantId, clientId, grantType, clientSecret, username, password, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ConnectApi - object-oriented interface
 * @export
 * @class ConnectApi
 * @extends {BaseAPI}
 */
export class ConnectApi extends BaseAPI {
  /**
   * 仅返回操作是否成功，具体授权的结果调用auth-result查看
   * @summary 授权
   * @param {AuthByQrCodeInput} [authByQrCodeInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConnectApi
   */
  public apiV1ConnectAuthByMobilePost(
    authByQrCodeInput?: AuthByQrCodeInput,
    options?: AxiosRequestConfig,
  ) {
    return ConnectApiFp(this.configuration)
      .apiV1ConnectAuthByMobilePost(authByQrCodeInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 授权结果
   * @param {string} [key]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConnectApi
   */
  public apiV1ConnectAuthResultGet(key?: string, options?: AxiosRequestConfig) {
    return ConnectApiFp(this.configuration)
      .apiV1ConnectAuthResultGet(key, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取授权二维码
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConnectApi
   */
  public apiV1ConnectQrcodeGet(options?: AxiosRequestConfig) {
    return ConnectApiFp(this.configuration)
      .apiV1ConnectQrcodeGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 授权-网页
   * @param {string} [tenantId]
   * @param {string} [clientId]
   * @param {string} [grantType]
   * @param {string} [clientSecret]
   * @param {string} [username]
   * @param {string} [password]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConnectApi
   */
  public connectTokenPost(
    tenantId?: string,
    clientId?: string,
    grantType?: string,
    clientSecret?: string,
    username?: string,
    password?: string,
    options?: AxiosRequestConfig,
  ) {
    return ConnectApiFp(this.configuration)
      .connectTokenPost(tenantId, clientId, grantType, clientSecret, username, password, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
