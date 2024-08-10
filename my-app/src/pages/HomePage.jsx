import React from "react";
import PetList from "../components/PetList";
import SearchForm from "../components/searchForm";

const HomePage = () => (
  <div>
    <SearchForm />
    <PetList />
  </div>
);

export default HomePage;
