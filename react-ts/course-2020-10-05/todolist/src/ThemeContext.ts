import { createContext } from "react";

const ThemeContext = createContext<"light" | "dark">("light");

export default ThemeContext;
