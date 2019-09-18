from threading import Thread
import time

def print_multiple(text, n):
    for i in range(n):
        print(text, end="")
        time.sleep(0.1)

thread_a = Thread(target=print_multiple, args=("a", 20))
thread_b = Thread(target=print_multiple, args=("b", 20))
thread_a.start()
thread_b.start()
thread_a.join()
thread_b.join()
