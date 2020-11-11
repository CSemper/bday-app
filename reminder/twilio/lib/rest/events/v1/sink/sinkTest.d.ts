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
 * Initialize the SinkTestList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param sid - A string that uniquely identifies this Sink.
 */
declare function SinkTestList(version: V1, sid: string): SinkTestListInstance;

interface SinkTestListInstance {
  /**
   * create a SinkTestInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: SinkTestInstance) => any): Promise<SinkTestInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface SinkTestPayload extends SinkTestResource, Page.TwilioResponsePayload {
}

interface SinkTestResource {
  result: string;
}

interface SinkTestSolution {
  sid?: string;
}


declare class SinkTestInstance extends SerializableClass {
  /**
   * Initialize the SinkTestContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies this Sink.
   */
  constructor(version: V1, payload: SinkTestPayload, sid: string);

  result: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class SinkTestPage extends Page<V1, SinkTestPayload, SinkTestResource, SinkTestInstance> {
  /**
   * Initialize the SinkTestPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SinkTestSolution);

  /**
   * Build an instance of SinkTestInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SinkTestPayload): SinkTestInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SinkTestInstance, SinkTestList, SinkTestListInstance, SinkTestPage, SinkTestPayload, SinkTestResource, SinkTestSolution }
