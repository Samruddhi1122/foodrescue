import "./App.css";
import PostFood from "./PostFood";
import Login from "./Login";
import Register from "./Register";
import logo from "./assets/foodrescue-logo.png";
import Dashboard from "./Dashboard";
import AvailableFood from "./AvailableFood";
import DonorDashboard from "./DonorDashboard";
import ReceiverDashboard from "./ReceiverDashboard";
import MyDonations from "./MyDonations";
import DonationRequests from "./DonationRequests";
import MyRequests from "./MyRequests";
import Profile from "./Profile";

function App() {
  const path = window.location.pathname;

  /* =========================
     OTHER PAGES
  ========================= */

  if (path === "/login") {
    return <Login />;
  }

  if (path === "/register") {
    return <Register />;
  }

  if (path === "/dashboard") {
    return <Dashboard />;
  }

  if (path === "/post-food") {
    return <PostFood />;
  }

  if (path === "/available-food") {
    return <AvailableFood />;
  }

  if (path === "/donor-dashboard") {
    return <DonorDashboard />;
  }

  if (path === "/receiver-dashboard") {
    return <ReceiverDashboard />;
  }

  if (path === "/my-donations") {
    return <MyDonations />;
  }

  if (path === "/donation-requests") {
    return <DonationRequests />;
  }

  if (path === "/my-requests") {
    return <MyRequests />;
  }

  if (path === "/profile") {
    return <Profile />;
  }

  /* =========================
     HOME PAGE
  ========================= */

  return (
    <div className="home-page">

      {/* NAVBAR */}
      <header className="navbar">

        <div className="nav-logo">
          <img src={logo} alt="FoodRescue Logo" />
          <span>FoodRescue</span>
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>

      </header>


      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-tag">
            🌱 SAVE FOOD • HELP PEOPLE
          </p>

          <h1>
            Rescue Food,
            <br />
            <span>Reduce Waste.</span>
          </h1>

          <p className="hero-description">
            Give surplus food a second chance. Connect with people
            and organizations to share leftover food with those who
            need it.
          </p>

          <div className="hero-small-text">
            ♻️ Every meal saved makes a difference.
          </div>

        </div>


        {/* RIGHT SIDE CARD */}
        <div className="hero-card">

          <div className="hero-food-icon">
            🍲
          </div>

          <h2>
            Food deserves a
            <br />
            second chance.
          </h2>

          <p>
            Together, we can reduce food waste and
            <br />
            make a difference.
          </p>

          <div className="hero-card-icons">
            <span>🌿</span>
            <span>🌱</span>
            <span>🍃</span>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-section">

        <p className="section-tag">
          HOW IT WORKS
        </p>

        <h2>
          Simple Steps, Big Impact
        </h2>

        <p className="section-description">
          FoodRescue makes it easy to share surplus food with
          people who need it.
        </p>


        <div className="steps-container">

          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">👤</div>

            <h3>Register</h3>

            <p>
              Create your FoodRescue account as a donor or receiver.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">🍱</div>

            <h3>Share Food</h3>

            <p>
              Donors can post surplus food with quantity and location.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">🔍</div>

            <h3>Find Food</h3>

            <p>
              Receivers can browse available food and send requests.
            </p>
          </div>


          <div className="step-card">
            <div className="step-number">04</div>
            <div className="step-icon">💚</div>

            <h3>Make an Impact</h3>

            <p>
              Together, we reduce food waste and help our community.
            </p>
          </div>

        </div>

      </section>


      {/* IMPACT SECTION */}
      <section className="impact-section">

        <div className="impact-box">

          <div className="impact-item">
            <span>🌱</span>
            <strong>Food Saved</strong>
            <p>Reduce unnecessary food waste</p>
          </div>

          <div className="impact-item">
            <span>🤝</span>
            <strong>People Helped</strong>
            <p>Connect food with those in need</p>
          </div>

          <div className="impact-item">
            <span>♻️</span>
            <strong>Better Future</strong>
            <p>Build a more sustainable community</p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-logo">
          🥗 FoodRescue
        </div>

        <p>
          Rescue food. Reduce waste. Make a difference.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="/available-food">Available Food</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>

        <p className="copyright">
          © 2026 FoodRescue. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;