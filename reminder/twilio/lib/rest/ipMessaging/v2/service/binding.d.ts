/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import { SerializableClass } from '../../../../interfaces';

type BindingBindingType = 'gcm'|'apn'|'fcm';

/**
 * Initialize the BindingList
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function BindingList(version: V2, serviceSid: string): BindingListInstance;

interface BindingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): BindingContext;
  /**
   * Streams BindingInstance records from the API.
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
  each(callback?: (item: BindingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams BindingInstance records from the API.
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
  each(opts?: BindingListInstanceEachOptions, callback?: (item: BindingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a binding
   *
   * @param sid - The sid
   */
  get(sid: string): BindingContext;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: BindingInstance[]) => any): Promise<BindingInstance[]>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: BindingListInstanceOptions, callback?: (error: Error | null, items: BindingInstance[]) => any): Promise<BindingInstance[]>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: BindingListInstancePageOptions, callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property bindingType - The binding_type
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property identity - The identity
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
interface BindingListInstanceEachOptions {
  bindingType?: BindingBindingType | BindingBindingType[];
  callback?: (item: BindingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  identity?: string | string[];
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property bindingType - The binding_type
 * @property identity - The identity
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
interface BindingListInstanceOptions {
  bindingType?: BindingBindingType | BindingBindingType[];
  identity?: string | string[];
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property bindingType - The binding_type
 * @property identity - The identity
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface BindingListInstancePageOptions {
  bindingType?: BindingBindingType | BindingBindingType[];
  identity?: string | string[];
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface BindingPayload extends BindingResource, Page.TwilioResponsePayload {
}

interface BindingResource {
  account_sid: string;
  binding_type: BindingBindingType;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  links: string;
  message_types: string[];
  service_sid: string;
  sid: string;
  url: string;
}

interface BindingSolution {
  serviceSid?: string;
}


declare class BindingContext {
  /**
   * Initialize the BindingContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: V2, serviceSid: string, sid: string);

  /**
   * fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: BindingInstance) => any): Promise<BindingInstance>;
  /**
   * remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: BindingInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class BindingInstance extends SerializableClass {
  /**
   * Initialize the BindingContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: V2, payload: BindingPayload, serviceSid: string, sid: string);

  private _proxy: BindingContext;
  accountSid: string;
  bindingType: BindingBindingType;
  credentialSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  endpoint: string;
  /**
   * fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: BindingInstance) => any): Promise<BindingInstance>;
  identity: string;
  links: string;
  messageTypes: string[];
  /**
   * remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: BindingInstance) => any): Promise<boolean>;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class BindingPage extends Page<V2, BindingPayload, BindingResource, BindingInstance> {
  /**
   * Initialize the BindingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: BindingSolution);

  /**
   * Build an instance of BindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BindingPayload): BindingInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { BindingBindingType, BindingContext, BindingInstance, BindingList, BindingListInstance, BindingListInstanceEachOptions, BindingListInstanceOptions, BindingListInstancePageOptions, BindingPage, BindingPayload, BindingResource, BindingSolution }
