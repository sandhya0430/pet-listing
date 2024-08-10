 


import React, { useState, useContext } from "react";
import { searchPets } from "../services/api";
import { GlobalStateContext } from "../context/GlobalStateContext";

const SearchForm = () => {
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const { setPets, setLoading, setError, error } =
    useContext(GlobalStateContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); 
    setLoading(true);

    const trimmedAnimal = animal.trim();
    const trimmedLocation = location.trim();
    const trimmedBreed = breed.trim();

    console.log("Searching with:", {
      animal: trimmedAnimal,
      location: trimmedLocation,
      breed: trimmedBreed,
    });

    try {
      const response = await searchPets(
        trimmedAnimal,
        trimmedLocation,
        trimmedBreed
      );
      console.log("API Response:", response.data);

      if (response.data.pets.length === 0) {
        setError("No pets found."); 
      } else {
        setPets(response.data.pets);
      }
    } catch (err) {
      console.error("Search failed:", err);
      setError(err.message || "An unexpected error occurred.");  
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
        placeholder="Animal"
      />

      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
      />

      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        placeholder="Breed"
      />

      <button type="submit">Search</button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </form>
  );
};

export default SearchForm;
