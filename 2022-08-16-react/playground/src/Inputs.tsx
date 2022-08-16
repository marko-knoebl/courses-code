import { FormEvent, useState } from "react";

export default function Inputs() {
  const [enableTextInput, setEnableTextInput] = useState<boolean>(true);
  const [myText, setMyText] = useState("foo");

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    alert("form submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <em>fooasdfasd sa asdfsadfsaf asdfasdf asd asdfasdfa asdfasdf asdf</em>{" "}
      <strong>bar</strong>
      <div>
        <input
          type="checkbox"
          checked={enableTextInput}
          onChange={(event) => setEnableTextInput(event.target.checked)}
        />{" "}
        enable text input
      </div>
      <div>
        <input
          disabled={!enableTextInput}
          value={myText}
          onChange={(event) => setMyText(event.target.value)}
        />
      </div>
      <div>input length: {myText.length}</div>
      <button type="submit">submit</button>
    </form>
  );
}
