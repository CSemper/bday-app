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

/**
 * Initialize the BulkCountryUpdateList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function BulkCountryUpdateList(version: V1): BulkCountryUpdateListInstance;

interface BulkCountryUpdateListInstance {
  /**
   * create a BulkCountryUpdateInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: BulkCountryUpdateListInstanceCreateOptions, callback?: (error: Error | null, item: BulkCountryUpdateInstance) => any): Promise<BulkCountryUpdateInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property updateRequest - URL encoded JSON array of update objects
 */
interface BulkCountryUpdateListInstanceCreateOptions {
  updateRequest: string;
}

interface BulkCountryUpdatePayload extends BulkCountryUpdateResource, Page.TwilioResponsePayload {
}

interface BulkCountryUpdateResource {
  update_count: number;
  update_request: string;
}

interface BulkCountryUpdateSolution {
}


declare class BulkCountryUpdateInstance extends SerializableClass {
  /**
   * Initialize the BulkCountryUpdateContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: BulkCountryUpdatePayload);

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  updateCount: number;
  updateRequest: string;
}


declare class BulkCountryUpdatePage extends Page<V1, BulkCountryUpdatePayload, BulkCountryUpdateResource, BulkCountryUpdateInstance> {
  /**
   * Initialize the BulkCountryUpdatePage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: BulkCountryUpdateSolution);

  /**
   * Build an instance of BulkCountryUpdateInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BulkCountryUpdatePayload): BulkCountryUpdateInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { BulkCountryUpdateInstance, BulkCountryUpdateList, BulkCountryUpdateListInstance, BulkCountryUpdateListInstanceCreateOptions, BulkCountryUpdatePage, BulkCountryUpdatePayload, BulkCountryUpdateResource, BulkCountryUpdateSolution }
