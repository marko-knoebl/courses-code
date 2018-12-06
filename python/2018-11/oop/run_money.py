from money import Money

a = Money('eur', 3)

print(a)

print(a + a)

b = Money('usd', 4)

print(b.to_eur())
