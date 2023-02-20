import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password !== password2) {
    //   setError("Passwords do not match");
    // } else {
    //   setEmail("");
    //   setPassword("");
    //   const res = await signUp(email, password);
    //   if (res.error) setError(res.error);
    // }
    setEmail("");
    setPassword("");
    const res = await signUp(email, password);
    if (res.error) setError(res.error);
  };

  return (
    <>
      <p>Sign up</p>
      <div>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          Already registered? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
