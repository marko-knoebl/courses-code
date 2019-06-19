import turtle

def spiral(size):
    if size < 1:
        return
    # gehe eine bestimmte distanz nach vorne
    turtle.forward(size)
    # drehe dich etwas nach links
    turtle.left(10)
    # zeichne hier eine etwas kleinere spirale
    spiral(size*0.99)

spiral(50)
