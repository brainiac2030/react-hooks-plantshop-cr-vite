import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        
        const plantsWithStock = data.map(plant => ({
          ...plant,
          isInStock: true
        }));
        setPlants(plantsWithStock);
      })
      .catch(err => console.error("Error fetching plants:", err));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🛠️ FIXED: Send newPlant as-is (price as string, no isInStock)
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant), // Keep original format
    })
      .then((res) => res.json())
      .then((createdPlant) => {
        // Add isInStock ONLY for local state management
        const plantWithStock = { ...createdPlant, isInStock: true };
        setPlants([...plants, plantWithStock]);
      })
      .catch(err => console.error("Error creating plant:", err));
  };

  const handleToggleStock = (id) => {
    setPlants(
      plants.map((plant) =>
        plant.id === id
          ? { ...plant, isInStock: !plant.isInStock }
          : plant
      )
    );
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearchChange={setSearchQuery} />
      <PlantList plants={filteredPlants} onToggleStock={handleToggleStock} />
    </main>
  );
}

export default PlantPage;