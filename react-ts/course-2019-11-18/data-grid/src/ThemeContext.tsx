import React from "react";
import { ThemeName } from "./types";

type ThemeContextType = {
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void;
};

const ThemeContext = React.createContext({} as ThemeContextType);

export default ThemeContext;
