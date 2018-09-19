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

# money_from_str("13EUR")
def money_from_str(moneystr):
    amount_string = ""
    currency_string = ""
    for char in moneystr:
        if char.isdigit():
            if not currency_string:
                amount_string += char
            else:
                raise MoneyParseError(moneystr)
        elif char.isalpha():
            currency_string += char
        else:
            raise MoneyParseError(moneystr)
    return Money(currency_string, int(amount_string))

class MoneyParseError(ValueError):
    pass

a = Money('EUR', 10)
b = Money('USD', 10)
print(a.currency)
print(a.amount)

print(a.to_usd())

#c = Money("eur", 10)

print(money_from_str("10EUR").amount)
#print(money_from_str("5$"))
