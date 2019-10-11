class Length:

    _in_to_cm = 2.54

    def __init__(self, value, unit):
        self.value = value
        self._unit = unit

    def __str__(self):
        return f"{self.value:.2f}{self.unit}"

    def __repr__(self):
        return f'Length({self.value}, "{self.unit}")'

    def __add__(self, other):
        if self.unit != other.unit:
            raise ValueError("incompatible units")
        return Length(self.value + other.value, self.unit)

    def _get_unit(self):
        return self._unit

    def _set_unit(self, new_unit):
        if new_unit == self._unit:
            pass
        elif self._unit == "in" and new_unit == "cm":
            self.value *= self._in_to_cm
            self._unit = new_unit
        elif self._unit == "cm" and new_unit == "in":
            self.value /= self._in_to_cm
            self._unit = new_unit
        else:
            raise ValueError("invalid unit")

    unit = property(_get_unit, _set_unit)

    @staticmethod
    def from_string(length_string):
        value_string = ""
        unit_string = ""
        for char in length_string:
            if char.isdigit():
                value_string += char
            else:
                unit_string += char
        return Length(int(value_string), unit_string)
