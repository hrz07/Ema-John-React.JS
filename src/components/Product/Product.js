import React from 'react';
import './Product.css'

const Product = ({product}) => {

    return (
        <div className='productCart'>
            <img src={product.img} alt="" srcset="" />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <small>Manufacturer: {product.seller}</small> <br />
            <small>Rating: {product.ratings}</small>
            
        </div>
    );
}

export default Product;
