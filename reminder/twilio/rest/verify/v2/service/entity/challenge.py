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


class ChallengeList(ListResource):
    """ PLEASE NOTE that this class contains beta products that are subject to
    change. Use them with caution. """

    def __init__(self, version, service_sid, identity):
        """
        Initialize the ChallengeList

        :param Version version: Version that contains the resource
        :param service_sid: Service Sid.
        :param identity: Unique external identifier of the Entity

        :returns: twilio.rest.verify.v2.service.entity.challenge.ChallengeList
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeList
        """
        super(ChallengeList, self).__init__(version)

        # Path Solution
        self._solution = {'service_sid': service_sid, 'identity': identity, }
        self._uri = '/Services/{service_sid}/Entities/{identity}/Challenges'.format(**self._solution)

    def create(self, factor_sid, expiration_date=values.unset,
               details_message=values.unset, details_fields=values.unset,
               hidden_details=values.unset):
        """
        Create the ChallengeInstance

        :param unicode factor_sid: Factor Sid.
        :param datetime expiration_date: The future date in which this Challenge will expire
        :param unicode details_message: Shown to the user when the push notification arrives
        :param dict details_fields: A list of objects that describe the Fields included in the Challenge
        :param dict hidden_details: Hidden details provided to contextualize the Challenge

        :returns: The created ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance
        """
        data = values.of({
            'FactorSid': factor_sid,
            'ExpirationDate': serialize.iso8601_datetime(expiration_date),
            'Details.Message': details_message,
            'Details.Fields': serialize.map(details_fields, lambda e: serialize.object(e)),
            'HiddenDetails': serialize.object(hidden_details),
        })

        payload = self._version.create(method='POST', uri=self._uri, data=data, )

        return ChallengeInstance(
            self._version,
            payload,
            service_sid=self._solution['service_sid'],
            identity=self._solution['identity'],
        )

    def stream(self, factor_sid=values.unset, status=values.unset, limit=None,
               page_size=None):
        """
        Streams ChallengeInstance records from the API as a generator stream.
        This operation lazily loads records as efficiently as possible until the limit
        is reached.
        The results are returned as a generator, so this operation is memory efficient.

        :param unicode factor_sid: Factor Sid.
        :param ChallengeInstance.ChallengeStatuses status: The Status of theChallenges to fetch
        :param int limit: Upper limit for the number of records to return. stream()
                          guarantees to never return more than limit.  Default is no limit
        :param int page_size: Number of records to fetch per request, when not set will use
                              the default value of 50 records.  If no page_size is defined
                              but a limit is defined, stream() will attempt to read the
                              limit with the most efficient page size, i.e. min(limit, 1000)

        :returns: Generator that will yield up to limit results
        :rtype: list[twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance]
        """
        limits = self._version.read_limits(limit, page_size)

        page = self.page(factor_sid=factor_sid, status=status, page_size=limits['page_size'], )

        return self._version.stream(page, limits['limit'])

    def list(self, factor_sid=values.unset, status=values.unset, limit=None,
             page_size=None):
        """
        Lists ChallengeInstance records from the API as a list.
        Unlike stream(), this operation is eager and will load `limit` records into
        memory before returning.

        :param unicode factor_sid: Factor Sid.
        :param ChallengeInstance.ChallengeStatuses status: The Status of theChallenges to fetch
        :param int limit: Upper limit for the number of records to return. list() guarantees
                          never to return more than limit.  Default is no limit
        :param int page_size: Number of records to fetch per request, when not set will use
                              the default value of 50 records.  If no page_size is defined
                              but a limit is defined, list() will attempt to read the limit
                              with the most efficient page size, i.e. min(limit, 1000)

        :returns: Generator that will yield up to limit results
        :rtype: list[twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance]
        """
        return list(self.stream(factor_sid=factor_sid, status=status, limit=limit, page_size=page_size, ))

    def page(self, factor_sid=values.unset, status=values.unset,
             page_token=values.unset, page_number=values.unset,
             page_size=values.unset):
        """
        Retrieve a single page of ChallengeInstance records from the API.
        Request is executed immediately

        :param unicode factor_sid: Factor Sid.
        :param ChallengeInstance.ChallengeStatuses status: The Status of theChallenges to fetch
        :param str page_token: PageToken provided by the API
        :param int page_number: Page Number, this value is simply for client state
        :param int page_size: Number of records to return, defaults to 50

        :returns: Page of ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengePage
        """
        data = values.of({
            'FactorSid': factor_sid,
            'Status': status,
            'PageToken': page_token,
            'Page': page_number,
            'PageSize': page_size,
        })

        response = self._version.page(method='GET', uri=self._uri, params=data, )

        return ChallengePage(self._version, response, self._solution)

    def get_page(self, target_url):
        """
        Retrieve a specific page of ChallengeInstance records from the API.
        Request is executed immediately

        :param str target_url: API-generated URL for the requested results page

        :returns: Page of ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengePage
        """
        response = self._version.domain.twilio.request(
            'GET',
            target_url,
        )

        return ChallengePage(self._version, response, self._solution)

    def get(self, sid):
        """
        Constructs a ChallengeContext

        :param sid: A string that uniquely identifies this Challenge.

        :returns: twilio.rest.verify.v2.service.entity.challenge.ChallengeContext
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeContext
        """
        return ChallengeContext(
            self._version,
            service_sid=self._solution['service_sid'],
            identity=self._solution['identity'],
            sid=sid,
        )

    def __call__(self, sid):
        """
        Constructs a ChallengeContext

        :param sid: A string that uniquely identifies this Challenge.

        :returns: twilio.rest.verify.v2.service.entity.challenge.ChallengeContext
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeContext
        """
        return ChallengeContext(
            self._version,
            service_sid=self._solution['service_sid'],
            identity=self._solution['identity'],
            sid=sid,
        )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Verify.V2.ChallengeList>'


class ChallengePage(Page):
    """ PLEASE NOTE that this class contains beta products that are subject to
    change. Use them with caution. """

    def __init__(self, version, response, solution):
        """
        Initialize the ChallengePage

        :param Version version: Version that contains the resource
        :param Response response: Response from the API
        :param service_sid: Service Sid.
        :param identity: Unique external identifier of the Entity

        :returns: twilio.rest.verify.v2.service.entity.challenge.ChallengePage
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengePage
        """
        super(ChallengePage, self).__init__(version, response)

        # Path Solution
        self._solution = solution

    def get_instance(self, payload):
        """
        Build an instance of ChallengeInstance

        :param dict payload: Payload response from the API

        :returns: twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance
        """
        return ChallengeInstance(
            self._version,
            payload,
            service_sid=self._solution['service_sid'],
            identity=self._solution['identity'],
        )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Verify.V2.ChallengePage>'


class ChallengeContext(InstanceContext):
    """ PLEASE NOTE that this class contains beta products that are subject to
    change. Use them with caution. """

    def __init__(self, version, service_sid, identity, sid):
        """
        Initialize the ChallengeContext

        :param Version version: Version that contains the resource
        :param service_sid: Service Sid.
        :param identity: Unique external identifier of the Entity
        :param sid: A string that uniquely identifies this Challenge.

        :returns: twilio.rest.verify.v2.service.entity.challenge.ChallengeContext
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeContext
        """
        super(ChallengeContext, self).__init__(version)

        # Path Solution
        self._solution = {'service_sid': service_sid, 'identity': identity, 'sid': sid, }
        self._uri = '/Services/{service_sid}/Entities/{identity}/Challenges/{sid}'.format(**self._solution)

    def fetch(self):
        """
        Fetch the ChallengeInstance

        :returns: The fetched ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance
        """
        payload = self._version.fetch(method='GET', uri=self._uri, )

        return ChallengeInstance(
            self._version,
            payload,
            service_sid=self._solution['service_sid'],
            identity=self._solution['identity'],
            sid=self._solution['sid'],
        )

    def update(self, auth_payload=values.unset):
        """
        Update the ChallengeInstance

        :param unicode auth_payload: Optional payload to verify the Challenge

        :returns: The updated ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance
        """
        data = values.of({'AuthPayload': auth_payload, })

        payload = self._version.update(method='POST', uri=self._uri, data=data, )

        return ChallengeInstance(
            self._version,
            payload,
            service_sid=self._solution['service_sid'],
            identity=self._solution['identity'],
            sid=self._solution['sid'],
        )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Verify.V2.ChallengeContext {}>'.format(context)


class ChallengeInstance(InstanceResource):
    """ PLEASE NOTE that this class contains beta products that are subject to
    change. Use them with caution. """

    class ChallengeStatuses(object):
        PENDING = "pending"
        EXPIRED = "expired"
        APPROVED = "approved"
        DENIED = "denied"

    class ChallengeReasons(object):
        NONE = "none"
        NOT_NEEDED = "not_needed"
        NOT_REQUESTED = "not_requested"

    class FactorTypes(object):
        PUSH = "push"

    def __init__(self, version, payload, service_sid, identity, sid=None):
        """
        Initialize the ChallengeInstance

        :returns: twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance
        """
        super(ChallengeInstance, self).__init__(version)

        # Marshaled Properties
        self._properties = {
            'sid': payload.get('sid'),
            'account_sid': payload.get('account_sid'),
            'service_sid': payload.get('service_sid'),
            'entity_sid': payload.get('entity_sid'),
            'identity': payload.get('identity'),
            'factor_sid': payload.get('factor_sid'),
            'date_created': deserialize.iso8601_datetime(payload.get('date_created')),
            'date_updated': deserialize.iso8601_datetime(payload.get('date_updated')),
            'date_responded': deserialize.iso8601_datetime(payload.get('date_responded')),
            'expiration_date': deserialize.iso8601_datetime(payload.get('expiration_date')),
            'status': payload.get('status'),
            'responded_reason': payload.get('responded_reason'),
            'details': payload.get('details'),
            'hidden_details': payload.get('hidden_details'),
            'factor_type': payload.get('factor_type'),
            'url': payload.get('url'),
        }

        # Context
        self._context = None
        self._solution = {
            'service_sid': service_sid,
            'identity': identity,
            'sid': sid or self._properties['sid'],
        }

    @property
    def _proxy(self):
        """
        Generate an instance context for the instance, the context is capable of
        performing various actions.  All instance actions are proxied to the context

        :returns: ChallengeContext for this ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeContext
        """
        if self._context is None:
            self._context = ChallengeContext(
                self._version,
                service_sid=self._solution['service_sid'],
                identity=self._solution['identity'],
                sid=self._solution['sid'],
            )
        return self._context

    @property
    def sid(self):
        """
        :returns: A string that uniquely identifies this Challenge.
        :rtype: unicode
        """
        return self._properties['sid']

    @property
    def account_sid(self):
        """
        :returns: Account Sid.
        :rtype: unicode
        """
        return self._properties['account_sid']

    @property
    def service_sid(self):
        """
        :returns: Service Sid.
        :rtype: unicode
        """
        return self._properties['service_sid']

    @property
    def entity_sid(self):
        """
        :returns: Entity Sid.
        :rtype: unicode
        """
        return self._properties['entity_sid']

    @property
    def identity(self):
        """
        :returns: Unique external identifier of the Entity
        :rtype: unicode
        """
        return self._properties['identity']

    @property
    def factor_sid(self):
        """
        :returns: Factor Sid.
        :rtype: unicode
        """
        return self._properties['factor_sid']

    @property
    def date_created(self):
        """
        :returns: The date this Challenge was created
        :rtype: datetime
        """
        return self._properties['date_created']

    @property
    def date_updated(self):
        """
        :returns: The date this Challenge was updated
        :rtype: datetime
        """
        return self._properties['date_updated']

    @property
    def date_responded(self):
        """
        :returns: The date this Challenge was responded
        :rtype: datetime
        """
        return self._properties['date_responded']

    @property
    def expiration_date(self):
        """
        :returns: The date this Challenge is expired
        :rtype: datetime
        """
        return self._properties['expiration_date']

    @property
    def status(self):
        """
        :returns: The Status of this Challenge
        :rtype: ChallengeInstance.ChallengeStatuses
        """
        return self._properties['status']

    @property
    def responded_reason(self):
        """
        :returns: The Reason of this Challenge `status`
        :rtype: ChallengeInstance.ChallengeReasons
        """
        return self._properties['responded_reason']

    @property
    def details(self):
        """
        :returns: Details about the Challenge.
        :rtype: dict
        """
        return self._properties['details']

    @property
    def hidden_details(self):
        """
        :returns: Hidden details about the Challenge
        :rtype: dict
        """
        return self._properties['hidden_details']

    @property
    def factor_type(self):
        """
        :returns: The Factor Type of this Challenge
        :rtype: ChallengeInstance.FactorTypes
        """
        return self._properties['factor_type']

    @property
    def url(self):
        """
        :returns: The URL of this resource.
        :rtype: unicode
        """
        return self._properties['url']

    def fetch(self):
        """
        Fetch the ChallengeInstance

        :returns: The fetched ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance
        """
        return self._proxy.fetch()

    def update(self, auth_payload=values.unset):
        """
        Update the ChallengeInstance

        :param unicode auth_payload: Optional payload to verify the Challenge

        :returns: The updated ChallengeInstance
        :rtype: twilio.rest.verify.v2.service.entity.challenge.ChallengeInstance
        """
        return self._proxy.update(auth_payload=auth_payload, )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Verify.V2.ChallengeInstance {}>'.format(context)
