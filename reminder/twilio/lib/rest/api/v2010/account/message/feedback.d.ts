/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { SerializableClass } from '../../../../../interfaces';

type FeedbackOutcome = 'confirmed'|'unconfirmed';

/**
 * Initialize the FeedbackList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 * @param messageSid - The SID of the Message resource for which the feedback was provided
 */
declare function FeedbackList(version: V2010, accountSid: string, messageSid: string): FeedbackListInstance;

interface FeedbackListInstance {
  /**
   * create a FeedbackInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: FeedbackInstance) => any): Promise<FeedbackInstance>;
  /**
   * create a FeedbackInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: FeedbackListInstanceCreateOptions, callback?: (error: Error | null, item: FeedbackInstance) => any): Promise<FeedbackInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property outcome - Whether the feedback has arrived
 */
interface FeedbackListInstanceCreateOptions {
  outcome?: FeedbackOutcome;
}

interface FeedbackPayload extends FeedbackResource, Page.TwilioResponsePayload {
}

interface FeedbackResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  message_sid: string;
  outcome: FeedbackOutcome;
  uri: string;
}

interface FeedbackSolution {
  accountSid?: string;
  messageSid?: string;
}


declare class FeedbackInstance extends SerializableClass {
  /**
   * Initialize the FeedbackContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   * @param messageSid - The SID of the Message resource for which the feedback was provided
   */
  constructor(version: V2010, payload: FeedbackPayload, accountSid: string, messageSid: string);

  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  messageSid: string;
  outcome: FeedbackOutcome;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uri: string;
}


declare class FeedbackPage extends Page<V2010, FeedbackPayload, FeedbackResource, FeedbackInstance> {
  /**
   * Initialize the FeedbackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: FeedbackSolution);

  /**
   * Build an instance of FeedbackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FeedbackPayload): FeedbackInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FeedbackInstance, FeedbackList, FeedbackListInstance, FeedbackListInstanceCreateOptions, FeedbackOutcome, FeedbackPage, FeedbackPayload, FeedbackResource, FeedbackSolution }