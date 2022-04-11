import React from 'react';
import useOrder from '../Hooks/useOrder';
import useProducts from '../Hooks/useProducts';
import Ordercart from '../OrderCart/OrderCart';
import Sidebar from '../Sidebar/Sidebar';
import './Order.css'

const Order = () => {

    const [order,setOrder] =  useOrder()
    const [products,setProducts]=useProducts()
    return (
        <div className='orderContainer'>
            <div>
                {
                    order.map(orderCart => <Ordercart key='orderCart' orderCart={orderCart} ></Ordercart>)
                }
            </div>
            <div className="sideBar">
                {
                    <Sidebar order={order}></Sidebar>
                }
            </div>
        </div>
    );
}

export default Order;
