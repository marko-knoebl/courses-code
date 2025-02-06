import pandas as pd
import matplotlib.pyplot as plt

from src.filter_out_nas import filter_out_nas

class PenguinDataset():

    def __init__(self):
        self.data = pd.read_csv("data/penguins.csv")
        self.filtered_data = None

    def get_first(self):
        return self.data.iloc[0]
    
    def export_scatterplot_blen_bdep_species(self, path):
        """Export a scatterplot that visualizes bill length, bill depth, species"""
        
        # replace strings with numeric values
        self.data["numeric_species"] = self.data["species"].replace({"Adelie": 3, "Gentoo": 1, "Chinstrap": 2})

        # create a colormap with 3 entries
        cmap = plt.get_cmap("viridis", 3)

        self.data.plot.scatter(
            x="bill_length_mm",
            y="bill_depth_mm",
            c="numeric_species",
            cmap=cmap
        )
        plt.savefig(path)
    
    def generate_filtered_data(self):
        self.filtered_data = filter_out_nas(self.data)
