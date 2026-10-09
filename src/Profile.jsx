import "./Profile.css";

function Profile() {
  const name =
    localStorage.getItem("foodrescueName") || "FoodRescue User";

  const role =
    localStorage.getItem("foodrescueRole") || "User";

  const email =
    localStorage.getItem("foodrescueEmail") || "user@example.com";

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-icon">
          👤
        </div>

        <p className="profile-tag">
          MY PROFILE
        </p>

        <h1>
          {name}
        </h1>

        <p className="profile-subtitle">
          Your FoodRescue account information
        </p>

        <div className="profile-details">

          <div className="profile-item">
            <span>👤 Name</span>
            <strong>{name}</strong>
          </div>

          <div className="profile-item">
            <span>📧 Email</span>
            <strong>{email}</strong>
          </div>

          <div className="profile-item">
            <span>🥗 Account Type</span>
            <strong>
              {role === "Donor"
                ? "Food Donor"
                : "Food Receiver"}
            </strong>
          </div>

          <div className="profile-item">
            <span>🌱 Platform</span>
            <strong>FoodRescue</strong>
          </div>

        </div>

        <button
          onClick={() => window.history.back()}
        >
          ← Back to Dashboard
        </button>

      </div>

    </div>
  );
}

export default Profile;