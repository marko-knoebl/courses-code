class BankAccount():
    
    def __init__(self, owner, initial_balance=0):
        self.transactions = []
        self.owner_name = owner

    def add_transaction(self, amount, date):
        self.transactions.append({
          "amount": amount,
          "date": date
        })

    def get_balance(self):
        balance = 0
        for transaction in self.transactions:
            balance += transaction["amount"]
        return balance
