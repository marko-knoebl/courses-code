import tkinter

window = tkinter.Tk()

hello_label = tkinter.Label(master=window, text="Hello!")
hello_label.config(text="Hi!")
hello_label.grid(column=0, row=0)

window.mainloop()
