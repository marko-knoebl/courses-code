from .vec import _Vec

class Vec3(_Vec):
    """Vector in 3D

    attributes:
    - x
    - y
    - z
    """
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

    def multiply(self, amount):
        a = Vec3(self.x * amount, self.y * amount, self.z * amount)
        return a
