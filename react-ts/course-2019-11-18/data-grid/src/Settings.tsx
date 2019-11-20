import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeName } from "./types";

const Settings: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <form>
      theme:
      <select
        value={themeContext.themeName}
        onChange={event => {
          themeContext.setThemeName(event.target.value as ThemeName);
        }}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </form>
  );
};

export default Settings;
