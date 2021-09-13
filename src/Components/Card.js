import "../Styles/card.css";

export default function Card({category, name, cost, img, id}){
    
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
                                <span>{cost}</span> <img src="../images/coin.svg" alt="coin"/> 
                            </li>
                            <li className="card-buy">
                                <button className="card-buy-link" data-id={id}>Redeem now</button>
                            </li>   
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}