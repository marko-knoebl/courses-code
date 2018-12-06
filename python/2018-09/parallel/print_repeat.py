from threading import Thread, Lock


def print_multiple(text, n):
    for i in range(n):
        print(text, end="")


thread_a = Thread(target=print_multiple, args=("a", 20))
thread_b = Thread(target=print_multiple, args=("b", 20))
thread_a.start()
thread_b.start()
thread_a.join()
thread_b.join()

print()

l = Lock()


def print_multiple_locked(text, n):
    with l:
        for i in range(n):
            print(text, end="")


thread_c = Thread(target=print_multiple, args=("c", 40))
thread_d = Thread(target=print_multiple_locked, args=("d", 20))
thread_e = Thread(target=print_multiple_locked, args=("e", 20))
thread_c.start()
thread_d.start()
thread_e.start()
thread_c.join()
thread_d.join()
thread_e.join()
