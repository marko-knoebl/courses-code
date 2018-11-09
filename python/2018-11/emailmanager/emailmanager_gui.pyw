import tkinter
from emailmanager import get_emails

# ein Objekt vom Typ "Tk" erstellen
window = tkinter.Tk()

search_entry = tkinter.Entry(master=window)
search_entry.pack()
search_entry.insert(0, "xxx")

# eintrag überschreiben
search_entry.delete(0, tkinter.END)
search_entry.insert(0, "abcdef")


def update_search_results():

    # alte einträge löschen
    for label in result_frame.winfo_children():
        label.destroy()

    emails = get_emails(search_entry.get())

    for email in emails:
        email_text = email[1] + ": " + email[2][:15] + "(" + ", ".join(email[3]) + ")"
        email_text = email_text.replace("\n", "").replace("\r", "")
        n = 15
        email_text_parts = [email_text[i:i+n] for i in range(0, len(email_text), n)]
        email_text = '\n'.join(email_text_parts)

        email_label = tkinter.Label(result_frame, text=email_text)
        email_label.pack()


search_button = tkinter.Button(
    window, text="search", width=10, command=update_search_results
)
search_button.pack()

result_frame = tkinter.Frame(window)
result_frame.pack()

window.mainloop()
