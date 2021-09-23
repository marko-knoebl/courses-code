import pandas as pd
from sqlalchemy import create_engine

class TitanicData:
    
    def load_data(self):
        titanic = pd.read_csv(
            "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
        )
        self._data = titanic
        self._db_engine = create_engine('sqlite://', echo=False)
        
    def ensure_data_loaded(self):
        if not hasattr(self, "_data"):
            raise Exception("Data has not been loaded.")
        
    def summary_text(self):
        self.ensure_data_loaded()
        
        passenger_count = self._data.shape[0]
        women_count = self._data.loc[self._data["Sex"] == "female"].shape[0]
        
        return f"{passenger_count} passengers ({women_count} women)"
    
    def visualize_ages(self):
        self._data.plot.hist(self._data["Age"], align="left")
        
    def save_data(self):
        self._data.to_sql("titanic", con=self._db_engine)
        


titanic = TitanicData()

titanic.load_data()

# summary of the available data
print(titanic.summary_text())
# 891 passengers (314 women, 577 men), 342 survivors

titanic.visualize_ages()

titanic.save_data()
