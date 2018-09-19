from ticktacktoe import TickTackToe

t = TickTackToe()

t.field[2][2] = "X"
t.field[1][1] = "O"

t.save_as_json("files/field.json")
t.load_from_json("files/field.json")

t.save_as_pickle("files/field.pickle")
t.load_from_pickle("files/field.pickle")

t.save_as_binary("files/field.ttt")

t.save_as_xml("files/field.xml")

print(t.field)