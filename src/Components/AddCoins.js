import Coins from "./Coins";
import React, { useContext } from "react";
import "../Styles/addcoins.css";
import { CoinContext } from "../Context/CoinContext";

export default function AddCoins({display}){
    
    const { setCoin } = useContext(CoinContext);

    const handlerSubmit = (e, coins) => {
        e.preventDefault()
        const header = { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxMWM1MDNiYTYyNzAwMjE3YTMyYTUiLCJpYXQiOjE2Mjk1NTk4ODh9._RhHYJ369kzR-tWJuSbe2qng4WM-4t5GtGFbDG4Ed_4'
            },
            body: JSON.stringify({"amount" : coins})
        }
        let request = fetch(
            `https://coding-challenge-api.aerolab.co/user/points`,header
        );
        request.then((response) => {
            setCoin(response)
            return response.json();
        })
    };
    
    return(
        
        display &&
            <div className="content-add-coins">
            <h3>Get coins</h3>
            <ul className="content-buttons-coins">
                <li onClick={(e)=>handlerSubmit(e, 1000)} value="1000"><Coins amount="1000" /></li>
                <li onClick={(e)=>handlerSubmit(e, 5000)} value="5000"><Coins amount="5000" /></li>
                <li onClick={(e)=>handlerSubmit(e, 7500)} value="7500"><Coins amount="7500" /></li>
            </ul>
        </div>
    )
}