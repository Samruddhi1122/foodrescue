import { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login successful!");
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">🥗</div>

        <h1>Welcome Back!</h1>
        <p>Login to your FoodRescue account</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-text">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;

