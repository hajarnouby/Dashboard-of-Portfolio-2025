import React, { Component } from 'react';
import './Info.css'
const Info = (props) => {
    return ( 
        <>
        <div className='info col'>
            <div className='tit row sp4'>
            <p className='unli '>Title:</p>
            <h4 className='st2 nw'>{props.title}</h4>
            </div>
            <div className='col'>
            <p className='unli '>Description:</p>
            <p className='wd1'>{props.des}</p>
            </div>
        </div>
        </>
     );
}
 
export default Info;