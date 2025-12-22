import React, { Component } from 'react';
import './BtnPDF.css'
import exp from '../Assets/icons/exp.svg'
const BtnPDF = () => {
    return ( 
        <>
        <button className='st2 BtnPDF'>Export PDF <img src={exp} alt="exportPdf" /></button>
        </>
     );
}
 
export default BtnPDF;