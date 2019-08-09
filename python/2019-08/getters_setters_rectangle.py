class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def __repr__(self):
        return f"Rectangle({self.length}, {self.width})"

    def __str__(self):
        # Spielerei
        return f"{self.length}\n[]{self.width}"

    def _get_area(self):
        return self.length * self.width

    def _set_area(self, new_area):
        # ändere die width entsprechend ab, die length soll gleich bleiben
        self.width = new_area / self.length

    def _get_circumference(self):
        return 2 * self.length + 2 * self.width

    # property ist eine vorgefertigte Funktion zum
    # Erzeugen von Klassen-Properties
    area = property(_get_area, _set_area)
    circumference = property(_get_circumference)

# obiges testen

a = Rectangle(3, 4)
print(a)
print([a, a])
exit()
# Fläche?
# print(a._get_area())
print(a.area)
a.length = 4
print(a.area)
# Umfang
print(a.circumference)

# a._set_area(20)
a.area = 20
print(a.width) # 5
