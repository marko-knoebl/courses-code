from .vec import _Vec

class Vec2(_Vec):
    """Vector in 2D

    attributes:
    - x
    - y

    >>> a = Vec2(1, 2)
    >>> a.x
    1
    >>> a.y
    2
    """
    def __init__(self, x, y):

        assert isinstance(x, (int, float))

        if not isinstance(y, (int, float)):
            raise TypeError(f"y must be int or float, not {type(y)}")
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vec2({self.x}, {self.y})"
    
    def __str__(self):
        return f"<{self.x}, {self.y}>"

    def multiply(self, amount):
        a = Vec2(self.x * amount, self.y * amount)
        return a
    
    def __add__(self, other):
        return Vec2(self.x + other.x, self.y + other.y)

    """Create a Vec2 instance from a string like "(2, 3)" or "<2, 3>"
    """
    @staticmethod
    def from_string(vec_str):
        # e.g. "(2, 3)"

        vec_str_stripped = vec_str[1:-1]
        vec_str_split = vec_str_stripped.split(",")

        x = float(vec_str_split[0])
        y = float(vec_str_split[1])
        return Vec2(x, y)

if __name__ == "__main__":
    import doctest
    doctest.testmod()
