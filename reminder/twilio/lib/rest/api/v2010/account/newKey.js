'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var NewKeyList;
var NewKeyPage;
var NewKeyInstance;

/* jshint ignore:start */
/**
 * Initialize the NewKeyList
 *
 * @constructor Twilio.Api.V2010.AccountContext.NewKeyList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
NewKeyList = function NewKeyList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function newKeys
   * @memberof Twilio.Api.V2010.AccountContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.NewKeyContext}
   */
  /* jshint ignore:end */
  function NewKeyListInstance(sid) {
    return NewKeyListInstance.get(sid);
  }

  NewKeyListInstance._version = version;
  // Path Solution
  NewKeyListInstance._solution = {accountSid: accountSid};
  NewKeyListInstance._uri = `/Accounts/${accountSid}/Keys.json`;
  /* jshint ignore:start */
  /**
   * create a NewKeyInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.NewKeyList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.friendlyName] - A string to describe the resource
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed NewKeyInstance
   */
  /* jshint ignore:end */
  NewKeyListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({'FriendlyName': _.get(opts, 'friendlyName')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new NewKeyInstance(this._version, payload));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.NewKeyList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  NewKeyListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  NewKeyListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return NewKeyListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the NewKeyPage
 *
 * @constructor Twilio.Api.V2010.AccountContext.NewKeyPage
 *
 * @param {V2010} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {NewKeySolution} solution - Path solution
 *
 * @returns NewKeyPage
 */
/* jshint ignore:end */
NewKeyPage = function NewKeyPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(NewKeyPage.prototype, Page.prototype);
NewKeyPage.prototype.constructor = NewKeyPage;

/* jshint ignore:start */
/**
 * Build an instance of NewKeyInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.NewKeyPage#
 *
 * @param {NewKeyPayload} payload - Payload response from the API
 *
 * @returns NewKeyInstance
 */
/* jshint ignore:end */
NewKeyPage.prototype.getInstance = function getInstance(payload) {
  return new NewKeyInstance(this._version, payload, this._solution.accountSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.NewKeyPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
NewKeyPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

NewKeyPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the NewKeyContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.NewKeyInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {Date} dateCreated -
 *          The RFC 2822 date and time in GMT that the resource was created
 * @property {Date} dateUpdated -
 *          The RFC 2822 date and time in GMT that the resource was last updated
 * @property {string} secret -
 *          The secret your application uses to sign Access Tokens and to authenticate to the REST API.
 *
 * @param {V2010} version - Version of the resource
 * @param {NewKeyPayload} payload - The instance payload
 * @param {sid} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
NewKeyInstance = function NewKeyInstance(version, payload, accountSid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.secret = payload.secret; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, };
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.NewKeyInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
NewKeyInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

NewKeyInstance.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  NewKeyList: NewKeyList,
  NewKeyPage: NewKeyPage,
  NewKeyInstance: NewKeyInstance
};