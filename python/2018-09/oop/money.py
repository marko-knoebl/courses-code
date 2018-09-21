class Money:
    def __init__(self, currency, amount):
        if currency not in ["EUR", "USD"]:
            raise ValueError(f"Invalid currency: {currency}")
        self._currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount}{self._currency}"

    def __repr__(self):
        return f"Money(\"{self._currency}\", {self.amount})"

    def __add__(self, other):
        if self._currency == other.currency:
            return Money(self._currency, self.amount + other.amount)
        else:
            raise NotImplementedError()

    def __mul__(self, other):
        return Money(self._currency, self.amount * other)

    def __rmul__(self, other):
        return self * other

    def to_usd(self):
        if self._currency == "USD":
            return self.amount
        return self.amount * 1.2

    def to_eur(self):
        if self._currency == "EUR":
            return self.amount
        return self.amount / 1.2

    def _get_currency(self):
        return self._currency

    def _set_currency(self, currency):
        if self._currency == "USD" and currency == "EUR":
            self.amount = self.to_eur()
        elif self._currency == "EUR" and currency == "USD":
            self.amount = self.to_usd()
        self._currency = currency

    currency = property(_get_currency, _set_currency)


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


a = Money("EUR", 10)
b = Money("USD", 10)
print(a.currency)
print(a.amount)

print(a.to_usd())

# c = Money("eur", 10)

print(money_from_str("10EUR").amount)
# print(money_from_str("5$"))
