# Tasks

## Data sources

already imported:

- euribor (interest rates): https://datahub.io/core/euribor/r/euribor-12m-monthly.csv
- S&P 500 (stock data, interest rates): https://datahub.io/core/s-and-p-500/r/data.csv
- exchange rates: https://datahub.io/core/us-euro-foreign-exchange-rate/r/monthly.csv
- iris flower data: https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv
- titanic passenger data: https://public.opendatasoft.com/explore/dataset/titanic-passengers/download

others (bigger datasets):

- house data and house prices in california (for 20,000 small regions): http://lib.stat.cmu.edu/datasets/houses.zip (use numpy's loadtxt)
- TrackML particle tracking challenge (data visualization):
- data source: https://gitlab.cern.ch/msmk/trackml-dataset
- simple visualization: https://www.kaggle.com/wesamelshamy/trackml-problem-explanation-and-data-exploration
- other popular datasets on kaggle (account needed to work online): https://www.kaggle.com/datasets?topic=popularDataset&sort=votes

## Potential tasks

for each dataset, create a class to load and handle it

possible methods:

- `.load_data()`
- `.cleanup_data()`
- `.summarize()`
- `.visualize_feature_a()`
- `.visualize_feature_b()`
