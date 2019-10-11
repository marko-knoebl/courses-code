def lrange(*args):
    """Return a sequence of numbers as a list. (from start to stop by step)
    """
    start = 0
    stop = None
    step = 1
    if len(args) == 1:
        stop = args[0]
    elif len(args) == 2:
        start = args[0]
        stop = args[1]
    elif len(args) == 3:
        start = args[0]
        stop = args[1]
        step = args[2]
        if step <= 0:
            raise ValueError("Step must be positive")
    else:
        # ungültige Anzahl an argumenten
        raise TypeError("lrange must be called with 1-3 arguments")
    l = []
    i = start
    try:
        while i < stop:
            l.append(i)
            i += step
    except TypeError:
        # neuen Fehler auslösen, der das Problem besser beschreibt
        raise TypeError("lrange must be called with numeric arguments")
    return l
