import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Initialize error state

  return (
    <GlobalStateContext.Provider
      value={{
        pets,
        setPets,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
