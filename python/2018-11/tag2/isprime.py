def isprime(n):
    # teste auf teilbarkeit von 2 bis n-1
    for i in range(2, n):
        # ist n teilbar durch i?
        if n % i == 0:
            # n ist keine Primzahl
            # return springt aus der Funktion (isprime) heraus
            return False

    # schleife ist durchgelaufen, ohne dass ein Teiler gefunden wurde
    return True
