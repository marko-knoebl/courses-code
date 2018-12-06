import tkinter

window = tkinter.Tk()

count = 0
# globale variable

def display_message():
    message_label = tkinter.Label(master=window, text="Hello!")
    message_label.pack()
    

hello_button = tkinter.Button(master=window, text="Say Hello!", command=display_message)
hello_button.pack()

def increment():
    global count
    count += 1
    count_button.config(text=str(count))


count_button = tkinter.Button(master=window, text="0", command=increment, width=10, height=3)
count_button.pack()

set_count = tkinter.Entry(master=window)
set_count.pack()

def set_value():
    new_value = int(set_count.get())
    global count
    count = new_value
    count_button.config(text=str(count))

set_button = tkinter.Button(master=window, text="set", command=set_value)
set_button.pack()

window.mainloop()