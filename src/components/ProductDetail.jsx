import React from 'react';
import { useParams } from 'react-router';
import { useState,useEffect } from 'react';
import axios from 'axios';

// import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    // const [proDetail,setproDetail]=useState([]);
 
    {/* Now we need a product id which is pass from the product page. */}
    const proid = useParams();
    // const proDetail = DATA.filter(x=>x.id == proid.id)
    // const product = proDetail[0];
    const [product,setProduct]=useState({});

    useEffect(async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/v1/items/${proid.id}`);
          console.log(response);
          setProduct(response.data);
          console.log(product);
        } catch (error) {
          console.error(error);
        }
    }, [])

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                
                    <img src={"/assets/images"+product.image} alt={product.title} height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <h2 className="my-4">${product.price}</h2>
                    <p className="lead">{product.description}</p>
                    <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail
