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
from twilio.rest.serverless.v1.service.environment.deployment import DeploymentList
from twilio.rest.serverless.v1.service.environment.log import LogList
from twilio.rest.serverless.v1.service.environment.variable import VariableList


class EnvironmentList(ListResource):
    """ PLEASE NOTE that this class contains preview products that are subject
    to change. Use them with caution. If you currently do not have developer
    preview access, please contact help@twilio.com. """

    def __init__(self, version, service_sid):
        """
        Initialize the EnvironmentList

        :param Version version: Version that contains the resource
        :param service_sid: The SID of the Service that the Environment resource is associated with

        :returns: twilio.rest.serverless.v1.service.environment.EnvironmentList
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentList
        """
        super(EnvironmentList, self).__init__(version)

        # Path Solution
        self._solution = {'service_sid': service_sid, }
        self._uri = '/Services/{service_sid}/Environments'.format(**self._solution)

    def stream(self, limit=None, page_size=None):
        """
        Streams EnvironmentInstance records from the API as a generator stream.
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
        :rtype: list[twilio.rest.serverless.v1.service.environment.EnvironmentInstance]
        """
        limits = self._version.read_limits(limit, page_size)

        page = self.page(page_size=limits['page_size'], )

        return self._version.stream(page, limits['limit'])

    def list(self, limit=None, page_size=None):
        """
        Lists EnvironmentInstance records from the API as a list.
        Unlike stream(), this operation is eager and will load `limit` records into
        memory before returning.

        :param int limit: Upper limit for the number of records to return. list() guarantees
                          never to return more than limit.  Default is no limit
        :param int page_size: Number of records to fetch per request, when not set will use
                              the default value of 50 records.  If no page_size is defined
                              but a limit is defined, list() will attempt to read the limit
                              with the most efficient page size, i.e. min(limit, 1000)

        :returns: Generator that will yield up to limit results
        :rtype: list[twilio.rest.serverless.v1.service.environment.EnvironmentInstance]
        """
        return list(self.stream(limit=limit, page_size=page_size, ))

    def page(self, page_token=values.unset, page_number=values.unset,
             page_size=values.unset):
        """
        Retrieve a single page of EnvironmentInstance records from the API.
        Request is executed immediately

        :param str page_token: PageToken provided by the API
        :param int page_number: Page Number, this value is simply for client state
        :param int page_size: Number of records to return, defaults to 50

        :returns: Page of EnvironmentInstance
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentPage
        """
        data = values.of({'PageToken': page_token, 'Page': page_number, 'PageSize': page_size, })

        response = self._version.page(method='GET', uri=self._uri, params=data, )

        return EnvironmentPage(self._version, response, self._solution)

    def get_page(self, target_url):
        """
        Retrieve a specific page of EnvironmentInstance records from the API.
        Request is executed immediately

        :param str target_url: API-generated URL for the requested results page

        :returns: Page of EnvironmentInstance
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentPage
        """
        response = self._version.domain.twilio.request(
            'GET',
            target_url,
        )

        return EnvironmentPage(self._version, response, self._solution)

    def create(self, unique_name, domain_suffix=values.unset):
        """
        Create the EnvironmentInstance

        :param unicode unique_name: A user-defined string that uniquely identifies the Environment resource
        :param unicode domain_suffix: A URL-friendly name that represents the environment

        :returns: The created EnvironmentInstance
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentInstance
        """
        data = values.of({'UniqueName': unique_name, 'DomainSuffix': domain_suffix, })

        payload = self._version.create(method='POST', uri=self._uri, data=data, )

        return EnvironmentInstance(self._version, payload, service_sid=self._solution['service_sid'], )

    def get(self, sid):
        """
        Constructs a EnvironmentContext

        :param sid: The SID of the Environment resource to fetch

        :returns: twilio.rest.serverless.v1.service.environment.EnvironmentContext
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentContext
        """
        return EnvironmentContext(self._version, service_sid=self._solution['service_sid'], sid=sid, )

    def __call__(self, sid):
        """
        Constructs a EnvironmentContext

        :param sid: The SID of the Environment resource to fetch

        :returns: twilio.rest.serverless.v1.service.environment.EnvironmentContext
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentContext
        """
        return EnvironmentContext(self._version, service_sid=self._solution['service_sid'], sid=sid, )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Serverless.V1.EnvironmentList>'


class EnvironmentPage(Page):
    """ PLEASE NOTE that this class contains preview products that are subject
    to change. Use them with caution. If you currently do not have developer
    preview access, please contact help@twilio.com. """

    def __init__(self, version, response, solution):
        """
        Initialize the EnvironmentPage

        :param Version version: Version that contains the resource
        :param Response response: Response from the API
        :param service_sid: The SID of the Service that the Environment resource is associated with

        :returns: twilio.rest.serverless.v1.service.environment.EnvironmentPage
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentPage
        """
        super(EnvironmentPage, self).__init__(version, response)

        # Path Solution
        self._solution = solution

    def get_instance(self, payload):
        """
        Build an instance of EnvironmentInstance

        :param dict payload: Payload response from the API

        :returns: twilio.rest.serverless.v1.service.environment.EnvironmentInstance
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentInstance
        """
        return EnvironmentInstance(self._version, payload, service_sid=self._solution['service_sid'], )

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        return '<Twilio.Serverless.V1.EnvironmentPage>'


class EnvironmentContext(InstanceContext):
    """ PLEASE NOTE that this class contains preview products that are subject
    to change. Use them with caution. If you currently do not have developer
    preview access, please contact help@twilio.com. """

    def __init__(self, version, service_sid, sid):
        """
        Initialize the EnvironmentContext

        :param Version version: Version that contains the resource
        :param service_sid: The SID of the Service to fetch the Environment resource from
        :param sid: The SID of the Environment resource to fetch

        :returns: twilio.rest.serverless.v1.service.environment.EnvironmentContext
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentContext
        """
        super(EnvironmentContext, self).__init__(version)

        # Path Solution
        self._solution = {'service_sid': service_sid, 'sid': sid, }
        self._uri = '/Services/{service_sid}/Environments/{sid}'.format(**self._solution)

        # Dependents
        self._variables = None
        self._deployments = None
        self._logs = None

    def fetch(self):
        """
        Fetch the EnvironmentInstance

        :returns: The fetched EnvironmentInstance
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentInstance
        """
        payload = self._version.fetch(method='GET', uri=self._uri, )

        return EnvironmentInstance(
            self._version,
            payload,
            service_sid=self._solution['service_sid'],
            sid=self._solution['sid'],
        )

    def delete(self):
        """
        Deletes the EnvironmentInstance

        :returns: True if delete succeeds, False otherwise
        :rtype: bool
        """
        return self._version.delete(method='DELETE', uri=self._uri, )

    @property
    def variables(self):
        """
        Access the variables

        :returns: twilio.rest.serverless.v1.service.environment.variable.VariableList
        :rtype: twilio.rest.serverless.v1.service.environment.variable.VariableList
        """
        if self._variables is None:
            self._variables = VariableList(
                self._version,
                service_sid=self._solution['service_sid'],
                environment_sid=self._solution['sid'],
            )
        return self._variables

    @property
    def deployments(self):
        """
        Access the deployments

        :returns: twilio.rest.serverless.v1.service.environment.deployment.DeploymentList
        :rtype: twilio.rest.serverless.v1.service.environment.deployment.DeploymentList
        """
        if self._deployments is None:
            self._deployments = DeploymentList(
                self._version,
                service_sid=self._solution['service_sid'],
                environment_sid=self._solution['sid'],
            )
        return self._deployments

    @property
    def logs(self):
        """
        Access the logs

        :returns: twilio.rest.serverless.v1.service.environment.log.LogList
        :rtype: twilio.rest.serverless.v1.service.environment.log.LogList
        """
        if self._logs is None:
            self._logs = LogList(
                self._version,
                service_sid=self._solution['service_sid'],
                environment_sid=self._solution['sid'],
            )
        return self._logs

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Serverless.V1.EnvironmentContext {}>'.format(context)


class EnvironmentInstance(InstanceResource):
    """ PLEASE NOTE that this class contains preview products that are subject
    to change. Use them with caution. If you currently do not have developer
    preview access, please contact help@twilio.com. """

    def __init__(self, version, payload, service_sid, sid=None):
        """
        Initialize the EnvironmentInstance

        :returns: twilio.rest.serverless.v1.service.environment.EnvironmentInstance
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentInstance
        """
        super(EnvironmentInstance, self).__init__(version)

        # Marshaled Properties
        self._properties = {
            'sid': payload.get('sid'),
            'account_sid': payload.get('account_sid'),
            'service_sid': payload.get('service_sid'),
            'build_sid': payload.get('build_sid'),
            'unique_name': payload.get('unique_name'),
            'domain_suffix': payload.get('domain_suffix'),
            'domain_name': payload.get('domain_name'),
            'date_created': deserialize.iso8601_datetime(payload.get('date_created')),
            'date_updated': deserialize.iso8601_datetime(payload.get('date_updated')),
            'url': payload.get('url'),
            'links': payload.get('links'),
        }

        # Context
        self._context = None
        self._solution = {'service_sid': service_sid, 'sid': sid or self._properties['sid'], }

    @property
    def _proxy(self):
        """
        Generate an instance context for the instance, the context is capable of
        performing various actions.  All instance actions are proxied to the context

        :returns: EnvironmentContext for this EnvironmentInstance
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentContext
        """
        if self._context is None:
            self._context = EnvironmentContext(
                self._version,
                service_sid=self._solution['service_sid'],
                sid=self._solution['sid'],
            )
        return self._context

    @property
    def sid(self):
        """
        :returns: The unique string that identifies the Environment resource
        :rtype: unicode
        """
        return self._properties['sid']

    @property
    def account_sid(self):
        """
        :returns: The SID of the Account that created the Environment resource
        :rtype: unicode
        """
        return self._properties['account_sid']

    @property
    def service_sid(self):
        """
        :returns: The SID of the Service that the Environment resource is associated with
        :rtype: unicode
        """
        return self._properties['service_sid']

    @property
    def build_sid(self):
        """
        :returns: The SID of the build deployed in the environment
        :rtype: unicode
        """
        return self._properties['build_sid']

    @property
    def unique_name(self):
        """
        :returns: A user-defined string that uniquely identifies the Environment resource
        :rtype: unicode
        """
        return self._properties['unique_name']

    @property
    def domain_suffix(self):
        """
        :returns: A URL-friendly name that represents the environment
        :rtype: unicode
        """
        return self._properties['domain_suffix']

    @property
    def domain_name(self):
        """
        :returns: The base domain name for all Functions and Assets deployed in the Environment
        :rtype: unicode
        """
        return self._properties['domain_name']

    @property
    def date_created(self):
        """
        :returns: The ISO 8601 date and time in GMT when the Environment resource was created
        :rtype: datetime
        """
        return self._properties['date_created']

    @property
    def date_updated(self):
        """
        :returns: The ISO 8601 date and time in GMT when the Environment resource was last updated
        :rtype: datetime
        """
        return self._properties['date_updated']

    @property
    def url(self):
        """
        :returns: The absolute URL of the Environment resource
        :rtype: unicode
        """
        return self._properties['url']

    @property
    def links(self):
        """
        :returns: The URLs of the Environment resource's nested resources
        :rtype: unicode
        """
        return self._properties['links']

    def fetch(self):
        """
        Fetch the EnvironmentInstance

        :returns: The fetched EnvironmentInstance
        :rtype: twilio.rest.serverless.v1.service.environment.EnvironmentInstance
        """
        return self._proxy.fetch()

    def delete(self):
        """
        Deletes the EnvironmentInstance

        :returns: True if delete succeeds, False otherwise
        :rtype: bool
        """
        return self._proxy.delete()

    @property
    def variables(self):
        """
        Access the variables

        :returns: twilio.rest.serverless.v1.service.environment.variable.VariableList
        :rtype: twilio.rest.serverless.v1.service.environment.variable.VariableList
        """
        return self._proxy.variables

    @property
    def deployments(self):
        """
        Access the deployments

        :returns: twilio.rest.serverless.v1.service.environment.deployment.DeploymentList
        :rtype: twilio.rest.serverless.v1.service.environment.deployment.DeploymentList
        """
        return self._proxy.deployments

    @property
    def logs(self):
        """
        Access the logs

        :returns: twilio.rest.serverless.v1.service.environment.log.LogList
        :rtype: twilio.rest.serverless.v1.service.environment.log.LogList
        """
        return self._proxy.logs

    def __repr__(self):
        """
        Provide a friendly representation

        :returns: Machine friendly representation
        :rtype: str
        """
        context = ' '.join('{}={}'.format(k, v) for k, v in self._solution.items())
        return '<Twilio.Serverless.V1.EnvironmentInstance {}>'.format(context)
