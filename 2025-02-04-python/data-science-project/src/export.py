import matplotlib.pyplot as plt

def export_scatterplot_blen_bdep_species(data, path):
    """Export a scatterplot that visualizes bill length, bill depth, species"""
    
    # replace strings with numeric values
    data["numeric_species"] = data["species"].replace({"Adelie": 3, "Gentoo": 1, "Chinstrap": 2})

    # create a colormap with 3 entries
    cmap = plt.get_cmap("viridis", 3)

    data.plot.scatter(
        x="bill_length_mm",
        y="bill_depth_mm",
        c="numeric_species",
        cmap=cmap
    )
    plt.savefig(path)
