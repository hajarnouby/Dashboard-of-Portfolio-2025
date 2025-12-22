import React, { Component } from 'react';
import './Del.css'
import del from '../Assets/icons/delete.svg'
const Del = () => {
    return ( 
        <>
        <button className='del'>
            <img src={del} alt="delete" />
            Delete
        </button>
        </>
     );
}
 
export default Del;