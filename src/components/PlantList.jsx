import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleStock }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id} // 🌟 Unique key for React list rendering
          plant={plant}
          onToggleStock={onToggleStock}
        />
      ))}
    </ul>
  );
}

export default PlantList;