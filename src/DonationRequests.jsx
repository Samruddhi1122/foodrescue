import { useEffect, useState } from "react";
import "./DonationRequests.css";

function DonationRequests() {
  const [requests, setRequests] = useState([]);
  const [foodDetails, setFoodDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    try {
      const donorId = localStorage.getItem("foodrescueId");

      if (!donorId) {
        setError("User information not found. Please login again.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        "http://localhost:8080/api/requests"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch requests");
      }

      const requestData = await response.json();

      const foodPromises = requestData.map((request) =>
        fetch(
          `http://localhost:8080/api/food/${request.foodId}`
        ).then((response) => response.json())
      );

      const foodData = await Promise.all(foodPromises);

      const foodMap = {};

      requestData.forEach((request, index) => {
        foodMap[request.foodId] = foodData[index];
      });

      const myRequests = requestData.filter(
        (request, index) =>
          foodData[index]?.donorId === Number(donorId)
      );

      setRequests(myRequests);
      setFoodDetails(foodMap);
      setLoading(false);

    } catch (error) {
      console.error(error);
      setError("Unable to load donation requests.");
      setLoading(false);
    }
  };

  const updateStatus = async (requestId, status) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/requests/${requestId}/status?status=${status}`,
        {
          method: "PUT",
        }
      );

      const result = await response.text();

      if (response.ok) {
        alert(result);

        setSelectedRequest(null);

        loadRequests();
      } else {
        alert("Failed: " + result);
      }

    } catch (error) {
      console.error(error);
      alert("Cannot connect to FoodRescue backend.");
    }
  };

  const getFoodIcon = (foodName) => {
    const name = foodName?.toLowerCase() || "";

    if (name.includes("biryani")) return "🍛";
    if (name.includes("sandwich")) return "🥪";
    if (name.includes("chapati")) return "🫓";
    if (name.includes("roti")) return "🫓";
    if (name.includes("rice")) return "🍚";
    if (name.includes("dal")) return "🥣";
    if (name.includes("bread")) return "🍞";
    if (name.includes("pizza")) return "🍕";
    if (name.includes("burger")) return "🍔";
    if (name.includes("noodle")) return "🍜";
    if (name.includes("pasta")) return "🍝";
    if (name.includes("cake")) return "🍰";
    if (name.includes("fruit")) return "🍎";
    if (name.includes("salad")) return "🥗";
    if (name.includes("samosa")) return "🥟";
    if (name.includes("dosa")) return "🥞";
    if (name.includes("paratha")) return "🫓";

    return "🍽️";
  };

  return (
    <div className="requests-page">

      <div className="requests-header">

        <p className="dashboard-tag">
          DONATION REQUESTS
        </p>

        <h1>
          Food Donation Requests 📋
        </h1>

        <p>
          View requests received for your donated food.
        </p>

      </div>

      {loading && (
        <p className="message">
          Loading donation requests...
        </p>
      )}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {!loading &&
        !error &&
        requests.length === 0 && (
          <p className="message">
            No requests received yet.
          </p>
        )}

      <div className="requests-list">

        {requests.map((request) => {

          const food = foodDetails[request.foodId];

          return (
            <div
              className="request-card"
              key={request.id}
            >

              <div className="request-food-icon">
                {getFoodIcon(food?.foodName)}
              </div>

              <div className="request-info">

                <h2>
                  {food?.foodName ||
                    "Food details unavailable"}
                </h2>

                <p>
                  👤 <strong>Receiver ID:</strong>{" "}
                  {request.receiverId}
                </p>

                <p>
                  📌 <strong>Status:</strong>{" "}

                  <span
                    className={`request-status ${request.status.toLowerCase()}`}
                  >
                    {request.status}
                  </span>
                </p>

              </div>

              <div className="request-actions">

                <button
                  className="view-details-btn"
                  onClick={() =>
                    setSelectedRequest({
                      request: request,
                      food: food,
                    })
                  }
                >
                  View Details
                </button>

                {request.status === "Pending" && (
                  <>
                    <button
                      className="approve-btn"
                      onClick={() =>
                        updateStatus(
                          request.id,
                          "Approved"
                        )
                      }
                    >
                      Approve
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() =>
                        updateStatus(
                          request.id,
                          "Rejected"
                        )
                      }
                    >
                      Reject
                    </button>
                  </>
                )}

              </div>

            </div>
          );
        })}

      </div>

      {selectedRequest && (

        <div
          className="details-overlay"
          onClick={() => setSelectedRequest(null)}
        >

          <div
            className="details-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="details-icon">
              {getFoodIcon(
                selectedRequest.food?.foodName
              )}
            </div>

            <h2>
              {selectedRequest.food?.foodName ||
                "Donation Request"}
            </h2>

            <p className="details-subtitle">
              Complete request information
            </p>

            <div className="details-content">

              <p>
                🆔 <strong>Request ID:</strong>{" "}
                {selectedRequest.request.id}
              </p>

              <p>
                👤 <strong>Receiver ID:</strong>{" "}
                {selectedRequest.request.receiverId}
              </p>

              <p>
                🥗 <strong>Food Type:</strong>{" "}
                {selectedRequest.food?.foodType || "N/A"}
              </p>

              <p>
                🍽️ <strong>Quantity:</strong>{" "}
                {selectedRequest.food?.quantity || "N/A"}
              </p>

              <p>
                📍 <strong>Location:</strong>{" "}
                {selectedRequest.food?.location || "N/A"}
              </p>

              <p>
                📅 <strong>Request Date:</strong>{" "}
                {selectedRequest.request.requestDate}
              </p>

              <p>
                📌 <strong>Status:</strong>{" "}

                <span
                  className={`request-status ${selectedRequest.request.status.toLowerCase()}`}
                >
                  {selectedRequest.request.status}
                </span>

              </p>

            </div>

            {selectedRequest.request.status === "Pending" && (
              <div className="popup-actions">

                <button
                  className="approve-btn"
                  onClick={() =>
                    updateStatus(
                      selectedRequest.request.id,
                      "Approved"
                    )
                  }
                >
                  Approve
                </button>

                <button
                  className="reject-btn"
                  onClick={() =>
                    updateStatus(
                      selectedRequest.request.id,
                      "Rejected"
                    )
                  }
                >
                  Reject
                </button>

              </div>
            )}

            <button
              className="close-details-button"
              onClick={() =>
                setSelectedRequest(null)
              }
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default DonationRequests;