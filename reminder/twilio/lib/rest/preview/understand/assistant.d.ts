/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import Understand = require('../Understand');
import { AssistantFallbackActionsList } from './assistant/assistantFallbackActions';
import { AssistantFallbackActionsListInstance } from './assistant/assistantFallbackActions';
import { AssistantInitiationActionsList } from './assistant/assistantInitiationActions';
import { AssistantInitiationActionsListInstance } from './assistant/assistantInitiationActions';
import { DialogueList } from './assistant/dialogue';
import { DialogueListInstance } from './assistant/dialogue';
import { FieldTypeList } from './assistant/fieldType';
import { FieldTypeListInstance } from './assistant/fieldType';
import { ModelBuildList } from './assistant/modelBuild';
import { ModelBuildListInstance } from './assistant/modelBuild';
import { QueryList } from './assistant/query';
import { QueryListInstance } from './assistant/query';
import { SerializableClass } from '../../../interfaces';
import { StyleSheetList } from './assistant/styleSheet';
import { StyleSheetListInstance } from './assistant/styleSheet';
import { TaskList } from './assistant/task';
import { TaskListInstance } from './assistant/task';

/**
 * Initialize the AssistantList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function AssistantList(version: Understand): AssistantListInstance;

/**
 * Options to pass to update
 *
 * @property callbackEvents - Space-separated list of callback events that will trigger callbacks.
 * @property callbackUrl - A user-provided URL to send event callbacks to.
 * @property fallbackActions - The JSON actions to be executed when the user's input is not recognized as matching any Task.
 * @property friendlyName - A text description for the Assistant. It is non-unique and can up to 255 characters long.
 * @property initiationActions - The JSON actions to be executed on inbound phone calls when the Assistant has to say something first.
 * @property logQueries - A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided.
 * @property styleSheet - The JSON object that holds the style sheet for the assistant
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 */
interface AssistantInstanceUpdateOptions {
  callbackEvents?: string;
  callbackUrl?: string;
  fallbackActions?: object;
  friendlyName?: string;
  initiationActions?: object;
  logQueries?: boolean;
  styleSheet?: object;
  uniqueName?: string;
}

interface AssistantListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AssistantContext;
  /**
   * create a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: AssistantInstance) => any): Promise<AssistantInstance>;
  /**
   * create a AssistantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: AssistantListInstanceCreateOptions, callback?: (error: Error | null, item: AssistantInstance) => any): Promise<AssistantInstance>;
  /**
   * Streams AssistantInstance records from the API.
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
  each(callback?: (item: AssistantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AssistantInstance records from the API.
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
  each(opts?: AssistantListInstanceEachOptions, callback?: (item: AssistantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a assistant
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): AssistantContext;
  /**
   * Retrieve a single target page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
  /**
   * Retrieve a single target page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
  /**
   * Lists AssistantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AssistantInstance[]) => any): Promise<AssistantInstance[]>;
  /**
   * Lists AssistantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AssistantListInstanceOptions, callback?: (error: Error | null, items: AssistantInstance[]) => any): Promise<AssistantInstance[]>;
  /**
   * Retrieve a single page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
  /**
   * Retrieve a single page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AssistantListInstancePageOptions, callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property callbackEvents - Space-separated list of callback events that will trigger callbacks.
 * @property callbackUrl - A user-provided URL to send event callbacks to.
 * @property fallbackActions - The JSON actions to be executed when the user's input is not recognized as matching any Task.
 * @property friendlyName - A text description for the Assistant. It is non-unique and can up to 255 characters long.
 * @property initiationActions - The JSON actions to be executed on inbound phone calls when the Assistant has to say something first.
 * @property logQueries - A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided.
 * @property styleSheet - The JSON object that holds the style sheet for the assistant
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 */
interface AssistantListInstanceCreateOptions {
  callbackEvents?: string;
  callbackUrl?: string;
  fallbackActions?: object;
  friendlyName?: string;
  initiationActions?: object;
  logQueries?: boolean;
  styleSheet?: object;
  uniqueName?: string;
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
interface AssistantListInstanceEachOptions {
  callback?: (item: AssistantInstance, done: (err?: Error) => void) => void;
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
interface AssistantListInstanceOptions {
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
interface AssistantListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AssistantPayload extends AssistantResource, Page.TwilioResponsePayload {
}

interface AssistantResource {
  account_sid: string;
  callback_events: string;
  callback_url: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  latest_model_build_sid: string;
  links: string;
  log_queries: boolean;
  sid: string;
  unique_name: string;
  url: string;
}

interface AssistantSolution {
}


declare class AssistantContext {
  /**
   * Initialize the AssistantContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Understand, sid: string);

  assistantFallbackActions: AssistantFallbackActionsListInstance;
  assistantInitiationActions: AssistantInitiationActionsListInstance;
  dialogues: DialogueListInstance;
  /**
   * fetch a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AssistantInstance) => any): Promise<AssistantInstance>;
  fieldTypes: FieldTypeListInstance;
  modelBuilds: ModelBuildListInstance;
  queries: QueryListInstance;
  /**
   * remove a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AssistantInstance) => any): Promise<boolean>;
  styleSheet: StyleSheetListInstance;
  tasks: TaskListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: AssistantInstance) => any): Promise<AssistantInstance>;
  /**
   * update a AssistantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AssistantInstanceUpdateOptions, callback?: (error: Error | null, items: AssistantInstance) => any): Promise<AssistantInstance>;
}


declare class AssistantInstance extends SerializableClass {
  /**
   * Initialize the AssistantContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Understand, payload: AssistantPayload, sid: string);

  private _proxy: AssistantContext;
  accountSid: string;
  /**
   * Access the assistantFallbackActions
   */
  assistantFallbackActions(): AssistantFallbackActionsListInstance;
  /**
   * Access the assistantInitiationActions
   */
  assistantInitiationActions(): AssistantInitiationActionsListInstance;
  callbackEvents: string;
  callbackUrl: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * Access the dialogues
   */
  dialogues(): DialogueListInstance;
  /**
   * fetch a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AssistantInstance) => any): Promise<AssistantInstance>;
  /**
   * Access the fieldTypes
   */
  fieldTypes(): FieldTypeListInstance;
  friendlyName: string;
  latestModelBuildSid: string;
  links: string;
  logQueries: boolean;
  /**
   * Access the modelBuilds
   */
  modelBuilds(): ModelBuildListInstance;
  /**
   * Access the queries
   */
  queries(): QueryListInstance;
  /**
   * remove a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AssistantInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Access the styleSheet
   */
  styleSheet(): StyleSheetListInstance;
  /**
   * Access the tasks
   */
  tasks(): TaskListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: AssistantInstance) => any): Promise<AssistantInstance>;
  /**
   * update a AssistantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AssistantInstanceUpdateOptions, callback?: (error: Error | null, items: AssistantInstance) => any): Promise<AssistantInstance>;
  url: string;
}


declare class AssistantPage extends Page<Understand, AssistantPayload, AssistantResource, AssistantInstance> {
  /**
   * Initialize the AssistantPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: AssistantSolution);

  /**
   * Build an instance of AssistantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssistantPayload): AssistantInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AssistantContext, AssistantInstance, AssistantInstanceUpdateOptions, AssistantList, AssistantListInstance, AssistantListInstanceCreateOptions, AssistantListInstanceEachOptions, AssistantListInstanceOptions, AssistantListInstancePageOptions, AssistantPage, AssistantPayload, AssistantResource, AssistantSolution }
