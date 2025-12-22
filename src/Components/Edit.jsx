import React, { Component } from 'react';
import './Edit.css'
import edit from '../Assets/icons/edit.svg'
const Edit = () => {
    return ( 
        <>
                <button className='edit'>
                    <img src={edit} alt="edit" />
                    Edit
                </button>
        </>
     );
}
 
export default Edit;