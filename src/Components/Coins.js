import "../Styles/coins.css";

export default function Coins({amount}){
    
    return(
        <div className="content-coin">
            <span>{amount}</span>
            <img src="../images/coin.svg" alt=""/>
        </div>
    )
}