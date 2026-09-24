import "./ReceiverDashboard.css";

function ReceiverDashboard() {
  return (
    <div className="receiver-dashboard">
      <div className="receiver-header">
        <p className="dashboard-tag">RECEIVER DASHBOARD</p>
        <h1>Welcome, Food Receiver! 🍱</h1>
        <p>Find available food and help prevent food waste.</p>
      </div>

      <div className="receiver-cards">

        <div className="receiver-card">
          <div className="receiver-card-icon">🍚</div>
          <h2>Available Food</h2>
          <p>Browse food donations shared by generous donors.</p>
          <button
            onClick={() => window.location.href = "/available-food"}
          >
            View Food
          </button>
        </div>

        <div className="receiver-card">
          <div className="receiver-card-icon">🥪</div>
          <h2>My Requests</h2>
          <p>View and track the food requests you have made.</p>
          <button
            onClick={() => window.location.href = "/my-requests"}
          >
            My Requests
          </button>
        </div>

        <div className="receiver-card">
          <div className="receiver-card-icon">🍞</div>
          <h2>My Profile</h2>
          <p>View your FoodRescue account information.</p>
          <button
            onClick={() => window.location.href = "/profile"}
          >
            My Profile
          </button>
        </div>

      </div>
    </div>
  );
}

export default ReceiverDashboard;