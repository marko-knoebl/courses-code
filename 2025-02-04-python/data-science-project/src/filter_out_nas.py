import pandas as pd

def filter_out_nas(data):

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
    return valid_df
