from titanic_passenger import get_random_passenger, print_passenger_info

for i in range(5):
    passenger = get_random_passenger()
    print_passenger_info(passenger)
