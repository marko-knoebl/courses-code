import random

class BankAccount():

    def __init__(self, owner_name=None, account_nr=None):
        self.balance = 0.0
        self.owner_name = owner_name
        self.account_nr = account_nr
        self.transactions = []
        self.is_disabled = False
        # private Attribute beginnen konventionsmäßig mit _
        self._id = random.randint(1, 10**6)

    def add_transaction(self, date, value):
        self.transactions.append({"date": date, "value": value})
        self.balance += value

    def get_balance_by_date(self, date):
        balance = self.balance
        for transaction in self.transactions:
            if transaction["date"] > date:
                balance -= transaction["value"]
        return f"{balance:.2f}"

account_a = BankAccount(owner_name="Marko")
account_b = BankAccount()

print(account_a.balance)
print(account_a.owner_name)
print(account_b.balance)
print(account_b.owner_name)

account_a.add_transaction("2019-03-02", -39.90)
account_a.add_transaction("2019-03-15", 1200.00)

print(account_a.balance)

print(account_a.get_balance_by_date("2019-03-10")) # -39.90