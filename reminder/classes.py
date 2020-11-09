
class Member:
    def __init__(self, name, birthday, number, age):
        self.name = name
        self.birthday = birthday
        self.number = number
        self.age = age
    
    def __repr__(self):
        return (f" {self.name}'s birthday is {self.birthday}. Age: {self.age}. Contact: {self.number}")
    
    
   