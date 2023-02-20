import { useState } from "react";
import { Link } from "react-router-dom";
import { signIn } from "../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res = await signIn(email, password);
    if (res.error) setError(res.error);
  };

  return (
    <>
      {error ? <div>{error}</div> : null}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="submit" />
      </form>
      <p>
        Not registered yet? <Link to="/signup">Sign up</Link>
      </p>
    </>
  );
};

export default SignIn;
