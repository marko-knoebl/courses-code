import pandas as pd
import os

titanic = pd.read_csv(
    "https://public.opendatasoft.com/explore/dataset/titanic-passengers/download",
    sep=";",
    index_col="passengerid"
)

titanic.to_csv("titanic.csv")
titanic.to_excel("titanic.xlsx")
