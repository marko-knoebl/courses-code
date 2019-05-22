import classes

my_bank_account = classes.BankAccount(owner="Marko")

your_bank_account = classes.BankAccount("Steve", 100)
your_bank_account = classes.BankAccount("Steve", initial_balance=100)

print(my_bank_account.owner_name)
print(my_bank_account.transactions)

my_bank_account.add_transaction(23.99, "2019-05-20")

print(my_bank_account.transactions)
print(my_bank_account.get_balance())
