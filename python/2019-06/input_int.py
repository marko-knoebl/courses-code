# > Enter a quantity:
# three
# > Invalid entry
# > Enter a quantity:
# 
# > Invalid entry
# > Enter a quantity:
# 3

# input_int gibt 3 zurück


def input_int(question_text):

    # wait for valid answer
    while True:
        response = input(question_text)
        try:
            int_response = int(response)
            break
        except ValueError:
            print("Invalid entry")

    return int_response

def input_int_lbyl(question_text):

    # wait for valid answer
    while True:
        response = input(question_text)
        if not response.isdigit():
            print("Invalid entry")
        else:
            int_response = int(response)
            break

    return int_response
