class BankAccount():
    """Repräsentiert ein Bankkonto."""

    def __init__(self, iban, owner_name):
        # Initialisiere das Objekt
        self.buchungen = []
        self.iban = iban
        self.owner_name = owner_name

    def buchen(self, betrag, waehrung: str, beschreibung: str) -> None:
        # speichere die buchung in "buchungen"
        self.buchungen.append( (betrag, waehrung, beschreibung) )
    
    def getbalance(self) -> float:
        total = 0.0

        for buchung in self.buchungen:
            total += buchung[0]
        return total
