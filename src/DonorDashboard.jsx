import "./DonorDashboard.css";

function DonorDashboard({ onLogout }) {
  return (
    <div className="donor-dashboard">

      <div className="donor-header">

        <p className="dashboard-tag">
          DONOR DASHBOARD
        </p>

        <h1>
          Welcome, Food Donor! 🥗
        </h1>

        <p>
          Share surplus food and help reduce food waste.
        </p>

        <div className="dashboard-actions">

          <button
            className="profile-btn"
            onClick={() =>
              (window.location.href = "/profile")
            }
          >
            👤 My Profile
          </button>

          <button
            className="logout-btn"
            onClick={onLogout}
          >
            🚪 Logout
          </button>

        </div>

      </div>

      <div className="donor-cards">

        <div className="donor-card">

          <div className="donor-card-icon">
            🍱
          </div>

          <h2>
            Post Food
          </h2>

          <p>
            Share your leftover food with people who need it.
          </p>

          <button
            onClick={() =>
              (window.location.href = "/post-food")
            }
          >
            Post Food
          </button>

        </div>

        <div className="donor-card">

          <div className="donor-card-icon">
            📦
          </div>

          <h2>
            My Donations
          </h2>

          <p>
            View and manage the food you have donated.
          </p>

          <button
            onClick={() =>
              (window.location.href = "/my-donations")
            }
          >
            My Donations
          </button>

        </div>

        <div className="donor-card">

          <div className="donor-card-icon">
            📋
          </div>

          <h2>
            Donation Requests
          </h2>

          <p>
            View requests received for your donated food.
          </p>

          <button
            onClick={() =>
              (window.location.href = "/donation-requests")
            }
          >
            View Requests
          </button>

        </div>

        <div className="donor-card">

          <div className="donor-card-icon">
            👤
          </div>

          <h2>
            My Profile
          </h2>

          <p>
            View your FoodRescue account information.
          </p>

          <button
            onClick={() =>
              (window.location.href = "/profile")
            }
          >
            My Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default DonorDashboard;