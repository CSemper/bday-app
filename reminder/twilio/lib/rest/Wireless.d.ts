/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./wireless/V1');
import { CommandListInstance } from './wireless/v1/command';
import { RatePlanListInstance } from './wireless/v1/ratePlan';
import { SimListInstance } from './wireless/v1/sim';
import { UsageRecordListInstance } from './wireless/v1/usageRecord';


declare class Wireless extends Domain {
  /**
   * Initialize wireless domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly commands: CommandListInstance;
  readonly ratePlans: RatePlanListInstance;
  readonly sims: SimListInstance;
  readonly usageRecords: UsageRecordListInstance;
  readonly v1: V1;
}

export = Wireless;
