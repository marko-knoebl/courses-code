from multiprocessing import Pool

def fib(n):
    if n <= 1:
        return 1
    return fib(n - 1) + fib(n - 2)

if __name__ == "__main__":

    start_values = list(range(30, 40))

    # res1 = [fib(i) for i in start_values]

    # res2 = map(fib, start_values)

    with Pool(processes=4) as pool:
        res3 = pool.map(fib, start_values)

    print(res3)
