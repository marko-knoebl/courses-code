class Money():
    """represents a currency """

    def __init__(self, currency: str, amount: float):
        # Init object
        self.currency = currency
        self.amount = amount

    def get_currency(self):
        return self.currency

    def get_amount(self):
        return self.amount
    
    def dollar_to_euro(self):
        exchange_factor = 0.88
        result = exchange_factor * self.amount
        return result

    def euro_to_dollar(self):
        exchange_factor = 1.14
        result = exchange_factor * self.amount
        return result
