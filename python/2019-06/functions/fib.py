def fib(i):
    """Compute the fibonacci number at position i"""
    if i == 0:
        return 0
    elif i == 1:
        return 1
    else:
        return fib(i-1) + fib(i-2)

if __name__ == "__main__":
    print(fib(1))
    print(fib(2))
    print(fib(10))
