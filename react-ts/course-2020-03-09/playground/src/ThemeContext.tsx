import { createContext } from "react";

export type ThemeName = "default" | "fancy";

const ThemeContext = createContext<ThemeName>("default");

export default ThemeContext;
