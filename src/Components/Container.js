import "../Styles/container.css";

import Filters from "./Filters";
import React from "react";

export default function Container(){
    
    // const header = { 
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxMWM1MDNiYTYyNzAwMjE3YTMyYTUiLCJpYXQiOjE2Mjk1NTk4ODh9._RhHYJ369kzR-tWJuSbe2qng4WM-4t5GtGFbDG4Ed_4'
    //     }
    // }

    // const [data, setdata] = useState(false);
    // useEffect(() => {
    //     fetch("https://coding-challenge-api.aerolab.co/products", header )
    //     .then((response) => response.json())
    //     .then((response) => {
    //         setdata(response);
    //     })
    //     .catch((error) => console.error("Error:", error));
    // }, []);
   
    return(
        <div className="container">
            <Filters />
            
        </div>
    )
}