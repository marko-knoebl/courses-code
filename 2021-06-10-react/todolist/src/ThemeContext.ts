import { createContext, useContext } from "react";

type Theme = "default" | "dark";

const ThemeContext = createContext<Theme | undefined>(undefined);

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("No matching provider found");
  }
  return context;
}

export default ThemeContext;
export { useThemeContext };
export type { Theme };
