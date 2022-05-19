# create 10 text files with multiplication tables

for i in range(1, 11):
    file = open(f"multiplication_tables/multiplication_table_{i}.txt", "w", encoding="utf-8")
    for j in range(1, 11):
        line = f"{i} x {j} = {i*j}\n"
        file.write(line)

    file.close()
