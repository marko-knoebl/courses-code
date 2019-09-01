import tkinter
import random
import string

class SnellenChart():
    # TODO: Randomize-Button

    def __init__(self, rows=4):
        self.rows = rows
        self.labels = []
        self.init_ui()
        self.randomize()

    def randomize(self):
        self.characters = []
        for i in range(self.rows):
            row = []
            for j in range(i+1):
                row.append(random.choice(string.ascii_uppercase))
            self.characters.append(row)
        for row_id in range(len(self.characters)):
            characters = self.characters[row_id]
            label = self.labels[row_id]
            label.config(text=" ".join(characters))

    def init_ui(self):
        self.window = tkinter.Tk()
        # erstelle Zeilen
        for i in range(self.rows):
            row_label = tkinter.Label(master=self.window, text="", font=("Arial", (7-i)*5))
            row_label.pack()
            self.labels.append(row_label)
        self.rand_btn = tkinter.Button(text="randomize", command=self.randomize)
        self.rand_btn.pack()

    def run(self):
        self.window.mainloop()

s = SnellenChart()
s.run()
