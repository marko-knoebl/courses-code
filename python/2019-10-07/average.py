def average(a, b, c=None):
    """Compute the average of two or three numbers.
    
    >>> average(10, 20)
    15.0
    >>> average(1, 2)
    1.5
    >>> average(1, 2, 3)
    2.0
    >>> average(2, 1, 0)
    1.0
    """
    if c is not None:
        return (a + b + c) / 3
    return a / 2 + b / 2


# wird nur ausgeführt, wenn die Datei direkt ausgeführt wurde
# (und nicht als modul importiert)
if __name__ == "__main__":
    import doctest

    doctest.testmod()
