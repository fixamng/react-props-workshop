import React from "react";
import heroImg from "../images/heroImg.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={heroImg} alt="hero-img" />
      <h3>Online Experiences</h3>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
}
