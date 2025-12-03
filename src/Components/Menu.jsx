import React, { Component } from 'react';
import './Menu.css'
const Menu = () => {
    return ( 
        <div class="dashboard-layout">

  {/* <!-- Sidebar Menu --> */}
  <aside class="sidebar">
    <div class="profile">

      <h3>Hajora</h3>
    </div>

    <nav class="menu">
      <a href="#" class="menu-item active">Dashboard</a>
      <a href="#" class="menu-item">Content</a>
      <a href="#" class="menu-item">Pages</a>
      <a href="#" class="menu-item">Analytics</a>
      <a href="#" class="menu-item">Messages</a>
      <a href="#" class="menu-item">Blogs</a>
      <a href="#" class="menu-item">System</a>
      <a href="#" class="menu-item">Settings</a>
    </nav>

    <a href="#" class="logout">Logout</a>
  </aside>

  {/* <!-- Main Content --> */}
  <main class="main">
    <h1>Welcome Back, Hajora!</h1>

    <div class="cards">
      <div class="card">Total Visitors</div>
      <div class="card">Total Projects</div>
      <div class="card wide">Posting Rate</div>
      <div class="card">Home Page Visit Rate</div>
      <div class="card">Projects Categories</div>
    </div>
  </main>

</div>

     );
}
 
export default Menu;