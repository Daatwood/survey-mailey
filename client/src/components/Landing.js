import React from "react";

const Landing = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="/splash_image.jpg" alt="Landing survey placeholder" />
      </div>
      <div className="card-content center">
        <span className="card-title indigo-text">
          <h1>Survey Mailey</h1>
        </span>
        <p className="flow-text">
          Collect feedback from your users with an easy questionaire survey.
        </p>
      </div>
    </div>
  );
};

export default Landing;
