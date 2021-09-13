import Coins from "./Coins";
import "../Styles/card.css";

export default function Card({category, name, cost, img, key}){
    
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
                <span className="card-buy-blue"><img src="../images/buy-blue.svg" alt="buy"/></span>
                
            </div>
            <div className="card-hover">
                <ul className="card-hover-content">
                    <li className="card-buy-white">
                        <picture>
                            <img src="../images/buy-white1.svg" alt="buy"/>
                        </picture>
                    </li>
                    <li className="card-buy-info">
                        <ul className="card-buy-info-coins">
                            <li className="card-coins">
                                <span>12.000</span> <img src="../images/coin.svg" alt="coin"/> 
                            </li>
                            <li className="card-buy">
                                <a className="card-buy-link" href="">Redeem now</a>
                            </li>   
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}