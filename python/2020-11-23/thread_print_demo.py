from concurrent.futures import ThreadPoolExecutor

def print_multiple(text, n):
    for i in range(n):
        print(text, end="")

with ThreadPoolExecutor() as executor:
    executor.submit(print_multiple, ".", 200)
    executor.submit(print_multiple, "o", 200)

print("completed all tasks")
