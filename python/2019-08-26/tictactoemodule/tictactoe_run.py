from tictactoe import TicTacToe, TicTacToeError

ttt = TicTacToe("A", "B")

ttt.board[0][0] = 0
print(ttt.board)

ttt.place_mark(1, 1)
ttt.place_mark(2, 2)
print(ttt.board)

print(ttt)

try:
    ttt.place_mark(1, 1)
except TicTacToeError:
    pass
