import tkinter

# ein Objekt vom Typ "Tk" erstellen
window = tkinter.Tk()

message_label = tkinter.Label(master=window, text="")
message_label.pack()


def display_message():
    message_label.config(text="Hello!")


hello_button = tkinter.Button(master=window, text="Say Hello!", command=display_message)
hello_button.pack()

# Programm (event loop) starten
#   (auf Benutzerinteraktion warten)
window.mainloop()
