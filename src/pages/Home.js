import React from "react";
import Products from '../components/Products'

const Home = () => {
    return (
        <div>
            <h2 className="heading">
                Welcome to Redux Toolkit Store
            </h2>
            <section>
                <h1>Products</h1>
                <Products />
            </section>
        </div>
    )
}

export default Home;