
import "../Styles/cardRedeemed.css";

export default function CardRedeemed({category, name, cost, img, createDate}){
    
    return(
        <div className="container-card">
            <div className="card-redeemed">
            <h3 className="card-redeemed-category">{category}</h3>
                <div className="card-redeemed-info">
                    <picture>
                        <img src={img.url} alt={name}/>
                    </picture>
                    <ul className="card-redeemed-extra-info">
                        
                        <li className="card-redeemed-name">{name}</li>
                        <li className="card-redeemed-cost">
                            <img src={process.env.PUBLIC_URL + "/images/coin.svg"} alt="coin"/> <span>{cost}</span>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}