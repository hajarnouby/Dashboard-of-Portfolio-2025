import React, { Component } from 'react';
import './For.css'
const Form = (props) => {
    return ( 
            <>
                <label>{props.title}</label>
                <input placeholder={props.placeholder}>{props.name}</input>
                <label>{props.pass}</label>
                <input type='password' placeholder={props.place}></input>
            </>
        
     );
}
 
export default Form;