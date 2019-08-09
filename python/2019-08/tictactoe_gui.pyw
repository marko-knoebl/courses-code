import tkinter as tk

from tictactoe import TicTacToe


class TicTacToeGui:
    def __init__(self):
        self.game = TicTacToe()

        self.window = tk.Tk()

        self.heading = tk.Label(master=self.window, text="TIC TAC TOE")
        self.heading.grid(column=0, row=0)

        self.field = tk.Frame(master=self.window, padx=20, pady=20)
        self.field.grid(column=0, row=1)

        # Verzeichnis / Auflistung aller Buttons
        self.buttons = []

        for row_index in range(3):
            button_row = []
            for col_index in range(3):

                event_handler = self.make_event_handler(row_index, col_index)

                print(row_index, col_index)
                # neuen Button erzeugen
                btn = tk.Button(
                    master=self.field, height=2, width=4, text="", command=event_handler
                )
                btn.grid(row=row_index, column=col_index)
                button_row.append(btn)
            self.buttons.append(button_row)

    def start(self):
        self.window.mainloop()

    def make_event_handler(self, row_index, col_index):
        # neue Event-Handler-Funktion für diesen Button
        # die Funktion make_event_handler merkt sich row_index und col_index
        # (sogenannte "Closure")
        def event_handler():
            self.game.place_mark(row_index, col_index)
            player = self.game.field[row_index][col_index]
            player_symbol = self.game.symbols[player]
            self.buttons[row_index][col_index].config(text=player_symbol)
            if self.game.winner() is not None:
                for button_row in self.buttons:
                    for button in button_row:
                        button.config(state=tk.DISABLED)

        return event_handler


ttt = TicTacToeGui()
ttt.start()
