import React from "react";

export type Theme = "light" | "dark";

const ThemeContext = React.createContext<Theme>("light");

export default ThemeContext;

/*
- theme änderbar machen (mittels buttons in TodoApp)
- theme in einer Komponente verwenden
*/
