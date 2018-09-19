from typing import Dict, List

names = ["Alice", "Bob", "Charlie"]

for x in enumerate(names):
    print(x)

uppercase_names = [str(i) + name.upper() for (i, name) in enumerate(names)]

print(uppercase_names)

string_lengths = [len(name) for name in names if len(name) > 3]

print(string_lengths)


transactions = [
    ('2018-04-18', -3.99),
    ('2018-04-10', -249),
    ('2018-04-10', +2100),
    ('2018-04-10', -100),
    ('2018-04-10', -210),
    ('2018-04-10', +2490),
    ('2018-04-10', -249),
]

# expenses = [-3.99, -249, -100, ...]
# expenses = [transaction[1] for transaction in transactions]
expenses = [amount for (date, amount) in transactions if amount < 0]

print(expenses)


transactions_dicts = [
    {"date": "2018-04-10", "amount": -3.99},
    {"date": "2018-04-10", "amount": -4},
    {"date": "2018-04-10", "amount": -3},
    {"date": "2018-04-10", "amount": -10.99},
    {"date": "2018-04-10", "amount": -11.99},
]


# Kopie und tiefe Kopie von Objekten

from copy import deepcopy

transactions_dicts_gross: List[Dict] = deepcopy(transactions_dicts)

for transaction in transactions_dicts_gross:
    transaction["amount"] *= 1.19

print(transactions_dicts_gross)

print(transactions_dicts)


# Sortieren von Listen

print(transactions)

def get_transaction_key(transaction):
    return transaction[1]

# Verändert die ursprüngliche Liste nicht
print(sorted(transactions, key=get_transaction_key))

# Sortiert in-place
transactions.sort()

print(transactions)

