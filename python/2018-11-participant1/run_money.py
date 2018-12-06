from money import Money

a = Money("€", 10.0)
b = Money("$", 10.0)


print(f"Amount: {a.get_amount()}")
print(f"Currency: {a.get_currency()}")


print(f"a to Dollar: {a.euro_to_dollar()}")