import tkinter


class Counter:
    def __init__(self):
        self.count = 0
        self.window = tkinter.Tk()

        self.button = tkinter.Button(
            master=self.window,
            command=self.increment,
            text=str(self.count),
            foreground="red",
            background="white",
            padx=25,
            pady=5
        )
        self.button.pack()
        self.window.mainloop()

    def increment(self):
        self.count += 1

        self.button.config(text=str(self.count))


c = Counter()
