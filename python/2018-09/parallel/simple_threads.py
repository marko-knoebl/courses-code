from threading import Thread
from time import sleep

my_thread = Thread(target=print, args=("hello",))
my_thread.start()
my_other_thread = Thread(target=sleep, args=(1, ))
my_other_thread.start()

print("started thread")

my_thread.join() # auf Abschluss des anderen Threads (my_thread) warten
print("1")
my_other_thread.join()
print("2")

# LOCKS

from threading import Lock

l = Lock()

def print_a():
    with l:
        for i in range(20):
            print("a", end="")

def print_b():
    with l:
        for i in range(20):
            print("b", end="")

Thread(target=print_a).start()
Thread(target=print_b).start()

for i in range(200):
    print("c", end="")

