import logging
import os
import sys
import twilio
from twilio.rest import Client

def connect_to_twilio():
    '''Returns connection to Twilio Account'''
    account_sid = "AC1964dad759ab05232bfacc04319b6fc2"
    auth_token = "a9ed21fdb0b610c948f65beb9924b12e"
    client = Client(account_sid, auth_token)
    return client

def connect_to_twilio_method_2():
    account_sid = "AC1964dad759ab05232bfacc04319b6fc2"
    auth_token = "a9ed21fdb0b610c948f65beb9924b12e"
    
    try:
        client = twilio.rest.TwilioRestClient(account_sid, auth_token)
    except twilio.TwilioRestException as e:
        print (e)
    return client