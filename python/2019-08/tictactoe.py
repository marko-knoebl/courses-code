import json
import csv

from ZODB import DB, FileStorage
import transaction

example_field = [[None, 0, None], [1, 0, None], [1, 0, None]]

symbols = {None: ".", 1: "X", 0: "O"}

winning_combinations = [
    # rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    # columns
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    # diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
]


class TicTacToe:
    """Tic Tac Toe Game.
    
    >>> TicTacToe(name0="0", name1="X")
    """

    symbols = {None: ".", 1: "X", 0: "O"}

    def __init__(self, name0="O", name1="X"):
        self.field = [[None, None, None], [None, None, None], [None, None, None]]
        # wievielte Runde?
        self.turn = 0
        self.active_player = 0
        self.player_names = [name0, name1]

    def __str__(self):
        """Build a string representation of a field using ASCII symbols"""
        field_string = ""

        for row in self.field:
            symb = [self.symbols[row[0]], self.symbols[row[1]], self.symbols[row[2]]]

            field_string = field_string + "|".join(symb) + "\n"
            field_string = field_string + "-+-+-\n"

        return field_string

    def __getitem__(self, i):
        return self.field[i]

    def place_mark(self, row, col):
        if not type(row) == int or not type(col) == int:
            raise TypeError("row/col must be an int")
        if not 0 <= row <= 2 or not 0 <= col <= 2:
            raise ValueError("row/col must lie between 0 and 2")
        if self.field[row][col] != None:
            return
        self.field[row][col] = self.active_player
        self.turn += 1
        self.active_player = self.turn % 2

    def draw_field(self):
        """Draw a tic-tac-toe field using ASCII symbols."""
        print(self.__str__())

    def save_field(self):
        """Save an ASCII respresentation to the file field.ttt"""
        with open("field.ttt", "w", encoding="utf-8") as field_file:
            field_file.write(self.__str__())

    def save_field_json(self):
        json_string = json.dumps(self.field, indent=4)
        with open("field.json", "w", encoding="utf-8") as field_file:
            field_file.write(json_string)

    def save_field_csv(self):
        with open("field.csv", "w", encoding="utf-8", newline="") as field_file:
            writer = csv.writer(field_file)
            writer.writerows(self.field)
            # demo:
            # writer.writerows([[1, 1, 1], [0, 1, 0]])

    def winner(self):
        """Determine the winner of a game.

        Return 0, 1 or None."""

        # test for all players and all winning combinations:
        for player in [0, 1]:
            for combination in winning_combinations:

                # Beispiel: player = 0
                # combination = [ [0, 0], [1, 0], [2, 0] ]

                pos0 = combination[0]
                pos1 = combination[1]
                pos2 = combination[2]
                if (
                    self.field[pos0[0]][pos0[1]]
                    == self.field[pos1[0]][pos1[1]]
                    == self.field[pos2[0]][pos2[1]]
                    == player
                ):
                    return player
        return None

    def winner_name(self):
        if self.winner() != None:
            return self.player_names[self.winner()]
        return None


class PersistentTicTacToe(TicTacToe):
    """Tic Tac Toe Game that can be saved.
    
    >>> PersistentTicTacToe(name0="O", name1="X", location="ttt.pickle")
    """

    # PersistentTicTacToe ist eine Unterklasse von TicTacToe

    def __init__(self, location, name0="O", name1="X"):
        # aufrufen von __init__ der Elternklasse(n)
        super().__init__(name0, name1)

        self.db = DB(FileStorage.FileStorage(location))
        self.connection = self.db.open()
        self.root = self.connection.root()

    def save(self):
        self.root["field"] = self.field
        self.root["turn"] = self.turn
        self.root["active_player"] = self.active_player
        self.root["player_names"] = self.player_names
        transaction.commit()

    def load(self):
        self.field = self.root["field"]
        self.turn = self.root["turn"]
        self.active_player = self.root["active_player"]
        self.player_names = self.root["player_names"]
