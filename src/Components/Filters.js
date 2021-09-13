import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from "../Context/ProductContext";
import Pagination from './Pagination';
import Card from "./Card";
import "../Styles/filters.css";


export default function Filters(){
    const {data, setdata} = useContext(ProductContext);
    const [products, setProducts] = useState(data);
    const [page, setPage] = useState(1);
    const PER_PAGE = 16;
    const totalProducts = products.length;
    const count = Math.ceil(products.length / PER_PAGE);

    useEffect(() => {
		setProducts([...data]);
	}, [data]);

    const _DATA = Pagination(products, PER_PAGE);

    const handleChange = () => {
        let nextPage;
        if(page === count){
            nextPage = page -1;
            setPage(nextPage);
        }else{
            nextPage = page +1;
            setPage(nextPage);
        }
        
        _DATA.jump(nextPage);
    };
    
    const handleLowePrice = () =>{
        let filterLow = products.sort(function (a, b) {
            return a.cost - b.cost
        })
        setdata(filterLow)
    }

    const handleHighestPrice = () =>{
        
        let filterHighest = products.sort(function (a, b) {
            return b.cost - a.cost
        })
        setdata(filterHighest)
    }

    return(
        <>
            <ul className="content-filters">
                <li className="pagination">{PER_PAGE} of {totalProducts} products</li>
                <li>Sort by:</li>
                <li>
                    <button onClick={handleLowePrice}>Lower price</button> 
                </li>
                <li>
                    <button onClick={handleHighestPrice}>Highest price</button> 
                </li>
                <div style={{ color: '#616161' }}>
                    <span>
                        
                    </span>
                    <button
                        count={count}
                        variant="outlined"
                        page={page}
                        onClick={handleChange}
                    > {page !== count ?
                        ">"
                        :
                        "<"
                    }
                    </button>
                </div>
            </ul> 
            <div className="content-card"> 
                {_DATA &&
                    _DATA.currentData().map(function (item, index) {
                        return (
                            <Card 
                                category= {item.category}
                                name= {item.name}
                                cost= {item.cost}
                                img= {item.img}
                                id= {item._id}
                                key= {item._id}
                            />
                        );
                    })
                }
            </div>
        </>
    )
}