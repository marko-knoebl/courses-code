import pandas as pd

from src.filter_out_nas import filter_out_nas
from src.export import export_scatterplot_blen_bdep_species

data = pd.read_csv("./data/penguins.csv")

valid_df = filter_out_nas(data)
export_scatterplot_blen_bdep_species(valid_df, "./images/scatterplot_blen_bdep_species.png")
