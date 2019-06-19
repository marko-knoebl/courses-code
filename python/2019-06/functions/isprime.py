def isprime(number):
    """Determine whether a number is a prime number.
    
    The input number must be positive."""
    if number == 1:
        return False
    if number == 2:
        return True
    for i in range(2, number):
        if number % i == 0:
            return False
    return True
