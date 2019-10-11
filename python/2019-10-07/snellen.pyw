import tkinter as tk
import random
import string


class Snellen:
    def __init__(self):
        self.window = tk.Tk()
        # Liste von tk Label-Elementen
        self.labels = []

        for i in range(5):
            # new label
            lbl = tk.Label(
                master=self.window,
                text=self.get_random_letters(i + 1),
                font=("Arial", 55 - i * 10),
            )
            lbl.pack()
            self.labels.append(lbl)

        self.new_btn = tk.Button(self.window, text="new", command=self.new)
        self.new_btn.pack()

    def run(self):
        self.window.mainloop()

    @staticmethod
    def get_random_letter():
        return random.choice(string.ascii_uppercase)

    def get_random_letters(self, n):
        letter_list = [self.get_random_letter() for i in range(n)]
        letter_str = " ".join(letter_list)
        return letter_str

    def new(self):
        for i, label in enumerate(self.labels):
            label.config(text=self.get_random_letters(i + 1))


app = Snellen()
app.run()
