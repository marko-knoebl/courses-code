import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup function
    // wird aufgefufen:
    // vor änderungen der aufgelisteten Einträge ( [] )
    // vor dem Entfernen der Komponente
    const cleanupFunction = () => {
      clearInterval(intervalId);
    };
    return cleanupFunction;
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
};

export default Clock;
