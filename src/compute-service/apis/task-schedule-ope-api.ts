/* eslint-disable */
/**
 * scenario-compute-service
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
import { DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo } from '../models'
// @ts-ignore
import { VoloAbpHttpRemoteServiceErrorResponse } from '../models'
/**
 * TaskScheduleOpeApi - axios parameter creator
 * @export
 */
export const TaskScheduleOpeApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 2.2 注册自动预报任务
     * @param {string} [jobGroupKey]
     * @param {string} [projectName]
     * @param {DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo} [dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppTaskScheduleOpeRegisterAutoJobPost: async (
      jobGroupKey?: string,
      projectName?: string,
      dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo?: DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/task-schedule-ope/register-auto-job`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (jobGroupKey !== undefined) {
        localVarQueryParameter['jobGroupKey'] = jobGroupKey
      }

      if (projectName !== undefined) {
        localVarQueryParameter['projectName'] = projectName
      }

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
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
     * @summary 2.1 注册滚动预报任务
     * @param {string} [jobGroupKey]
     * @param {string} [projectName]
     * @param {DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo} [dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppTaskScheduleOpeRegisterScallJobPost: async (
      jobGroupKey?: string,
      projectName?: string,
      dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo?: DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/task-schedule-ope/register-scall-job`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (jobGroupKey !== undefined) {
        localVarQueryParameter['jobGroupKey'] = jobGroupKey
      }

      if (projectName !== undefined) {
        localVarQueryParameter['projectName'] = projectName
      }

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
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
     * @summary 1 注册调度服务，定时一分钟的任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resgisterScheduleTaskPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/ResgisterScheduleTask`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
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
     * @summary 2 执行回调，扫描租户配置数据，按注册时的频率来扫描
     * @param {string} [systemId]
     * @param {string} [jobGroupKey]
     * @param {string} [projectName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scanAutoForecastConfigGet: async (
      systemId?: string,
      jobGroupKey?: string,
      projectName?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/ScanAutoForecastConfig`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (systemId !== undefined) {
        localVarQueryParameter['systemId'] = systemId
      }

      if (jobGroupKey !== undefined) {
        localVarQueryParameter['jobGroupKey'] = jobGroupKey
      }

      if (projectName !== undefined) {
        localVarQueryParameter['projectName'] = projectName
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
     * @summary 3 调度服务回调,创建对应的方案
     * @param {string} [tenantId]
     * @param {number} [businessType]
     * @param {number} [libraryType]
     * @param {string} [projectName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleInvokeMethodGet: async (
      tenantId?: string,
      businessType?: number,
      libraryType?: number,
      projectName?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/ScheduleInvokeMethod`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tenantId !== undefined) {
        localVarQueryParameter['TenantId'] = tenantId
      }

      if (businessType !== undefined) {
        localVarQueryParameter['BusinessType'] = businessType
      }

      if (libraryType !== undefined) {
        localVarQueryParameter['LibraryType'] = libraryType
      }

      if (projectName !== undefined) {
        localVarQueryParameter['projectName'] = projectName
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
 * TaskScheduleOpeApi - functional programming interface
 * @export
 */
export const TaskScheduleOpeApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TaskScheduleOpeApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 2.2 注册自动预报任务
     * @param {string} [jobGroupKey]
     * @param {string} [projectName]
     * @param {DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo} [dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppTaskScheduleOpeRegisterAutoJobPost(
      jobGroupKey?: string,
      projectName?: string,
      dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo?: DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppTaskScheduleOpeRegisterAutoJobPost(
          jobGroupKey,
          projectName,
          dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 2.1 注册滚动预报任务
     * @param {string} [jobGroupKey]
     * @param {string} [projectName]
     * @param {DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo} [dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppTaskScheduleOpeRegisterScallJobPost(
      jobGroupKey?: string,
      projectName?: string,
      dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo?: DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppTaskScheduleOpeRegisterScallJobPost(
          jobGroupKey,
          projectName,
          dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 1 注册调度服务，定时一分钟的任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async resgisterScheduleTaskPost(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.resgisterScheduleTaskPost(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 2 执行回调，扫描租户配置数据，按注册时的频率来扫描
     * @param {string} [systemId]
     * @param {string} [jobGroupKey]
     * @param {string} [projectName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async scanAutoForecastConfigGet(
      systemId?: string,
      jobGroupKey?: string,
      projectName?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.scanAutoForecastConfigGet(
        systemId,
        jobGroupKey,
        projectName,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 3 调度服务回调,创建对应的方案
     * @param {string} [tenantId]
     * @param {number} [businessType]
     * @param {number} [libraryType]
     * @param {string} [projectName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async scheduleInvokeMethodGet(
      tenantId?: string,
      businessType?: number,
      libraryType?: number,
      projectName?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.scheduleInvokeMethodGet(
        tenantId,
        businessType,
        libraryType,
        projectName,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * TaskScheduleOpeApi - factory interface
 * @export
 */
export const TaskScheduleOpeApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = TaskScheduleOpeApiFp(configuration)
  return {
    /**
     *
     * @summary 2.2 注册自动预报任务
     * @param {string} [jobGroupKey]
     * @param {string} [projectName]
     * @param {DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo} [dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppTaskScheduleOpeRegisterAutoJobPost(
      jobGroupKey?: string,
      projectName?: string,
      dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo?: DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppTaskScheduleOpeRegisterAutoJobPost(
          jobGroupKey,
          projectName,
          dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 2.1 注册滚动预报任务
     * @param {string} [jobGroupKey]
     * @param {string} [projectName]
     * @param {DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo} [dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppTaskScheduleOpeRegisterScallJobPost(
      jobGroupKey?: string,
      projectName?: string,
      dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo?: DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppTaskScheduleOpeRegisterScallJobPost(
          jobGroupKey,
          projectName,
          dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 1 注册调度服务，定时一分钟的任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resgisterScheduleTaskPost(options?: any): AxiosPromise<object> {
      return localVarFp
        .resgisterScheduleTaskPost(options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 2 执行回调，扫描租户配置数据，按注册时的频率来扫描
     * @param {string} [systemId]
     * @param {string} [jobGroupKey]
     * @param {string} [projectName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scanAutoForecastConfigGet(
      systemId?: string,
      jobGroupKey?: string,
      projectName?: string,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .scanAutoForecastConfigGet(systemId, jobGroupKey, projectName, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 3 调度服务回调,创建对应的方案
     * @param {string} [tenantId]
     * @param {number} [businessType]
     * @param {number} [libraryType]
     * @param {string} [projectName]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scheduleInvokeMethodGet(
      tenantId?: string,
      businessType?: number,
      libraryType?: number,
      projectName?: string,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .scheduleInvokeMethodGet(tenantId, businessType, libraryType, projectName, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * TaskScheduleOpeApi - object-oriented interface
 * @export
 * @class TaskScheduleOpeApi
 * @extends {BaseAPI}
 */
export class TaskScheduleOpeApi extends BaseAPI {
  /**
   *
   * @summary 2.2 注册自动预报任务
   * @param {string} [jobGroupKey]
   * @param {string} [projectName]
   * @param {DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo} [dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TaskScheduleOpeApi
   */
  public apiAppTaskScheduleOpeRegisterAutoJobPost(
    jobGroupKey?: string,
    projectName?: string,
    dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo?: DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
    options?: AxiosRequestConfig,
  ) {
    return TaskScheduleOpeApiFp(this.configuration)
      .apiAppTaskScheduleOpeRegisterAutoJobPost(
        jobGroupKey,
        projectName,
        dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 2.1 注册滚动预报任务
   * @param {string} [jobGroupKey]
   * @param {string} [projectName]
   * @param {DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo} [dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TaskScheduleOpeApi
   */
  public apiAppTaskScheduleOpeRegisterScallJobPost(
    jobGroupKey?: string,
    projectName?: string,
    dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo?: DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
    options?: AxiosRequestConfig,
  ) {
    return TaskScheduleOpeApiFp(this.configuration)
      .apiAppTaskScheduleOpeRegisterScallJobPost(
        jobGroupKey,
        projectName,
        dhiDssScenarioComputeDaprServicesDtosAutoForecastInfo,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 1 注册调度服务，定时一分钟的任务
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TaskScheduleOpeApi
   */
  public resgisterScheduleTaskPost(options?: AxiosRequestConfig) {
    return TaskScheduleOpeApiFp(this.configuration)
      .resgisterScheduleTaskPost(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 2 执行回调，扫描租户配置数据，按注册时的频率来扫描
   * @param {string} [systemId]
   * @param {string} [jobGroupKey]
   * @param {string} [projectName]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TaskScheduleOpeApi
   */
  public scanAutoForecastConfigGet(
    systemId?: string,
    jobGroupKey?: string,
    projectName?: string,
    options?: AxiosRequestConfig,
  ) {
    return TaskScheduleOpeApiFp(this.configuration)
      .scanAutoForecastConfigGet(systemId, jobGroupKey, projectName, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 3 调度服务回调,创建对应的方案
   * @param {string} [tenantId]
   * @param {number} [businessType]
   * @param {number} [libraryType]
   * @param {string} [projectName]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TaskScheduleOpeApi
   */
  public scheduleInvokeMethodGet(
    tenantId?: string,
    businessType?: number,
    libraryType?: number,
    projectName?: string,
    options?: AxiosRequestConfig,
  ) {
    return TaskScheduleOpeApiFp(this.configuration)
      .scheduleInvokeMethodGet(tenantId, businessType, libraryType, projectName, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
