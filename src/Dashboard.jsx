import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="dashboard-header">
        <h1>Welcome to FoodRescue 🥗</h1>
        <p>Manage your food donations and requests</p>
      </div>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <div className="card-icon">🍱</div>
          <h2>Post Food</h2>
          <p>Share your leftover food with people who need it.</p>
          <button onClick={() => window.location.href = "/post-food"}>
  Post Food
</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🔍</div>
          <h2>Available Food</h2>
          <p>Find available food donations near you.</p>
          <button>View Food</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📦</div>
          <h2>My Donations</h2>
          <p>View and manage the food you have donated.</p>
          <button>My Donations</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📋</div>
          <h2>My Requests</h2>
          <p>Check the food requests you have made.</p>
          <button>My Requests</button>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;