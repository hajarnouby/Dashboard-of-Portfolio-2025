import React, { Component } from 'react';
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
            
            </div>
        </div>

        </>
     );
}
 
export default Login;