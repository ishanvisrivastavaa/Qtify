import React from "react";
import SearchBox from "../SearchBox";
import Button from "../Button";
import "./Navbar.css";

function index() {
  return (
    <div className="navbar">
      <img src="logo.png" width={67} height={34} />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default index;
