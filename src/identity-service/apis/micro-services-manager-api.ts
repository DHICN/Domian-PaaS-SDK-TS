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
import { AddMicroServiceInput } from '../models'
// @ts-ignore
import { AddRolePermissionsInput } from '../models'
// @ts-ignore
import { GetRolePermissionsOutput } from '../models'
// @ts-ignore
import { MicroServiceOutput } from '../models'
// @ts-ignore
import { RemoteServiceErrorResponse } from '../models'
// @ts-ignore
import { UpdateMicroServiceInput } from '../models'
// @ts-ignore
import { UpdateRolePermissionsInput } from '../models'
/**
 * MicroServicesManagerApi - axios parameter creator
 * @export
 */
export const MicroServicesManagerApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary 通过微服务Id获取微服务 Get microservice through microservice ID
     * @param {string} id 微服务ID micro service id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerIdMicroServiceByIdGet: async (
      id: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('apiAppMicroServicesManagerIdMicroServiceByIdGet', 'id', id)
      const localVarPath = `/api/app/microServicesManager/{id}/microServiceById`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      )
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
     * @summary 通过d获取角色权限 Get role permissions through ID
     * @param {string} id 角色权限ID role permission id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerIdRolePermissionsByIdGet: async (
      id: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('apiAppMicroServicesManagerIdRolePermissionsByIdGet', 'id', id)
      const localVarPath = `/api/app/microServicesManager/{id}/rolePermissionsById`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      )
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
     * @summary 删除微服务 Delete micro service
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerMicroServiceDelete: async (
      ids: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'ids' is not null or undefined
      assertParamExists('apiAppMicroServicesManagerMicroServiceDelete', 'ids', ids)
      const localVarPath = `/api/app/microServicesManager/microService`
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
     * @summary 添加微服务 Add microservices
     * @param {AddMicroServiceInput} [addMicroServiceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerMicroServicePost: async (
      addMicroServiceInput?: AddMicroServiceInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/microServicesManager/microService`
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
        addMicroServiceInput,
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
     * @summary 更新微服务 Update microservices
     * @param {UpdateMicroServiceInput} [updateMicroServiceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerMicroServicePut: async (
      updateMicroServiceInput?: UpdateMicroServiceInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/microServicesManager/microService`
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
        updateMicroServiceInput,
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
     * @summary 获取微服务 Get micro services
     * @param {string} [keywords] 根据关键字检索 query key words
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerMicroServicesGet: async (
      keywords?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/microServicesManager/microServices`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (keywords !== undefined) {
        localVarQueryParameter['Keywords'] = keywords
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
     * @summary 删除角色权限 Delete role permissions
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerRolePermissionsDelete: async (
      ids: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'ids' is not null or undefined
      assertParamExists('apiAppMicroServicesManagerRolePermissionsDelete', 'ids', ids)
      const localVarPath = `/api/app/microServicesManager/rolePermissions`
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
     * @summary 获取角色权限 Get role permissions
     * @param {string} [tenantId] 租户Id tenant id
     * @param {string} [role] 角色 role name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerRolePermissionsGet: async (
      tenantId?: string,
      role?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/microServicesManager/rolePermissions`
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

      if (role !== undefined) {
        localVarQueryParameter['Role'] = role
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
     * @summary 添加角色权限 Add role permissions
     * @param {AddRolePermissionsInput} [addRolePermissionsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerRolePermissionsPost: async (
      addRolePermissionsInput?: AddRolePermissionsInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/microServicesManager/rolePermissions`
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
        addRolePermissionsInput,
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
     * @summary 更新角色权限 Update role permissions
     * @param {UpdateRolePermissionsInput} [updateRolePermissionsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerRolePermissionsPut: async (
      updateRolePermissionsInput?: UpdateRolePermissionsInput,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/app/microServicesManager/rolePermissions`
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
        updateRolePermissionsInput,
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
 * MicroServicesManagerApi - functional programming interface
 * @export
 */
export const MicroServicesManagerApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = MicroServicesManagerApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @summary 通过微服务Id获取微服务 Get microservice through microservice ID
     * @param {string} id 微服务ID micro service id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerIdMicroServiceByIdGet(
      id: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MicroServiceOutput>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerIdMicroServiceByIdGet(id, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 通过d获取角色权限 Get role permissions through ID
     * @param {string} id 角色权限ID role permission id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerIdRolePermissionsByIdGet(
      id: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetRolePermissionsOutput>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerIdRolePermissionsByIdGet(
          id,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除微服务 Delete micro service
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerMicroServiceDelete(
      ids: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerMicroServiceDelete(ids, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 添加微服务 Add microservices
     * @param {AddMicroServiceInput} [addMicroServiceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerMicroServicePost(
      addMicroServiceInput?: AddMicroServiceInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerMicroServicePost(
          addMicroServiceInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新微服务 Update microservices
     * @param {UpdateMicroServiceInput} [updateMicroServiceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerMicroServicePut(
      updateMicroServiceInput?: UpdateMicroServiceInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerMicroServicePut(
          updateMicroServiceInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取微服务 Get micro services
     * @param {string} [keywords] 根据关键字检索 query key words
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerMicroServicesGet(
      keywords?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MicroServiceOutput>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerMicroServicesGet(
          keywords,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 删除角色权限 Delete role permissions
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerRolePermissionsDelete(
      ids: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerRolePermissionsDelete(
          ids,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 获取角色权限 Get role permissions
     * @param {string} [tenantId] 租户Id tenant id
     * @param {string} [role] 角色 role name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerRolePermissionsGet(
      tenantId?: string,
      role?: string,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetRolePermissionsOutput>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerRolePermissionsGet(
          tenantId,
          role,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 添加角色权限 Add role permissions
     * @param {AddRolePermissionsInput} [addRolePermissionsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerRolePermissionsPost(
      addRolePermissionsInput?: AddRolePermissionsInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerRolePermissionsPost(
          addRolePermissionsInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @summary 更新角色权限 Update role permissions
     * @param {UpdateRolePermissionsInput} [updateRolePermissionsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiAppMicroServicesManagerRolePermissionsPut(
      updateRolePermissionsInput?: UpdateRolePermissionsInput,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.apiAppMicroServicesManagerRolePermissionsPut(
          updateRolePermissionsInput,
          options,
        )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * MicroServicesManagerApi - factory interface
 * @export
 */
export const MicroServicesManagerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = MicroServicesManagerApiFp(configuration)
  return {
    /**
     *
     * @summary 通过微服务Id获取微服务 Get microservice through microservice ID
     * @param {string} id 微服务ID micro service id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerIdMicroServiceByIdGet(
      id: string,
      options?: any,
    ): AxiosPromise<MicroServiceOutput> {
      return localVarFp
        .apiAppMicroServicesManagerIdMicroServiceByIdGet(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 通过d获取角色权限 Get role permissions through ID
     * @param {string} id 角色权限ID role permission id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerIdRolePermissionsByIdGet(
      id: string,
      options?: any,
    ): AxiosPromise<GetRolePermissionsOutput> {
      return localVarFp
        .apiAppMicroServicesManagerIdRolePermissionsByIdGet(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除微服务 Delete micro service
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerMicroServiceDelete(
      ids: Array<string>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppMicroServicesManagerMicroServiceDelete(ids, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 添加微服务 Add microservices
     * @param {AddMicroServiceInput} [addMicroServiceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerMicroServicePost(
      addMicroServiceInput?: AddMicroServiceInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppMicroServicesManagerMicroServicePost(addMicroServiceInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新微服务 Update microservices
     * @param {UpdateMicroServiceInput} [updateMicroServiceInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerMicroServicePut(
      updateMicroServiceInput?: UpdateMicroServiceInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppMicroServicesManagerMicroServicePut(updateMicroServiceInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取微服务 Get micro services
     * @param {string} [keywords] 根据关键字检索 query key words
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerMicroServicesGet(
      keywords?: string,
      options?: any,
    ): AxiosPromise<Array<MicroServiceOutput>> {
      return localVarFp
        .apiAppMicroServicesManagerMicroServicesGet(keywords, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 删除角色权限 Delete role permissions
     * @param {Array<string>} ids ID列表 ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerRolePermissionsDelete(
      ids: Array<string>,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppMicroServicesManagerRolePermissionsDelete(ids, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 获取角色权限 Get role permissions
     * @param {string} [tenantId] 租户Id tenant id
     * @param {string} [role] 角色 role name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerRolePermissionsGet(
      tenantId?: string,
      role?: string,
      options?: any,
    ): AxiosPromise<Array<GetRolePermissionsOutput>> {
      return localVarFp
        .apiAppMicroServicesManagerRolePermissionsGet(tenantId, role, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 添加角色权限 Add role permissions
     * @param {AddRolePermissionsInput} [addRolePermissionsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerRolePermissionsPost(
      addRolePermissionsInput?: AddRolePermissionsInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppMicroServicesManagerRolePermissionsPost(addRolePermissionsInput, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary 更新角色权限 Update role permissions
     * @param {UpdateRolePermissionsInput} [updateRolePermissionsInput]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiAppMicroServicesManagerRolePermissionsPut(
      updateRolePermissionsInput?: UpdateRolePermissionsInput,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .apiAppMicroServicesManagerRolePermissionsPut(updateRolePermissionsInput, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * MicroServicesManagerApi - object-oriented interface
 * @export
 * @class MicroServicesManagerApi
 * @extends {BaseAPI}
 */
export class MicroServicesManagerApi extends BaseAPI {
  /**
   *
   * @summary 通过微服务Id获取微服务 Get microservice through microservice ID
   * @param {string} id 微服务ID micro service id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerIdMicroServiceByIdGet(id: string, options?: AxiosRequestConfig) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerIdMicroServiceByIdGet(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 通过d获取角色权限 Get role permissions through ID
   * @param {string} id 角色权限ID role permission id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerIdRolePermissionsByIdGet(
    id: string,
    options?: AxiosRequestConfig,
  ) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerIdRolePermissionsByIdGet(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除微服务 Delete micro service
   * @param {Array<string>} ids ID列表 ids
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerMicroServiceDelete(
    ids: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerMicroServiceDelete(ids, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 添加微服务 Add microservices
   * @param {AddMicroServiceInput} [addMicroServiceInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerMicroServicePost(
    addMicroServiceInput?: AddMicroServiceInput,
    options?: AxiosRequestConfig,
  ) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerMicroServicePost(addMicroServiceInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新微服务 Update microservices
   * @param {UpdateMicroServiceInput} [updateMicroServiceInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerMicroServicePut(
    updateMicroServiceInput?: UpdateMicroServiceInput,
    options?: AxiosRequestConfig,
  ) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerMicroServicePut(updateMicroServiceInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取微服务 Get micro services
   * @param {string} [keywords] 根据关键字检索 query key words
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerMicroServicesGet(
    keywords?: string,
    options?: AxiosRequestConfig,
  ) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerMicroServicesGet(keywords, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 删除角色权限 Delete role permissions
   * @param {Array<string>} ids ID列表 ids
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerRolePermissionsDelete(
    ids: Array<string>,
    options?: AxiosRequestConfig,
  ) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerRolePermissionsDelete(ids, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 获取角色权限 Get role permissions
   * @param {string} [tenantId] 租户Id tenant id
   * @param {string} [role] 角色 role name
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerRolePermissionsGet(
    tenantId?: string,
    role?: string,
    options?: AxiosRequestConfig,
  ) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerRolePermissionsGet(tenantId, role, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 添加角色权限 Add role permissions
   * @param {AddRolePermissionsInput} [addRolePermissionsInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerRolePermissionsPost(
    addRolePermissionsInput?: AddRolePermissionsInput,
    options?: AxiosRequestConfig,
  ) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerRolePermissionsPost(addRolePermissionsInput, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary 更新角色权限 Update role permissions
   * @param {UpdateRolePermissionsInput} [updateRolePermissionsInput]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MicroServicesManagerApi
   */
  public apiAppMicroServicesManagerRolePermissionsPut(
    updateRolePermissionsInput?: UpdateRolePermissionsInput,
    options?: AxiosRequestConfig,
  ) {
    return MicroServicesManagerApiFp(this.configuration)
      .apiAppMicroServicesManagerRolePermissionsPut(updateRolePermissionsInput, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
