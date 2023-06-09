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
import { DhiDssScenarioComputeScenarioDtosScenarioInfo } from '../models'
// @ts-ignore
import { VoloAbpHttpRemoteServiceErrorResponse } from '../models'
/**
 * ScenarioProcessApi - axios parameter creator
 * @export
 */
export const ScenarioProcessApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 二维行蓄洪区模型 处理边界数据
     * @param {string} [parentScenarioId]
     * @param {string} [scheduleScenarioId]
     * @param {string} [start]
     * @param {string} [end]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppScenarioProcessProcess2DBoundaryDataPost: async (
      parentScenarioId?: string,
      scheduleScenarioId?: string,
      start?: string,
      end?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/scenario-process/process2DBoundary-data`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (parentScenarioId !== undefined) {
        localVarQueryParameter['parentScenarioId'] = parentScenarioId
      }

      if (scheduleScenarioId !== undefined) {
        localVarQueryParameter['scheduleScenarioId'] = scheduleScenarioId
      }

      if (start !== undefined) {
        localVarQueryParameter['start'] = start
      }

      if (end !== undefined) {
        localVarQueryParameter['end'] = end
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
     * @summary 一维河道模型 处理边界数据补齐
     * @param {string} parentScenarioId
     * @param {string} [start]
     * @param {string} [current]
     * @param {string} [end]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppScenarioProcessProcessBoundaryDataParentScenarioIdPost: async (
      parentScenarioId: string,
      start?: string,
      current?: string,
      end?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'parentScenarioId' is not null or undefined
      assertParamExists(
        'apiAppScenarioProcessProcessBoundaryDataParentScenarioIdPost',
        'parentScenarioId',
        parentScenarioId,
      )
      const localVarPath =
        `/api/app/scenario-process/process-boundary-data/{parentScenarioId}`.replace(
          `{${'parentScenarioId'}}`,
          encodeURIComponent(String(parentScenarioId)),
        )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (start !== undefined) {
        localVarQueryParameter['start'] = start
      }

      if (current !== undefined) {
        localVarQueryParameter['current'] = current
      }

      if (end !== undefined) {
        localVarQueryParameter['end'] = end
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
     * @summary 方案创建完成之后，用于设置默认初始场、边界数据、实时校正数据，并入库保存
     * @param {string} templateId
     * @param {string} [start]
     * @param {string} [current]
     * @param {string} [end]
     * @param {number} [businessType]
     * @param {DhiDssScenarioComputeScenarioDtosScenarioInfo} [dhiDssScenarioComputeScenarioDtosScenarioInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppScenarioProcessSetScenarioInfoTemplateIdPost: async (
      templateId: string,
      start?: string,
      current?: string,
      end?: string,
      businessType?: number,
      dhiDssScenarioComputeScenarioDtosScenarioInfo?: DhiDssScenarioComputeScenarioDtosScenarioInfo,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'templateId' is not null or undefined
      assertParamExists(
        'apiAppScenarioProcessSetScenarioInfoTemplateIdPost',
        'templateId',
        templateId,
      )
      const localVarPath = `/api/app/scenario-process/set-scenario-info/{templateId}`.replace(
        `{${'templateId'}}`,
        encodeURIComponent(String(templateId)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (start !== undefined) {
        localVarQueryParameter['start'] = start
      }

      if (current !== undefined) {
        localVarQueryParameter['current'] = current
      }

      if (end !== undefined) {
        localVarQueryParameter['end'] = end
      }

      if (businessType !== undefined) {
        localVarQueryParameter['businessType'] = businessType
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
        dhiDssScenarioComputeScenarioDtosScenarioInfo,
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
 * ScenarioProcessApi - functional programming interface
 * @export
 */
export const ScenarioProcessApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ScenarioProcessApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 二维行蓄洪区模型 处理边界数据
     * @param {string} [parentScenarioId]
     * @param {string} [scheduleScenarioId]
     * @param {string} [start]
     * @param {string} [end]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppScenarioProcessProcess2DBoundaryDataPost(
      parentScenarioId?: string,
      scheduleScenarioId?: string,
      start?: string,
      end?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<object> }>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppScenarioProcessProcess2DBoundaryDataPost(
          parentScenarioId,
          scheduleScenarioId,
          start,
          end,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 一维河道模型 处理边界数据补齐
     * @param {string} parentScenarioId
     * @param {string} [start]
     * @param {string} [current]
     * @param {string} [end]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppScenarioProcessProcessBoundaryDataParentScenarioIdPost(
      parentScenarioId: string,
      start?: string,
      current?: string,
      end?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<object> }>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppScenarioProcessProcessBoundaryDataParentScenarioIdPost(
          parentScenarioId,
          start,
          current,
          end,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 方案创建完成之后，用于设置默认初始场、边界数据、实时校正数据，并入库保存
     * @param {string} templateId
     * @param {string} [start]
     * @param {string} [current]
     * @param {string} [end]
     * @param {number} [businessType]
     * @param {DhiDssScenarioComputeScenarioDtosScenarioInfo} [dhiDssScenarioComputeScenarioDtosScenarioInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppScenarioProcessSetScenarioInfoTemplateIdPost(
      templateId: string,
      start?: string,
      current?: string,
      end?: string,
      businessType?: number,
      dhiDssScenarioComputeScenarioDtosScenarioInfo?: DhiDssScenarioComputeScenarioDtosScenarioInfo,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppScenarioProcessSetScenarioInfoTemplateIdPost(
          templateId,
          start,
          current,
          end,
          businessType,
          dhiDssScenarioComputeScenarioDtosScenarioInfo,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ScenarioProcessApi - factory interface
 * @export
 */
export const ScenarioProcessApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ScenarioProcessApiFp(configuration)
  return {
    /**
     *
     * @summary 二维行蓄洪区模型 处理边界数据
     * @param {string} [parentScenarioId]
     * @param {string} [scheduleScenarioId]
     * @param {string} [start]
     * @param {string} [end]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppScenarioProcessProcess2DBoundaryDataPost(
      parentScenarioId?: string,
      scheduleScenarioId?: string,
      start?: string,
      end?: string,
      options?: any,
    ): AxiosPromise<{ [key: string]: Array<object> }> {
      return localVarFp
        .apiAppScenarioProcessProcess2DBoundaryDataPost(
          parentScenarioId,
          scheduleScenarioId,
          start,
          end,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 一维河道模型 处理边界数据补齐
     * @param {string} parentScenarioId
     * @param {string} [start]
     * @param {string} [current]
     * @param {string} [end]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppScenarioProcessProcessBoundaryDataParentScenarioIdPost(
      parentScenarioId: string,
      start?: string,
      current?: string,
      end?: string,
      options?: any,
    ): AxiosPromise<{ [key: string]: Array<object> }> {
      return localVarFp
        .apiAppScenarioProcessProcessBoundaryDataParentScenarioIdPost(
          parentScenarioId,
          start,
          current,
          end,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 方案创建完成之后，用于设置默认初始场、边界数据、实时校正数据，并入库保存
     * @param {string} templateId
     * @param {string} [start]
     * @param {string} [current]
     * @param {string} [end]
     * @param {number} [businessType]
     * @param {DhiDssScenarioComputeScenarioDtosScenarioInfo} [dhiDssScenarioComputeScenarioDtosScenarioInfo]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppScenarioProcessSetScenarioInfoTemplateIdPost(
      templateId: string,
      start?: string,
      current?: string,
      end?: string,
      businessType?: number,
      dhiDssScenarioComputeScenarioDtosScenarioInfo?: DhiDssScenarioComputeScenarioDtosScenarioInfo,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppScenarioProcessSetScenarioInfoTemplateIdPost(
          templateId,
          start,
          current,
          end,
          businessType,
          dhiDssScenarioComputeScenarioDtosScenarioInfo,
          options,
        )
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ScenarioProcessApi - object-oriented interface
 * @export
 * @class ScenarioProcessApi
 * @extends {BaseAPI}
 */
export class ScenarioProcessApi extends BaseAPI {
  /**
   *
   * @summary 二维行蓄洪区模型 处理边界数据
   * @param {string} [parentScenarioId]
   * @param {string} [scheduleScenarioId]
   * @param {string} [start]
   * @param {string} [end]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioProcessApi
   */
  public apiAppScenarioProcessProcess2DBoundaryDataPost(
    parentScenarioId?: string,
    scheduleScenarioId?: string,
    start?: string,
    end?: string,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioProcessApiFp(this.configuration)
      .apiAppScenarioProcessProcess2DBoundaryDataPost(
        parentScenarioId,
        scheduleScenarioId,
        start,
        end,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 一维河道模型 处理边界数据补齐
   * @param {string} parentScenarioId
   * @param {string} [start]
   * @param {string} [current]
   * @param {string} [end]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioProcessApi
   */
  public apiAppScenarioProcessProcessBoundaryDataParentScenarioIdPost(
    parentScenarioId: string,
    start?: string,
    current?: string,
    end?: string,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioProcessApiFp(this.configuration)
      .apiAppScenarioProcessProcessBoundaryDataParentScenarioIdPost(
        parentScenarioId,
        start,
        current,
        end,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 方案创建完成之后，用于设置默认初始场、边界数据、实时校正数据，并入库保存
   * @param {string} templateId
   * @param {string} [start]
   * @param {string} [current]
   * @param {string} [end]
   * @param {number} [businessType]
   * @param {DhiDssScenarioComputeScenarioDtosScenarioInfo} [dhiDssScenarioComputeScenarioDtosScenarioInfo]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ScenarioProcessApi
   */
  public apiAppScenarioProcessSetScenarioInfoTemplateIdPost(
    templateId: string,
    start?: string,
    current?: string,
    end?: string,
    businessType?: number,
    dhiDssScenarioComputeScenarioDtosScenarioInfo?: DhiDssScenarioComputeScenarioDtosScenarioInfo,
    options?: AxiosRequestConfig,
  ) {
    return ScenarioProcessApiFp(this.configuration)
      .apiAppScenarioProcessSetScenarioInfoTemplateIdPost(
        templateId,
        start,
        current,
        end,
        businessType,
        dhiDssScenarioComputeScenarioDtosScenarioInfo,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
