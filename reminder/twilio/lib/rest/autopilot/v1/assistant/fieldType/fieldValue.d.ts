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
 * Initialize the FieldValueList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The SID of the Assistant that is the parent of the FieldType associated with the resource
 * @param fieldTypeSid - The SID of the Field Type associated with the Field Value
 */
declare function FieldValueList(version: V1, assistantSid: string, fieldTypeSid: string): FieldValueListInstance;

interface FieldValueListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FieldValueContext;
  /**
   * create a FieldValueInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FieldValueListInstanceCreateOptions, callback?: (error: Error | null, item: FieldValueInstance) => any): Promise<FieldValueInstance>;
  /**
   * Streams FieldValueInstance records from the API.
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
  each(callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FieldValueInstance records from the API.
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
  each(opts?: FieldValueListInstanceEachOptions, callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a field_value
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): FieldValueContext;
  /**
   * Retrieve a single target page of FieldValueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
  /**
   * Retrieve a single target page of FieldValueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
  /**
   * Lists FieldValueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FieldValueInstance[]) => any): Promise<FieldValueInstance[]>;
  /**
   * Lists FieldValueInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FieldValueListInstanceOptions, callback?: (error: Error | null, items: FieldValueInstance[]) => any): Promise<FieldValueInstance[]>;
  /**
   * Retrieve a single page of FieldValueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
  /**
   * Retrieve a single page of FieldValueInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FieldValueListInstancePageOptions, callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property language - The ISO language-country tag that identifies the language of the value
 * @property synonymOf - The string value that indicates which word the field value is a synonym of
 * @property value - The Field Value data
 */
interface FieldValueListInstanceCreateOptions {
  language: string;
  synonymOf?: string;
  value: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property language - The ISO language-country tag that identifies the language of the value
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
interface FieldValueListInstanceEachOptions {
  callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void;
  done?: Function;
  language?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property language - The ISO language-country tag that identifies the language of the value
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
interface FieldValueListInstanceOptions {
  language?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property language - The ISO language-country tag that identifies the language of the value
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface FieldValueListInstancePageOptions {
  language?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FieldValuePayload extends FieldValueResource, Page.TwilioResponsePayload {
}

interface FieldValueResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  field_type_sid: string;
  language: string;
  sid: string;
  synonym_of: string;
  url: string;
  value: string;
}

interface FieldValueSolution {
  assistantSid?: string;
  fieldTypeSid?: string;
}


declare class FieldValueContext {
  /**
   * Initialize the FieldValueContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The SID of the Assistant that is the parent of the FieldType associated with the resource to fetch
   * @param fieldTypeSid - The SID of the Field Type associated with  the Field Value to fetch
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, assistantSid: string, fieldTypeSid: string, sid: string);

  /**
   * fetch a FieldValueInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FieldValueInstance) => any): Promise<FieldValueInstance>;
  /**
   * remove a FieldValueInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FieldValueInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class FieldValueInstance extends SerializableClass {
  /**
   * Initialize the FieldValueContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The SID of the Assistant that is the parent of the FieldType associated with the resource
   * @param fieldTypeSid - The SID of the Field Type associated with the Field Value
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: FieldValuePayload, assistantSid: string, fieldTypeSid: string, sid: string);

  private _proxy: FieldValueContext;
  accountSid: string;
  assistantSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a FieldValueInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FieldValueInstance) => any): Promise<FieldValueInstance>;
  fieldTypeSid: string;
  language: string;
  /**
   * remove a FieldValueInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FieldValueInstance) => any): Promise<boolean>;
  sid: string;
  synonymOf: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  value: string;
}


declare class FieldValuePage extends Page<V1, FieldValuePayload, FieldValueResource, FieldValueInstance> {
  /**
   * Initialize the FieldValuePage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FieldValueSolution);

  /**
   * Build an instance of FieldValueInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FieldValuePayload): FieldValueInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FieldValueContext, FieldValueInstance, FieldValueList, FieldValueListInstance, FieldValueListInstanceCreateOptions, FieldValueListInstanceEachOptions, FieldValueListInstanceOptions, FieldValueListInstancePageOptions, FieldValuePage, FieldValuePayload, FieldValueResource, FieldValueSolution }
