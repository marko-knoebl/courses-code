import pickle

field = [
  ['X', 'O', None],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
]

# write

serialized = pickle.dumps(field)

with open("ttt.pickle", mode="wb") as picklefile:
    picklefile.write(serialized)

# open

with open("ttt.pickle", mode="rb") as picklefile:
    serialized = picklefile.read()
earlier = pickle.loads(serialized)
