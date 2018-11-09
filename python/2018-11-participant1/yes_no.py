question = str("Continue y/n? : ")

def answer (question):
    in_char = input(question)
    if in_char == 'y' or in_char == 'Y':
        return True
    elif in_char == 'n' or in_char == 'N':
        return False
    else: return answer(question)

decision = answer(question)
print(decision)