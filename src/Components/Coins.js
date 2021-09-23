import "../Styles/coins.css";

export default function Coins({amount}){
    
    return(
        <div className="content-coin">
            <span>{amount}</span>
            <img src={process.env.PUBLIC_URL + "/images/coin.svg"} alt=""/>
        </div>
    )
}