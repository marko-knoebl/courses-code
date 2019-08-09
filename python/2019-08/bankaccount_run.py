from bankaccount import BankAccount

a = BankAccount("Marko Knöbl", iban="AT1234")
b = BankAccount("Tom", "1111", 100.0)
c = BankAccount()

print(b.get_balance())

b.add_transaction("2019-03-15", 1000)
b.add_transaction("2019-04-01", -19.99)
b.add_transaction("2019-05-06", 2000)

print(b.transactions)

print(b.get_balance())

print(b.get_deposits())

print(b.get_transaction_descriptions())

for description in b.get_transaction_descriptions():
    print(description)
