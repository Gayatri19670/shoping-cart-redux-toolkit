import React from "react";
import { useSelector, useDispatch} from "react-redux";
import "../components/products.css"
import {remove} from '../store/cartSlice';


const Cart = () => {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (productId) =>{
           dispatch(remove(productId))
    }
    return (
        <div>
           <h3 className="text-center">
               Cart
           </h3>

           <div className="productsWrapper">
              {
                   products.map(product => (
                        <div>
                            <div className="card" key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.description} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h6 className="card-title">Rs. {product.price}</h6>
                                  
                                    <button  onClick={()=> handleRemove(product.id)} className="btn btn-primary">Remove</button>
                                </div>
                            </div>
                        </div>
    
    
                    ))
              }
           </div>
        </div>
    )
}

export default Cart;