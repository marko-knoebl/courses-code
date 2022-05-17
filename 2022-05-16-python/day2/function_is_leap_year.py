# function: is_leap_year

# parameters to pass in: int
# return value: bool

# input: 2001 -> output: False
# input: 2004 -> output: True


def is_leap_year(year):
    if year % 400 == 0:
        leap_year = True
    elif year % 100 == 0:
        leap_year = False
    elif year % 4 == 0:
        leap_year = True
    else:
        leap_year = False

    return leap_year
