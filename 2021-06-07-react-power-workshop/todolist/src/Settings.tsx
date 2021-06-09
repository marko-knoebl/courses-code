import { Theme } from "./types";

function Settings(props: { theme: Theme; setTheme: (theme: Theme) => void }) {
  return (
    <div>
      <p>current theme: {props.theme}</p>
      <button onClick={() => props.setTheme("default")}>default</button>
      <button onClick={() => props.setTheme("dark")}>dark</button>
    </div>
  );
}

export default Settings;
