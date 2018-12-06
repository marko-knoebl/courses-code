from threading import Thread


def print_multiple(text, n):
    # den text n mal printen
    for i in range(n):
        print(text, end="")


print_multiple("a", 20)
print_multiple("b", 20)

print()

thread_a = Thread(target=print_multiple, args=("a", 20))
thread_b = Thread(target=print_multiple, args=("b", 20))
thread_a.start()
thread_b.start()

thread_a.join()
thread_b.join()

print()

my_thread = Thread(target=print, args=("hello",))
my_thread.start()

# warten, bis anderer thread beendet ist
my_thread.join()

print("thread beendet")

iter_count = 0
active_threadname = None


def count_iterations(threadname):
    global iter_count
    global active_threadname
    for i in range(1000000):
        # überprüfe, welcher Thread zuletzt aktiv war
        if threadname == active_threadname:
            # dieser Prozess war zuletzt aktiv - zähle weiter
            iter_count = iter_count + 1
        else:
            # der andere Prozess war zuletzt aktiv - gib die Durchlaufzahl aus, setze den Zähler zurück
            print(f"{active_threadname}: {iter_count}")
            active_threadname = threadname
            iter_count = 0


thread_c = Thread(target=count_iterations, args=("c",))
thread_d = Thread(target=count_iterations, args=("d",))

thread_c.start()
thread_d.start()
thread_c.join()
thread_d.join()
