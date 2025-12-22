import React, { Component } from 'react';
import './Notread.css'
import arrow from '../Assets/icons/arrow.svg'

const Notread = () => {
    return ( 
        <>
                    <div className='notread row cen'>
                    <p className='st1'>Delivered</p>
                    <img src={arrow} alt="arrow" />
                    </div>
        </>
     );
}
 
export default Notread;