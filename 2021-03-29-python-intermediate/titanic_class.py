# same functionality as titanic_passenger,
# but data is stored in a class

import pandas as pd
import matplotlib.pyplot as plt


class TitanicDataNotLoadedError(Exception):
    pass


class TitanicData:
    def load_passenger_data(self):
        loaded_data = pd.read_csv(
            "https://public.opendatasoft.com/"
            + "explore/dataset/titanic-passengers/download",
            delimiter=";",
        )
        loaded_data["survived"] = loaded_data["survived"].replace(
            {"Yes": True, "No": False}
        )
        self._passenger_dataframe = loaded_data

    def get_random_passenger(self):
        # get a random sample of 1 element,
        # then select the first row (which is a series )
        if not hasattr(self, "_passenger_dataframe"):
            # thow a more helpful error
            raise TitanicDataNotLoadedError(
                "Passenger data has not been loaded.\nCall .load_passenger_data()"
            )
        passenger = self._passenger_dataframe.sample().iloc[0]
        return passenger

    def print_random_passenger_info(self):
        passenger = self.get_random_passenger()
        name = passenger["name"]
        age = passenger["age"]
        survived = passenger["survived"]

        if passenger["sex"] == "female":
            pronoun = "she"
        else:
            pronoun = "he"

        print(f"{name} was {age:.0f} when {pronoun} boarded the Titanic.")
        if survived == True:
            print(f"{pronoun.capitalize()} survived.")
        else:
            print(f"{pronoun.capitalize()} did not survive.")

    def get_adult_survivors(self):

        return self._passenger_dataframe.query("age > 17 and survived==True")

        # return self._passenger_dataframe.loc[
        #     (self._passenger_dataframe["age"] >= 18)
        #     & (self._passenger_dataframe["survived"] == True)
        # ]

    def plot_age_hist(self):
        self._passenger_dataframe["age"].plot.hist()
        plt.show()

    def plot_age_box(self):
        self._passenger_dataframe["age"].plot.box()
        plt.show()

    def plot_sex_pie(self):
        self._passenger_dataframe["sex"].value_counts().plot.pie()
        plt.show()

    def plot_num_siblings_spouses(self):
        self._passenger_dataframe["sibsp"].value_counts().sort_index().plot.bar()
        plt.show()


# NEW task:
# import in a nicer format:
#   survived should be a boolean value
