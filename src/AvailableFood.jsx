import "./AvailableFood.css";

function AvailableFood() {
  const foodItems = [
    {
      name: "Rice & Dal",
      type: "Homemade Meal",
      quantity: "5 plates",
      location: "Andheri",
      time: "8:00 PM",
    },
    {
      name: "Veg Sandwich",
      type: "Fresh Food",
      quantity: "8 pieces",
      location: "Bandra",
      time: "7:30 PM",
    },
    {
      name: "Chapati & Sabzi",
      type: "Homemade Meal",
      quantity: "6 plates",
      location: "Dadar",
      time: "9:00 PM",
    },
  ];

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
        <input
          type="text"
          placeholder="🔍 Search food..."
        />

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

            <div className="food-card-icon">🍱</div>

            <h2>{food.name}</h2>

            <p className="food-type">{food.type}</p>

            <div className="food-details">
              <p>🍽️ <strong>Quantity:</strong> {food.quantity}</p>
              <p>📍 <strong>Location:</strong> {food.location}</p>
              <p>⏰ <strong>Available until:</strong> {food.time}</p>
            </div>

            <button>Request Food</button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default AvailableFood;