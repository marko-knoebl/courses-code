names = ["Alice", "Bob", "Charlie"]

first_letters = [name[0] for name in names]
abbreviations = [(name[:3] + '...').upper() for name in names]

print(first_letters)
print(abbreviations)



amounts = [10, -7, 8, 19, -2]

absolute_amounts = [abs(amount) for amount in amounts]
print(absolute_amounts) # [10, 7, 8, 19, 2]


negative_amounts = [amount for amount in amounts if amount < 0] # [-7, -2]
print(negative_amounts)

negative_amounts_eur = [f"{amount}€" for amount in amounts if amount < 0]
print(negative_amounts_eur)
