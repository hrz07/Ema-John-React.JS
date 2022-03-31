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

    console.log(order, order.length);
    const addToCart = (product) => {

        let selectedProduct = []

        const duplicateItem = order.find(item => item.id == product.id)
        if (!duplicateItem) {
            product.quantity = 1;
            selectedProduct = [...order,product]
        } else {
            let rest = order.filter(item => item.id !== product.id)
            product.quantity = product.quantity + 1;
            selectedProduct = [...rest,product]
        }

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
