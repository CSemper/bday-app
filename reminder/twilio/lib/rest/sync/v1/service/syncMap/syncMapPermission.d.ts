/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the SyncMapPermissionList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Sync Service that the resource is associated with
 * @param mapSid - Sync Map SID
 */
declare function SyncMapPermissionList(version: V1, serviceSid: string, mapSid: string): SyncMapPermissionListInstance;

/**
 * Options to pass to update
 *
 * @property manage - Manage access
 * @property read - Read access
 * @property write - Write access
 */
interface SyncMapPermissionInstanceUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}

interface SyncMapPermissionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncMapPermissionContext;
  /**
   * Streams SyncMapPermissionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SyncMapPermissionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SyncMapPermissionListInstanceEachOptions, callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_map_permission
   *
   * @param identity - The application-defined string that uniquely identifies the User's Sync Map Permission resource to fetch
   */
  get(identity: string): SyncMapPermissionContext;
  /**
   * Retrieve a single target page of SyncMapPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
  /**
   * Retrieve a single target page of SyncMapPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
  /**
   * Lists SyncMapPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SyncMapPermissionInstance[]) => any): Promise<SyncMapPermissionInstance[]>;
  /**
   * Lists SyncMapPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncMapPermissionListInstanceOptions, callback?: (error: Error | null, items: SyncMapPermissionInstance[]) => any): Promise<SyncMapPermissionInstance[]>;
  /**
   * Retrieve a single page of SyncMapPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
  /**
   * Retrieve a single page of SyncMapPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncMapPermissionListInstancePageOptions, callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SyncMapPermissionListInstanceEachOptions {
  callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SyncMapPermissionListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SyncMapPermissionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncMapPermissionPayload extends SyncMapPermissionResource, Page.TwilioResponsePayload {
}

interface SyncMapPermissionResource {
  account_sid: string;
  identity: string;
  manage: boolean;
  map_sid: string;
  read: boolean;
  service_sid: string;
  url: string;
  write: boolean;
}

interface SyncMapPermissionSolution {
  mapSid?: string;
  serviceSid?: string;
}


declare class SyncMapPermissionContext {
  /**
   * Initialize the SyncMapPermissionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Sync Service with the Sync Map Permission resource to fetch
   * @param mapSid - The SID of the Sync Map with the Sync Map Permission resource to fetch
   * @param identity - The application-defined string that uniquely identifies the User's Sync Map Permission resource to fetch
   */
  constructor(version: V1, serviceSid: string, mapSid: string, identity: string);

  /**
   * fetch a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
  /**
   * remove a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncMapPermissionInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SyncMapPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapPermissionInstanceUpdateOptions, callback?: (error: Error | null, items: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
}


declare class SyncMapPermissionInstance extends SerializableClass {
  /**
   * Initialize the SyncMapPermissionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Sync Service that the resource is associated with
   * @param mapSid - Sync Map SID
   * @param identity - The application-defined string that uniquely identifies the User's Sync Map Permission resource to fetch
   */
  constructor(version: V1, payload: SyncMapPermissionPayload, serviceSid: string, mapSid: string, identity: string);

  private _proxy: SyncMapPermissionContext;
  accountSid: string;
  /**
   * fetch a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
  identity: string;
  manage: boolean;
  mapSid: string;
  read: boolean;
  /**
   * remove a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncMapPermissionInstance) => any): Promise<boolean>;
  serviceSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SyncMapPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncMapPermissionInstanceUpdateOptions, callback?: (error: Error | null, items: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;
  url: string;
  write: boolean;
}


declare class SyncMapPermissionPage extends Page<V1, SyncMapPermissionPayload, SyncMapPermissionResource, SyncMapPermissionInstance> {
  /**
   * Initialize the SyncMapPermissionPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SyncMapPermissionSolution);

  /**
   * Build an instance of SyncMapPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapPermissionPayload): SyncMapPermissionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SyncMapPermissionContext, SyncMapPermissionInstance, SyncMapPermissionInstanceUpdateOptions, SyncMapPermissionList, SyncMapPermissionListInstance, SyncMapPermissionListInstanceEachOptions, SyncMapPermissionListInstanceOptions, SyncMapPermissionListInstancePageOptions, SyncMapPermissionPage, SyncMapPermissionPayload, SyncMapPermissionResource, SyncMapPermissionSolution }
