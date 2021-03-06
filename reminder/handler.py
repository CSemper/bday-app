import logging
import os
import sys
import boto3
from sendsms import connect_to_twilio
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
        if message_to_send == []:
            print ("No birthdays today")
        else: 
            for message in message_to_send:
                try:
                    #Connect to Twilio with Method 1 & Send SMS
                    client = connect_to_twilio()
                    publish = client.messages.create(to="+447808809935", 
                                                    from_="+13158193109", 
                                                    body= message)
                    print (publish)
                except Exception as ERROR:
                    log_message = {'Twilio Message Failed to Send': {'error': str(ERROR)}}
                    logging.error(log_message)       
    except Exception as ERROR:
        log_message = {'Error getting message': {'error': str(ERROR)}}
        logging.error(log_message)