from multiprocessing import Pool

from fibonacci import fib

if __name__ == "__main__":
    with Pool(processes=4) as pool:
        for n in pool.map(fib, range(35)):
            print(n)
