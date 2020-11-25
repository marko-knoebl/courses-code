from concurrent.futures.process import ProcessPoolExecutor

def is_prime(n):
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def get_prime_number_or_none(n):
    if is_prime(n):
        return n
    return None

if __name__ == "__main__":
    input_numbers = range(100_000_000_000_000, 100_000_000_000_100)
    
    # without parallelization:
    # primes = [number for number in input_numbers if is_prime(number)]
    
    with ProcessPoolExecutor() as executor:
        prime_or_none = list(executor.map(get_prime_number_or_none, input_numbers))

    primes = [entry for entry in prime_or_none if entry is not None]

    print(primes)
