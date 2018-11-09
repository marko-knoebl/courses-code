from money import Money

a = Money("EUR", 10)
b = Money("USD", 5)

print(a.amount)

print(a.to_usd())
print(b.to_usd())