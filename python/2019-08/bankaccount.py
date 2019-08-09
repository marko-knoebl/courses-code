# Klasse BankAccount:

# Daten (Attribute):
# - owner (str)
# - iban (str)
# - account_nr (str)
# - balance (float / Decimal)
# - transactions (list)

# Methoden
# - ( get_balance() )
# - ( list_transactions() )
# - add_transaction()


class BankAccount:
    def __init__(self, owner=None, iban=None, balance=0.0):
        self.owner = owner
        self.iban = iban
        self._balance = balance
        self.transactions = []

    def add_transaction(self, date, amount):
        new_transaction = {
            "date": date,
            "amount": amount,
            "old_balance": self._balance,
            "new_balance": self._balance + amount,
        }
        self._balance = self._balance + amount
        self.transactions.append(new_transaction)

    def get_balance(self):
        return self._balance

    def get_deposits(self):
        """Return a list of all deposits (transactions with a positive amount)."""
        return [
            transaction
            for transaction in self.transactions
            if transaction["amount"] > 0
        ]

    def get_transaction_descriptions(self):
        """Return a list of strings like this:
        
        [
            "2019-03-15: +1000.00€",
            "2019-04-01: -19.99€",
            "2019-05-06: +2000.00€"
        ]
        """
        # return [f'{t["date"]}: {t["amount"]:+8.2f}€' for t in self.transactions]
        return [
            t["date"] + ": " + "{:+8.2f}€".format(t["amount"])
            for t in self.transactions
        ]
