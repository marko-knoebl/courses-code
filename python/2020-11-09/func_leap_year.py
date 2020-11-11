# basic rule:
# if year is divisible by 4 -> leap year
# exception to the rule: if year is also divisible by 100 -> not a leap year
# exception to the exception: if year is also divisible by 400 -> leap year


def is_leap_year(year):
    """Determine if a year is a leap year"""
    if ((year % 4 == 0) and (year % 100 != 0)) or year % 400 == 0:
        return True
    else:
        return False


print(is_leap_year(2020))
print(is_leap_year(2021))
print(is_leap_year(1900))
print(is_leap_year(2000))
