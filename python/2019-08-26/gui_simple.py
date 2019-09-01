import tkinter

window = tkinter.Tk()

count = 0


def increment():
    global count
    count += 1
    button.config(text=str(count))

button = tkinter.Button(master=window, text=str(count), command=increment)
button.pack()

window.mainloop()
