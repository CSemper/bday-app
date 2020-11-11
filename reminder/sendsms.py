import logging
import os
import sys
from twilio.rest import Client

def connect_to_twilio():
    '''Returns connection to Twilio Account'''
    account_sid = "AC1964dad759ab05232bfacc04319b6fc2"
    auth_token = "a9ed21fdb0b610c948f65beb9924b12e"
    client = Client(account_sid, auth_token)
    return client