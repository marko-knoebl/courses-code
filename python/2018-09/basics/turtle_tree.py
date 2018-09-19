# pylint: disable=E1101

import turtle

turtle.clear()


def draw_tree(length, depth):
    if depth == 0:
        return
    turtle.forward(length)
    turtle.left(45)
    draw_tree(length / 2, depth - 1)
    turtle.right(90)
    draw_tree(length / 2, depth - 1)
    turtle.left(45)
    turtle.back(length)


draw_tree(100, 6)

input("end?")
