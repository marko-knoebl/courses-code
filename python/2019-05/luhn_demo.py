from luhn import is_valid, compute_check_digit

ccn1 = "7992739871"
ccn2 = "1348923648"

cd1 = compute_check_digit(ccn1)
print(cd1)
full_ccn1 = ccn1 + cd1
print(is_valid(full_ccn1))

cd2 = compute_check_digit(ccn2)
print(cd2)
full_ccn2 = ccn2 + cd2
print(is_valid(full_ccn2))
