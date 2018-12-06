def dna_seq():
    base_pairs: list = ["AT", "TA", "GC", "CG"]
    count = 0
    for i in range(len(base_pairs)):
        for j in range(len(base_pairs)):
            for k in range(len(base_pairs)):
                for l in range(len(base_pairs)):
                    print(base_pairs[i] + base_pairs[j] + base_pairs[k] + base_pairs[l])
                    count += 1
    print(count)


dna_seq()
