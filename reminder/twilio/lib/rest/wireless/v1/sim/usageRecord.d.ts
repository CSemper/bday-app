/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

type UsageRecordGranularity = 'hourly'|'daily'|'all';

/**
 * Initialize the UsageRecordList
 *
 * @param version - Version of the resource
 * @param simSid - The SID of the Sim resource that this Usage Record is for
 */
declare function UsageRecordList(version: V1, simSid: string): UsageRecordListInstance;

interface UsageRecordListInstance {
  /**
   * Streams UsageRecordInstance records from the API.
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
  each(callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams UsageRecordInstance records from the API.
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
  each(opts?: UsageRecordListInstanceEachOptions, callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
  /**
   * Retrieve a single target page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
  /**
   * Lists UsageRecordInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: UsageRecordInstance[]) => any): Promise<UsageRecordInstance[]>;
  /**
   * Lists UsageRecordInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: UsageRecordListInstanceOptions, callback?: (error: Error | null, items: UsageRecordInstance[]) => any): Promise<UsageRecordInstance[]>;
  /**
   * Retrieve a single page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
  /**
   * Retrieve a single page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: UsageRecordListInstancePageOptions, callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
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
 * @property end - Only include usage that occurred on or before this date
 * @property granularity - The time-based grouping that results are aggregated by
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
 * @property start - Only include usage that has occurred on or after this date
 */
interface UsageRecordListInstanceEachOptions {
  callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void;
  done?: Function;
  end?: Date;
  granularity?: UsageRecordGranularity;
  limit?: number;
  pageSize?: number;
  start?: Date;
}

/**
 * Options to pass to list
 *
 * @property end - Only include usage that occurred on or before this date
 * @property granularity - The time-based grouping that results are aggregated by
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
 * @property start - Only include usage that has occurred on or after this date
 */
interface UsageRecordListInstanceOptions {
  end?: Date;
  granularity?: UsageRecordGranularity;
  limit?: number;
  pageSize?: number;
  start?: Date;
}

/**
 * Options to pass to page
 *
 * @property end - Only include usage that occurred on or before this date
 * @property granularity - The time-based grouping that results are aggregated by
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property start - Only include usage that has occurred on or after this date
 */
interface UsageRecordListInstancePageOptions {
  end?: Date;
  granularity?: UsageRecordGranularity;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  start?: Date;
}

interface UsageRecordPayload extends UsageRecordResource, Page.TwilioResponsePayload {
}

interface UsageRecordResource {
  account_sid: string;
  commands: object;
  data: object;
  period: object;
  sim_sid: string;
}

interface UsageRecordSolution {
  simSid?: string;
}


declare class UsageRecordInstance extends SerializableClass {
  /**
   * Initialize the UsageRecordContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param simSid - The SID of the Sim resource that this Usage Record is for
   */
  constructor(version: V1, payload: UsageRecordPayload, simSid: string);

  accountSid: string;
  commands: any;
  data: any;
  period: any;
  simSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class UsageRecordPage extends Page<V1, UsageRecordPayload, UsageRecordResource, UsageRecordInstance> {
  /**
   * Initialize the UsageRecordPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: UsageRecordSolution);

  /**
   * Build an instance of UsageRecordInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UsageRecordPayload): UsageRecordInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { UsageRecordGranularity, UsageRecordInstance, UsageRecordList, UsageRecordListInstance, UsageRecordListInstanceEachOptions, UsageRecordListInstanceOptions, UsageRecordListInstancePageOptions, UsageRecordPage, UsageRecordPayload, UsageRecordResource, UsageRecordSolution }
