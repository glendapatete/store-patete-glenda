import React, { useState, createContext, useEffect, useContext } from "react";
import { CoinContext } from "../Context/CoinContext";
export const UserContext = createContext();

export const AppProvider = ({ children }) => {
    const header = { 
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxMWM1MDNiYTYyNzAwMjE3YTMyYTUiLCJpYXQiOjE2Mjk1NTk4ODh9._RhHYJ369kzR-tWJuSbe2qng4WM-4t5GtGFbDG4Ed_4'
        }
    }

    const [data, setdata] = useState("");
    const { coin } = useContext(CoinContext);
    useEffect(() => {
        fetch("https://coding-challenge-api.aerolab.co/user/me", header )
            .then((response) => response.json())
            .then((response) => {
                setdata(response);
                
            }).catch(
                (error) => console.error("Error:", error)
            );
    },[coin]);
  return (
    <UserContext.Provider value={{ data }}>
      {children}
    </UserContext.Provider>
  );
};