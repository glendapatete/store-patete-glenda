import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Route } from "react-router-dom";
import Coins from "./Coins";
import AddCoins from "./AddCoins";
import "../Styles/header.css";

export default function Header(){
    
    const { data } = useContext(UserContext);
    const [display, setDisplay] = useState(false);
   
    const handleShowAdd = (e) => {
        setDisplay(!display);
    };
    
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
                            <li>
                                <Route exact path="/" render={() => 
                                    <a href="/redeems" className="content-header-buy">
                                        <img src="../images/buy-blue.svg" alt=""/>
                                    </a>} />
                                <Route exact path="/redeems" render={() => <a href="/" className="content-header-home"><img src="../images/home.svg" alt=""/></a>} /> 
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