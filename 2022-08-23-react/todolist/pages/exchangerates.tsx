import { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "react-query";

async function fetchExchangeRate(from: string, to: string): Promise<number> {
  const res = await fetch(
    "https://api.exchangerate.host/latest?base=" +
      from.toUpperCase() +
      "&symbols=" +
      to.toUpperCase()
  );
  if (!res.ok) {
    throw new Error("could not fetch data from network");
  }
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}

const ExchangeRates: NextPage = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("eur");

  const exchangeRateQuery = useQuery(["exchangerate", from, to], () =>
    fetchExchangeRate(from, to)
  );

  if (exchangeRateQuery.isError) {
    return <div>Error</div>;
  }
  if (exchangeRateQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => setFrom("usd")}>from usd</button>
      <button onClick={() => setFrom("eur")}>from eur</button>
      <button onClick={() => setFrom("gbp")}>from gbp</button>
      <hr />
      <h1>Exchange rate: {exchangeRateQuery.data}</h1>
    </div>
  );
};

export default ExchangeRates;
