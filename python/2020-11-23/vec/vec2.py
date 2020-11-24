from .vec import _Vec

class Vec2(_Vec):
    """Vector in 2D

    attributes:
    - x
    - y
    """
    def __init__(self, x, y):
        if not isinstance(x, (int, float)):
            raise TypeError(f"x must be int or float, not {type(x)}")
        if not isinstance(y, (int, float)):
            raise TypeError(f"y must be int or float, not {type(y)}")
        self.x = x
        self.y = y

    def multiply(self, amount):
        a = Vec2(self.x * amount, self.y * amount)
        return a
