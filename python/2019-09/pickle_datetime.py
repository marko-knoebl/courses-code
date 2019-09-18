import pickle
import datetime

now = datetime.datetime.now()

serialized = pickle.dumps(now)

with open("datetime.pickle", mode="wb") as picklefile:
    picklefile.write(serialized)

import pickle

with open("datetime.pickle", mode="rb") as picklefile:
    serialized = picklefile.read()
earlier = pickle.loads(serialized)
print(earlier)
