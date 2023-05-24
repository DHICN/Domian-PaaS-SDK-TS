/* eslint-disable */
/**
 * model-configuration-service
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
import { ClassifyLegendInfo } from '../models'
// @ts-ignore
import { ClassifyLegendInput } from '../models'
// @ts-ignore
import { LegendItemDto } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
/**
 * LegendApi - axios parameter creator
 * @export
 */
export const LegendApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 获取所有的图例项 Get all legend items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendAllLegendGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/legend/all-legend`
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
     * 根据模型类型和数据类型，获取对应的图例项的等级设置信息，包括等级范围、颜色、描述等信息 Get the legend classifications, including information like classification data range, color, description, etc. by model type and data type.
     * @summary 获取某个图例项的等级设置信息 Get legend classifications
     * @param {string} [modelType] 图例项对应的模型类型 model type of the legend item
     * @param {string} [dataType] 图例项对应的数据类型 data type of the legend item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendClassifyLegendGet: async (
      modelType?: string,
      dataType?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/legend/classify-legend`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (modelType !== undefined) {
        localVarQueryParameter['modelType'] = modelType
      }

      if (dataType !== undefined) {
        localVarQueryParameter['dataType'] = dataType
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
     * @summary 根据模型类型和数据类型获取对应的图例项 Get legend item by model type and data type
     * @param {string} [modelType] 图例项对应的模型类型 model type of the legend item
     * @param {string} [dataType] 图例项对应的数据类型 data type of the legend item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendLegendItemGet: async (
      modelType?: string,
      dataType?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/legend/legend-item`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (modelType !== undefined) {
        localVarQueryParameter['modelType'] = modelType
      }

      if (dataType !== undefined) {
        localVarQueryParameter['dataType'] = dataType
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
     * 根据模型类型和数据类型，添加或更新图例项对应的等级设置信息 Save or update legend classifications by model type and data type.
     * @summary 保存图例项对应的等级设置信息 Save legend classifications
     * @param {ClassifyLegendInput} [classifyLegendInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendSaveClassifyPost: async (
      classifyLegendInput?: ClassifyLegendInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/legend/save-classify`
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
        classifyLegendInput,
        localVarRequestOptions,
        configuration,
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * 添加或者更新图例项信息，在输入参数中，modelType可以是River, Network, M2D等代表模型类型的值，resultType可以是结果文件（res1d，dfsu等）中的数据项 Add or update legend items. Among the augments, modelType can be River, Network, M2D, etc., and resultType is data items in the result files (res1d, dfsu, etc.).
     * @summary 保存图例项信息 Save legend items
     * @param {Array<LegendItemDto>} [legendItemDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendSaveLegendTypePost: async (
      legendItemDto?: Array<LegendItemDto>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/model-configuration/legend/save-legend-type`
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
        legendItemDto,
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
 * LegendApi - functional programming interface
 * @export
 */
export const LegendApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = LegendApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 获取所有的图例项 Get all legend items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationLegendAllLegendGet(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LegendItemDto>>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationLegendAllLegendGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据模型类型和数据类型，获取对应的图例项的等级设置信息，包括等级范围、颜色、描述等信息 Get the legend classifications, including information like classification data range, color, description, etc. by model type and data type.
     * @summary 获取某个图例项的等级设置信息 Get legend classifications
     * @param {string} [modelType] 图例项对应的模型类型 model type of the legend item
     * @param {string} [dataType] 图例项对应的数据类型 data type of the legend item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationLegendClassifyLegendGet(
      modelType?: string,
      dataType?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ClassifyLegendInfo>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationLegendClassifyLegendGet(
          modelType,
          dataType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 根据模型类型和数据类型获取对应的图例项 Get legend item by model type and data type
     * @param {string} [modelType] 图例项对应的模型类型 model type of the legend item
     * @param {string} [dataType] 图例项对应的数据类型 data type of the legend item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationLegendLegendItemGet(
      modelType?: string,
      dataType?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LegendItemDto>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationLegendLegendItemGet(
          modelType,
          dataType,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 根据模型类型和数据类型，添加或更新图例项对应的等级设置信息 Save or update legend classifications by model type and data type.
     * @summary 保存图例项对应的等级设置信息 Save legend classifications
     * @param {ClassifyLegendInput} [classifyLegendInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationLegendSaveClassifyPost(
      classifyLegendInput?: ClassifyLegendInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationLegendSaveClassifyPost(
          classifyLegendInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * 添加或者更新图例项信息，在输入参数中，modelType可以是River, Network, M2D等代表模型类型的值，resultType可以是结果文件（res1d，dfsu等）中的数据项 Add or update legend items. Among the augments, modelType can be River, Network, M2D, etc., and resultType is data items in the result files (res1d, dfsu, etc.).
     * @summary 保存图例项信息 Save legend items
     * @param {Array<LegendItemDto>} [legendItemDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1ModelConfigurationLegendSaveLegendTypePost(
      legendItemDto?: Array<LegendItemDto>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiV1ModelConfigurationLegendSaveLegendTypePost(
          legendItemDto,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * LegendApi - factory interface
 * @export
 */
export const LegendApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = LegendApiFp(configuration)
  return {
    /**
     *
     * @summary 获取所有的图例项 Get all legend items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendAllLegendGet(options?: any): AxiosPromise<Array<LegendItemDto>> {
      return localVarFp
        .apiV1ModelConfigurationLegendAllLegendGet(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据模型类型和数据类型，获取对应的图例项的等级设置信息，包括等级范围、颜色、描述等信息 Get the legend classifications, including information like classification data range, color, description, etc. by model type and data type.
     * @summary 获取某个图例项的等级设置信息 Get legend classifications
     * @param {string} [modelType] 图例项对应的模型类型 model type of the legend item
     * @param {string} [dataType] 图例项对应的数据类型 data type of the legend item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendClassifyLegendGet(
      modelType?: string,
      dataType?: string,
      options?: any,
    ): AxiosPromise<Array<ClassifyLegendInfo>> {
      return localVarFp
        .apiV1ModelConfigurationLegendClassifyLegendGet(modelType, dataType, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 根据模型类型和数据类型获取对应的图例项 Get legend item by model type and data type
     * @param {string} [modelType] 图例项对应的模型类型 model type of the legend item
     * @param {string} [dataType] 图例项对应的数据类型 data type of the legend item
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendLegendItemGet(
      modelType?: string,
      dataType?: string,
      options?: any,
    ): AxiosPromise<LegendItemDto> {
      return localVarFp
        .apiV1ModelConfigurationLegendLegendItemGet(modelType, dataType, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 根据模型类型和数据类型，添加或更新图例项对应的等级设置信息 Save or update legend classifications by model type and data type.
     * @summary 保存图例项对应的等级设置信息 Save legend classifications
     * @param {ClassifyLegendInput} [classifyLegendInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendSaveClassifyPost(
      classifyLegendInput?: ClassifyLegendInput,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ModelConfigurationLegendSaveClassifyPost(classifyLegendInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * 添加或者更新图例项信息，在输入参数中，modelType可以是River, Network, M2D等代表模型类型的值，resultType可以是结果文件（res1d，dfsu等）中的数据项 Add or update legend items. Among the augments, modelType can be River, Network, M2D, etc., and resultType is data items in the result files (res1d, dfsu, etc.).
     * @summary 保存图例项信息 Save legend items
     * @param {Array<LegendItemDto>} [legendItemDto]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ModelConfigurationLegendSaveLegendTypePost(
      legendItemDto?: Array<LegendItemDto>,
      options?: any,
    ): AxiosPromise<boolean> {
      return localVarFp
        .apiV1ModelConfigurationLegendSaveLegendTypePost(legendItemDto, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * LegendApi - object-oriented interface
 * @export
 * @class LegendApi
 * @extends {BaseAPI}
 */
export class LegendApi extends BaseAPI {
  /**
   *
   * @summary 获取所有的图例项 Get all legend items
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LegendApi
   */
  public apiV1ModelConfigurationLegendAllLegendGet(options?: AxiosRequestConfig) {
    return LegendApiFp(this.configuration)
      .apiV1ModelConfigurationLegendAllLegendGet(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据模型类型和数据类型，获取对应的图例项的等级设置信息，包括等级范围、颜色、描述等信息 Get the legend classifications, including information like classification data range, color, description, etc. by model type and data type.
   * @summary 获取某个图例项的等级设置信息 Get legend classifications
   * @param {string} [modelType] 图例项对应的模型类型 model type of the legend item
   * @param {string} [dataType] 图例项对应的数据类型 data type of the legend item
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LegendApi
   */
  public apiV1ModelConfigurationLegendClassifyLegendGet(
    modelType?: string,
    dataType?: string,
    options?: AxiosRequestConfig,
  ) {
    return LegendApiFp(this.configuration)
      .apiV1ModelConfigurationLegendClassifyLegendGet(modelType, dataType, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 根据模型类型和数据类型获取对应的图例项 Get legend item by model type and data type
   * @param {string} [modelType] 图例项对应的模型类型 model type of the legend item
   * @param {string} [dataType] 图例项对应的数据类型 data type of the legend item
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LegendApi
   */
  public apiV1ModelConfigurationLegendLegendItemGet(
    modelType?: string,
    dataType?: string,
    options?: AxiosRequestConfig,
  ) {
    return LegendApiFp(this.configuration)
      .apiV1ModelConfigurationLegendLegendItemGet(modelType, dataType, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 根据模型类型和数据类型，添加或更新图例项对应的等级设置信息 Save or update legend classifications by model type and data type.
   * @summary 保存图例项对应的等级设置信息 Save legend classifications
   * @param {ClassifyLegendInput} [classifyLegendInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LegendApi
   */
  public apiV1ModelConfigurationLegendSaveClassifyPost(
    classifyLegendInput?: ClassifyLegendInput,
    options?: AxiosRequestConfig,
  ) {
    return LegendApiFp(this.configuration)
      .apiV1ModelConfigurationLegendSaveClassifyPost(classifyLegendInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * 添加或者更新图例项信息，在输入参数中，modelType可以是River, Network, M2D等代表模型类型的值，resultType可以是结果文件（res1d，dfsu等）中的数据项 Add or update legend items. Among the augments, modelType can be River, Network, M2D, etc., and resultType is data items in the result files (res1d, dfsu, etc.).
   * @summary 保存图例项信息 Save legend items
   * @param {Array<LegendItemDto>} [legendItemDto]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LegendApi
   */
  public apiV1ModelConfigurationLegendSaveLegendTypePost(
    legendItemDto?: Array<LegendItemDto>,
    options?: AxiosRequestConfig,
  ) {
    return LegendApiFp(this.configuration)
      .apiV1ModelConfigurationLegendSaveLegendTypePost(legendItemDto, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
