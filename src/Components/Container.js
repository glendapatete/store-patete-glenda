import "../Styles/container.css";
import Card from "./Card";
import React, { useState, useEffect } from "react";


export default function Container(){
    
    const header = { 
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxMWM1MDNiYTYyNzAwMjE3YTMyYTUiLCJpYXQiOjE2Mjk1NTk4ODh9._RhHYJ369kzR-tWJuSbe2qng4WM-4t5GtGFbDG4Ed_4'
                        }
                    }

    const [data, setdata] = useState(false);
    useEffect(() => {
        fetch("https://coding-challenge-api.aerolab.co/products", header )
        .then((response) => response.json())
        .then((response) => {
            setdata(response);
        })
        .catch((error) => console.error("Error:", error));
    }, []);
    
console.log(data)
    return(
        <div className="container">

       
            <div className="content-card">
                {data &&
                    data.map(function (item, index) {
                    return (
                        <Card 
                            category= {item.category}
                            name= {item.name}
                            cost= {item.cost}
                            img= {item.img}
                            key= {item._id}
                        />
                        );
                    })
                }
            </div>
        </div>
    )
}