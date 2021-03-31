# same functionality as titanic_passenger,
# but data is stored in a class

import pandas as pd


class TitanicDataNotLoadedError(Exception):
    pass


class TitanicData:
    def load_passenger_data(self):
        self._passenger_dataframe = pd.read_csv(
            "https://public.opendatasoft.com/"
            + "explore/dataset/titanic-passengers/download",
            delimiter=";",
        )

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
        if survived == "Yes":
            print(f"{pronoun.capitalize()} survived.")
        else:
            print(f"{pronoun.capitalize()} did not survive.")
