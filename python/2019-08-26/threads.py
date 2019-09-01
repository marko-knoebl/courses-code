from threading import Thread

my_thread = Thread(target=print, args=('hello', ), kwargs={"end": ""})

my_thread.start()

my_thread.join()

print("thread ended")

def print_multiple(text, n):
    for i in range(n):
        print(text, end="")

thread_a = Thread(target=print_multiple, args=("a", 50))
thread_b = Thread(target=print_multiple, args=("b", 50))
thread_a.start()
thread_b.start()
thread_a.join()
thread_b.join()


def count_iterations(id):
    global current_iterations
    global previous_thread
    print(f"count iterations started with id {id}")
    while True:
        if id == previous_thread:
            # gleicher thread wie zuvor
            current_iterations += 1
        else:
            # der Thread wurde gerade geändert
            print(f"{current_iterations} in thread {id}")
            current_iterations = 0
            previous_thread = id


previous_thread = 0
current_iterations = 0


thread_0 = Thread(target=count_iterations, args=(0, ))
thread_1 = Thread(target=count_iterations, args=(1, ))
thread_0.start()
thread_1.start()
thread_0.join()
thread_1.join()
