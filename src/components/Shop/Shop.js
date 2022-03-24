import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Sidebar from '../Sidebar/Sidebar';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [order,setOrder] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addToCart = (product) => {
        let selectedProduct = [...order,product];
        setOrder(selectedProduct);
    }

    return (
        <div className='shopContainer'>
            <div className="products">
               {
                products.map(product=> <Product key={product.id} addToCart={addToCart} product={product} />)
               }
            </div>
            <div className="sideBar">
                <Sidebar order={order} />
            </div>
        </div>
    );
}

export default Shop;
