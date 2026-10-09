import { useState } from "react";
import "./PostFood.css";

function PostFood() {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const donorId = localStorage.getItem("foodrescueId");

    if (!donorId) {
      alert("User information not found. Please login again.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/food/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            foodName: foodName,
            foodType: foodType,
            quantity: quantity,
            location: location,
            availableUntil: availableUntil,
            status: "Available",
            donorId: Number(donorId),
          }),
        }
      );

      const result = await response.text();

      if (response.ok) {
        setSubmitted(true);

        alert(result);

        setFoodName("");
        setFoodType("");
        setQuantity("");
        setLocation("");
        setAvailableUntil("");
      } else {
        alert("Food posting failed: " + result);
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to FoodRescue backend.");
    }
  };

  return (
    <div className="post-page">

      <div className="post-card">

        <h1>🍱 Post Leftover Food</h1>

        <p>
          Have extra food? Share it with someone who needs it.
        </p>

        <form
          className="post-form"
          onSubmit={handleSubmit}
        >

          {/* FOOD NAME */}
          <div className="form-group">

            <label>Food Name</label>

            <select
              value={foodName}
              onChange={(e) =>
                setFoodName(e.target.value)
              }
              required
            >

              <option value="">
                Select food
              </option>

              <option value="Biryani">
                🍛 Biryani
              </option>

              <option value="Rice">
                🍚 Rice
              </option>

              <option value="Dal">
                🥣 Dal
              </option>

              <option value="Chapati">
                🫓 Chapati
              </option>

              <option value="Roti">
                🫓 Roti
              </option>

              <option value="Paratha">
                🫓 Paratha
              </option>

              <option value="Sandwich">
                🥪 Sandwich
              </option>

              <option value="Pizza">
                🍕 Pizza
              </option>

              <option value="Burger">
                🍔 Burger
              </option>

              <option value="Noodles">
                🍜 Noodles
              </option>

              <option value="Pasta">
                🍝 Pasta
              </option>

              <option value="Dosa">
                🥞 Dosa
              </option>

              <option value="Samosa">
                🥟 Samosa
              </option>

              <option value="Bread">
                🍞 Bread
              </option>

              <option value="Cake">
                🍰 Cake
              </option>

              <option value="Salad">
                🥗 Salad
              </option>

              <option value="Fruits">
                🍎 Fruits
              </option>

              <option value="Other">
                🍽️ Other
              </option>

            </select>

          </div>

          {/* FOOD TYPE */}
          <div className="form-group">

            <label>Food Type</label>

            <select
              value={foodType}
              onChange={(e) =>
                setFoodType(e.target.value)
              }
              required
            >

              <option value="">
                Select food type
              </option>

              <option value="Homemade Meal">
                Homemade Meal
              </option>

              <option value="Fresh Food">
                Fresh Food
              </option>

              <option value="Bakery Item">
                Bakery Item
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>

          {/* QUANTITY */}
          <div className="form-group">

            <label>Quantity</label>

            <input
              type="text"
              placeholder="e.g. 3 plates"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
              required
            />

          </div>

          {/* LOCATION */}
          <div className="form-group">

            <label>Location</label>

            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              required
            />

          </div>

          {/* AVAILABLE UNTIL */}
          <div className="form-group">

            <label>Available Until</label>

            <input
              type="time"
              value={availableUntil}
              onChange={(e) =>
                setAvailableUntil(e.target.value)
              }
              required
            />

          </div>

          {/* SUBMIT */}
          <button type="submit">
            Share Food ♡
          </button>

        </form>

        {submitted && (
          <div className="success-message">
            ✅ Food posted successfully!
          </div>
        )}

      </div>

    </div>
  );
}

export default PostFood;