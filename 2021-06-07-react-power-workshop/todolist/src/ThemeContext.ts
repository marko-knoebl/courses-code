import { Theme } from "./types";
import { createContext } from "react";

const ThemeContext = createContext("default" as Theme);

export default ThemeContext;
