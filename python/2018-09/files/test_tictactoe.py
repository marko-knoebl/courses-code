import unittest

import ticktacktoe


class HasWon(unittest.TestCase):
    def test_has_won_first_row_x(self):
        board = ticktacktoe.TickTackToe()
        board.field[0] = ["X", "X", "X"]
        won = board.has_won("X")
        self.assertTrue(won)

    def test_has_won_first_row_o(self):
        board = ticktacktoe.TickTackToe()
        board.field[0] = ["O", "O", "O"]
        won = board.has_won("O")
        self.assertTrue(won)

    def test_has_won_diagonal_x(self):
        board = ticktacktoe.TickTackToe()
        board.field[0][0] = "X"
        board.field[1][1] = "X"
        board.field[2][2] = "X"
        won = board.has_won("X")
        self.assertTrue(won)

    def test_has_not_won_diagonal_x(self):
        board = ticktacktoe.TickTackToe()
        board.field[0][0] = "X"
        board.field[1][1] = "X"
        board.field[2][2] = "O"
        won = board.has_won("X")
        self.assertFalse(won)
