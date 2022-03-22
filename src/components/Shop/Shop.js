import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])




    return (
        <div className='shopContainer'>
            <div className="products">
                <h1>hello</h1>
            </div>
            <div className="sideBar">
                <h1>hello</h1>
            </div>
        </div>
    );
}

export default Shop;
