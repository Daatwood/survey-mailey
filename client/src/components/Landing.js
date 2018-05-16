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

/*

  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">Card Title</span>
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>

*/
