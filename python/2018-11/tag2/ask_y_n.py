def ask_y_n(question):
    answer_text = input(question)
    if answer_text == "y":
        return True
    else:
        return False


answer1 = ask_y_n("Do you wish to continue?")
print(answer1)

answer2 = ask_y_n("Add item to basket?")
print(answer2)
