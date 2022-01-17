import { createContext, ReactNode, useState } from "react";

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

export { ThemeContext, ThemeProvider };
