import { useState } from "react";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Donor");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            role: role,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();

        localStorage.setItem("foodrescueId", result.id);
        localStorage.setItem("foodrescueName", result.name);
        localStorage.setItem("foodrescueRole", result.role);
        localStorage.setItem("foodrescueEmail", result.email);

        alert("Registration successful!");

        window.location.href = "/login";
      } else {
        const error = await response.text();
        alert("Registration failed: " + error);
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to FoodRescue backend.");
    }
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <p className="register-tag">
          JOIN FOODRESCUE
        </p>

        <h1>Create Account</h1>

        <p className="register-subtitle">
          Join FoodRescue and help reduce food waste.
        </p>

        <form onSubmit={handleRegister}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Account Type</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="Donor">Food Donor</option>
              <option value="Receiver">Food Receiver</option>
            </select>
          </div>

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="login-link">
          Already have an account?{" "}
          <a href="/login">Login here</a>
        </p>

      </div>

    </div>
  );
}

export default Register;