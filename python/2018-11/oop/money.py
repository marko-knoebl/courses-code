from quantity import Quantity


class Money(Quantity):

    exchange_rates = [...]

    def __repr__(self):
        # if self.unit.lower() == 'eur':
        #     return str(self.amount) + '€'
        # elif self.unit.lower() == 'usd':
        #     return str(self.amount) + '$'
        symbols = {"eur": "€", "usd": "$"}
        symbol = symbols[self.unit]
        return str(self.amount) + symbol

    def __str__(self):
        return self.__repr__()

    def to_eur(self):
        conversion_rate = 1.13
        if self.unit == "usd":
            return Money("usd", self.amount / conversion_rate)
        else:
            raise ValueError("can only convert usd to eur")

