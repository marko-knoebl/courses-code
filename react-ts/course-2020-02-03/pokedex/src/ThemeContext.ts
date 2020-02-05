import React from "react";

type ThemeContextType = {
  theme: "standard" | "fancy";
};

const ThemeContext = React.createContext({
  theme: "standard"
} as ThemeContextType);

export default ThemeContext;
