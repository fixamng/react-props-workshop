import React from "react";
// import { img } from "../images";

export default function Card(props) {
  const { coverImg, rating, reviewCount, location, title, price } = props.item;

  return (
    <div>
      <button>SOLD OUT</button>
      <img src={`./images/${coverImg}`} alt="" />
      <div>
        <img src="" alt="" />
        <span>{rating}</span>
        <span>{reviewCount}</span>
        <span>{location}</span>
      </div>
      <p>{title}</p>
      <p>
        <span>From ${price}</span> / person
      </p>
    </div>
  );
}
