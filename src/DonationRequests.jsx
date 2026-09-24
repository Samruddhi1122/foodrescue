import "./DonationRequests.css";

function DonationRequests() {
  const requests = [
    {
      receiver: "Aarav Sharma",
      food: "Rice & Dal",
      icon: "🍚",
      quantity: "3 plates",
      location: "Andheri",
      status: "Pending",
    },
    {
      receiver: "Priya Patel",
      food: "Veg Sandwich",
      icon: "🥪",
      quantity: "4 pieces",
      location: "Bandra",
      status: "Approved",
    },
    {
      receiver: "Rohan Mehta",
      food: "Chapati & Sabzi",
      icon: "🫓",
      quantity: "2 plates",
      location: "Dadar",
      status: "Pending",
    },
  ];

  return (
    <div className="requests-page">
      <div className="requests-header">
        <p className="dashboard-tag">DONATION REQUESTS</p>

        <h1>Food Donation Requests 📋</h1>

        <p>View requests received for your donated food.</p>
      </div>

      <div className="requests-list">
        {requests.map((request, index) => (
          <div className="request-card" key={index}>
            <div className="request-food-icon">
              {request.icon}
            </div>

            <div className="request-info">
              <h2>{request.food}</h2>

              <p>
                👤 <strong>Receiver:</strong> {request.receiver}
              </p>

              <p>
                🍽️ <strong>Quantity:</strong> {request.quantity}
              </p>

              <p>
                📍 <strong>Location:</strong> {request.location}
              </p>

              <p>
                📌 <strong>Status:</strong>{" "}
                <span className={`request-status ${request.status.toLowerCase()}`}>
                  {request.status}
                </span>
              </p>
            </div>

            <div className="request-actions">
              <button className="approve-btn">
                Approve
              </button>

              <button className="reject-btn">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonationRequests;