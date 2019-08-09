from tictactoe import PersistentTicTacToe

ttt = PersistentTicTacToe("ttt1.pickle")

ttt.draw_field()
ttt.save_field()

ttt2 = PersistentTicTacToe("ttt2.pickle")

ttt2.field = [[None, 0, None], [1, 0, None], [1, 0, None]]

print(ttt)
print(ttt.winner())
print(ttt2)
print(ttt2.winner())

# platziere ein neues Symbol
# (des aktiven Spielers)
# im Zentrum des Feldes
print(ttt.active_player) # 0
ttt.place_mark(1, 1)
print(ttt.active_player) # 1
ttt.place_mark(1, 1) # wird ignoriert
print(ttt.active_player) # 1
ttt.place_mark(0, 0)
print(ttt.active_player) # 0
ttt.place_mark(2, 0)
print(ttt.active_player) # 1
ttt.place_mark(1, 0)
print(ttt.winner())
print(ttt.active_player) # 0
ttt.place_mark(0, 2)

print(ttt)
print(ttt.winner())

print(ttt[2][0])

ttt.save()
