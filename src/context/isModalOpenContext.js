import React, { useState, createContext } from "react";

// Create Context Object
export const IsModalOpenContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const IsModalOpenContextProvider = props => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <IsModalOpenContext.Provider value={[isModalOpen, setModalOpen]}>
      {props.children}
    </IsModalOpenContext.Provider>
  );
};