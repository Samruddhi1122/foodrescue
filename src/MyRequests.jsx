import { useEffect, useState } from "react";
import "./MyRequests.css";

function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [foodDetails, setFoodDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const receiverId = localStorage.getItem("foodrescueId");

    if (!receiverId) {
      setError("User information not found. Please login again.");
      setLoading(false);
      return;
    }

    fetch("http://localhost:8080/api/requests")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }

        return response.json();
      })
      .then(async (requestData) => {
        const myRequests = requestData.filter(
          (request) =>
            request.receiverId === Number(receiverId)
        );

        setRequests(myRequests);

        const foodPromises = myRequests.map((request) =>
          fetch(
            `http://localhost:8080/api/food/${request.foodId}`
          ).then((response) => {
            if (!response.ok) {
              throw new Error(
                "Failed to fetch food details"
              );
            }

            return response.json();
          })
        );

        const foodData = await Promise.all(foodPromises);

        const foodMap = {};

        myRequests.forEach((request, index) => {
          foodMap[request.foodId] = foodData[index];
        });

        setFoodDetails(foodMap);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load your requests.");
        setLoading(false);
      });
  }, []);

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
    <div className="my-requests-page">

      <div className="my-requests-header">

        <p className="dashboard-tag">
          MY REQUESTS
        </p>

        <h1>
          My Food Requests 📋
        </h1>

        <p>
          View and track the food requests you have made.
        </p>

      </div>

      {loading && (
        <p className="message">
          Loading your requests...
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
            You have not made any food requests yet.
          </p>
        )}

      <div className="my-requests-list">

        {requests.map((request) => {

          const food = foodDetails[request.foodId];

          return (
            <div
              className="my-request-card"
              key={request.id}
            >

              <div className="my-request-icon">
                {getFoodIcon(food?.foodName)}
              </div>

              <div className="my-request-info">

                <h2>
                  {food?.foodName ||
                    "Food details unavailable"}
                </h2>

                <p>
                  📌 <strong>Status:</strong>{" "}

                  <span
                    className={`my-request-status ${request.status.toLowerCase()}`}
                  >
                    {request.status}
                  </span>
                </p>

              </div>

              <button
                onClick={() =>
                  setSelectedRequest({
                    request: request,
                    food: food,
                  })
                }
              >
                View Details
              </button>

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
                "Food Details"}
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
                🍽️ <strong>Quantity:</strong>{" "}
                {selectedRequest.food?.quantity ||
                  "N/A"}
              </p>

              <p>
                🥗 <strong>Food Type:</strong>{" "}
                {selectedRequest.food?.foodType ||
                  "N/A"}
              </p>

              <p>
                📍 <strong>Location:</strong>{" "}
                {selectedRequest.food?.location ||
                  "N/A"}
              </p>

              <p>
                ⏰ <strong>Available Until:</strong>{" "}
                {selectedRequest.food?.availableUntil ||
                  "N/A"}
              </p>

              <p>
                📅 <strong>Request Date:</strong>{" "}
                {selectedRequest.request.requestDate}
              </p>

              <p>
                👤 <strong>Receiver ID:</strong>{" "}
                {selectedRequest.request.receiverId}
              </p>

              <p>
                📌 <strong>Status:</strong>{" "}

                <span
                  className={`my-request-status ${selectedRequest.request.status.toLowerCase()}`}
                >
                  {selectedRequest.request.status}
                </span>

              </p>

            </div>

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

export default MyRequests;