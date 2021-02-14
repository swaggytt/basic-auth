import { useState } from "react";
import "./login.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   console.log(username);
  //   console.log(password);

  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
