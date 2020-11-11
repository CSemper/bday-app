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
var values = require('../../../../base/values');  /* jshint ignore:line */

var ExportCustomJobList;
var ExportCustomJobPage;
var ExportCustomJobInstance;

/* jshint ignore:start */
/**
 * Initialize the ExportCustomJobList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Bulkexports.V1.ExportContext.ExportCustomJobList
 *
 * @param {Twilio.Bulkexports.V1} version - Version of the resource
 * @param {string} resourceType - The type of communication – Messages, Calls
 */
/* jshint ignore:end */
ExportCustomJobList = function ExportCustomJobList(version, resourceType) {
  /* jshint ignore:start */
  /**
   * @function exportCustomJobs
   * @memberof Twilio.Bulkexports.V1.ExportContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Bulkexports.V1.ExportContext.ExportCustomJobContext}
   */
  /* jshint ignore:end */
  function ExportCustomJobListInstance(sid) {
    return ExportCustomJobListInstance.get(sid);
  }

  ExportCustomJobListInstance._version = version;
  // Path Solution
  ExportCustomJobListInstance._solution = {resourceType: resourceType};
  ExportCustomJobListInstance._uri = `/Exports/${resourceType}/Jobs`;
  /* jshint ignore:start */
  /**
   * Streams ExportCustomJobInstance records from the API.
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
   * @function each
   * @memberof Twilio.Bulkexports.V1.ExportContext.ExportCustomJobList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  ExportCustomJobListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists ExportCustomJobInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Bulkexports.V1.ExportContext.ExportCustomJobList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ExportCustomJobListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of ExportCustomJobInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Bulkexports.V1.ExportContext.ExportCustomJobList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ExportCustomJobListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ExportCustomJobPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of ExportCustomJobInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Bulkexports.V1.ExportContext.ExportCustomJobList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ExportCustomJobListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ExportCustomJobPage(this._version, payload, this._solution));
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
   * create a ExportCustomJobInstance
   *
   * @function create
   * @memberof Twilio.Bulkexports.V1.ExportContext.ExportCustomJobList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.startDay -
   *          The start day for the custom export specified as a string in the format of yyyy-mm-dd
   * @param {string} opts.endDay -
   *          The end day for the custom export specified as a string in the format of yyyy-mm-dd. End day is inclusive and must be 2 days earlier than the current UTC day.
   * @param {string} opts.friendlyName -
   *          The friendly name specified when creating the job
   * @param {string} [opts.webhookUrl] -
   *          The optional webhook url called on completion of the job. If this is supplied, `WebhookMethod` must also be supplied.
   * @param {string} [opts.webhookMethod] -
   *          This is the method used to call the webhook on completion of the job. If this is supplied, `WebhookUrl` must also be supplied.
   * @param {string} [opts.email] -
   *          The optional email to send the completion notification to
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ExportCustomJobInstance
   */
  /* jshint ignore:end */
  ExportCustomJobListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.startDay)) {
      throw new Error('Required parameter "opts.startDay" missing.');
    }
    if (_.isUndefined(opts.endDay)) {
      throw new Error('Required parameter "opts.endDay" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'StartDay': _.get(opts, 'startDay'),
      'EndDay': _.get(opts, 'endDay'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'WebhookUrl': _.get(opts, 'webhookUrl'),
      'WebhookMethod': _.get(opts, 'webhookMethod'),
      'Email': _.get(opts, 'email')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ExportCustomJobInstance(this._version, payload));
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
   * @memberof Twilio.Bulkexports.V1.ExportContext.ExportCustomJobList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ExportCustomJobListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ExportCustomJobListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return ExportCustomJobListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ExportCustomJobPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Bulkexports.V1.ExportContext.ExportCustomJobPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ExportCustomJobSolution} solution - Path solution
 *
 * @returns ExportCustomJobPage
 */
/* jshint ignore:end */
ExportCustomJobPage = function ExportCustomJobPage(version, response, solution)
                                                    {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ExportCustomJobPage.prototype, Page.prototype);
ExportCustomJobPage.prototype.constructor = ExportCustomJobPage;

/* jshint ignore:start */
/**
 * Build an instance of ExportCustomJobInstance
 *
 * @function getInstance
 * @memberof Twilio.Bulkexports.V1.ExportContext.ExportCustomJobPage#
 *
 * @param {ExportCustomJobPayload} payload - Payload response from the API
 *
 * @returns ExportCustomJobInstance
 */
/* jshint ignore:end */
ExportCustomJobPage.prototype.getInstance = function getInstance(payload) {
  return new ExportCustomJobInstance(this._version, payload, this._solution.resourceType);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Bulkexports.V1.ExportContext.ExportCustomJobPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExportCustomJobPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ExportCustomJobPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ExportCustomJobContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Bulkexports.V1.ExportContext.ExportCustomJobInstance
 *
 * @property {string} friendlyName -
 *          The friendly name specified when creating the job
 * @property {string} resourceType - The type of communication – Messages, Calls
 * @property {string} startDay -
 *          The start day for the custom export specified as a string in the format of yyyy-MM-dd
 * @property {string} endDay -
 *          The end day for the custom export specified as a string in the format of yyyy-MM-dd. This will be the last day exported. For instance, to export a single day, choose the same day for start and end day. To export the first 4 days of July, you would set the start date to 2020-07-01 and the end date to 2020-07-04. The end date must be the UTC day before yesterday.
 * @property {string} webhookUrl - The optional webhook url called on completion
 * @property {string} webhookMethod - This is the method used to call the webhook
 * @property {string} email -
 *          The optional email to send the completion notification to
 * @property {string} jobSid -
 *          The unique job_sid returned when the custom export was created. This can be used to look up the status of the job.
 * @property {object} details -
 *          The details of a job state which is an object that contains a status string, a day count integer, and list of days in the job
 *
 * @param {V1} version - Version of the resource
 * @param {ExportCustomJobPayload} payload - The instance payload
 * @param {string} resourceType - The type of communication – Messages, Calls
 */
/* jshint ignore:end */
ExportCustomJobInstance = function ExportCustomJobInstance(version, payload,
                                                            resourceType) {
  this._version = version;

  // Marshaled Properties
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.resourceType = payload.resource_type; // jshint ignore:line
  this.startDay = payload.start_day; // jshint ignore:line
  this.endDay = payload.end_day; // jshint ignore:line
  this.webhookUrl = payload.webhook_url; // jshint ignore:line
  this.webhookMethod = payload.webhook_method; // jshint ignore:line
  this.email = payload.email; // jshint ignore:line
  this.jobSid = payload.job_sid; // jshint ignore:line
  this.details = payload.details; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {resourceType: resourceType, };
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Bulkexports.V1.ExportContext.ExportCustomJobInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExportCustomJobInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ExportCustomJobInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ExportCustomJobList: ExportCustomJobList,
  ExportCustomJobPage: ExportCustomJobPage,
  ExportCustomJobInstance: ExportCustomJobInstance
};
