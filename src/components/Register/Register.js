import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Register.css'

const Register = () => {
    return (
        <div className='form-container'>
        <p>Register</p>
        <form action="">
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" />
            <br />
            <button className='btn'>Login</button>
            <small>Already have account ?  <NavLink style={{textDecoration:'none'}} to='/login'>Login now</NavLink> </small>
        </form>
        <div className='or-box'>
            <small>--Or--</small>
            <br />
            <button className='btn'><FcGoogle></FcGoogle>   Continue With Google</button>
        </div>
            
        </div>
    );
}

export default Register;
