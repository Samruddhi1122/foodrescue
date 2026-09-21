import { useState } from "react";

function PostFood() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="post-page">
      <div className="post-card">
        <h1>🍱 Post Leftover Food</h1>
        <p>Have extra food? Share it with someone who needs it.</p>

        <form className="post-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Food Name</label>
            <input
              type="text"
              placeholder="e.g. Rice, Chapati, Sandwich"
              required
            />
          </div>

          <div className="form-group">
            <label>Food Type</label>
            <select required>
              <option value="">Select food type</option>
              <option>Homemade Meal</option>
              <option>Fresh Food</option>
              <option>Bakery Item</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input
              type="text"
              placeholder="e.g. 3 plates"
              required
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter your location"
              required
            />
          </div>

          <div className="form-group">
            <label>Available Until</label>
            <input type="time" required />
          </div>

          <button type="submit">Share Food ♡</button>

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