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


class RoleList(ListResource):

    def __init__(self, version):
        """
        Initialize the RoleList

        :param Version version: Version that contains the resource

        :returns: twilio.rest.conversations.v1.role.RoleList
        :rtype: twilio.rest.conversations.v1.role.RoleList
        """
        super(RoleList, self).__init__(version)

        # Path Solution
        self._solution = {}
        self._uri = '/Roles'.format(**self._solution)

    def create(self, friendly_name, type, permission):
        """
        Create the RoleInstance

        :param unicode friendly_name: A string to describe the new resource
        :param RoleInstance.RoleType type: The type of role
        :param unicode permission: A permission the role should have

        :returns: The created RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RoleInstance
        """
        data = values.of({
            'FriendlyName': friendly_name,
            'Type': type,
            'Permission': serialize.map(permission, lambda e: e),
        })

        payload = self._version.create(method='POST', uri=self._uri, data=data, )

        return RoleInstance(self._version, payload, )

    def stream(self, limit=None, page_size=None):
        """
        Streams RoleInstance records from the API as a generator stream.
        This operation lazily loads records as efficiently as possible until the limit
        is reached.
        The results are returned as a generator, so this operation is memory efficient.

        :param int limit: Upper limit for the number of records to return. stream()
                          guarantees to never return more than limit.  Default is no limit
        :param int page_size: Number of records to fetch per request, when not set will use
                              the default value of 50 records.  If no page_size is defined
                              but a limit is defined, stream() will attempt to read the
                              limit with the most efficient page size, i.e. min(limit, 1000)

        :returns: Generator that will yield up to limit results
        :rtype: list[twilio.rest.conversations.v1.role.RoleInstance]
        """
        limits = self._version.read_limits(limit, page_size)

        page = self.page(page_size=limits['page_size'], )

        return self._version.stream(page, limits['limit'])

    def list(self, limit=None, page_size=None):
        """
        Lists RoleInstance records from the API as a list.
        Unlike stream(), this operation is eager and will load `limit` records into
        memory before returning.

        :param int limit: Upper limit for the number of records to return. list() guarantees
                          never to return more than limit.  Default is no limit
        :param int page_size: Number of records to fetch per request, when not set will use
                              the default value of 50 records.  If no page_size is defined
                              but a limit is defined, list() will attempt to read the limit
                              with the most efficient page size, i.e. min(limit, 1000)

        :returns: Generator that will yield up to limit results
        :rtype: list[twilio.rest.conversations.v1.role.RoleInstance]
        """
        return list(self.stream(limit=limit, page_size=page_size, ))

    def page(self, page_token=values.unset, page_number=values.unset,
             page_size=values.unset):
        """
        Retrieve a single page of RoleInstance records from the API.
        Request is executed immediately

        :param str page_token: PageToken provided by the API
        :param int page_number: Page Number, this value is simply for client state
        :param int page_size: Number of records to return, defaults to 50

        :returns: Page of RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RolePage
        """
        data = values.of({'PageToken': page_token, 'Page': page_number, 'PageSize': page_size, })

        response = self._version.page(method='GET', uri=self._uri, params=data, )

        return RolePage(self._version, response, self._solution)

    def get_page(self, target_url):
        """
        Retrieve a specific page of RoleInstance records from the API.
        Request is executed immediately

        :param str target_url: API-generated URL for the requested results page

        :returns: Page of RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RolePage
        """
        response = self._version.domain.twilio.request(
            'GET',
            target_url,
        )

        return RolePage(self._version, response, self._solution)

    def get(self, sid):
        """
        Constructs a RoleContext

        :param sid: The SID of the Role resource to fetch

        :returns: twilio.rest.conversations.v1.role.RoleContext
        :rtype: twilio.rest.conversations.v1.role.RoleContext
        """
        return RoleContext(self._version, sid=sid, )

    def __call__(self, sid):
        """
        Constructs a RoleContext

        :param sid: The SID of the Role resource to fetch

        :returns: twilio.rest.conversations.v1.role.RoleContext
        :rtype: twilio.rest.conversations.v1.role.RoleContext
        """
        return RoleContext(self._version, sid=sid, )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Conversations.V1.RoleList>'


class RolePage(Page):

    def __init__(self, version, response, solution):
        """
        Initialize the RolePage

        :param Version version: Version that contains the resource
        :param Response response: Response from the API

        :returns: twilio.rest.conversations.v1.role.RolePage
        :rtype: twilio.rest.conversations.v1.role.RolePage
        """
        super(RolePage, self).__init__(version, response)

        # Path Solution
        self._solution = solution

    def get_instance(self, payload):
        """
        Build an instance of RoleInstance

        :param dict payload: Payload response from the API

        :returns: twilio.rest.conversations.v1.role.RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RoleInstance
        """
        return RoleInstance(self._version, payload, )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Conversations.V1.RolePage>'


class RoleContext(InstanceContext):

    def __init__(self, version, sid):
        """
        Initialize the RoleContext

        :param Version version: Version that contains the resource
        :param sid: The SID of the Role resource to fetch

        :returns: twilio.rest.conversations.v1.role.RoleContext
        :rtype: twilio.rest.conversations.v1.role.RoleContext
        """
        super(RoleContext, self).__init__(version)

        # Path Solution
        self._solution = {'sid': sid, }
        self._uri = '/Roles/{sid}'.format(**self._solution)

    def update(self, permission):
        """
        Update the RoleInstance

        :param unicode permission: A permission the role should have

        :returns: The updated RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RoleInstance
        """
        data = values.of({'Permission': serialize.map(permission, lambda e: e), })

        payload = self._version.update(method='POST', uri=self._uri, data=data, )

        return RoleInstance(self._version, payload, sid=self._solution['sid'], )

    def delete(self):
        """
        Deletes the RoleInstance

        :returns: True if delete succeeds, False otherwise
        :rtype: bool
        """
        return self._version.delete(method='DELETE', uri=self._uri, )

    def fetch(self):
        """
        Fetch the RoleInstance

        :returns: The fetched RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RoleInstance
        """
        payload = self._version.fetch(method='GET', uri=self._uri, )

        return RoleInstance(self._version, payload, sid=self._solution['sid'], )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Conversations.V1.RoleContext {}>'.format(context)


class RoleInstance(InstanceResource):

    class RoleType(object):
        CONVERSATION = "conversation"
        SERVICE = "service"

    def __init__(self, version, payload, sid=None):
        """
        Initialize the RoleInstance

        :returns: twilio.rest.conversations.v1.role.RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RoleInstance
        """
        super(RoleInstance, self).__init__(version)

        # Marshaled Properties
        self._properties = {
            'sid': payload.get('sid'),
            'account_sid': payload.get('account_sid'),
            'chat_service_sid': payload.get('chat_service_sid'),
            'friendly_name': payload.get('friendly_name'),
            'type': payload.get('type'),
            'permissions': payload.get('permissions'),
            'date_created': deserialize.iso8601_datetime(payload.get('date_created')),
            'date_updated': deserialize.iso8601_datetime(payload.get('date_updated')),
            'url': payload.get('url'),
        }

        # Context
        self._context = None
        self._solution = {'sid': sid or self._properties['sid'], }

    @property
    def _proxy(self):
        """
        Generate an instance context for the instance, the context is capable of
        performing various actions.  All instance actions are proxied to the context

        :returns: RoleContext for this RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RoleContext
        """
        if self._context is None:
            self._context = RoleContext(self._version, sid=self._solution['sid'], )
        return self._context

    @property
    def sid(self):
        """
        :returns: The unique string that identifies the resource
        :rtype: unicode
        """
        return self._properties['sid']

    @property
    def account_sid(self):
        """
        :returns: The SID of the Account that created the resource
        :rtype: unicode
        """
        return self._properties['account_sid']

    @property
    def chat_service_sid(self):
        """
        :returns: The SID of the Conversation Service that the resource is associated with
        :rtype: unicode
        """
        return self._properties['chat_service_sid']

    @property
    def friendly_name(self):
        """
        :returns: The string that you assigned to describe the resource
        :rtype: unicode
        """
        return self._properties['friendly_name']

    @property
    def type(self):
        """
        :returns: The type of role
        :rtype: RoleInstance.RoleType
        """
        return self._properties['type']

    @property
    def permissions(self):
        """
        :returns: An array of the permissions the role has been granted
        :rtype: unicode
        """
        return self._properties['permissions']

    @property
    def date_created(self):
        """
        :returns: The ISO 8601 date and time in GMT when the resource was created
        :rtype: datetime
        """
        return self._properties['date_created']

    @property
    def date_updated(self):
        """
        :returns: The ISO 8601 date and time in GMT when the resource was last updated
        :rtype: datetime
        """
        return self._properties['date_updated']

    @property
    def url(self):
        """
        :returns: An absolute URL for this user role.
        :rtype: unicode
        """
        return self._properties['url']

    def update(self, permission):
        """
        Update the RoleInstance

        :param unicode permission: A permission the role should have

        :returns: The updated RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RoleInstance
        """
        return self._proxy.update(permission, )

    def delete(self):
        """
        Deletes the RoleInstance

        :returns: True if delete succeeds, False otherwise
        :rtype: bool
        """
        return self._proxy.delete()

    def fetch(self):
        """
        Fetch the RoleInstance

        :returns: The fetched RoleInstance
        :rtype: twilio.rest.conversations.v1.role.RoleInstance
        """
        return self._proxy.fetch()

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Conversations.V1.RoleInstance {}>'.format(context)
