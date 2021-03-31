# written by developer B

from bank_account_class import BankAccount

private_bank_account = BankAccount("Marko Knöbl", "Austria")

print(private_bank_account.transactions)
print(private_bank_account.balance)

private_bank_account.add_withdrawal_transaction("2020-01-01", 10.0)
private_bank_account.add_deposit_transaction("2021-03-30", 100.0)
private_bank_account.add_withdrawal_transaction("2021-03-30", 20.0)

print(private_bank_account.transactions)
print(private_bank_account.balance)

print(private_bank_account.get_balance_at_date("2020-06-01"))
print("(should be -10.0)")
print(private_bank_account.get_balance_at_date("2021-03-30"))
print("(should be 70.0)")

print(private_bank_account.get_all_deposits())
print(private_bank_account.get_all_withdrawals())

business_bank_account = BankAccount("Foo GmbH", "Austria")
