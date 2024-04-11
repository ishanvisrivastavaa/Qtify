import React from "react";
import "./card.css";

function index({ imgSrc, followerCount, label }) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-frame">
          <img src={imgSrc} className="card-img" />
        </div>
        <div className="card-content">
          <span className="card-content-pill">{followerCount} follows</span>
        </div>
      </div>
      <p className="card-label">{label}</p>
    </div>
  );
}

export default index;
