from tictactoe import PersistentTicTacToe

ttt = PersistentTicTacToe("ttt1.pickle")
ttt.load()

print(ttt.field)
