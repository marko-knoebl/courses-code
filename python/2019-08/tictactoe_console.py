# Beispieldurchlauf:

# TIC TAC TOE
# [ leeres Spielfeld ]
# active player: O
# enter position (e.g.: 3 3)
# 3 2
# [ neues Spielfeld ]
# active player: X
# enter position (e.g.: 3 3)
# 2 2
# [ neues Spielfeld ]
# ...
# ...
# X has won!

from tictactoe import TicTacToe

ttt = TicTacToe()

print("TIC TAC TOE")
while ttt.winner() == None:
    print(str(ttt))
    print(f"active player: {ttt.active_player}")
    print("enter position (e.g.: 3 3)")
    pos_str = input()
    pos = pos_str.split()
    try:
        row = int(pos[0]) - 1
        col = int(pos[1]) - 1
    except (ValueError, IndexError):
        # ungültige Benutzereingabe
        print("Invalid input")
        continue
    try:
        ttt.place_mark(row, col)
    except ValueError:
        print("Invalid index")

ttt.draw_field()
print(f"{ttt.winner_name()} has won!")
