import logging
import os
import sys
import boto3

from functions import read_csv_file_from_s3, output_member_list, birthday_message

logging.getLogger().setLevel(logging.ERROR)


def start(event, context):
    try:
        #Read CSV File
        data = read_csv_file_from_s3(bucket= "ladywood-kidmin", key="LadywoodKidMin_members.csv")
    except Exception as ERROR:
        log_message = {'CSV read failed': {'error': str(ERROR)}}
        logging.error(log_message)
   
    try:
        #Class Instances & Birthday Message
        members = output_member_list(data)
        message_to_send = birthday_message(members)
    except Exception as ERROR:
        log_message = {'Member List Error': {'error': str(ERROR)}}
        logging.error(log_message)
        
    try:
        session = boto3.Session(region_name="eu-west-1")
        sns_client = session.client('sns')
        response = sns_client.publish(
            PhoneNumber= +447940025593,
            Message= message_to_send,
            MessageAttributes={
                'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': 'SENDERID'
                },
                'AWS.SNS.SMS.SMSType': {
                'DataType': 'String',
                'StringValue': 'Promotional'
                }
            }
        )
        print (response)
    except Exception as ERROR:
        log_message = {'SNS Message Failed to Send': {'error': str(ERROR)}}
        logging.error(log_message)