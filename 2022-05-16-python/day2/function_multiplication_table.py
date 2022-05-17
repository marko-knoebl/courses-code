def print_multiplication_table(limit=10):
    
    for i in range(1, limit+1):
        for j in range(1, limit+1):
            print(f"{i} x {j} = {i*j}")

print_multiplication_table(4)
print_multiplication_table(5)
print_multiplication_table()
