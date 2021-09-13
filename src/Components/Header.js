import Coins from "./Coins";
import AddCoins from "./AddCoins";
import { UserContext } from "../Context/UserContext";
import "../Styles/header.css";
import React, { useState, useContext } from "react";

export default function Header(){
    // const header = { 
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxMWM1MDNiYTYyNzAwMjE3YTMyYTUiLCJpYXQiOjE2Mjk1NTk4ODh9._RhHYJ369kzR-tWJuSbe2qng4WM-4t5GtGFbDG4Ed_4'
    //     }
    // }

    // const [data, setdata] = useState(false);
    // useEffect(() => {
    //     fetch("https://coding-challenge-api.aerolab.co/user/me", header )
    //     .then((response) => response.json())
    //     .then((response) => {
    //     setdata(response);

    // })
    // .catch((error) => console.error("Error:", error));
    // }, []);
    const { data } = useContext(UserContext);
    const [display, setDisplay] = useState(false);
   
    const handleShowAdd = (e) => {
        setDisplay(!display);
    };
    

    console.log(data)
    return(
        <header>
            <ul className="content-header">
                <li className="content-header-left">
                <img src="../images/aerolab-logo.svg" alt=""/>
                </li>
                <li className="content-header-left">
                    <ul>
                        <li className="content-header-user">
                            {data.name}
                        </li>
                        <li className="content-header-coins">
                        <Coins amount={data.points}/>
                        </li>
                        <li className="content-header-buy">
                            <img src="../images/buy-blue.svg" alt=""/>
                        </li>
                        <li className="content-header-add">
                            <label className="add-label" htmlFor="checkbox">
                                <input onChange={handleShowAdd} type="checkbox" className="show-add" id="checkbox" />
                                <img src="../images/coin.svg" alt=""/>
                                <img src="../images/plus.svg" className="coin-plus" alt="Coins"/>
                            </label>
                            
                            <AddCoins display={display} />
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="content-subheader">
                <img src="../images/header-x1.png" alt=""/>
                <h1> Electronics</h1>
            </div>
        </header>
    )
}