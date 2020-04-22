import React, { useState } from "react";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const canRegister = username.length >= 3 && password.length >= 3;
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // handle submit
        alert(`registered as ${username}`);
      }}
    >
      <div>
        username: <input value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        password:{" "}
        <input
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div>password strength: {password.length}</div>
      <button disabled={!canRegister}>register</button>
    </form>
  );
}

export default RegisterForm;
