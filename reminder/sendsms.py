import logging
import os
import sys
import twilio
from twilio.rest import Client
from dotenv import load_dotenv

def connect_to_twilio():
    '''Returns connection to Twilio Account'''
    load_dotenv()
    account_sid = os.getenv("TWILIO_ACCOUNT_SID")
    auth_token = os.getenv("TWILIO_AUTH_TOKEN")
    client = Client(account_sid, auth_token)
    return client

def connect_to_twilio_method_2():
    load_dotenv()
    account_sid = os.getenv("TWILIO_ACCOUNT_SID")
    auth_token = os.getenv("TWILIO_AUTH_TOKEN")
    try:
        client = twilio.rest.TwilioRestClient(account_sid, auth_token)
    except twilio.TwilioRestException as e:
        print (e)
    return client