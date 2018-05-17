import React from "react";

const Landing = () => {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div className="card-image">
        <img
          src="https://via.placeholder.com/300x100"
          alt="Landing survey placeholder"
        />
      </div>
      <div className="card-content">
        <span className="card-title">
          <h1>Feedback Assist</h1>
        </span>
        <p>Collect feedback from your users with an easy survey system</p>
      </div>
    </div>
  );
};

export default Landing;
