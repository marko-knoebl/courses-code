// Komponente, die einen Wert in den Dokumenttitel setzt

import React, { useEffect } from "react";

const CoinInTitle = props => {
  useEffect(() => {
    console.log("setting doc title")
    document.title = props.coin;
  }, [props.coin]);

  return null;
};

export default CoinInTitle;
