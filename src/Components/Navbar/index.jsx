import React from "react";
import SearchBox from "../SearchBox";
import Button from "../Button";
import "./Navbar.css";

function index() {
  return (
    <div className="navbar">
      <img
        src="logo.png"
        width={67}
        height={34}
        top={20}
        left={32}
        style={{ display: "flex", margin: "14px" }}
      />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default index;
