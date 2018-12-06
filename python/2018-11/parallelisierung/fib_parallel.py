from multiprocessing import Process

from fibonacci import print_fib

if __name__ == "__main__":
    processes = []
    for i in range(37, 0, -1):
        process = Process(target=print_fib, args=(i,))
        processes.append(process)
        process.start()
    for process in processes:
        process.join()
    print("end")
