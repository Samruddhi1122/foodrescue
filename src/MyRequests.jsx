import "./MyRequests.css";

function MyRequests() {
  const requests = [
    {
      food: "Rice & Dal",
      icon: "🍚",
      quantity: "3 plates",
      location: "Andheri",
      donor: "Rahul Sharma",
      status: "Pending",
    },
    {
      food: "Veg Sandwich",
      icon: "🥪",
      quantity: "4 pieces",
      location: "Bandra",
      donor: "Priya Foods",
      status: "Approved",
    },
    {
      food: "Chapati & Sabzi",
      icon: "🫓",
      quantity: "2 plates",
      location: "Dadar",
      donor: "Ankit Patel",
      status: "Rejected",
    },
  ];

  return (
    <div className="my-requests-page">
      <div className="my-requests-header">
        <p className="dashboard-tag">MY REQUESTS</p>
        <h1>My Food Requests 📋</h1>
        <p>View and track the food requests you have made.</p>
      </div>

      <div className="my-requests-list">
        {requests.map((request, index) => (
          <div className="my-request-card" key={index}>
            <div className="my-request-icon">{request.icon}</div>

            <div className="my-request-info">
              <h2>{request.food}</h2>
              <p>👤 <strong>Donor:</strong> {request.donor}</p>
              <p>🍽️ <strong>Quantity:</strong> {request.quantity}</p>
              <p>📍 <strong>Location:</strong> {request.location}</p>
              <p>
                📌 <strong>Status:</strong>{" "}
                <span className={`my-request-status ${request.status.toLowerCase()}`}>
                  {request.status}
                </span>
              </p>
            </div>

            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRequests;