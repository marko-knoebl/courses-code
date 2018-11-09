from bankaccount import BankAccount

hauptkonto = BankAccount("DE123", "Marko")

sparkonto = BankAccount("DE4432", "Marko")

print(hauptkonto.buchungen)
print(hauptkonto.iban)
print(sparkonto.owner_name)

hauptkonto.buchen(1234, "EUR", "Gehalt")
hauptkonto.buchen(-12, "EUR", "Mittagessen")

print(hauptkonto.buchungen)
print(hauptkonto.getbalance())
