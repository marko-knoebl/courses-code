from functools import partial

open_utf8 = partial(open, encoding="utf-8")

with open_utf8("functions/functools_.py") as ft:
    print(ft.read())

# Ö 😀
