import "./App.css";

import Login from "./Login";
import Register from "./Register";
import PostFood from "./PostFood";
import AvailableFood from "./AvailableFood";
import DonorDashboard from "./DonorDashboard";
import ReceiverDashboard from "./ReceiverDashboard";
import MyDonations from "./MyDonations";
import DonationRequests from "./DonationRequests";
import MyRequests from "./MyRequests";
import Profile from "./Profile";

function App() {

  const handleLogout = () => {
    localStorage.removeItem("foodrescueName");
    localStorage.removeItem("foodrescueEmail");
    localStorage.removeItem("foodrescueRole");
    localStorage.removeItem("foodrescueId");

    window.location.href = "/login";
  };

  if (window.location.pathname === "/login") {
    return <Login />;
  }

  if (window.location.pathname === "/register") {
    return <Register />;
  }

  if (window.location.pathname === "/post-food") {
    return <PostFood />;
  }

  if (window.location.pathname === "/available-food") {
    return <AvailableFood />;
  }

  if (window.location.pathname === "/donor-dashboard") {
    return (
      <DonorDashboard
        onLogout={handleLogout}
      />
    );
  }

  if (window.location.pathname === "/receiver-dashboard") {
    return (
      <ReceiverDashboard
        onLogout={handleLogout}
      />
    );
  }

  if (window.location.pathname === "/my-donations") {
    return <MyDonations />;
  }

  if (window.location.pathname === "/donation-requests") {
    return <DonationRequests />;
  }

  if (window.location.pathname === "/my-requests") {
    return <MyRequests />;
  }

  if (window.location.pathname === "/profile") {
    return <Profile />;
  }

  return (
    <div className="app">

      <nav className="navbar">

        <div className="logo">
          🌱 FoodRescue
        </div>

        <div className="nav-links">

          <a href="/">
            Home
          </a>

          <a href="#how">
            How It Works
          </a>

          <a href="/login">
            Login
          </a>

          <a href="/register">
            Register
          </a>

        </div>

      </nav>

      <section className="hero" id="home">

        <div className="hero-left">

          <p className="hero-tag">
            🌱 SAVE FOOD • HELP PEOPLE
          </p>

          <h1>
            Rescue Food,
            <br />
            Reduce Waste.
          </h1>

          <p className="hero-text">
            FoodRescue connects people with surplus food
            to those who need it, helping reduce food waste
            and build a better community.
          </p>

          <div className="hero-buttons">

            

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-card">

            <div className="hero-food-icon">
              🍱
            </div>

            <h2>
              Food deserves
              <br />
              a second chance.
            </h2>

            <p>
              Share extra food.
              <br />
              Help someone in need.
            </p>

          </div>

        </div>

      </section>

      <section
        className="how-section"
        id="how"
      >

        <p className="section-tag">
          HOW IT WORKS
        </p>

        <h2>
          Simple. Smart. Sustainable.
        </h2>

        <div className="steps">

          <div className="step-card">

            <div className="step-icon">
              🍱
            </div>

            <h3>
              Post Food
            </h3>

            <p>
              Donors can easily post their
              leftover food.
            </p>

          </div>

          <div className="step-card">

            <div className="step-icon">
              🔍
            </div>

            <h3>
              Find Food
            </h3>

            <p>
              Receivers can find available
              food nearby.
            </p>

          </div>

          <div className="step-card">

            <div className="step-icon">
              🤝
            </div>

            <h3>
              Request Food
            </h3>

            <p>
              Request food that is
              available for sharing.
            </p>

          </div>

          <div className="step-card">

            <div className="step-icon">
              🌱
            </div>

            <h3>
              Reduce Waste
            </h3>

            <p>
              Together we can reduce
              unnecessary food waste.
            </p>

          </div>

        </div>

      </section>

      <section className="impact-section">

        <div className="impact-card">

          <h2>
            Making an Impact 🌍
          </h2>

          <p>
            Every meal shared is a step
            towards a better future.
          </p>

          <div className="impact-stats">

            <div>
              <strong>100+</strong>
              <span>Meals Shared</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>People Helped</span>
            </div>

            <div>
              <strong>25+</strong>
              <span>Donors</span>
            </div>

          </div>

        </div>

      </section>

      <footer className="footer">

        <h3>
          🌱 FoodRescue
        </h3>

        <p>
          Save Food. Help People. Reduce Waste.
        </p>

        <p>
          © 2026 FoodRescue
        </p>

      </footer>

    </div>
  );
}

export default App;
