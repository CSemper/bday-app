/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import { SerializableClass } from '../../../../../interfaces';

type ChallengeChallengeReasons = 'none'|'not_needed'|'not_requested';

type ChallengeChallengeStatuses = 'pending'|'expired'|'approved'|'denied';

type ChallengeFactorTypes = 'push';

/**
 * Initialize the ChallengeList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param identity - Unique external identifier of the Entity
 */
declare function ChallengeList(version: V2, serviceSid: string, identity: string): ChallengeListInstance;

/**
 * Options to pass to update
 *
 * @property authPayload - Optional payload to verify the Challenge
 */
interface ChallengeInstanceUpdateOptions {
  authPayload?: string;
}

interface ChallengeListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ChallengeContext;
  /**
   * create a ChallengeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ChallengeListInstanceCreateOptions, callback?: (error: Error | null, item: ChallengeInstance) => any): Promise<ChallengeInstance>;
  /**
   * Streams ChallengeInstance records from the API.
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
  each(callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ChallengeInstance records from the API.
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
  each(opts?: ChallengeListInstanceEachOptions, callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a challenge
   *
   * @param sid - A string that uniquely identifies this Challenge.
   */
  get(sid: string): ChallengeContext;
  /**
   * Retrieve a single target page of ChallengeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ChallengePage) => any): Promise<ChallengePage>;
  /**
   * Retrieve a single target page of ChallengeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ChallengePage) => any): Promise<ChallengePage>;
  /**
   * Lists ChallengeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ChallengeInstance[]) => any): Promise<ChallengeInstance[]>;
  /**
   * Lists ChallengeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ChallengeListInstanceOptions, callback?: (error: Error | null, items: ChallengeInstance[]) => any): Promise<ChallengeInstance[]>;
  /**
   * Retrieve a single page of ChallengeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ChallengePage) => any): Promise<ChallengePage>;
  /**
   * Retrieve a single page of ChallengeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ChallengeListInstancePageOptions, callback?: (error: Error | null, items: ChallengePage) => any): Promise<ChallengePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property details.fields - A list of objects that describe the Fields included in the Challenge
 * @property details.message - Shown to the user when the push notification arrives
 * @property expirationDate - The future date in which this Challenge will expire
 * @property factorSid - Factor Sid.
 * @property hiddenDetails - Hidden details provided to contextualize the Challenge
 */
interface ChallengeListInstanceCreateOptions {
  details?: {
    message?: string;
    fields?: object | object[];
  };
  expirationDate?: Date;
  factorSid: string;
  hiddenDetails?: object;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property factorSid - Factor Sid.
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
 * @property status - The Status of theChallenges to fetch
 */
interface ChallengeListInstanceEachOptions {
  callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void;
  done?: Function;
  factorSid?: string;
  limit?: number;
  pageSize?: number;
  status?: ChallengeChallengeStatuses;
}

/**
 * Options to pass to list
 *
 * @property factorSid - Factor Sid.
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
 * @property status - The Status of theChallenges to fetch
 */
interface ChallengeListInstanceOptions {
  factorSid?: string;
  limit?: number;
  pageSize?: number;
  status?: ChallengeChallengeStatuses;
}

/**
 * Options to pass to page
 *
 * @property factorSid - Factor Sid.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - The Status of theChallenges to fetch
 */
interface ChallengeListInstancePageOptions {
  factorSid?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: ChallengeChallengeStatuses;
}

interface ChallengePayload extends ChallengeResource, Page.TwilioResponsePayload {
}

interface ChallengeResource {
  account_sid: string;
  date_created: Date;
  date_responded: Date;
  date_updated: Date;
  details: object;
  entity_sid: string;
  expiration_date: Date;
  factor_sid: string;
  factor_type: ChallengeFactorTypes;
  hidden_details: object;
  identity: string;
  responded_reason: ChallengeChallengeReasons;
  service_sid: string;
  sid: string;
  status: ChallengeChallengeStatuses;
  url: string;
}

interface ChallengeSolution {
  identity?: string;
  serviceSid?: string;
}


declare class ChallengeContext {
  /**
   * Initialize the ChallengeContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param identity - Unique external identifier of the Entity
   * @param sid - A string that uniquely identifies this Challenge.
   */
  constructor(version: V2, serviceSid: string, identity: string, sid: string);

  /**
   * fetch a ChallengeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ChallengeInstance) => any): Promise<ChallengeInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ChallengeInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ChallengeInstance) => any): Promise<ChallengeInstance>;
  /**
   * update a ChallengeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ChallengeInstanceUpdateOptions, callback?: (error: Error | null, items: ChallengeInstance) => any): Promise<ChallengeInstance>;
}


declare class ChallengeInstance extends SerializableClass {
  /**
   * Initialize the ChallengeContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param identity - Unique external identifier of the Entity
   * @param sid - A string that uniquely identifies this Challenge.
   */
  constructor(version: V2, payload: ChallengePayload, serviceSid: string, identity: string, sid: string);

  private _proxy: ChallengeContext;
  accountSid: string;
  dateCreated: Date;
  dateResponded: Date;
  dateUpdated: Date;
  details: any;
  entitySid: string;
  expirationDate: Date;
  factorSid: string;
  factorType: ChallengeFactorTypes;
  /**
   * fetch a ChallengeInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ChallengeInstance) => any): Promise<ChallengeInstance>;
  hiddenDetails: any;
  identity: string;
  respondedReason: ChallengeChallengeReasons;
  serviceSid: string;
  sid: string;
  status: ChallengeChallengeStatuses;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ChallengeInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ChallengeInstance) => any): Promise<ChallengeInstance>;
  /**
   * update a ChallengeInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ChallengeInstanceUpdateOptions, callback?: (error: Error | null, items: ChallengeInstance) => any): Promise<ChallengeInstance>;
  url: string;
}


declare class ChallengePage extends Page<V2, ChallengePayload, ChallengeResource, ChallengeInstance> {
  /**
   * Initialize the ChallengePage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: ChallengeSolution);

  /**
   * Build an instance of ChallengeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChallengePayload): ChallengeInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ChallengeChallengeReasons, ChallengeChallengeStatuses, ChallengeContext, ChallengeFactorTypes, ChallengeInstance, ChallengeInstanceUpdateOptions, ChallengeList, ChallengeListInstance, ChallengeListInstanceCreateOptions, ChallengeListInstanceEachOptions, ChallengeListInstanceOptions, ChallengeListInstancePageOptions, ChallengePage, ChallengePayload, ChallengeResource, ChallengeSolution }
