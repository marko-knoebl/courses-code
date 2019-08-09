# "Nachbau" von range, wobei eine list zurückgegeben wird


def lrange(*args):
    # args ist ein tupel
    if len(args) == 1:
        start = 0
        stop = args[0]
        step = 1
    elif len(args) == 2:
        start, stop = args
        step = 1
    elif len(args) == 3:
        start, stop, step = args
    else:
        raise ValueError("too many arguments")

    if type(start) != int or type(stop) != int or type(step) != int:
        raise TypeError()

    result = []
    i = start
    while i < stop:
        result.append(i)
        i += step

    return result
