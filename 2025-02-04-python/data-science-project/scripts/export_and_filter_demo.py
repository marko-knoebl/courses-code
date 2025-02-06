from src.penguin_dataset import PenguinDataset

penguin_dataset = PenguinDataset()

print(penguin_dataset.get_first())
penguin_dataset.export_scatterplot_blen_bdep_species("./images/scatterplot_blen_bdep_species.png")

print(penguin_dataset.filtered_data)

penguin_dataset.generate_filtered_data()

print(penguin_dataset.filtered_data)

print(penguin_dataset.data_source)

print(penguin_dataset)
