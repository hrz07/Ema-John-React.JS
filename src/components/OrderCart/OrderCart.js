import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './OrderCart.css'

const Ordercart = ({orderCart,deleteCart}) => {
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
                <MdDeleteForever className='deleteIcon' onClick={()=> deleteCart(orderCart.id)} />
            </div>
        </div>
    );
}

export default Ordercart;
