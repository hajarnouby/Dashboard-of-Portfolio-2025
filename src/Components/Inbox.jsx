import React, { Component } from 'react';
import './Inbox.css'
import more from '../Assets/icons/more.svg'
import arrow from '../Assets/icons/arrow.svg'
const Inbox = (props) => {
    return (  
        <>
        <div className='inbox'>
            <p className='st1'>{props.name}</p>
            <p className='st1'>{props.date}</p>
            <p className='st1'>{props.cat}</p>
                    <div className='notread row cen'>
                    <p className='st1'>Delivered</p>
                    <img src={arrow} alt="arrow" />
                    </div>
            <img src={more} alt="more" />
        </div>
        </>
    );
}
 
export default Inbox;