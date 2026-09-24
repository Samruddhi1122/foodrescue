import "./MyDonations.css";

function MyDonations() {
  const donations = [
    {
      name: "Rice & Dal",
      icon: "🍚",
      type: "Homemade Meal",
      quantity: "5 plates",
      location: "Thane",
      status: "Available",
    },
    {
      name: "Veg Sandwich",
      icon: "🥪",
      type: "Fresh Food",
      quantity: "8 pieces",
      location: "Bhandup",
      status: "Requested",
    },
    {
      name: "Chapati & Sabzi",
      icon: "🫓",
      type: "Homemade Meal",
      quantity: "6 plates",
      location: "Dadar",
      status: "Available",
    },
    {
      name: "Fresh Bread",
      icon: "🍞",
      type: "Bakery Item",
      quantity: "10 pieces",
      location: "Andheri",
      status: "Available",
    },
  ];

  return (
    <div className="donations-page">
      <div className="donations-header">
        <p className="dashboard-tag">MY DONATIONS</p>

        <h1>My Food Donations 🍱</h1>

        <p>View and manage the food you have shared.</p>
      </div>

      <div className="donations-list">
        {donations.map((food, index) => (
          <div className="donation-card" key={index}>
            
            <div className="donation-icon">
              {food.icon}
            </div>

            <div className="donation-info">
              <h2>{food.name}</h2>

              <p className="donation-type">
                {food.type}
              </p>

              <p>
                🍽️ <strong>Quantity:</strong> {food.quantity}
              </p>

              <p>
                📍 <strong>Location:</strong> {food.location}
              </p>

              <p>
                📌 <strong>Status:</strong>{" "}
                <span className="donation-status">
                  {food.status}
                </span>
              </p>
            </div>

            <button>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyDonations;