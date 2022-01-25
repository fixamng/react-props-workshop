import React from "react";
import airbnb from "../images/airbnb.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <img src={airbnb} alt="nav-logo" />
    </div>
  );
}
