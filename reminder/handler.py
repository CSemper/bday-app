import logging
import os
import sys
import boto3
from sendsms import connect_to_twilio, connect_to_twilio_method_2
from functions import read_csv_file_from_s3, output_member_list, birthday_message

logging.getLogger().setLevel(logging.ERROR)


def start(event, context):
    try:
        #Read CSV File
        data = read_csv_file_from_s3(bucket="ladywood-kidmin", key="LadywoodKidMin_members.csv")
    except Exception as ERROR:
        log_message = {'CSV read failed': {'error': str(ERROR)}}
        logging.error(log_message)
    
    try:
        #Class Instances & Birthday Message
        members = output_member_list(data)
        message_to_send = birthday_message(members)
        if message_to_send != "":
            confirmed_message = message_to_send
        else:
            confirmed_message = "No birthdays today" 
    except Exception as ERROR:
        log_message = {'Member List Error': {'error': str(ERROR)}}
        logging.error(log_message)

    try:
        #Connect to Twilio with Method 1 & Send SMS
        client = connect_to_twilio()
        publish = client.messages.create(to="+447940025593", 
                       from_="+13158193109", 
                       body= confirmed_message)
        print ("Method 1 Success: {publish}")
    except Exception as ERROR:
        log_message = {'SNS Message Failed to Send': {'error': str(ERROR)}}
        logging.error(log_message)
    
      try:
        #Connect to Twilio with Method 2 & Send SMS
        client2 = connect_to_twilio_method_2()
        publish = client2.messages.create(to="+447940025593", 
                       from_="+13158193109", 
                       body= confirmed_message)
        print ("Method 2 Success: {publish}")
    except Exception as ERROR:
        log_message = {'SNS Message Failed to Send': {'error': str(ERROR)}}
        logging.error(log_message)