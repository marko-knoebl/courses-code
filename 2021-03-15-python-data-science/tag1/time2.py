#-------------------------------------------------------------------------------
# time2.py
#-------------------------------------------------------------------------------
import numpy as np
from timeit import Timer

SIZE = 1_000_000

def pure_python_version():
    X = range(SIZE)
    Y = range(SIZE)
    Z = [X[i] + Y[i] for i in range(len(X))]
    return Z

def numpy_version():
    X = np.arange(SIZE)
    Y = np.arange(SIZE)
    Z = X + Y
    return Z

timer_obj1 = Timer("pure_python_version()",
                   "from __main__ import pure_python_version")
timer_obj2 = Timer("numpy_version()",
                   "from __main__ import numpy_version")

# 10 Durchlaeufe
t1 = timer_obj1.timeit(10)
t2 = timer_obj2.timeit(10)
print(F"NumPy {t1 / t2:5.2f} faster!", t1, t2)

# 3 x 10 Durchlaeufe
for (t1, t2) in (zip(timer_obj1.repeat(repeat=3, number=10),
                     timer_obj2.repeat(repeat=3, number=10))):
    print(F"NumPy {t1 / t2:5.2f} faster!", t1, t2)
