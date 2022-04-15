import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init'
import './Login.css'

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    return (
        <div className='form-container'>
            <p>Login</p>
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
                <small>New to ema-john ?  <NavLink style={{textDecoration:'none'}} to='/register'>Register now</NavLink> </small>
            </form>
            <div className='or-box'>
                <small>--Or--</small>
                <br />
                <button className='btn' onClick={()=>signInWithGoogle()}> <FcGoogle></FcGoogle>   Continue With Google</button>
            </div>
        </div>
    );
}

export default Login;
