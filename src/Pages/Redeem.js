import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import CardRedeemed from "../Components/CardRedeemed";
import { AppProvider } from "../Context/UserContext";
import { CoinProvider } from "../Context/CoinContext";

function Redeem() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        const header = { 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxMWM1MDNiYTYyNzAwMjE3YTMyYTUiLCJpYXQiOjE2Mjk1NTk4ODh9._RhHYJ369kzR-tWJuSbe2qng4WM-4t5GtGFbDG4Ed_4'
            }
        }
        fetch("https://coding-challenge-api.aerolab.co/user/history", header )
        .then((response) => response.json())
        .then((response) => {
            setdata(response.reverse());
        }).catch((error) => console.error("Error:", error));
    }, []);
    console.log(data)
  return (
    <div className="App">
     
        <CoinProvider>
          <AppProvider>
            <Header />
          </AppProvider>
        </CoinProvider>
            {data &&
                data.map(function (item, index) {
                    return (
                        <CardRedeemed 
                            category= {item.category}
                            name= {item.name}
                            cost= {item.cost}
                            img= {item.img}
                            id= {item._id}
                            key= {index}
                            createDate={item.createDate}
                        />
                    );
                })
            }
    </div>
  );
}

export default Redeem;