class NewTransactionTypeError(TypeError):
    pass


class BankAccount:
    def __init__(self, balance, account_nr, credit):
        self._balance = balance
        self.account_nr = account_nr
        self.credit = credit
        self.transactions = []

    def new_transaction(self, date, amount, title):
        if type(date) != str:
            raise NewTransactionTypeError(f"date must be str, not {type(date)}")
        transaction = {"date": date, "amount": amount, "title": title}
        self.transactions.append(transaction)
        self._balance += amount

    def get_balance(self, date="a"):
        """Get the account balance for a specific date.
        
        If no date is provided, get the current balance."""
        # Beginnen mit dem aktuellen Kontostand
        balance = self._balance
        # Alle Transaktionen nach "date" "rückabwickeln"
        for transaction in self.transactions:
            if transaction["date"] > date:
                balance -= transaction["amount"]
        return balance

    def get_transaction_amounts(self):
        # [-14.90, 1200.0, -210.0]
        # amounts = []
        # for transaction in self.transactions:
        #     amounts.append(transaction["amount"])
        # return amounts

        return [transaction["amount"] for transaction in self.transactions]

    def get_expenses(self):
        return [
            transaction
            for transaction in self.transactions
            if transaction["amount"] < 0
        ]

    def get_incomes(self):
        return [
            transaction
            for transaction in self.transactions
            if transaction["amount"] > 0
        ]


class EuropeanBankAccount(BankAccount):
    def __init__(self, balance, account_nr, credit, iban):
        self._balance = balance
        self.account_nr = account_nr
        self.credit = credit
        self.transactions = []
        self.iban = iban


account_a = EuropeanBankAccount(0.0, "1234", True, "AT12345")
account_b = BankAccount(100.0, "1111", False)

print(account_a.get_balance())
print(account_b.account_nr)

account_a.new_transaction("2019-07-10", -14.90, "groceries")
account_a.new_transaction("2019-01-05", 1200.00, "salary")
account_a.new_transaction("2019-04-13", -210.00, "taxes")

print(account_a.transactions)
print(account_a.get_balance())

print(account_a.get_balance("2019-03-01"))
print(account_a.get_balance("2019-04-14"))
print(account_a.get_balance("2019-07-10"))
print(account_a.get_balance())

print(account_a.get_transaction_amounts())
print(account_a.get_expenses())
print(account_a.get_incomes())
