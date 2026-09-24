import { useState } from "react";
import "./AvailableFood.css";

function AvailableFood() {
  const [requested, setRequested] = useState([]);

  const foodItems = [
    {
      name: "Rice & Dal",
      icon: "🍚",
      type: "Homemade Meal",
      quantity: "5 plates",
      location: "Andheri",
      time: "8:00 PM",
    },
    {
      name: "Veg Sandwich",
      icon: "🥪",
      type: "Fresh Food",
      quantity: "8 pieces",
      location: "Bandra",
      time: "7:30 PM",
    },
    {
      name: "Chapati & Sabzi",
      icon: "🫓",
      type: "Homemade Meal",
      quantity: "6 plates",
      location: "Dadar",
      time: "9:00 PM",
    },
    {
      name: "Fresh Bread",
      icon: "🍞",
      type: "Bakery Item",
      quantity: "10 pieces",
      location: "Andheri",
      time: "8:30 PM",
    },
  ];

  const handleRequest = (index) => {
    if (!requested.includes(index)) {
      setRequested([...requested, index]);
    }
  };

  return (
    <div className="available-page">

      <div className="available-header">
        <p className="section-tag">FIND FOOD</p>
        <h1>Available Food 🍱</h1>
        <p>
          Discover surplus food shared by donors and help prevent food waste.
        </p>
      </div>

      <div className="food-search">
        <input type="text" placeholder="🔍 Search food..." />

        <select>
          <option>All Food Types</option>
          <option>Homemade Meal</option>
          <option>Fresh Food</option>
          <option>Bakery Item</option>
        </select>
      </div>

      <div className="food-grid">

        {foodItems.map((food, index) => (
          <div className="food-card" key={index}>

            <div className="food-card-icon">
              {food.icon}
            </div>

            <h2>{food.name}</h2>

            <p className="food-type">
              {food.type}
            </p>

            <div className="food-details">
              <p>
                🍽️ <strong>Quantity:</strong> {food.quantity}
              </p>

              <p>
                📍 <strong>Location:</strong> {food.location}
              </p>

              <p>
                ⏰ <strong>Available until:</strong> {food.time}
              </p>
            </div>

            <button
              onClick={() => handleRequest(index)}
              disabled={requested.includes(index)}
            >
              {requested.includes(index)
                ? "✓ Requested"
                : "Request Food"}
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default AvailableFood;