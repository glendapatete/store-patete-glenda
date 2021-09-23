import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { CoinContext } from "../Context/CoinContext";
import "../Styles/card.css";

export default function Card({category, name, cost, img, id}){
    
    const [msg, setMsg] = useState("");

    const {data} = useContext(UserContext);

    const { setCoin } = useContext(CoinContext);

    const handleRedeem = (e, productId) => {
        e.preventDefault()

        const header = { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxMWM1MDNiYTYyNzAwMjE3YTMyYTUiLCJpYXQiOjE2Mjk1NTk4ODh9._RhHYJ369kzR-tWJuSbe2qng4WM-4t5GtGFbDG4Ed_4'
            },
            body: JSON.stringify({"productId" : productId.id})
        }
        fetch(
            `https://coding-challenge-api.aerolab.co/redeem`,header
        ).then((response) => {
            response.json().then((resp) => {
                setCoin(resp) /* actualizo este estado, para que me actualice la moneda en el header */
                setMsg(resp.message)
                setTimeout(function () {
                    setMsg("");
                }, 2000);
            })
        })
    }

    return(
        <div className="container-card">
            <div className="card">
                <picture>
                    <img src={img.url} alt={name}/>
                </picture>
                <div className="card-info">
                    <span className="card-name">{name}</span>
                    <span className="card-category">{category}</span>
                </div>
                {
                    data.points >= cost ? 
                        <span className="card-buy-blue"><img src={process.env.PUBLIC_URL + "/images/buy-blue.svg"} alt="buy"/></span>
                    :
                    <span className="card-need"> 
                        You need {cost - data.points} <img src={process.env.PUBLIC_URL + "/images/coin.svg"} alt="coin"/> 
                    </span>
                }
                
                
            </div>
            <div className="card-hover">
                {
                    msg === "" ? 
                        <ul className="card-hover-content">
                            <li className="card-buy-white">
                                <picture>
                                    <img src={process.env.PUBLIC_URL + "/images/buy-white1.svg"} alt="buy"/>
                                </picture>
                            </li>
                            <li className="card-buy-info">
                                <ul className="card-buy-info-coins">
                                    <li className="card-coins">
                                        <span>{cost}</span> <img src={process.env.PUBLIC_URL + "/images/coin.svg"} alt="coin"/> 
                                    </li>
                                    {
                                        data.points >= cost &&
                                            <li className="card-buy">
                                                <button className="card-buy-link" onClick={(e)=>handleRedeem(e, {id})} data-id={id}>Redeem now</button>
                                            </li>   
                                    }
                                </ul>
                            </li>
                            
                        </ul>
                    :
                    <div className="success-reedem">
                        <img src={process.env.PUBLIC_URL + "/images/check.png"} alt="success icon" />
                        <h2 >{msg}</h2>
                    </div>
                    
                }
                
            </div>
        </div>
    )
}