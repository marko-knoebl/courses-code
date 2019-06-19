import tkinter


class Counter:
    def __init__(self):
        self.count = 0

        self.window = tkinter.Tk()
        self.count_label = tkinter.Label(
            master=self.window,
            text=str(self.count),
            height=2,
            font=("Arial", 30),
            padx=100,
            pady=10
        )
        self.count_label.pack()
        self.increment_btn = tkinter.Button(
            master=self.window,
            text="click",
            command=self.increment_count,
            height=2,
            width=4,
            font=("Arial", 20)
        )
        self.increment_btn.pack()

    def increment_count(self):
        self.count += 1
        self.count_label.config(text=str(self.count))
    
    def run(self):
        self.window.mainloop()

# nur ausführen, wenn dieses Skript direkt ausgeführt (nicht importiert) wurde
if __name__ == "__main__":
    c = Counter()
    c.run()
