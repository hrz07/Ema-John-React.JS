import React from 'react';
import img from '../../images/Logo.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navContainer'>
           <img src={img} alt="" srcset="" />
           <div className='list'>
                <a href="">Other</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
           </div>
        </div>
    );
}

export default Navbar;
