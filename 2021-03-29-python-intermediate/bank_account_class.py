# written by developer A

import uuid


class BankAccount:

    # creates / initializes an instance
    # BankAccount("Marko Knöbl", "Austria")
    def __init__(self, o_name, o_address):
        # store the data that was passed in
        self.owner_name = o_name
        self.owner_address = o_address
        self._owner_id = str(uuid.uuid4())
        self.balance = 0
        self.transactions = []

    def _add_transaction(self, date, amount):
        self.balance = self.balance + amount
        self.transactions.append((date, amount))

    def add_withdrawal_transaction(self, date, amount):
        self._add_transaction(date, -amount)

    def add_deposit_transaction(self, date, amount):
        self._add_transaction(date, amount)

    def get_balance_at_date(self, date):
        balance = 0
        for transaction in self.transactions:
            if transaction[0] <= date:
                balance += transaction[1]
        return balance

    def get_all_deposits(self):
        # return a list of all transactions
        # with a positive amount
        # implemented with a comprehension
        return [t for t in self.transactions if t[1] > 0]

    def get_all_withdrawals(self):
        # implemented with a for loop
        withdrawals = []
        for transaction in self.transactions:
            if transaction[1] < 0:
                withdrawals.append(transaction)
        return withdrawals
