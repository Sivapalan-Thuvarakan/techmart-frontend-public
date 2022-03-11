import React from 'react'
import { NavLink } from 'react-router-dom';
// import DATA from '../Data'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Product = () => {

    const [DATA,setData] = useState([]);


    useEffect(async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/v1/items');
          console.log(response);
          setData(response.data);
          
        } catch (error) {
          console.error("yyyyy"+error);
        }
    }, [])


    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={"assets/images"+item.image} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
            </div>
                );
        }

                return (
                <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Product</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Product;
