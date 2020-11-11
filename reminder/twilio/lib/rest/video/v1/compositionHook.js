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
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var CompositionHookList;
var CompositionHookPage;
var CompositionHookInstance;
var CompositionHookContext;

/* jshint ignore:start */
/**
 * Initialize the CompositionHookList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Video.V1.CompositionHookList
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 */
/* jshint ignore:end */
CompositionHookList = function CompositionHookList(version) {
  /* jshint ignore:start */
  /**
   * @function compositionHooks
   * @memberof Twilio.Video.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Video.V1.CompositionHookContext}
   */
  /* jshint ignore:end */
  function CompositionHookListInstance(sid) {
    return CompositionHookListInstance.get(sid);
  }

  CompositionHookListInstance._version = version;
  // Path Solution
  CompositionHookListInstance._solution = {};
  CompositionHookListInstance._uri = `/CompositionHooks`;
  /* jshint ignore:start */
  /**
   * Streams CompositionHookInstance records from the API.
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
   * @memberof Twilio.Video.V1.CompositionHookList#
   *
   * @param {object} [opts] - Options for request
   * @param {boolean} [opts.enabled] -
   *          Read only CompositionHook resources with an enabled value that matches this parameter
   * @param {Date} [opts.dateCreatedAfter] -
   *          Read only CompositionHook resources created on or after this ISO 8601 datetime with time zone
   * @param {Date} [opts.dateCreatedBefore] -
   *          Read only CompositionHook resources created before this ISO 8601 datetime with time zone
   * @param {string} [opts.friendlyName] -
   *          Read only CompositionHook resources with friendly names that match this string
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
  CompositionHookListInstance.each = function each(opts, callback) {
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
   * Lists CompositionHookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Video.V1.CompositionHookList#
   *
   * @param {object} [opts] - Options for request
   * @param {boolean} [opts.enabled] -
   *          Read only CompositionHook resources with an enabled value that matches this parameter
   * @param {Date} [opts.dateCreatedAfter] -
   *          Read only CompositionHook resources created on or after this ISO 8601 datetime with time zone
   * @param {Date} [opts.dateCreatedBefore] -
   *          Read only CompositionHook resources created before this ISO 8601 datetime with time zone
   * @param {string} [opts.friendlyName] -
   *          Read only CompositionHook resources with friendly names that match this string
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
  CompositionHookListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of CompositionHookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Video.V1.CompositionHookList#
   *
   * @param {object} [opts] - Options for request
   * @param {boolean} [opts.enabled] -
   *          Read only CompositionHook resources with an enabled value that matches this parameter
   * @param {Date} [opts.dateCreatedAfter] -
   *          Read only CompositionHook resources created on or after this ISO 8601 datetime with time zone
   * @param {Date} [opts.dateCreatedBefore] -
   *          Read only CompositionHook resources created before this ISO 8601 datetime with time zone
   * @param {string} [opts.friendlyName] -
   *          Read only CompositionHook resources with friendly names that match this string
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CompositionHookListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Enabled': serialize.bool(_.get(opts, 'enabled')),
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CompositionHookPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of CompositionHookInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.CompositionHookList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CompositionHookListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new CompositionHookPage(this._version, payload, this._solution));
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
   * create a CompositionHookInstance
   *
   * @function create
   * @memberof Twilio.Video.V1.CompositionHookList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.friendlyName - A unique string to describe the resource
   * @param {boolean} [opts.enabled] - Whether the composition hook is active
   * @param {object} [opts.videoLayout] -
   *          An object that describes the video layout of the composition hook
   * @param {string|list} [opts.audioSources] -
   *          An array of track names from the same group room to merge
   * @param {string|list} [opts.audioSourcesExcluded] -
   *          An array of track names to exclude
   * @param {string} [opts.resolution] -
   *          A string that describes the rows (width) and columns (height) of the generated composed video in pixels
   * @param {composition_hook.format} [opts.format] -
   *          The container format of the media files used by the compositions created by the composition hook
   * @param {string} [opts.statusCallback] -
   *          The URL we should call to send status information to your application
   * @param {string} [opts.statusCallbackMethod] -
   *          The HTTP method we should use to call status_callback
   * @param {boolean} [opts.trim] -
   *          Whether to clip the intervals where there is no active media in the Compositions triggered by the composition hook
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed CompositionHookInstance
   */
  /* jshint ignore:end */
  CompositionHookListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Enabled': serialize.bool(_.get(opts, 'enabled')),
      'VideoLayout': serialize.object(_.get(opts, 'videoLayout')),
      'AudioSources': serialize.map(_.get(opts, 'audioSources'), function(e) { return e; }),
      'AudioSourcesExcluded': serialize.map(_.get(opts, 'audioSourcesExcluded'), function(e) { return e; }),
      'Resolution': _.get(opts, 'resolution'),
      'Format': _.get(opts, 'format'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'Trim': serialize.bool(_.get(opts, 'trim'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CompositionHookInstance(this._version, payload, this._solution.sid));
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
   * Constructs a composition_hook
   *
   * @function get
   * @memberof Twilio.Video.V1.CompositionHookList#
   *
   * @param {string} sid - The SID that identifies the resource to fetch
   *
   * @returns {Twilio.Video.V1.CompositionHookContext}
   */
  /* jshint ignore:end */
  CompositionHookListInstance.get = function get(sid) {
    return new CompositionHookContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.CompositionHookList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  CompositionHookListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  CompositionHookListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return CompositionHookListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the CompositionHookPage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Video.V1.CompositionHookPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {CompositionHookSolution} solution - Path solution
 *
 * @returns CompositionHookPage
 */
/* jshint ignore:end */
CompositionHookPage = function CompositionHookPage(version, response, solution)
                                                    {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(CompositionHookPage.prototype, Page.prototype);
CompositionHookPage.prototype.constructor = CompositionHookPage;

/* jshint ignore:start */
/**
 * Build an instance of CompositionHookInstance
 *
 * @function getInstance
 * @memberof Twilio.Video.V1.CompositionHookPage#
 *
 * @param {CompositionHookPayload} payload - Payload response from the API
 *
 * @returns CompositionHookInstance
 */
/* jshint ignore:end */
CompositionHookPage.prototype.getInstance = function getInstance(payload) {
  return new CompositionHookInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Video.V1.CompositionHookPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
CompositionHookPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CompositionHookPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CompositionHookContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Video.V1.CompositionHookInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {boolean} enabled - Whether the CompositionHook is active
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} audioSources -
 *          The array of track names to include in the compositions created by the composition hook
 * @property {string} audioSourcesExcluded -
 *          The array of track names to exclude from the compositions created by the composition hook
 * @property {object} videoLayout -
 *          A JSON object that describes the video layout of the Composition
 * @property {string} resolution -
 *          The dimensions of the video image in pixels expressed as columns (width) and rows (height)
 * @property {boolean} trim - Whether intervals with no media are clipped
 * @property {composition_hook.format} format -
 *          The container format of the media files used by the compositions created by the composition hook
 * @property {string} statusCallback -
 *          The URL to send status information to your application
 * @property {string} statusCallbackMethod -
 *          The HTTP method we should use to call status_callback
 * @property {string} url - The absolute URL of the resource
 *
 * @param {V1} version - Version of the resource
 * @param {CompositionHookPayload} payload - The instance payload
 * @param {sid} sid - The SID that identifies the resource to fetch
 */
/* jshint ignore:end */
CompositionHookInstance = function CompositionHookInstance(version, payload,
                                                            sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.enabled = payload.enabled; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.audioSources = payload.audio_sources; // jshint ignore:line
  this.audioSourcesExcluded = payload.audio_sources_excluded; // jshint ignore:line
  this.videoLayout = payload.video_layout; // jshint ignore:line
  this.resolution = payload.resolution; // jshint ignore:line
  this.trim = payload.trim; // jshint ignore:line
  this.format = payload.format; // jshint ignore:line
  this.statusCallback = payload.status_callback; // jshint ignore:line
  this.statusCallbackMethod = payload.status_callback_method; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(CompositionHookInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new CompositionHookContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a CompositionHookInstance
 *
 * @function fetch
 * @memberof Twilio.Video.V1.CompositionHookInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CompositionHookInstance
 */
/* jshint ignore:end */
CompositionHookInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a CompositionHookInstance
 *
 * @function remove
 * @memberof Twilio.Video.V1.CompositionHookInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CompositionHookInstance
 */
/* jshint ignore:end */
CompositionHookInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a CompositionHookInstance
 *
 * @function update
 * @memberof Twilio.Video.V1.CompositionHookInstance#
 *
 * @param {object} opts - Options for request
 * @param {string} opts.friendlyName - A unique string to describe the resource
 * @param {boolean} [opts.enabled] - Whether the composition hook is active
 * @param {object} [opts.videoLayout] -
 *          A JSON object that describes the video layout of the composition hook
 * @param {string|list} [opts.audioSources] -
 *          An array of track names from the same group room to merge
 * @param {string|list} [opts.audioSourcesExcluded] -
 *          An array of track names to exclude
 * @param {boolean} [opts.trim] -
 *          Whether to clip the intervals where there is no active media in the Compositions triggered by the composition hook
 * @param {composition_hook.format} [opts.format] -
 *          The container format of the media files used by the compositions created by the composition hook
 * @param {string} [opts.resolution] -
 *          A string that describes the columns (width) and rows (height) of the generated composed video in pixels
 * @param {string} [opts.statusCallback] -
 *          The URL we should call to send status information to your application
 * @param {string} [opts.statusCallbackMethod] -
 *          The HTTP method we should use to call status_callback
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CompositionHookInstance
 */
/* jshint ignore:end */
CompositionHookInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Video.V1.CompositionHookInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
CompositionHookInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CompositionHookInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CompositionHookContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Video.V1.CompositionHookContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} sid - The SID that identifies the resource to fetch
 */
/* jshint ignore:end */
CompositionHookContext = function CompositionHookContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/CompositionHooks/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a CompositionHookInstance
 *
 * @function fetch
 * @memberof Twilio.Video.V1.CompositionHookContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CompositionHookInstance
 */
/* jshint ignore:end */
CompositionHookContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new CompositionHookInstance(this._version, payload, this._solution.sid));
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
 * remove a CompositionHookInstance
 *
 * @function remove
 * @memberof Twilio.Video.V1.CompositionHookContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CompositionHookInstance
 */
/* jshint ignore:end */
CompositionHookContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
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
 * update a CompositionHookInstance
 *
 * @function update
 * @memberof Twilio.Video.V1.CompositionHookContext#
 *
 * @param {object} opts - Options for request
 * @param {string} opts.friendlyName - A unique string to describe the resource
 * @param {boolean} [opts.enabled] - Whether the composition hook is active
 * @param {object} [opts.videoLayout] -
 *          A JSON object that describes the video layout of the composition hook
 * @param {string|list} [opts.audioSources] -
 *          An array of track names from the same group room to merge
 * @param {string|list} [opts.audioSourcesExcluded] -
 *          An array of track names to exclude
 * @param {boolean} [opts.trim] -
 *          Whether to clip the intervals where there is no active media in the Compositions triggered by the composition hook
 * @param {composition_hook.format} [opts.format] -
 *          The container format of the media files used by the compositions created by the composition hook
 * @param {string} [opts.resolution] -
 *          A string that describes the columns (width) and rows (height) of the generated composed video in pixels
 * @param {string} [opts.statusCallback] -
 *          The URL we should call to send status information to your application
 * @param {string} [opts.statusCallbackMethod] -
 *          The HTTP method we should use to call status_callback
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CompositionHookInstance
 */
/* jshint ignore:end */
CompositionHookContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameter "opts" missing.');
  }
  if (_.isUndefined(opts.friendlyName)) {
    throw new Error('Required parameter "opts.friendlyName" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'Enabled': serialize.bool(_.get(opts, 'enabled')),
    'VideoLayout': serialize.object(_.get(opts, 'videoLayout')),
    'AudioSources': serialize.map(_.get(opts, 'audioSources'), function(e) { return e; }),
    'AudioSourcesExcluded': serialize.map(_.get(opts, 'audioSourcesExcluded'), function(e) { return e; }),
    'Trim': serialize.bool(_.get(opts, 'trim')),
    'Format': _.get(opts, 'format'),
    'Resolution': _.get(opts, 'resolution'),
    'StatusCallback': _.get(opts, 'statusCallback'),
    'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new CompositionHookInstance(this._version, payload, this._solution.sid));
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
 * @memberof Twilio.Video.V1.CompositionHookContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
CompositionHookContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

CompositionHookContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  CompositionHookList: CompositionHookList,
  CompositionHookPage: CompositionHookPage,
  CompositionHookInstance: CompositionHookInstance,
  CompositionHookContext: CompositionHookContext
};