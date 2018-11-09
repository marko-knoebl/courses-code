class Money():
    def __init__(self, currency: str, amount: float):
        self.currency = currency
        self.amount = amount

    def to_usd(self) -> float:
        if self.currency == "USD":
            return self.amount
        elif self.currency == "EUR":
            return self.amount * 1.13
