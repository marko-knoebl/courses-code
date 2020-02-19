import React, { useState } from "react";

/*
TODO:

- have an entry in the state called "isLoggedIn"
  that changes on submit (it would accept any password)
*/

function getPasswordStrength(pw: string) {
  if (pw.length >= 6) {
    return "strong";
  }
  return "weak";
}

function RegistrationForm() {
  const [login, setLogin] = useState("");
  const [pw, setPw] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const canRegister = login.length > 0 && pw.length > 0;
  const passwordStrength = getPasswordStrength(pw);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setIsLoggedIn(true);
      }}
    >
      <h1>log in</h1>
      {isLoggedIn ? "You are logged in" : "You are not logged in"}
      <input
        value={login}
        onChange={event => setLogin(event.target.value)}
      />
      <input
        value={pw}
        onChange={event => setPw(event.target.value)}
        type="password"
      />
      <div>Password strength: {passwordStrength}</div>
      <button disabled={!canRegister || isLoggedIn}>register</button>
    </form>
  );
}

export default RegistrationForm;
