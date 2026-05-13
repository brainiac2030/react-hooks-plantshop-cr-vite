import React from "react";

function PlantCard({ plant, onToggleStock }) {
  const isInStock = plant.isInStock !== undefined ? plant.isInStock : true;

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      
      {/*Render price exactly as stored */}
      <p>Price: {plant.price}</p>
      
      <button
        className={isInStock ? "primary" : ""}
        onClick={() => onToggleStock(plant.id)}
      >
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;