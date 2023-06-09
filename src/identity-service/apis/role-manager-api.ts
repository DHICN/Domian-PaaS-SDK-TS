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
import { AddRoleInput } from '../models'
// @ts-ignore
import { GuidStringStringKeyValue } from '../models'
// @ts-ignore
import { QueryRolesInput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { RoleDto } from '../models'
// @ts-ignore
import { UpdateRoleInput } from '../models'
/**
 * RoleManagerApi - axios parameter creator
 * @export
 */
export const RoleManagerApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 查询角色 Query role
     * @param {QueryRolesInput} [queryRolesInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerQueryRolesPost: async (
      queryRolesInput?: QueryRolesInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/roleManager/queryRoles`
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
        queryRolesInput,
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
     * @summary 添加角色 Add role
     * @param {AddRoleInput} [addRoleInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerRolePost: async (
      addRoleInput?: AddRoleInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/roleManager/role`
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
        addRoleInput,
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
     * @summary 更新角色 Update role
     * @param {UpdateRoleInput} [updateRoleInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerRolePut: async (
      updateRoleInput?: UpdateRoleInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/roleManager/role`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options }
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
        updateRoleInput,
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
     * @summary 删除角色 Delete role
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerRolesDelete: async (
      ids: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'ids' is not null or undefined
      assertParamExists('apiAppRoleManagerRolesDelete', 'ids', ids)
      const localVarPath = `/api/app/roleManager/roles`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (ids !== undefined) {
        localVarQueryParameter['Ids'] = ids
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
     * @summary 获取租户下的角色 Get roles under tenants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerRolesGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/app/roleManager/roles`
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
 * RoleManagerApi - functional programming interface
 * @export
 */
export const RoleManagerApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = RoleManagerApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 查询角色 Query role
     * @param {QueryRolesInput} [queryRolesInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppRoleManagerQueryRolesPost(
      queryRolesInput?: QueryRolesInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RoleDto>>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppRoleManagerQueryRolesPost(
        queryRolesInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 添加角色 Add role
     * @param {AddRoleInput} [addRoleInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppRoleManagerRolePost(
      addRoleInput?: AddRoleInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppRoleManagerRolePost(
        addRoleInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新角色 Update role
     * @param {UpdateRoleInput} [updateRoleInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppRoleManagerRolePut(
      updateRoleInput?: UpdateRoleInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppRoleManagerRolePut(
        updateRoleInput,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除角色 Delete role
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppRoleManagerRolesDelete(
      ids: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppRoleManagerRolesDelete(
        ids,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取租户下的角色 Get roles under tenants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppRoleManagerRolesGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GuidStringStringKeyValue>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.apiAppRoleManagerRolesGet(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * RoleManagerApi - factory interface
 * @export
 */
export const RoleManagerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = RoleManagerApiFp(configuration)
  return {
    /**
     *
     * @summary 查询角色 Query role
     * @param {QueryRolesInput} [queryRolesInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerQueryRolesPost(
      queryRolesInput?: QueryRolesInput,
      options?: any,
    ): AxiosPromise<Array<RoleDto>> {
      return localVarFp
        .apiAppRoleManagerQueryRolesPost(queryRolesInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 添加角色 Add role
     * @param {AddRoleInput} [addRoleInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerRolePost(addRoleInput?: AddRoleInput, options?: any): AxiosPromise<object> {
      return localVarFp
        .apiAppRoleManagerRolePost(addRoleInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新角色 Update role
     * @param {UpdateRoleInput} [updateRoleInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerRolePut(
      updateRoleInput?: UpdateRoleInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppRoleManagerRolePut(updateRoleInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除角色 Delete role
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerRolesDelete(ids: Array<string>, options?: any): AxiosPromise<object> {
      return localVarFp
        .apiAppRoleManagerRolesDelete(ids, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取租户下的角色 Get roles under tenants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppRoleManagerRolesGet(options?: any): AxiosPromise<Array<GuidStringStringKeyValue>> {
      return localVarFp
        .apiAppRoleManagerRolesGet(options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * RoleManagerApi - object-oriented interface
 * @export
 * @class RoleManagerApi
 * @extends {BaseAPI}
 */
export class RoleManagerApi extends BaseAPI {
  /**
   *
   * @summary 查询角色 Query role
   * @param {QueryRolesInput} [queryRolesInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleManagerApi
   */
  public apiAppRoleManagerQueryRolesPost(
    queryRolesInput?: QueryRolesInput,
    options?: AxiosRequestConfig,
  ) {
    return RoleManagerApiFp(this.configuration)
      .apiAppRoleManagerQueryRolesPost(queryRolesInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 添加角色 Add role
   * @param {AddRoleInput} [addRoleInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleManagerApi
   */
  public apiAppRoleManagerRolePost(addRoleInput?: AddRoleInput, options?: AxiosRequestConfig) {
    return RoleManagerApiFp(this.configuration)
      .apiAppRoleManagerRolePost(addRoleInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新角色 Update role
   * @param {UpdateRoleInput} [updateRoleInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleManagerApi
   */
  public apiAppRoleManagerRolePut(updateRoleInput?: UpdateRoleInput, options?: AxiosRequestConfig) {
    return RoleManagerApiFp(this.configuration)
      .apiAppRoleManagerRolePut(updateRoleInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除角色 Delete role
   * @param {Array<string>} ids ID列表 ids
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleManagerApi
   */
  public apiAppRoleManagerRolesDelete(ids: Array<string>, options?: AxiosRequestConfig) {
    return RoleManagerApiFp(this.configuration)
      .apiAppRoleManagerRolesDelete(ids, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取租户下的角色 Get roles under tenants
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RoleManagerApi
   */
  public apiAppRoleManagerRolesGet(options?: AxiosRequestConfig) {
    return RoleManagerApiFp(this.configuration)
      .apiAppRoleManagerRolesGet(options)
      .then((request) => request(this.axios, this.basePath))
  }
}
