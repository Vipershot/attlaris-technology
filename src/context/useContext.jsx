import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [items, setItems] = useState([]);
  const [crud, setCrud] = useState("")
  return (
    <UserContext.Provider
      value={{ items, setItems, crud, setCrud  }}
    >
      {children}
    </UserContext.Provider>
  );
};
