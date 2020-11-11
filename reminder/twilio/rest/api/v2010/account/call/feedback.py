# coding=utf-8
r"""
This code was generated by
\ / _    _  _|   _  _
 | (_)\/(_)(_|\/| |(/_  v1.0.0
      /       /
"""

from twilio.base import deserialize
from twilio.base import serialize
from twilio.base import values
from twilio.base.instance_context import InstanceContext
from twilio.base.instance_resource import InstanceResource
from twilio.base.list_resource import ListResource
from twilio.base.page import Page


class FeedbackList(ListResource):

    def __init__(self, version, account_sid, call_sid):
        """
        Initialize the FeedbackList

        :param Version version: Version that contains the resource
        :param account_sid: The unique sid that identifies this account
        :param call_sid: The unique string that identifies this resource

        :returns: twilio.rest.api.v2010.account.call.feedback.FeedbackList
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackList
        """
        super(FeedbackList, self).__init__(version)

        # Path Solution
        self._solution = {'account_sid': account_sid, 'call_sid': call_sid, }

    def get(self):
        """
        Constructs a FeedbackContext

        :returns: twilio.rest.api.v2010.account.call.feedback.FeedbackContext
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackContext
        """
        return FeedbackContext(
            self._version,
            account_sid=self._solution['account_sid'],
            call_sid=self._solution['call_sid'],
        )

    def __call__(self):
        """
        Constructs a FeedbackContext

        :returns: twilio.rest.api.v2010.account.call.feedback.FeedbackContext
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackContext
        """
        return FeedbackContext(
            self._version,
            account_sid=self._solution['account_sid'],
            call_sid=self._solution['call_sid'],
        )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Api.V2010.FeedbackList>'


class FeedbackPage(Page):

    def __init__(self, version, response, solution):
        """
        Initialize the FeedbackPage

        :param Version version: Version that contains the resource
        :param Response response: Response from the API
        :param account_sid: The unique sid that identifies this account
        :param call_sid: The unique string that identifies this resource

        :returns: twilio.rest.api.v2010.account.call.feedback.FeedbackPage
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackPage
        """
        super(FeedbackPage, self).__init__(version, response)

        # Path Solution
        self._solution = solution

    def get_instance(self, payload):
        """
        Build an instance of FeedbackInstance

        :param dict payload: Payload response from the API

        :returns: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        """
        return FeedbackInstance(
            self._version,
            payload,
            account_sid=self._solution['account_sid'],
            call_sid=self._solution['call_sid'],
        )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Api.V2010.FeedbackPage>'


class FeedbackContext(InstanceContext):

    def __init__(self, version, account_sid, call_sid):
        """
        Initialize the FeedbackContext

        :param Version version: Version that contains the resource
        :param account_sid: The unique sid that identifies this account
        :param call_sid: The call sid that uniquely identifies the call

        :returns: twilio.rest.api.v2010.account.call.feedback.FeedbackContext
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackContext
        """
        super(FeedbackContext, self).__init__(version)

        # Path Solution
        self._solution = {'account_sid': account_sid, 'call_sid': call_sid, }
        self._uri = '/Accounts/{account_sid}/Calls/{call_sid}/Feedback.json'.format(**self._solution)

    def create(self, quality_score, issue=values.unset):
        """
        Create the FeedbackInstance

        :param unicode quality_score: The call quality expressed as an integer from 1 to 5
        :param FeedbackInstance.Issues issue: Issues experienced during the call

        :returns: The created FeedbackInstance
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        """
        data = values.of({'QualityScore': quality_score, 'Issue': serialize.map(issue, lambda e: e), })

        payload = self._version.create(method='POST', uri=self._uri, data=data, )

        return FeedbackInstance(
            self._version,
            payload,
            account_sid=self._solution['account_sid'],
            call_sid=self._solution['call_sid'],
        )

    def fetch(self):
        """
        Fetch the FeedbackInstance

        :returns: The fetched FeedbackInstance
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        """
        payload = self._version.fetch(method='GET', uri=self._uri, )

        return FeedbackInstance(
            self._version,
            payload,
            account_sid=self._solution['account_sid'],
            call_sid=self._solution['call_sid'],
        )

    def update(self, quality_score, issue=values.unset):
        """
        Update the FeedbackInstance

        :param unicode quality_score: The call quality expressed as an integer from 1 to 5
        :param FeedbackInstance.Issues issue: Issues experienced during the call

        :returns: The updated FeedbackInstance
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        """
        data = values.of({'QualityScore': quality_score, 'Issue': serialize.map(issue, lambda e: e), })

        payload = self._version.update(method='POST', uri=self._uri, data=data, )

        return FeedbackInstance(
            self._version,
            payload,
            account_sid=self._solution['account_sid'],
            call_sid=self._solution['call_sid'],
        )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Api.V2010.FeedbackContext {}>'.format(context)


class FeedbackInstance(InstanceResource):

    class Issues(object):
        AUDIO_LATENCY = "audio-latency"
        DIGITS_NOT_CAPTURED = "digits-not-captured"
        DROPPED_CALL = "dropped-call"
        IMPERFECT_AUDIO = "imperfect-audio"
        INCORRECT_CALLER_ID = "incorrect-caller-id"
        ONE_WAY_AUDIO = "one-way-audio"
        POST_DIAL_DELAY = "post-dial-delay"
        UNSOLICITED_CALL = "unsolicited-call"

    def __init__(self, version, payload, account_sid, call_sid):
        """
        Initialize the FeedbackInstance

        :returns: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        """
        super(FeedbackInstance, self).__init__(version)

        # Marshaled Properties
        self._properties = {
            'account_sid': payload.get('account_sid'),
            'date_created': deserialize.rfc2822_datetime(payload.get('date_created')),
            'date_updated': deserialize.rfc2822_datetime(payload.get('date_updated')),
            'issues': payload.get('issues'),
            'quality_score': deserialize.integer(payload.get('quality_score')),
            'sid': payload.get('sid'),
        }

        # Context
        self._context = None
        self._solution = {'account_sid': account_sid, 'call_sid': call_sid, }

    @property
    def _proxy(self):
        """
        Generate an instance context for the instance, the context is capable of
        performing various actions.  All instance actions are proxied to the context

        :returns: FeedbackContext for this FeedbackInstance
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackContext
        """
        if self._context is None:
            self._context = FeedbackContext(
                self._version,
                account_sid=self._solution['account_sid'],
                call_sid=self._solution['call_sid'],
            )
        return self._context

    @property
    def account_sid(self):
        """
        :returns: The unique sid that identifies this account
        :rtype: unicode
        """
        return self._properties['account_sid']

    @property
    def date_created(self):
        """
        :returns: The date this resource was created
        :rtype: datetime
        """
        return self._properties['date_created']

    @property
    def date_updated(self):
        """
        :returns: The date this resource was last updated
        :rtype: datetime
        """
        return self._properties['date_updated']

    @property
    def issues(self):
        """
        :returns: Issues experienced during the call
        :rtype: FeedbackInstance.Issues
        """
        return self._properties['issues']

    @property
    def quality_score(self):
        """
        :returns: 1 to 5 quality score
        :rtype: unicode
        """
        return self._properties['quality_score']

    @property
    def sid(self):
        """
        :returns: A string that uniquely identifies this feedback resource
        :rtype: unicode
        """
        return self._properties['sid']

    def create(self, quality_score, issue=values.unset):
        """
        Create the FeedbackInstance

        :param unicode quality_score: The call quality expressed as an integer from 1 to 5
        :param FeedbackInstance.Issues issue: Issues experienced during the call

        :returns: The created FeedbackInstance
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        """
        return self._proxy.create(quality_score, issue=issue, )

    def fetch(self):
        """
        Fetch the FeedbackInstance

        :returns: The fetched FeedbackInstance
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        """
        return self._proxy.fetch()

    def update(self, quality_score, issue=values.unset):
        """
        Update the FeedbackInstance

        :param unicode quality_score: The call quality expressed as an integer from 1 to 5
        :param FeedbackInstance.Issues issue: Issues experienced during the call

        :returns: The updated FeedbackInstance
        :rtype: twilio.rest.api.v2010.account.call.feedback.FeedbackInstance
        """
        return self._proxy.update(quality_score, issue=issue, )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Api.V2010.FeedbackInstance {}>'.format(context)
