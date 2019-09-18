import re


class MoneyParseException(Exception):
    pass


class Money:
    """Representation of a monetary amount.

    >>> a = Money("EUR", 10)
    >>> b = a.to_usd()
    >>> b
    Money("USD", 10.9)
    >>> 2 * b
    Money("USD", 21.8)
    >>> b
    10.90$
    """

    _usd_to_eur = 0.93

    def __init__(self, currency, amount):
        self._currency = currency
        self.amount = amount

    def __repr__(self):
        return f'Money("{self.currency}", {self.amount})'

    def __str__(self):
        return f"{self.amount}{'€' if self.currency == 'EUR' else 'USD'}"

    def __mul__(self, other):
        return Money(self.currency, self.amount * other)

    def __rmul__(self, other):
        return Money(self.currency, self.amount * other)

    def to_usd(self):
        if self.currency == "USD":
            return self
        elif self.currency == "EUR":
            return Money("USD", self.amount / self._usd_to_eur)

    def _get_currency(self):
        return self._currency

    def _set_currency(self, new_currency):
        if self._currency == new_currency:
            pass
        elif self._currency == "USD" and new_currency == "EUR":
            self.amount = self.amount * self._usd_to_eur
        elif self._currency == "EUR" and new_currency == "USD":
            self.amount = self.amount / self._usd_to_eur
        else:
            raise ValueError("invalid currency")
        self._currency = new_currency

    # property: reading / writing will be redirected to
    # _get_currency and _set_currency
    currency = property(_get_currency, _set_currency)

    @staticmethod
    def from_string(string):
        # money_from_string("23€") -> Money("EUR", 23)
        # money_from_string("abc") -> MoneyParseException

        # task: parse the string via regular expressions

        match = re.search(r"\A(\d+\.?\d*)([€$])\Z", string)

        if match:
            amount = float(match[1])
            currency_symbol = match[2]
            if currency_symbol == "$":
                currency = "USD"
            elif currency_symbol == "€":
                currency = "EUR"
            else:
                raise MoneyParseException("unknown currency")
        else:
            raise MoneyParseException(f"could not parse money string: {string}")

        return Money(currency, amount)

a = Money("EUR", 10)
b = Money("USD", 15)
print(a)
print(str(a))
print(repr(a))
print([a, b])

print(a.amount)
print(a.to_usd().amount)

#b._set_currency("EUR")
b.currency = "EUR"
print(b.amount) # 13.95
b.currency = "USD"
print(b.amount)

print(a * 3)
print(3 * a)

print(Money.from_string("12€").amount)
print(Money.from_string("7asdfvsdf23€"))
print(Money.from_string("abc"))
