import React from 'react';
import { deleteInDb } from '../../utilities/localStorage';
import useOrder from '../Hooks/useOrder';
import useProducts from '../Hooks/useProducts';
import Ordercart from '../OrderCart/OrderCart';
import Sidebar from '../Sidebar/Sidebar';
import './Order.css'

const Order = () => {

    const [order,setOrder] =  useOrder()
    const [products, setProducts] = useProducts()
    
    const deleteCart = (id) => {
        const filterOrder = order.filter(item => item.id !== id)
        setOrder(filterOrder);
        deleteInDb(id);
    }


    return (
        <div className='orderContainer'>
            <div>
                {
                    order.map(orderCart => <Ordercart key={orderCart.id} deleteCart={deleteCart} orderCart={orderCart} ></Ordercart>)
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
