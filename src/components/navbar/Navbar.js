import React from 'react';
import img from '../../images/Logo.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navContainer'>
           <img src={img} alt="" srcset="" />
           <div className='list'>
                <li>Other</li>
                <li>Order Review</li>
                <li>Manage Inventory</li>
           </div>
        </div>
    );
}

export default Navbar;
