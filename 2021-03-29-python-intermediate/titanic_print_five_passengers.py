from titanic_passenger import get_random_passenger, print_passenger_info

from titanic_class import TitanicData

# for i in range(5):
#     passenger = get_random_passenger()
#     print_passenger_info(passenger)

titanic_data = TitanicData()

titanic_data.load_passenger_data()

#titanic_data.load_passenger_data()

# for i in range(5):
#     print(titanic_data.get_random_passenger())

for i in range(5):
    titanic_data.print_random_passenger_info()
