import React, { useState, createContext, useEffect, useContext } from "react";
import { CoinContext } from "../Context/CoinContext";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    
  const { coin } = useContext(CoinContext);
    const [data, setdata] = useState([]);

    useEffect(() => {
        const header = { 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxMWM1MDNiYTYyNzAwMjE3YTMyYTUiLCJpYXQiOjE2Mjk1NTk4ODh9._RhHYJ369kzR-tWJuSbe2qng4WM-4t5GtGFbDG4Ed_4'
            }
        }
        fetch("https://coding-challenge-api.aerolab.co/products", header )
        .then((response) => response.json())
        .then((response) => {
            setdata(response);
        }).catch((error) => console.error("Error:", error));
    }, [coin]);


  return (
    <ProductContext.Provider value={{ data, setdata }}>
      {children}
    </ProductContext.Provider>
  );
};