def ask_yes_no(question):
    while True:
        print(question)
        answer_text = input()
        if answer_text == "y":
            return True
        elif answer_text == "n":
            return False
        else:
            print("choose y or n!")
