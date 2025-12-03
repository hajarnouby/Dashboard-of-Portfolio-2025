import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import './Home.css';
import Txt from '../Components/Txt';
import Form from '../Components/For';
const Login = () => {
    return ( 
        <>
        <div className='page cen col'>
            <div className='div1'>
            <Txt title="Welcome Back!" />
            <Form title="Username" placeholder="Enter Username" pass='Password' place='Enter Password' />
            <div className='row sb width100'>
                <div className='row cen'>
                    <input type="checkbox"/><p className='p1 sp1 st2 sp2'>Remember Me?</p>
                </div>
                <p className='st2 g1'>Forgot your Password?</p>
            </div>
            <Link to="/home"><button className='logbtn'>Login</button></Link>
            <hr />
            <div className='cen row cen2'>
                <p className='st2'>Don’t have an Account?</p>
                <p className='st2 red sp2'> Sign up here.</p>
                

            </div>
            </div>
        </div>

        </>
     );
}
 
export default Login;