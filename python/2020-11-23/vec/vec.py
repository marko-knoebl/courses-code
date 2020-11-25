import math

class _Vec:
    def _get_length(self):
        # an instance could have two or three coordinates: x, y, (z)
        square_sum = self.x ** 2 + self.y ** 2
        if hasattr(self, "z"):
            square_sum += self.z ** 2
        return math.sqrt(square_sum)
    

    """Set a new length while keeping the direction.
    """
    def _set_length(self, value):
        old_length = self.length
        factor = value / old_length
        self.x *= factor
        self.y *= factor
        if hasattr(self, "z"):
            self.z *= factor


    length = property(_get_length, _set_length)
