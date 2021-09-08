import { createContext, ReactNode, useContext, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider(props: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const themeObj = useContext(ThemeContext);
  if (themeObj === undefined) {
    throw new Error("no provider for ThemeContext");
  }
  return themeObj;
}

export { ThemeContext, ThemeProvider, useTheme };
