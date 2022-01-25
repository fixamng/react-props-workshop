import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./assets/Data.json";

export default function App() {
  console.log(Data);
  const dynamicCard = Data.map((item) => <Card key={item.id} item={item} />);
  return (
    <div>
      <Navbar />
      <Hero />
      {dynamicCard}
    </div>
  );
}
