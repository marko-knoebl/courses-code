import unittest

from tictactoemodule import tictactoe


class Initialization(unittest.TestCase):
    def test_board_initialized(self):
        ttt = tictactoe.TicTacToe()
        self.assertEqual(ttt.symbol0, "X")
        self.assertEqual(ttt.board, [[None] * 3] * 3)


if __name__ == '__main__':
    unittest.main()
