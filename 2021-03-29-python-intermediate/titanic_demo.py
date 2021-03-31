from titanic_passenger import get_random_passenger, print_passenger_info

from titanic_class import TitanicData

titanic_data = TitanicData()

titanic_data.load_passenger_data()

for i in range(5):
    titanic_data.print_random_passenger_info()

print(titanic_data.get_adult_survivors())

titanic_data.plot_age_hist()
titanic_data.plot_age_box()
titanic_data.plot_sex_pie()
titanic_data.plot_num_siblings_spouses()
