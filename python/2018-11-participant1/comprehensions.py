names = ["Alice", "Bob", "Malice"]

first_letters = [name[0] for name in names]
abbreviations = [(name[:3] + "...").upper() for name in names]
print(abbreviations)

amounts = [10, -7, 8, 19, -2]

abs_amounts = [abs(amount) for amount in amounts]
print(abs_amounts)

neg_amounts = [amount for amount in amounts if amount < 0]
print(neg_amounts)

euro_amounts = [f"{amount}€" for amount in amounts if amount < 0]
print(euro_amounts)