import tkinter

import db_interface

window = tkinter.Tk()

heading_label = tkinter.Label(master=window, text="Todo", font=("Arial", 30))
heading_label.pack()

todos = db_interface.get_all_todos()

todolist_frame = tkinter.Frame(master=window, bd=2, relief="sunken")
todolist_frame.pack(side=tkinter.LEFT)


def make_todo_toggler(id, todo_label):
    def toggle_todo_temp():
        # schreibe änderungen in die datenbank
        db_interface.toggle_todo(id)
        # aktualisiere die daten
        global todos
        todos = db_interface.get_all_todos()
        todo_ = None
        for todo_candidate in todos:
            if id == todo_candidate[0]:
                todo_ = todo_candidate
        # todo_ = todos[todo[0]]
        text = ""
        if todo_[2] == 0:
            text += "TODO: "
        else:
            text += "DONE: "
        text += todo_[1]
        todo_label.config(text=text)
        todo_label.destroy()

    return toggle_todo_temp


for todo in todos:
    todo_frame = tkinter.Frame(master=todolist_frame, bd=2, relief="sunken")
    todo_frame.pack()
    text = ""
    if todo[2] == 0:
        text += "TODO: "
    else:
        text += "DONE: "
    text += todo[1]
    todo_label = tkinter.Label(master=todo_frame, text=text)
    todo_label.pack(side=tkinter.LEFT)

    todo_toggler = make_todo_toggler(todo[0], todo_label)

    todo_toggle_button = tkinter.Button(
        master=todo_frame, text="Toggle", command=todo_toggler
    )
    todo_toggle_button.pack(side=tkinter.LEFT)


window.mainloop()
