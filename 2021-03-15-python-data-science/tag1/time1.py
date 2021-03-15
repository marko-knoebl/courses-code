#-------------------------------------------------------------------------------
# time1.py
#-------------------------------------------------------------------------------
import numpy as np
import time

SIZE = 1_000_000

def pure_python_version():
    t1 = time.time()
    X = range(SIZE)
    Y = range(SIZE)
    Z = [X[i] + Y[i] for i in range(len(X))]
    return time.time() - t1

def numpy_version():
    t1 = time.time()
    X = np.arange(SIZE)
    Y = np.arange(SIZE)
    Z = X + Y
    return time.time() - t1

t1 = pure_python_version()
t2 = numpy_version()
print(F"NumPy {t1 / t2:5.2f} faster!", t1, t2)

# Mittelwert aus 10 Durchlaeufen
t1 = sum([pure_python_version() for _ in range(10)]) / 10
T2 = sum([numpy_version()       for _ in range(10)]) / 10
print(F"NumPy {t1 / t2:5.2f} faster!", t1, t2)
