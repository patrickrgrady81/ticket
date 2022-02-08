import React, { useState, createContext } from "react";

// Create Context Object
export const IsLoggedInContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const IsLoggedInContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </IsLoggedInContext.Provider>
  );
};