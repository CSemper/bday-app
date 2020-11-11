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
var V1 = require('./taskrouter/V1');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize taskrouter domain
 *
 * @constructor Twilio.Taskrouter
 *
 * @property {Twilio.Taskrouter.V1} v1 - v1 version
 * @property {Twilio.Taskrouter.V1.WorkspaceList} workspaces - workspaces resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Taskrouter(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://taskrouter.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Taskrouter.prototype, Domain.prototype);
Taskrouter.prototype.constructor = Taskrouter;

Object.defineProperty(Taskrouter.prototype,
  'v1', {
    get: function() {
      this._v1 = this._v1 || new V1(this);
      return this._v1;
    }
});

Object.defineProperty(Taskrouter.prototype,
  'workspaces', {
    get: function() {
      return this.v1.workspaces;
    }
});

module.exports = Taskrouter;
