import { useEffect, useState } from "react";
import "./MyDonations.css";

function MyDonations() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDonation, setSelectedDonation] = useState(null);

  useEffect(() => {
    const donorId = localStorage.getItem("foodrescueId");

    if (!donorId) {
      setError("User information not found. Please login again.");
      setLoading(false);
      return;
    }

    fetch("http://localhost:8080/api/food/available")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch donations");
        }

        return response.json();
      })
      .then((data) => {
        const myDonations = data.filter(
          (food) => food.donorId === Number(donorId)
        );

        setDonations(myDonations);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load your donations.");
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
    <div className="donations-page">

      <div className="donations-header">

        <p className="dashboard-tag">
          MY DONATIONS
        </p>

        <h1>
          My Food Donations 🍱
        </h1>

        <p>
          View and manage the food you have shared.
        </p>

      </div>

      {loading && (
        <p className="message">
          Loading your donations...
        </p>
      )}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {!loading &&
        !error &&
        donations.length === 0 && (
          <p className="message">
            You have not posted any food yet.
          </p>
        )}

      <div className="donations-list">

        {donations.map((food) => (

          <div
            className="donation-card"
            key={food.id}
          >

            <div className="donation-icon">
              {getFoodIcon(food.foodName)}
            </div>

            <div className="donation-info">

              <h2>
                {food.foodName}
              </h2>

              <p>
                📌 <strong>Status:</strong>{" "}

                <span className="donation-status">
                  {food.status}
                </span>
              </p>

            </div>

            <button
              onClick={() =>
                setSelectedDonation(food)
              }
            >
              View Details
            </button>

          </div>

        ))}

      </div>

      {selectedDonation && (

        <div
          className="details-overlay"
          onClick={() => setSelectedDonation(null)}
        >

          <div
            className="details-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="details-icon">
              {getFoodIcon(
                selectedDonation.foodName
              )}
            </div>

            <h2>
              {selectedDonation.foodName}
            </h2>

            <p className="details-subtitle">
              Complete donation information
            </p>

            <div className="details-content">

              <p>
                🆔 <strong>Food ID:</strong>{" "}
                {selectedDonation.id}
              </p>

              <p>
                🥗 <strong>Food Type:</strong>{" "}
                {selectedDonation.foodType}
              </p>

              <p>
                🍽️ <strong>Quantity:</strong>{" "}
                {selectedDonation.quantity}
              </p>

              <p>
                📍 <strong>Location:</strong>{" "}
                {selectedDonation.location}
              </p>

              <p>
                ⏰ <strong>Available Until:</strong>{" "}
                {selectedDonation.availableUntil}
              </p>

              <p>
                👤 <strong>Donor ID:</strong>{" "}
                {selectedDonation.donorId}
              </p>

              <p>
                📌 <strong>Status:</strong>{" "}

                <span className="donation-status">
                  {selectedDonation.status}
                </span>

              </p>

            </div>

            <button
              className="close-details-button"
              onClick={() =>
                setSelectedDonation(null)
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

export default MyDonations;