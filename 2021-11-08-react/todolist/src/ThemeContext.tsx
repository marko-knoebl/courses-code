import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  changeTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider(props: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error("No matching provider found");
  }
  return themeContext;
}

export { ThemeContext, ThemeProvider, useTheme };
