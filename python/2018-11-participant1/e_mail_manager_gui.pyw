import tkinter
from e_mail_manager import get_emails

window = tkinter.Tk()

new_value = ""

message_label = tkinter.Label(master=window, text="Please enter Date to search from in format 05-Jul-2018: ")
message_label.pack()

search_entry = tkinter.Entry(master=window)
search_entry.delete(0, tkinter.END)
search_entry.insert(0, '05-Jul-2018')
search_entry.pack()

search_for = tkinter.Entry(master=window)
search_for.delete(0, tkinter.END)
search_for.insert(0, "[pP]r(ue|ü)f")
search_for.pack()

def set_value():
    global new_value 
    date = str(search_entry.get())
    search_str = str(search_for.get())
    results = get_emails(date, search_str)
    for item in results:
        message_label = tkinter.Label(master=window, text=str(item))
        message_label.pack()
        
   

set_button = tkinter.Button(master=window, text="set", command=set_value)
set_button.pack()

window.mainloop()



