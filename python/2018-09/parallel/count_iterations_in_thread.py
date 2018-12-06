from itertools import count
from threading import Thread

active = None
iterations = 0


def iterations_in_thread(thread_id):
    global iterations
    global active
    for i in count():
        if active == thread_id:
            iterations += 1
        else:
            print((active, iterations))
            active = thread_id
            iterations = 0


thread_a = Thread(target=iterations_in_thread, args=("a"))
thread_b = Thread(target=iterations_in_thread, args=("b"))

thread_a.start()
thread_b.start()
thread_a.join()
thread_b.join()
