import React from "react";

const Landing = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="/splash_image.jpg"
          alt="paper, coffee, and pen laying on wood"
        />
      </div>
      <div className="card-content center">
        <span className="card-title indigo-text">
          <h1>Survey Mailey</h1>
        </span>
        <p className="flow-text">
          Collect feedback directly from email with an easy questionaire.
        </p>
      </div>
    </div>
  );
};

export default Landing;
