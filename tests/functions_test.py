'''
Tests 3 functions:
- output_member_list
- get_age
- birthday_message
'''
import os
import csv
from io import StringIO

from reminder.classes import Member
from reminder.functions import output_member_list, get_age, birthday_message

def test_output_member_list():
    '''Test `output_raw_transactions` returns list of transaction dictionaries.
    '''
    # ARRANGE
    # Create example csv file for function to read
    example_row_string = 'Sally Jenkins, 14/02/2015, 07843218643'
    example_row_bytes = StringIO(example_row_string)
    example_csv = csv.reader(example_row_bytes)
    # Create expected class instance output
    expected_output = "Sally Jenkins's birthday is 11/11/2015. Age: 5. Contact: 07843218643"
    
    # ACT
    actual_output = output_member_list(example_csv, skip_header=False)
    # ASSERT
    assert len(actual_output) == len(expected_output)
    assert actual_output == expected_output


def test_birthday_message():
    '''Test `birthday_message` returns a string of applicable birthday messages if birthday is today.
    '''
    # ARRANGE
    # Create example class list
    example_member_list = []
    example_person = Member("Chenyse Test", "12/11/2012", "07123456789", 7)
    example_member_list.append(example_person)
    # Create expected message output
    expected_output = "REMINDER: Today is Chenyse's birthday! 8 years old today. Call/Text them on 07123456789\n"
    # ACT
    actual_output = birthday_message(example_member_list)
    # ASSERT
    assert actual_output == expected_output