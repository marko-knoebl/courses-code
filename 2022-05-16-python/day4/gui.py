import tkinter as tk

app_state = {"counter": 0}

window = tk.Tk()

hello_label = tk.Label(master=window, text="Hello!")
hello_label.config(text="Hi!")
hello_label.pack()

message_label = tk.Label(master=window, text="")
message_label.pack()


def display_message():
    message_label.config(text="Hello!")


hello_button = tk.Button(master=window, text="Say Hello!", command=display_message)
hello_button.pack()

counter_label = tk.Label(master=window, text=str(app_state["counter"]))
counter_label.pack()


def increment_count():
    app_state["counter"] = app_state["counter"] + 1
    counter_label.config(text=str(app_state["counter"]))

counter_button = tk.Button(master=window, text="increment", command=increment_count)
counter_button.pack()


window.mainloop()
