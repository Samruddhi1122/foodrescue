import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.ok) {
        const user = await response.json();

        localStorage.setItem("foodrescueId", user.id);
        localStorage.setItem("foodrescueName", user.name);
        localStorage.setItem("foodrescueEmail", user.email);
        localStorage.setItem("foodrescueRole", user.role);

        alert("Login successful!");

        if (user.role === "Donor") {
          window.location.href = "/donor-dashboard";
        } else if (user.role === "Receiver") {
          window.location.href = "/receiver-dashboard";
        } else {
          window.location.href = "/";
        }

      } else {
        const result = await response.text();
        alert("Login failed: " + result);
      }

    } catch (error) {
      alert("Cannot connect to FoodRescue backend.");
      console.error(error);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">🥗</div>

        <h1>Welcome Back!</h1>

        <p>
          Login to your FoodRescue account
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?{" "}

          <span
            onClick={() =>
              (window.location.href = "/register")
            }
          >
            Register
          </span>

        </p>

      </div>

    </div>
  );
}

export default Login;