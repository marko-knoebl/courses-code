import { useEffect, useState } from "react";
import { fetchExchangeRateAbortable } from "./api";

const currencies = ["USD", "EUR", "JPY", "GBP"];

function ExchangeRateFnAbortController() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function loadExchangeRate(controller: AbortController) {
      setRate(null);
      const rate = await fetchExchangeRateAbortable(from, to, controller);
      setRate(rate);
    }
    loadExchangeRate(controller);
    return () => {
      controller.abort();
    };
  }, [from, to]);
  return (
    <div>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {currencies.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {currencies.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
      <div>{rate !== null ? rate : "no data"}</div>
    </div>
  );
}

export default ExchangeRateFnAbortController;
