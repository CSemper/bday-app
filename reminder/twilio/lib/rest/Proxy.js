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
var V1 = require('./proxy/V1');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize proxy domain
 *
 * @constructor Twilio.Proxy
 *
 * @property {Twilio.Proxy.V1} v1 - v1 version
 * @property {Twilio.Proxy.V1.ServiceList} services - services resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Proxy(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://proxy.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Proxy.prototype, Domain.prototype);
Proxy.prototype.constructor = Proxy;

Object.defineProperty(Proxy.prototype,
  'v1', {
    get: function() {
      this._v1 = this._v1 || new V1(this);
      return this._v1;
    }
});

Object.defineProperty(Proxy.prototype,
  'services', {
    get: function() {
      return this.v1.services;
    }
});

module.exports = Proxy;
