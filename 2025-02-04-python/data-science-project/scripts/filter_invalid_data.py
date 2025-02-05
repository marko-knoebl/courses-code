# read contents of data/penguins.csv
# filter out rows that don't have data for any of:
# bill_lenght, bill_depth, flipper_length, body_mass
# save to a new file: penguins_filtered.csv

# this code is not clean / ideal!
# good code would do this in just one line via isna() / dropna()

import pandas as pd

data = pd.read_csv("data/penguins.csv")

valid_list = []

for index, row in data.iterrows():
    if not (
        pd.isna(row["bill_length_mm"])
        or pd.isna(row["bill_depth_mm"])
        or pd.isna(row["flipper_length_mm"])
        or pd.isna(row["body_mass_g"])
    ):
        valid_list.append(row)

valid_df = pd.DataFrame(valid_list)

valid_df.to_csv("data/penguins_filtered.csv")
