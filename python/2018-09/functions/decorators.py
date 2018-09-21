def cache(fn):
    """Cache a function that receives one parameter."""
    cache_dict = {}

    def fn_cached(arg0):
        if arg0 in cache_dict:
            return cache_dict[arg0]
        res = fn(arg0)
        cache_dict[arg0] = res
        return res

    return fn_cached


@cache
def fib(n):
    if n <= 1:
        return 1
    return fib(n - 1) + fib(n - 2)


# ohne Decorator:
# fib = cache(fib)


for i in range(10):
    print(fib(i))

print(fib(100))
