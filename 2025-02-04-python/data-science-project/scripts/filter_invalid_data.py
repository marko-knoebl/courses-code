# read contents of data/penguins.csv
# filter out rows that don't have data for any of:
# bill_lenght, bill_depth, flipper_length, body_mass
# save to a new file: penguins_filtered.csv

import pandas as pd

from src.filter_out_nas import filter_out_nas

# reading data

data = pd.read_csv("data/penguins.csv")

# filtering data

valid_df = filter_out_nas(data)

# writing data

valid_df.to_csv("data/penguins_filtered.csv")
