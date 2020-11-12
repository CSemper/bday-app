import csv
import logging
import boto3
from datetime import date
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
            day, month, year = line[1].split('/')
            age = get_age(day, month, year)
            person = Member(line[0], line[1], line[2], age)
            member_list.append(person)
        except ValueError:
            log_message = {f'Failed to read csv row'}
            logging.error(log_message)
    return member_list

def get_age(day, month, year):
    """Check Age"""
    today = date.today()
    age = today.year - int (year) - ((today.month, today.day) < (int (month), int (day))) 
    return age

def birthday_message(member_list):
    message = ""
    today = date.today()
    day = today.strftime("%d/%m/%Y")
    for member in member_list:
        child = member.name.split()[0]
        age = member.age
        contact = member.number
        if member.birthday == day:
            message += f"REMINDER: Today is {child}'s birthday! {age} years old today. Call/Text them on {contact}\n"
    return message
    