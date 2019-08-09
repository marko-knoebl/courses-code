import tkinter

window = tkinter.Tk()

message_label = tkinter.Label(master=window, text="Hello!")
message_label.grid(column=0, row=0)
message_label.config(text="")

# event handler
def display_message():
    message_label.config(text="Hey!")


hello_button = tkinter.Button(master=window, text="Say Hello!", command=display_message)
hello_button.grid(column=0, row=1)

window.mainloop()
