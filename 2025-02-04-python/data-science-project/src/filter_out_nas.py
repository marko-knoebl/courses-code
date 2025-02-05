import pandas as pd

def filter_out_nas(data):
    """
    remove rows of a penguin dataframe that contains missing data

    valid input: dataFrame with 7 columns

    This function will checke the columns "bill_length_mm", "bill_depth_mm", "flipper_length_mm" and "body_mass_g"
    - if any of them is missing a value, the row will be discarded
    """
    # ^ this is a docstring - it is documentation for users of this function


    # this code is not clean / ideal!
    # good code would do this in just one line via isna() / dropna()


    valid_list = []

    # use .iterrows to get the index and row for every entry
    # the index can be ignored - it is not used
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
