import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContentM.css'
import Nav from '../Components/Nav';
import Del from '../Components/Del';
import Edit from '../Components/Edit';
import prog from '../Assets/images/prog.svg'
import Info from '../Components/Info';
import Menu from '../Components/Menu';
const Content = () => {
    return ( 
        <>
         <Nav />
        <div class="dashboard-layout">

 <Menu />
<div className='page2'>
        <div className='row cen sa'>
            <div className='col proj'>
                <div className='row sb sp4'>
                    <Del />
                    <Edit />
                </div>
                <img src={prog} alt="project" />
                <Info title="Egyptian History Website" des="This website is made through storytelling the life of Alexander the Great in 356 BC. Each section speaks about his history from childhood to his death. I used parallex effect to show the work and some text animation to show the text when scrolling." />
             </div>
                         <div className='col proj'>
                <div className='row sb sp4'>
                    <Del />
                    <Edit />
                </div>
                <img src={prog} alt="project" />
                <Info title="Egyptian History Website" des="This website is made through storytelling the life of Alexander the Great in 356 BC. Each section speaks about his history from childhood to his death. I used parallex effect to show the work and some text animation to show the text when scrolling." />
             </div>
        </div>       
</div>
</div>
        </>
     );
}
 
export default Content;