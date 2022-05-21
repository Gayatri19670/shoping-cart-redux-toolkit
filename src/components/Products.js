import React, { useState, useEffect } from "react";
import "./products.css"

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }

        fetchProducts();

    }, [])
    return (
        <div className="productsWrapper">
            {
                products.map(product => (
                    <div>
                        <div className="card" key={product.id}>
                            <img src={product.image} className="card-img-top" alt={product.description} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <h6 className="card-title">Rs. {product.price}</h6>
                              
                                <a href="/" className="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                    </div>


                ))
            }
        </div>
    )
}

export default Products;