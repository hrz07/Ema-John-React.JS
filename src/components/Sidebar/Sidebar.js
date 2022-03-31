import React from 'react';
import './Sidebar.css'

const Sidebar = ({ order }) => {
 
    let totalPrice = 0;
    let shipingCharge = 0;
    
    for(const orderedProduct of order){
        totalPrice = totalPrice + orderedProduct.price;
        shipingCharge = shipingCharge + orderedProduct.shipping;
    }

    let tax = parseFloat(totalPrice*0.1.toFixed(2));
    let grandTotal = totalPrice + shipingCharge + tax;



    return (
        <div className='sidebarInfoContainer'>
            <p className='sidebarTitle'>Order Summary</p>
            <div className="orderInfo">
                <p><small>Selected Items: ${order.length}</small></p>
                <p><small>Total Price: ${totalPrice}</small></p>
                <p><small>Total Shipping Charge: ${shipingCharge}</small></p>
                <p><small>Tax: ${tax.toFixed(2)}</small></p>
                <p>Grand Total: ${grandTotal}</p>

            </div>

        </div>
    );
}

export default Sidebar;
