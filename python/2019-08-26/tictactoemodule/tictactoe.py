class TicTacToeError(Exception):
    pass

class TicTacToe:
    """A class that represents a tic tac toe game.

    >>> TicTacToe()
    TicTacToe<[[None, None, None], [None, None, None], [None, None, None]]>
    """

    def __init__(self, symbol0="X", symbol1="O"):
        self.symbol0 = symbol0
        self.symbol1 = symbol1
        self.board = [[None] * 3, [None] * 3, [None] * 3]

    def __str__(self):
        return f"TicTacToe<{self.board}>"

    def __repr__(self):
        return f"TicTacToe<{self.board}>"

    def place_mark(self, row: int, col: int):
        """
        >>> a = TicTacToe()
        >>> a.place_mark(1, 1)
        >>> a #doctest: +ELLIPSIS
        TicTacToe<[[None, None, None], [None, 0, None], ...]>"""
        assert isinstance(row, int)
        assert isinstance(col, int)
        active_player = self._get_active_player()
        if self.board[row][col] is None:
            self.board[row][col] = active_player
        else:
            raise TicTacToeError(f"position {row}, {col} is occupied")

    def _get_active_player(self):
        turn = 0
        for row in self.board:
            for cell in row:
                if cell is not None:
                    turn += 1
        return turn % 2

# Wurde diese Datei direkt ausgeführt? (und nicht importiert)

if __name__ == "__main__":
    import doctest
    doctest.testmod()
