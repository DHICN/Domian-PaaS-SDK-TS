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
import { ConnectLoginInput } from '../models'
// @ts-ignore
import { GetTenantsBySysOutput } from '../models'
// @ts-ignore
import { LoginInput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { TokenModelWithTenant } from '../models'
/**
 * LoginApi - axios parameter creator
 * @export
 */
export const LoginApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 获取用户下的租户列表,user绑定到了多个tenantid下的场景
     * @param {LoginInput} [loginInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LoginTenantsPost: async (
      loginInput?: LoginInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/login/tenants`
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
        loginInput,
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
     * @summary 获取Token,非明文传输,也支持没有租户Id场景的情况
     * @param {ConnectLoginInput} [connectLoginInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LoginTokenPlusPost: async (
      connectLoginInput?: ConnectLoginInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/login/token/plus`
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
        connectLoginInput,
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
     * @summary 获取Token,明文传输,支持没有租户Id场景的情况
     * @param {LoginInput} [loginInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LoginTokenPost: async (
      loginInput?: LoginInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/login/token`
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
        loginInput,
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
 * LoginApi - functional programming interface
 * @export
 */
export const LoginApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = LoginApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 获取用户下的租户列表,user绑定到了多个tenantid下的场景
     * @param {LoginInput} [loginInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1LoginTenantsPost(
      loginInput?: LoginInput,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetTenantsBySysOutput>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1LoginTenantsPost(
        loginInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取Token,非明文传输,也支持没有租户Id场景的情况
     * @param {ConnectLoginInput} [connectLoginInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1LoginTokenPlusPost(
      connectLoginInput?: ConnectLoginInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenModelWithTenant>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1LoginTokenPlusPost(
        connectLoginInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取Token,明文传输,支持没有租户Id场景的情况
     * @param {LoginInput} [loginInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1LoginTokenPost(
      loginInput?: LoginInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenModelWithTenant>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiV1LoginTokenPost(
        loginInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * LoginApi - factory interface
 * @export
 */
export const LoginApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = LoginApiFp(configuration)
  return {
    /**
     *
     * @summary 获取用户下的租户列表,user绑定到了多个tenantid下的场景
     * @param {LoginInput} [loginInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LoginTenantsPost(
      loginInput?: LoginInput,
      options?: any,
    ): AxiosPromise<Array<GetTenantsBySysOutput>> {
      return localVarFp
        .apiV1LoginTenantsPost(loginInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取Token,非明文传输,也支持没有租户Id场景的情况
     * @param {ConnectLoginInput} [connectLoginInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LoginTokenPlusPost(
      connectLoginInput?: ConnectLoginInput,
      options?: any,
    ): AxiosPromise<TokenModelWithTenant> {
      return localVarFp
        .apiV1LoginTokenPlusPost(connectLoginInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取Token,明文传输,支持没有租户Id场景的情况
     * @param {LoginInput} [loginInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1LoginTokenPost(
      loginInput?: LoginInput,
      options?: any,
    ): AxiosPromise<TokenModelWithTenant> {
      return localVarFp
        .apiV1LoginTokenPost(loginInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * LoginApi - object-oriented interface
 * @export
 * @class LoginApi
 * @extends {BaseAPI}
 */
export class LoginApi extends BaseAPI {
  /**
   *
   * @summary 获取用户下的租户列表,user绑定到了多个tenantid下的场景
   * @param {LoginInput} [loginInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoginApi
   */
  public apiV1LoginTenantsPost(loginInput?: LoginInput, options?: AxiosRequestConfig) {
    return LoginApiFp(this.configuration)
      .apiV1LoginTenantsPost(loginInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取Token,非明文传输,也支持没有租户Id场景的情况
   * @param {ConnectLoginInput} [connectLoginInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoginApi
   */
  public apiV1LoginTokenPlusPost(
    connectLoginInput?: ConnectLoginInput,
    options?: AxiosRequestConfig,
  ) {
    return LoginApiFp(this.configuration)
      .apiV1LoginTokenPlusPost(connectLoginInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取Token,明文传输,支持没有租户Id场景的情况
   * @param {LoginInput} [loginInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LoginApi
   */
  public apiV1LoginTokenPost(loginInput?: LoginInput, options?: AxiosRequestConfig) {
    return LoginApiFp(this.configuration)
      .apiV1LoginTokenPost(loginInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
