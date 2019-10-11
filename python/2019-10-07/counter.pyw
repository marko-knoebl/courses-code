import tkinter

count = 0

window = tkinter.Tk()


def increment():
    global count
    count = count + 1
    # Änderungen auch im UI sichtbar machen
    count_button.config(text=str(count))


def reset():
    global count
    count = 0
    # Änderungen auch im UI sichtbar machen
    count_button.config(text=str(count))


count_button = tkinter.Button(
    master=window,
    text=str(count),
    command=increment,
    width=20,
    height=2,
    background="#90EE90",
)
count_button.grid(column=0, row=0)

reset_button = tkinter.Button(
    master=window,
    text="Reset",
    command=reset,
    width=20,
    height=2,
    background="lightblue",
)
reset_button.grid(column=0, row=1)

window.mainloop()
