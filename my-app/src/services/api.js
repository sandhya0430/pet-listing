 
import axios from "axios";

 
export const getPets = () => {
  return axios.get(`http://pets-v2.dev-apis.com/pets`).catch((error) => {
    console.error("Error fetching pets:", error);
    throw error;
  });
};

 
export const getPetsById = (id) => {
  return axios.get(`http://pets-v2.dev-apis.com/pets/${id}`).catch((error) => {
    console.error(`Error fetching pet with ID ${id}:`, error);
    throw error;
  });
};

 
export const getBreedsByAnimal = (animal) => {
  return axios
    .get(`http://pets-v2.dev-apis.com/breeds`, {
      params: { animal },
    })
    .catch((error) => {
      console.error(`Error fetching breeds for animal ${animal}:`, error);
      throw error;
    });
};

 
export const searchPets = (animal, location, breed) => {
  return axios
    .get(`http://pets-v2.dev-apis.com/pets`, {
      params: { animal, location, breed },
    })
    .catch((error) => {
      console.error(
        `Error searching pets with animal ${animal}, location ${location}, breed ${breed}:`,
        error
      );
      throw error;
    });
};
