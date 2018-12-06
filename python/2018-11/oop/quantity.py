class Quantity:
    def __init__(self, unit, amount):
        # Initialisiere das Objekt (self)
        self.unit = unit
        self.amount = amount

    def __str__(self):
        return str(self.amount) + self.unit

    def __repr__(self):
        return str(self.amount) + self.unit

    def __add__(self, other):
        # Operator "+" überladen
        if self.unit != other.unit:
            raise ValueError(f"incompatible units: {self.unit} and {other.unit}")
        return Quantity(self.unit, self.amount + other.amount)

    def __mul__(self, other):
        return Quantity(self.unit, self.amount * other)

    def __rmul__(self, other):
        return Quantity(self.unit, self.amount * other)
