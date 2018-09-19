class Money():
    def __init__(self, currency, amount):
        if currency not in ["EUR", "USD"]:
            raise ValueError(f"Invalid currency: {currency}")
        self.currency = currency
        self.amount = amount

    def to_usd(self):
        if self.currency == "USD":
            return self.amount
        return self.amount * 1.2

a = Money('EUR', 10)
b = Money('USD', 10)
print(a.currency)
print(a.amount)

print(a.to_usd())

c = Money("eur", 10)
