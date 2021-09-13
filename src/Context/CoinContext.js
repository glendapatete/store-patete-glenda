import React, { useState, createContext } from "react";

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
    const [coin, setCoin] = useState(false);
  return (
    <CoinContext.Provider value={{ coin, setCoin }}>
      {children}
    </CoinContext.Provider>
  );
};