from tkinter import Tk, Label

window = Tk()

hello_label = Label(master=window, text="Hello!")
hello_label.pack()

hello_label.config(text="Hi!")

window.mainloop()
