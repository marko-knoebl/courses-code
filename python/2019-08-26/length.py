import re

class Length:
    """Physical length.

    >>> a = Length(130, "cm")
    >>> a.unit = "in"
    >>> a.value #doctest: +ELLIPSIS
    51.9999...
    >>> print(a)
    52.00 in
    >>> print([a]) #doctest: +ELLIPSIS
    [Length(51.99..., "in")]
    >>> print(Length.from_string("12cm"))
    12.00 cm
    >>> b = Length(1, "m")
    >>> print(b * 3)
    3.00 m
    >>> print(3 * b)
    3.00 m
    >>> print(b + b)
    2.00 m
    """

    _conversions = {
        "m": 1,
        "cm": 0.01,
        "in": 0.025
    }

    def __init__(self, value, unit: str):
        self._value = value
        self._unit = unit

    def __str__(self):
        # 52.00 in
        return f"{self.value:.2f} {self.unit}"

    def __repr__(self):
        # Length(52.00, "in")
        return f"Length({self.value}, \"{self.unit}\")"

    def __mul__(self, other):
        if not isinstance(other, (float, int)):
            raise TypeError(f"Invalid type: {type(other)}")
        return Length(self.value * other, self.unit)

    def __rmul__(self, other):
        # Aufgerufen durch other * self
        return self * other

    def __add__(self, other):
        if not isinstance(other, Length):
            raise TypeError("Invalid type")
        if self.unit != other.unit:
            raise ValueError("Incompatible units")
        return Length(self.value + other.value, self.unit)

    def _get_value(self):
        return self._value

    def _set_value(self, value):
        self._value = value

    # property, die das Standardverhalten
    # von Attributen implementiert
    value = property(_get_value, _set_value)

    def _get_unit(self):
        return self._unit

    def _set_unit(self, new_unit):
        self._value = self._conversions[self._unit] / self._conversions[new_unit] * self._value
        self._unit = new_unit

    # property, die das Standardverhalten
    # von Attributen implementiert
    unit = property(_get_unit, _set_unit)

    # statische Methode, die sich nicht auf eine Instanz bezieht

    @staticmethod
    def from_string(input_string):
        match = re.search(r"(\d+\.?\d*)([a-z]+)", input_string)
        value = float(match[1])
        unit = match[2]
        new_length = Length(value, unit)
        return new_length


