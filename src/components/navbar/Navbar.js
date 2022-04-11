import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from '../../images/Logo.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navContainer'>
         <Link to='/'><img src={img} /></Link> 
           <div className='list'>
                <NavLink to='/order'>Order</NavLink>
                <NavLink to='/others'>Order Review</NavLink>
                <NavLink to='/inventory'>Manage Inventory</NavLink>
           </div>
        </div>
    );
}

export default Navbar;
