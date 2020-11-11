/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Understand = require('../../Understand');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the AssistantFallbackActionsList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The assistant_sid
 */
declare function AssistantFallbackActionsList(version: Understand, assistantSid: string): AssistantFallbackActionsListInstance;

/**
 * Options to pass to update
 *
 * @property fallbackActions - The fallback_actions
 */
interface AssistantFallbackActionsInstanceUpdateOptions {
  fallbackActions?: object;
}

interface AssistantFallbackActionsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AssistantFallbackActionsContext;
  /**
   * Constructs a assistant_fallback_actions
   */
  get(): AssistantFallbackActionsContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface AssistantFallbackActionsPayload extends AssistantFallbackActionsResource, Page.TwilioResponsePayload {
}

interface AssistantFallbackActionsResource {
  account_sid: string;
  assistant_sid: string;
  data: object;
  url: string;
}

interface AssistantFallbackActionsSolution {
  assistantSid?: string;
}


declare class AssistantFallbackActionsContext {
  /**
   * Initialize the AssistantFallbackActionsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The assistant_sid
   */
  constructor(version: Understand, assistantSid: string);

  /**
   * fetch a AssistantFallbackActionsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a AssistantFallbackActionsInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
  /**
   * update a AssistantFallbackActionsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AssistantFallbackActionsInstanceUpdateOptions, callback?: (error: Error | null, items: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
}


declare class AssistantFallbackActionsInstance extends SerializableClass {
  /**
   * Initialize the AssistantFallbackActionsContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The assistant_sid
   */
  constructor(version: Understand, payload: AssistantFallbackActionsPayload, assistantSid: string);

  private _proxy: AssistantFallbackActionsContext;
  accountSid: string;
  assistantSid: string;
  data: any;
  /**
   * fetch a AssistantFallbackActionsInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a AssistantFallbackActionsInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
  /**
   * update a AssistantFallbackActionsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AssistantFallbackActionsInstanceUpdateOptions, callback?: (error: Error | null, items: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
  url: string;
}


declare class AssistantFallbackActionsPage extends Page<Understand, AssistantFallbackActionsPayload, AssistantFallbackActionsResource, AssistantFallbackActionsInstance> {
  /**
   * Initialize the AssistantFallbackActionsPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: AssistantFallbackActionsSolution);

  /**
   * Build an instance of AssistantFallbackActionsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssistantFallbackActionsPayload): AssistantFallbackActionsInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AssistantFallbackActionsContext, AssistantFallbackActionsInstance, AssistantFallbackActionsInstanceUpdateOptions, AssistantFallbackActionsList, AssistantFallbackActionsListInstance, AssistantFallbackActionsPage, AssistantFallbackActionsPayload, AssistantFallbackActionsResource, AssistantFallbackActionsSolution }