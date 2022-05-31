# find the interesting data part of "demo_files/demo.dat"
# write to demo_files/demo_extracted.dat

file_input = open("demo_files/demo.dat", "r", encoding="utf-8")

file_output = open("demo_files/demo_extracted.dat")

# "before_data", "data", "after_data"
current_section = "before_data"

data_found = False

for line in file_input:
    if current_section == "before_data":
        if line.startswith("START OF DATA"):
            data_found = True
            # the next line will be part of the 'data' section
            current_section = "data"
    elif current_section == "data":
        if line == "\n":
            current_section = "after_data"
        else:
            print(line, end="")
    else:
        pass
        # data has ended


if not data_found:
    print("No data found!")
