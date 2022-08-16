async function fetchExchangeRate(from: string, to: string): Promise<number> {
  const res = await fetch(
    "https://api.exchangerate.host/latest?base=" +
      from.toUpperCase() +
      "&symbols=" +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}

async function fetchExchangeRateAbortable(
  from: string,
  to: string,
  abortController: AbortController
): Promise<number> {
  const res = await fetch(
    "https://api.exchangerate.host/latest?base=" +
      from.toUpperCase() +
      "&symbols=" +
      to.toUpperCase(),
    { signal: abortController.signal }
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}

export { fetchExchangeRate, fetchExchangeRateAbortable };
