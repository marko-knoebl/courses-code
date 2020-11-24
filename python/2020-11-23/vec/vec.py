import math

class _Vec:
    def length(self):
        # an instance could have two or three coordinates: x, y, (z)
        square_sum = self.x ** 2 + self.y ** 2
        if hasattr(self, "z"):
            square_sum += self.z ** 2
        return math.sqrt(square_sum)

