import csv
import logging
import boto3
from classes import Member

def read_csv_file_from_s3(bucket, key):
    s3 = boto3.client('s3')
    s3_object = s3.get_object(Bucket=bucket,
                              Key=key)
    data = s3_object['Body'].read().decode('utf-8')
    return csv.reader(data.splitlines())

def output_member_list(csv_reader, skip_header=True):
    '''Convert csv reader into a list of dictinaries'''
    member_list = []
    if skip_header:
        next(csv_reader)
    for line in csv_reader:
        try:
            person = Member(line[0], line[1], line[2])
            member_list.append(person)
        except ValueError:
            log_message = {f'Failed to read csv row'}
            logging.error(log_message)
            continue
    return member_list

def birthday_message(member_list):
    for member in member_list:
        child = member.name
        bday = member.bday
        age = member.age
        if bday == "Today":
            message = f"Today is {child}'s birthday! {age} years old today."
        else:
            message = "No birthdays"
    yield message
    