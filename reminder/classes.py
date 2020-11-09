from datetime import date


class Member:
    def __init__(self, name, birthday, number):
        self.name = name
        self.birthday = birthday
        self.number = number
    
    def age(self):
        """Check Age"""
        day, month, year = self.birthday.split('/')
        today= date.today()
        age = today.year - year - ((today.month, today.day) < (month, day)) 
        return age
    
    def bday(self):
        """Check if Birthday is Today"""
        today = date.today()
        if self.birthday == today:
            bday = "Today"
        else:
            bday = "Not Today"
        return bday
    
    def __repr__(self):
        return f (" {self.name}'s birthday is {self.birthday}. Age: {self.age} Contact: {self.number}")
    
    
   