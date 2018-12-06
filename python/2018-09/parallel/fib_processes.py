from multiprocessing import Process


def fib(n):
    if n <= 1:
        return 1
    return fib(n - 1) + fib(n - 2)


def print_fib(n):
    print(fib(n))


if __name__ == "__main__":

    processes = []

    for i in range(30, 40):
        p = Process(target=print_fib, args=(i,))
        processes.append(p)
        p.start()

    for process in processes:
        process.join()
