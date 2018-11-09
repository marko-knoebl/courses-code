from bank_account import BankAccount

main_account = BankAccount("DE123", "Marko")

savings_account = BankAccount("DE4432", "Marko")

main_account.booking(2000,"€", "Salary")
main_account.booking(-15.50,"€", "Amazon Book")

print(f"Owner: {main_account.owner_name}, IBAN: {main_account.iban}, Bookings: {main_account.bookings}")
print(f"Balance: {main_account.get_balance()}")