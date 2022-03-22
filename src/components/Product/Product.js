import React from 'react';
import './Product.css'

const Product = ({ product,addToCart }) => {

    return (
        <div className='productCart'>
            <img src={product.img} alt="" srcset="" />
            <div className='productDetails'>
                <p className='productName'>{product.name}</p>
                <p>${product.price}</p>
                <small>Manufacturer: {product.seller}</small> <br />
                <small>Rating: {product.ratings}</small>
            </div>
           
                <button onClick={()=>addToCart(product)} className="cartFooter">Add To Cart</button>
            

        </div>
    );
}

export default Product;
