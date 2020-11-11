# coding=utf-8
r"""
This code was generated by
\ / _    _  _|   _  _
 | (_)\/(_)(_|\/| |(/_  v1.0.0
      /       /
"""

from twilio.base import deserialize
from twilio.base import values
from twilio.base.instance_context import InstanceContext
from twilio.base.instance_resource import InstanceResource
from twilio.base.list_resource import ListResource
from twilio.base.page import Page


class DayList(ListResource):
    """ PLEASE NOTE that this class contains beta products that are subject to
    change. Use them with caution. """

    def __init__(self, version, resource_type):
        """
        Initialize the DayList

        :param Version version: Version that contains the resource
        :param resource_type: The type of communication – Messages, Calls

        :returns: twilio.rest.bulkexports.v1.export.day.DayList
        :rtype: twilio.rest.bulkexports.v1.export.day.DayList
        """
        super(DayList, self).__init__(version)

        # Path Solution
        self._solution = {'resource_type': resource_type, }
        self._uri = '/Exports/{resource_type}/Days'.format(**self._solution)

    def stream(self, limit=None, page_size=None):
        """
        Streams DayInstance records from the API as a generator stream.
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
        :rtype: list[twilio.rest.bulkexports.v1.export.day.DayInstance]
        """
        limits = self._version.read_limits(limit, page_size)

        page = self.page(page_size=limits['page_size'], )

        return self._version.stream(page, limits['limit'])

    def list(self, limit=None, page_size=None):
        """
        Lists DayInstance records from the API as a list.
        Unlike stream(), this operation is eager and will load `limit` records into
        memory before returning.

        :param int limit: Upper limit for the number of records to return. list() guarantees
                          never to return more than limit.  Default is no limit
        :param int page_size: Number of records to fetch per request, when not set will use
                              the default value of 50 records.  If no page_size is defined
                              but a limit is defined, list() will attempt to read the limit
                              with the most efficient page size, i.e. min(limit, 1000)

        :returns: Generator that will yield up to limit results
        :rtype: list[twilio.rest.bulkexports.v1.export.day.DayInstance]
        """
        return list(self.stream(limit=limit, page_size=page_size, ))

    def page(self, page_token=values.unset, page_number=values.unset,
             page_size=values.unset):
        """
        Retrieve a single page of DayInstance records from the API.
        Request is executed immediately

        :param str page_token: PageToken provided by the API
        :param int page_number: Page Number, this value is simply for client state
        :param int page_size: Number of records to return, defaults to 50

        :returns: Page of DayInstance
        :rtype: twilio.rest.bulkexports.v1.export.day.DayPage
        """
        data = values.of({'PageToken': page_token, 'Page': page_number, 'PageSize': page_size, })

        response = self._version.page(method='GET', uri=self._uri, params=data, )

        return DayPage(self._version, response, self._solution)

    def get_page(self, target_url):
        """
        Retrieve a specific page of DayInstance records from the API.
        Request is executed immediately

        :param str target_url: API-generated URL for the requested results page

        :returns: Page of DayInstance
        :rtype: twilio.rest.bulkexports.v1.export.day.DayPage
        """
        response = self._version.domain.twilio.request(
            'GET',
            target_url,
        )

        return DayPage(self._version, response, self._solution)

    def get(self, day):
        """
        Constructs a DayContext

        :param day: The date of the data in the file

        :returns: twilio.rest.bulkexports.v1.export.day.DayContext
        :rtype: twilio.rest.bulkexports.v1.export.day.DayContext
        """
        return DayContext(self._version, resource_type=self._solution['resource_type'], day=day, )

    def __call__(self, day):
        """
        Constructs a DayContext

        :param day: The date of the data in the file

        :returns: twilio.rest.bulkexports.v1.export.day.DayContext
        :rtype: twilio.rest.bulkexports.v1.export.day.DayContext
        """
        return DayContext(self._version, resource_type=self._solution['resource_type'], day=day, )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Bulkexports.V1.DayList>'


class DayPage(Page):
    """ PLEASE NOTE that this class contains beta products that are subject to
    change. Use them with caution. """

    def __init__(self, version, response, solution):
        """
        Initialize the DayPage

        :param Version version: Version that contains the resource
        :param Response response: Response from the API
        :param resource_type: The type of communication – Messages, Calls

        :returns: twilio.rest.bulkexports.v1.export.day.DayPage
        :rtype: twilio.rest.bulkexports.v1.export.day.DayPage
        """
        super(DayPage, self).__init__(version, response)

        # Path Solution
        self._solution = solution

    def get_instance(self, payload):
        """
        Build an instance of DayInstance

        :param dict payload: Payload response from the API

        :returns: twilio.rest.bulkexports.v1.export.day.DayInstance
        :rtype: twilio.rest.bulkexports.v1.export.day.DayInstance
        """
        return DayInstance(self._version, payload, resource_type=self._solution['resource_type'], )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Bulkexports.V1.DayPage>'


class DayContext(InstanceContext):
    """ PLEASE NOTE that this class contains beta products that are subject to
    change. Use them with caution. """

    def __init__(self, version, resource_type, day):
        """
        Initialize the DayContext

        :param Version version: Version that contains the resource
        :param resource_type: The type of communication – Messages, Calls
        :param day: The date of the data in the file

        :returns: twilio.rest.bulkexports.v1.export.day.DayContext
        :rtype: twilio.rest.bulkexports.v1.export.day.DayContext
        """
        super(DayContext, self).__init__(version)

        # Path Solution
        self._solution = {'resource_type': resource_type, 'day': day, }
        self._uri = '/Exports/{resource_type}/Days/{day}'.format(**self._solution)

    def fetch(self):
        """
        Fetch the DayInstance

        :returns: The fetched DayInstance
        :rtype: twilio.rest.bulkexports.v1.export.day.DayInstance
        """
        payload = self._version.fetch(method='GET', uri=self._uri, )

        return DayInstance(
            self._version,
            payload,
            resource_type=self._solution['resource_type'],
            day=self._solution['day'],
        )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Bulkexports.V1.DayContext {}>'.format(context)


class DayInstance(InstanceResource):
    """ PLEASE NOTE that this class contains beta products that are subject to
    change. Use them with caution. """

    def __init__(self, version, payload, resource_type, day=None):
        """
        Initialize the DayInstance

        :returns: twilio.rest.bulkexports.v1.export.day.DayInstance
        :rtype: twilio.rest.bulkexports.v1.export.day.DayInstance
        """
        super(DayInstance, self).__init__(version)

        # Marshaled Properties
        self._properties = {
            'redirect_to': payload.get('redirect_to'),
            'day': payload.get('day'),
            'size': deserialize.integer(payload.get('size')),
            'create_date': payload.get('create_date'),
            'friendly_name': payload.get('friendly_name'),
            'resource_type': payload.get('resource_type'),
        }

        # Context
        self._context = None
        self._solution = {'resource_type': resource_type, 'day': day or self._properties['day'], }

    @property
    def _proxy(self):
        """
        Generate an instance context for the instance, the context is capable of
        performing various actions.  All instance actions are proxied to the context

        :returns: DayContext for this DayInstance
        :rtype: twilio.rest.bulkexports.v1.export.day.DayContext
        """
        if self._context is None:
            self._context = DayContext(
                self._version,
                resource_type=self._solution['resource_type'],
                day=self._solution['day'],
            )
        return self._context

    @property
    def redirect_to(self):
        """
        :returns: The redirect_to
        :rtype: unicode
        """
        return self._properties['redirect_to']

    @property
    def day(self):
        """
        :returns: The date of the data in the file
        :rtype: unicode
        """
        return self._properties['day']

    @property
    def size(self):
        """
        :returns: Size of the file in bytes
        :rtype: unicode
        """
        return self._properties['size']

    @property
    def create_date(self):
        """
        :returns: The date when resource is created
        :rtype: unicode
        """
        return self._properties['create_date']

    @property
    def friendly_name(self):
        """
        :returns: The friendly name specified when creating the job
        :rtype: unicode
        """
        return self._properties['friendly_name']

    @property
    def resource_type(self):
        """
        :returns: The type of communication – Messages, Calls
        :rtype: unicode
        """
        return self._properties['resource_type']

    def fetch(self):
        """
        Fetch the DayInstance

        :returns: The fetched DayInstance
        :rtype: twilio.rest.bulkexports.v1.export.day.DayInstance
        """
        return self._proxy.fetch()

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Bulkexports.V1.DayInstance {}>'.format(context)
