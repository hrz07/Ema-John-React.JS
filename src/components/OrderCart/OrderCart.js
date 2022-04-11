import React from 'react';
import './OrderCart.css'

const Ordercart = ({orderCart}) => {
    return (
        <div className='CartDesign'>
            <div className='CartInfo'>
                <img src={orderCart.img} alt="" />
                <div className='CartText'>
                    <p>{orderCart.name}</p>
                    <small>Price: <span>${orderCart.price}</span></small> 
                    <br />
                    <small>Shiping Charge: <span>${orderCart.shipping}</span></small>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Ordercart;
