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
 * ConfigApi - axios parameter creator
 * @export
 */
export const ConfigApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 获取租户配置的预报数据
     * @param {Array<string>} [tenantIds]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppConfigAutoForecastInfosGet: async (
      tenantIds?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/config/auto-forecast-infos`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (tenantIds !== undefined) {
        localVarQueryParameter['tenantIds'] = tenantIds
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
 * ConfigApi - functional programming interface
 * @export
 */
export const ConfigApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ConfigApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 获取租户配置的预报数据
     * @param {Array<string>} [tenantIds]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppConfigAutoForecastInfosGet(
      tenantIds?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppConfigAutoForecastInfosGet(
        tenantIds,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ConfigApi - factory interface
 * @export
 */
export const ConfigApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ConfigApiFp(configuration)
  return {
    /**
     *
     * @summary 获取租户配置的预报数据
     * @param {Array<string>} [tenantIds]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppConfigAutoForecastInfosGet(
      tenantIds?: Array<string>,
      options?: any,
    ): AxiosPromise<Array<DhiDssScenarioComputeDaprServicesDtosAutoForecastInfo>> {
      return localVarFp
        .apiAppConfigAutoForecastInfosGet(tenantIds, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * ConfigApi - object-oriented interface
 * @export
 * @class ConfigApi
 * @extends {BaseAPI}
 */
export class ConfigApi extends BaseAPI {
  /**
   *
   * @summary 获取租户配置的预报数据
   * @param {Array<string>} [tenantIds]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigApi
   */
  public apiAppConfigAutoForecastInfosGet(tenantIds?: Array<string>, options?: AxiosRequestConfig) {
    return ConfigApiFp(this.configuration)
      .apiAppConfigAutoForecastInfosGet(tenantIds, options)
      .then((request) => request(this.axios, this.basePath))
  }
}