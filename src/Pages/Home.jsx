import React, { Component } from 'react' ;
import { Link } from 'react-router-dom';
import './Home.css';
import Menu from '../Components/Menu';
import Nav from '../Components/Nav';
import Lm from '../Components/Lm';
import lap from '../Assets/images/lap.svg'
import v from '../Assets/images/v.svg'
import rate from '../Assets/images/rate.svg'
import c1 from '../Assets/images/c1.svg'
import c2 from '../Assets/images/c2.svg'
import Inbox from '../Components/Inbox';
const Home = () => {
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
  <p className="menu-item active">Dashboard</p>
</Link>

<Link to="/content-management">
  <p className="menu-item">Content Management</p>
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
    <h1 className='sp4'>Welcome Back, Hajora !</h1>
        <div className='sb row'>
                          <div className='box1 div2'>
                <h3 className='sp3 blue st2'>Total Visitors</h3>
                <h3 className='sp3 st4'>105</h3>
                <p className='sp3'>Avg this month: 120</p>
                <Lm />


            </div>
                  <div className='box1 div2 col'>
                <h3 className='sp3 terq st2'>Total Projects</h3>
                <h3 className='sp3 st4'>20</h3>
                <p className='sp3'>Avg this month: 3</p>
                <Lm />
            </div> 
        </div>
        <div className='page2 mm pp rate'>
            <h3 className='st2 sp4'>Posting Rate Per Month</h3>
            <div className='row g1'>
                <div className='row sa sp4 g1'>
                    <img src={c1} alt="" />
                    <p className='nw'>Posts in November 90%</p>
                </div>
                        <div className='row sa sp4 g1'>
                    <img className='width100' src={c2} alt="" />
                    <p className='nw'>Posts in September 20%</p>
                </div>
            </div>
            <img src={rate} alt="rate" />
        </div>
        <div className='pp mesg'>
            <h3>Most Recent Project Requests</h3>
            <div className='mm cat row cen sa'>
                <p className='st2'>Account Name</p>
                <p className='st2'>Date</p>
                <p className='st2'>Categories </p>
                <p className='st2'>Status</p>
                <p className='st2'>More</p>
            </div>
            <Inbox name="Maya Diab" date="12-10-2022" cat="UX/UI Design" />
            <Inbox name="Maya Diab" date="12-10-2022" cat="UX/UI Design" />
            <Inbox name="Maya Diab" date="12-10-2022" cat="UX/UI Design" />
            <Inbox name="Maya Diab" date="12-10-2022" cat="UX/UI Design" />
            <Inbox name="Maya Diab" date="12-10-2022" cat="UX/UI Design" />
        </div>
{/* ends */}
</div>
</div>

        </>
     );
}
 
export default Home;