import React, { useState } from "react";
import Admin from "./Admin";

function Login() {
  // const [password, setPassword] = useState<String>();
  // const [name, setName] = useState<String>();
  const name: String = "";
  const password: String = "";
  return name === "ghaith" && password === "test" ? (
    <Admin />
  ) : (
    <form action="#" method="get">
      <label htmlFor="user">
        Username
        <input type="text" name="username" id="user" />
      </label>
      <label htmlFor="pw">
        Password
        <input type="password" name="password" id="pw" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Login;
