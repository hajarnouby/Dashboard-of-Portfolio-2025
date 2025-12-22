import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContentM.css'
import Nav from '../Components/Nav';
import Del from '../Components/Del';
import Edit from '../Components/Edit';
import prog from '../Assets/images/prog.svg'
import Info from '../Components/Info';
const Content = () => {
    return ( 
        <>
         <Nav />
        <div class="dashboard-layout">

  {/* <!-- Sidebar Menu --> */}
  <aside class="sidebar">
    <div class="profile">
      <p>Welcome Back!</p>
      <br />
      <h4>Hajora</h4>
    </div>

    <nav class="menu">
<Link to="/dashboard">
  <p className="menu-item">Dashboard</p>
</Link>

<Link to="/content-management">
  <p className="menu-item active">Content Management</p>
</Link>

<Link to="/pages-management">
  <p className="menu-item">Pages Management</p>
</Link>

<Link to="/analytics">
  <p className="menu-item">Analytics & Reports</p>
</Link>

<Link to="/notifications">
  <p className="menu-item">Notifications & Messages</p>
</Link>

<Link to="/blogs">
  <p className="menu-item">Blogs Management</p>
</Link>

<Link to="/system-activity">
  <p className="menu-item">System Activity</p>
</Link>

<Link to="/settings">
  <p className="menu-item">Settings</p>
</Link>
    </nav>

    <a href="#" class="logout">Logout</a>
  </aside>
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
             
        </div>       
</div>
</div>
        </>
     );
}
 
export default Content;