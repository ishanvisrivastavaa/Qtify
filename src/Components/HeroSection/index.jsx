import React from "react";
import "./herosection.css";

function index() {
  return (
    <div className="hs-container">
      <div className="hs-content">
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thaousands podcast episodes</h1>
        </div>
        <div className="hs-img-frame">
          <img src="headphone.png" alt="" className="hs-img" />
        </div>
      </div>
    </div>
  );
}

export default index;
