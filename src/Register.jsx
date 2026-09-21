import { useState } from "react";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Donor");

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert("Registration successful!");
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-icon">🥗</div>

        <h1>Create Account</h1>
        <p>Join FoodRescue and help reduce food waste</p>

        <form onSubmit={handleRegister}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Register As</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Donor">Food Donor</option>
            <option value="Receiver">Food Receiver</option>
          </select>

          <button type="submit">Create Account</button>
        </form>

        <p className="login-text">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;