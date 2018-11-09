import tkinter

# ein Objekt vom Typ "Tk" erstellen
window = tkinter.Tk()

count = 0

def increment():
    # count soll eine "globale" Variable sein,
    # die also nicht nur innerhalb von increment geändert wird
    global count
    count = count + 1
    count_button.config(text=str(count))


count_button = tkinter.Button(master=window, text="0", command=increment, width=10, height=3, justify= tkinter.RIGHT)
count_button.pack()


def set_value():
    new_value = int(set_count.get())
    global count
    count = new_value
    count_button.config(text=str(count))


set_count = tkinter.Entry(master=window)
set_count.pack()

set_button = tkinter.Button(master=window, text="set", command=set_value)
set_button.pack()

# Programm (event loop) starten
#   (auf Benutzerinteraktion warten)
window.mainloop()
