import { useEffect, useState } from "react";
import "./AvailableFood.css";

function AvailableFood() {
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/food/available")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch available food");
        }

        return response.json();
      })
      .then((data) => {
        setFoodList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load available food.");
        setLoading(false);
      });
  }, []);

  const handleRequestFood = async (foodId) => {
    const receiverId = localStorage.getItem("foodrescueId");

    if (!receiverId) {
      alert("User information not found. Please login again.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/requests/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            foodId: foodId,
            receiverId: Number(receiverId),
            requestDate: new Date()
              .toISOString()
              .split("T")[0],
            status: "Pending",
          }),
        }
      );

      const result = await response.text();

      if (response.ok) {
        alert(result);
      } else {
        alert("Request failed: " + result);
      }

    } catch (error) {
      alert("Cannot connect to FoodRescue backend.");
      console.error(error);
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
    <div className="available-page">

      <div className="available-container">

        <h1>🍽️ Available Food</h1>

        <p className="subtitle">
          Find leftover food available near you.
        </p>

        {loading && (
          <p className="message">
            Loading food...
          </p>
        )}

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        {!loading &&
          !error &&
          foodList.length === 0 && (
            <p className="message">
              No food is currently available.
            </p>
          )}

        <div className="food-grid">

          {foodList.map((food) => (

            <div
              className="food-card"
              key={food.id}
            >

              <div className="food-icon">
                {getFoodIcon(food.foodName)}
              </div>

              <h2>{food.foodName}</h2>

              <p>
                <strong>Type:</strong>{" "}
                {food.foodType}
              </p>

              <p>
                <strong>Quantity:</strong>{" "}
                {food.quantity}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {food.location}
              </p>

              <p>
                <strong>Available Until:</strong>{" "}
                {food.availableUntil}
              </p>

              <span className="status">
                {food.status}
              </span>

              <button
                onClick={() =>
                  handleRequestFood(food.id)
                }
              >
                Request Food
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default AvailableFood;