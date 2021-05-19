import { createContext } from "react";
import { Theme } from "./types";

const ThemeContext = createContext<Theme>("light");

export default ThemeContext;
