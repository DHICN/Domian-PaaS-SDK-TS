/* eslint-disable */
/**
 * identity-service
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
import { ChangePasswordInput } from '../models'
// @ts-ignore
import { GetBasicSettingsOutput } from '../models'
// @ts-ignore
import { GetTenantPerInfoForUpdateOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { SaveBasicSettingsInput } from '../models'
// @ts-ignore
import { SaveTenantPersonalizedInfoInput } from '../models'
/**
 * PersonalCenterApi - axios parameter creator
 * @export
 */
export const PersonalCenterApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 获取用户基本信息 Get user basic information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterBasicSettingsGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/personalCenter/basicSettings`
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
     * @summary 修改用户密码 Change user password
     * @param {ChangePasswordInput} [changePasswordInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterChangePasswordPost: async (
      changePasswordInput?: ChangePasswordInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/personalCenter/changePassword`
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
        changePasswordInput,
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
     * @summary 保存用户基本信息 Save user basic information
     * @param {SaveBasicSettingsInput} [saveBasicSettingsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterSaveBasicSettingsPost: async (
      saveBasicSettingsInput?: SaveBasicSettingsInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/personalCenter/saveBasicSettings`
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
        saveBasicSettingsInput,
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
     * @summary 保存租户登录界面个性化配置 Save personalized configuration of the tenant login interface
     * @param {SaveTenantPersonalizedInfoInput} [saveTenantPersonalizedInfoInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterSaveTenantPersonalizedInfoPost: async (
      saveTenantPersonalizedInfoInput?: SaveTenantPersonalizedInfoInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/personalCenter/saveTenantPersonalizedInfo`
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
        saveTenantPersonalizedInfoInput,
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
     * @summary 获取租户登录界面个性化配置信息,用于更新 Get personalized configuration information of the tenant login interface for updating
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterTenantPersonalizedInfoForUpdateGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/personalCenter/tenantPersonalizedInfoForUpdate`
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
  }
}

/**
 * PersonalCenterApi - functional programming interface
 * @export
 */
export const PersonalCenterApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = PersonalCenterApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 获取用户基本信息 Get user basic information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppPersonalCenterBasicSettingsGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBasicSettingsOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppPersonalCenterBasicSettingsGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 修改用户密码 Change user password
     * @param {ChangePasswordInput} [changePasswordInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppPersonalCenterChangePasswordPost(
      changePasswordInput?: ChangePasswordInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppPersonalCenterChangePasswordPost(
          changePasswordInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存用户基本信息 Save user basic information
     * @param {SaveBasicSettingsInput} [saveBasicSettingsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppPersonalCenterSaveBasicSettingsPost(
      saveBasicSettingsInput?: SaveBasicSettingsInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppPersonalCenterSaveBasicSettingsPost(
          saveBasicSettingsInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 保存租户登录界面个性化配置 Save personalized configuration of the tenant login interface
     * @param {SaveTenantPersonalizedInfoInput} [saveTenantPersonalizedInfoInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppPersonalCenterSaveTenantPersonalizedInfoPost(
      saveTenantPersonalizedInfoInput?: SaveTenantPersonalizedInfoInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppPersonalCenterSaveTenantPersonalizedInfoPost(
          saveTenantPersonalizedInfoInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取租户登录界面个性化配置信息,用于更新 Get personalized configuration information of the tenant login interface for updating
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppPersonalCenterTenantPersonalizedInfoForUpdateGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTenantPerInfoForUpdateOutput>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppPersonalCenterTenantPersonalizedInfoForUpdateGet(
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * PersonalCenterApi - factory interface
 * @export
 */
export const PersonalCenterApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = PersonalCenterApiFp(configuration)
  return {
    /**
     *
     * @summary 获取用户基本信息 Get user basic information
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterBasicSettingsGet(options?: any): AxiosPromise<GetBasicSettingsOutput> {
      return localVarFp
        .apiAppPersonalCenterBasicSettingsGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 修改用户密码 Change user password
     * @param {ChangePasswordInput} [changePasswordInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterChangePasswordPost(
      changePasswordInput?: ChangePasswordInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppPersonalCenterChangePasswordPost(changePasswordInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存用户基本信息 Save user basic information
     * @param {SaveBasicSettingsInput} [saveBasicSettingsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterSaveBasicSettingsPost(
      saveBasicSettingsInput?: SaveBasicSettingsInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppPersonalCenterSaveBasicSettingsPost(saveBasicSettingsInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 保存租户登录界面个性化配置 Save personalized configuration of the tenant login interface
     * @param {SaveTenantPersonalizedInfoInput} [saveTenantPersonalizedInfoInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterSaveTenantPersonalizedInfoPost(
      saveTenantPersonalizedInfoInput?: SaveTenantPersonalizedInfoInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppPersonalCenterSaveTenantPersonalizedInfoPost(
          saveTenantPersonalizedInfoInput,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取租户登录界面个性化配置信息,用于更新 Get personalized configuration information of the tenant login interface for updating
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppPersonalCenterTenantPersonalizedInfoForUpdateGet(
      options?: any,
    ): AxiosPromise<GetTenantPerInfoForUpdateOutput> {
      return localVarFp
        .apiAppPersonalCenterTenantPersonalizedInfoForUpdateGet(options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * PersonalCenterApi - object-oriented interface
 * @export
 * @class PersonalCenterApi
 * @extends {BaseAPI}
 */
export class PersonalCenterApi extends BaseAPI {
  /**
   *
   * @summary 获取用户基本信息 Get user basic information
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalCenterApi
   */
  public apiAppPersonalCenterBasicSettingsGet(options?: AxiosRequestConfig) {
    return PersonalCenterApiFp(this.configuration)
      .apiAppPersonalCenterBasicSettingsGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 修改用户密码 Change user password
   * @param {ChangePasswordInput} [changePasswordInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalCenterApi
   */
  public apiAppPersonalCenterChangePasswordPost(
    changePasswordInput?: ChangePasswordInput,
    options?: AxiosRequestConfig,
  ) {
    return PersonalCenterApiFp(this.configuration)
      .apiAppPersonalCenterChangePasswordPost(changePasswordInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存用户基本信息 Save user basic information
   * @param {SaveBasicSettingsInput} [saveBasicSettingsInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalCenterApi
   */
  public apiAppPersonalCenterSaveBasicSettingsPost(
    saveBasicSettingsInput?: SaveBasicSettingsInput,
    options?: AxiosRequestConfig,
  ) {
    return PersonalCenterApiFp(this.configuration)
      .apiAppPersonalCenterSaveBasicSettingsPost(saveBasicSettingsInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 保存租户登录界面个性化配置 Save personalized configuration of the tenant login interface
   * @param {SaveTenantPersonalizedInfoInput} [saveTenantPersonalizedInfoInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalCenterApi
   */
  public apiAppPersonalCenterSaveTenantPersonalizedInfoPost(
    saveTenantPersonalizedInfoInput?: SaveTenantPersonalizedInfoInput,
    options?: AxiosRequestConfig,
  ) {
    return PersonalCenterApiFp(this.configuration)
      .apiAppPersonalCenterSaveTenantPersonalizedInfoPost(saveTenantPersonalizedInfoInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取租户登录界面个性化配置信息,用于更新 Get personalized configuration information of the tenant login interface for updating
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PersonalCenterApi
   */
  public apiAppPersonalCenterTenantPersonalizedInfoForUpdateGet(options?: AxiosRequestConfig) {
    return PersonalCenterApiFp(this.configuration)
      .apiAppPersonalCenterTenantPersonalizedInfoForUpdateGet(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
