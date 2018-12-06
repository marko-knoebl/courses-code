class BankAccount():
    """represents a bank account """

    def __init__(self, iban, owner_name):
        # Init object
        self.bookings = []
        self.iban = iban
        self.owner_name = owner_name

    def booking(self, amount, currency, subject):
        self.amount = amount
        self.currency = currency
        self.subject = subject

        self.bookings.append((amount, currency, subject))
        return None

    def get_balance(self):
        balance = 0.0
        for item in self.bookings:
            balance += item[0]
        return balance

