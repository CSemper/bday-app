'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Domain = require('../base/Domain');  /* jshint ignore:line */
var V1 = require('./voice/V1');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize voice domain
 *
 * @constructor Twilio.Voice
 *
 * @property {Twilio.Voice.V1} v1 - v1 version
 * @property {Twilio.Voice.V1.ByocTrunkList} byocTrunks - byocTrunks resource
 * @property {Twilio.Voice.V1.ConnectionPolicyList} connectionPolicies -
 *          connectionPolicies resource
 * @property {Twilio.Voice.V1.DialingPermissionsList} dialingPermissions -
 *          dialingPermissions resource
 * @property {Twilio.Voice.V1.IpRecordList} ipRecords - ipRecords resource
 * @property {Twilio.Voice.V1.SourceIpMappingList} sourceIpMappings -
 *          sourceIpMappings resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Voice(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://voice.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Voice.prototype, Domain.prototype);
Voice.prototype.constructor = Voice;

Object.defineProperty(Voice.prototype,
  'v1', {
    get: function() {
      this._v1 = this._v1 || new V1(this);
      return this._v1;
    }
});

Object.defineProperty(Voice.prototype,
  'byocTrunks', {
    get: function() {
      return this.v1.byocTrunks;
    }
});

Object.defineProperty(Voice.prototype,
  'connectionPolicies', {
    get: function() {
      return this.v1.connectionPolicies;
    }
});

Object.defineProperty(Voice.prototype,
  'dialingPermissions', {
    get: function() {
      return this.v1.dialingPermissions;
    }
});

Object.defineProperty(Voice.prototype,
  'ipRecords', {
    get: function() {
      return this.v1.ipRecords;
    }
});

Object.defineProperty(Voice.prototype,
  'sourceIpMappings', {
    get: function() {
      return this.v1.sourceIpMappings;
    }
});

module.exports = Voice;