// ThemeContext.js

import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  changeTheme: (theme: string) => void;
};

// default value: null
const ThemeContext = createContext<ThemeContextType>(null as any);

export { ThemeContext };
