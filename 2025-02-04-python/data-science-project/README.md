# Data science / analysis project for Penguins

## Data source

This is taken from the example data set of Seaborn: https://github.com/mwaskom/seaborn-data/blob/master/penguins.csv

The original file is stored under data/penguins.csv

## Project structure

- README.md : this file - basic information about this project
- notebooks/ : interactive Jupyter notebooks
- data/ : data/csv files
- scripts/ : Python scripts for specific tasks - (e.g. creating a new filtered CSV file / creating plot images as pngs / training a ML model)
- src/ : function for data processing ...
- .gitignore : files / patterns that should be ignored by git
- requirements.txt : dependency list

## Scripts

filtering invalid data:

```
python -m scripts.filter_invalid_data
```

exporting a scatter plot:

```
python -m scripts.export_scatterplot_blen_bdep_species
```
