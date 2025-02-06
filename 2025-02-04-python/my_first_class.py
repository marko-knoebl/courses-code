class Person():

    def __init__(self, name, birth_year):
        self.name = name
        self.birth_year = birth_year
    
    def get_introductory_message(self):
        return f"Hello, my name is {self.name}"

    def get_age_in_2025(self):
        return 2025 - self.birth_year


# instance of class dict
a = dict()

# another instance of dict
b = dict()


# instance of Person

x = Person(name="Alice", birth_year=1980)
print(x.get_introductory_message())
print(x.get_age_in_2025())

# another
y = Person(name="Bob", birth_year=1990)
print(x.get_introductory_message())
print(y.get_age_in_2025())
