import "./App.css";
import PostFood from "./PostFood";
import Login from "./Login";
import Register from "./Register";
import logo from "./assets/foodrescue-logo.png";
import Dashboard from "./Dashboard";
import AvailableFood from "./AvailableFood";
function App() {
  if (window.location.pathname === "/login") {
  return <Login />;
  }
  if (window.location.pathname === "/register") {
  return <Register />;
}
if (window.location.pathname === "/dashboard") {
  return <Dashboard />;
}
if (window.location.pathname === "/post-food") {
  return <PostFood />;
}
if (window.location.pathname === "/available-food") {
  return <AvailableFood />;
}
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
       <div className="logo">
  <img src={logo} alt="FoodRescue Logo" />
  <span>FoodRescue</span>
</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how">How It Works</a>
          <a href="/available-food">Available Food</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-text">
          <p className="tagline">🌱 SAVE FOOD • HELP PEOPLE</p>

          <h1>
            Rescue Food,
            <br />
            <span>Reduce Waste.</span>
          </h1>

          <p className="hero-description">
            Give surplus food a second chance. Connect with people
            and organizations to share leftover food with those who need it.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              🍱 Donate Food
            </button>

            <button className="secondary-btn">
              🔎 Find Food
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="food-icon">🍲</div>
          <h2>Food deserves a second chance.</h2>
          <p>
            Together, we can reduce food waste and make a difference.
          </p>
          <div className="leaf">🌿 🌱 🍃</div>
        </div>

      </section>

      {/* How It Works */}
      <section className="how-section" id="how">

        <p className="section-tag">HOW IT WORKS</p>

        <h2>Simple. Smart. Sustainable.</h2>

        <p className="section-description">
          FoodRescue makes it easy to share surplus food with people nearby.
        </p>

        <div className="steps">

          <div className="step-card">
            <div className="step-icon">📝</div>
            <h3>1. Post Food</h3>
            <p>
              Tell us about the leftover food you want to share.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">🔎</div>
            <h3>2. Find Food</h3>
            <p>
              Discover available food shared by people nearby.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">🤝</div>
            <h3>3. Rescue & Share</h3>
            <p>
              Connect food with people who need it.
            </p>
          </div>

        </div>
      </section>

            {/* Impact */}
      <section className="impact">
        <h2>Every meal rescued matters. 🌍</h2>
        <p>
          Join us in building a world with less food waste.
        </p>
      </section>
    </div>
  );
}

export default App;