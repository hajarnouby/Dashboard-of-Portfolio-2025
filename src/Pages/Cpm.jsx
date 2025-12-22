import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cpm.css';
import Nav from '../Components/Nav';
import Edit from '../Components/Edit';

const Cpm = () => {
  const [activeTab, setActiveTab] = useState('Page');
  
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
               <div className="cpm-container">
      <h1 className="cpm-title">What Are We Creating?</h1>

      {/* --- Category / Page / Tag Selector --- */}
      <div className="cpm-tabs">
        <button 
          className={`cpm-tab-btn ${activeTab === 'Category' ? 'active' : ''}`}
          onClick={() => setActiveTab('Category')}
        >
          Category 
          {/* Grid Icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </button>

        <button 
          className={`cpm-tab-btn ${activeTab === 'Page' ? 'active' : ''}`}
          onClick={() => setActiveTab('Page')}
        >
          Page 
 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </button>

        <button 
          className={`cpm-tab-btn ${activeTab === 'Tag' ? 'active' : ''}`}
          onClick={() => setActiveTab('Tag')}
        >
          Tag 
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
        </button>
      </div>

       <div className="cpm-form-group">
        <div className="cpm-label-row">
          <label className="cpm-label">Page Title</label>
          <div className="cpm-lang-toggle">
            <button className="cpm-lang-btn active">English</button>
            <button className="cpm-lang-btn inactive">Arabic</button>
          </div>
        </div>
        <input 
          type="text" 
          className="cpm-input" 
          placeholder="History Project" 
        />
        <p className="cpm-validation">Title must include at least 50 words</p>
      </div>

       <div className="cpm-form-group">
        <div className="cpm-label-row">
          <label className="cpm-label">Meta Description</label>
          <div className="cpm-lang-toggle">
            <button className="cpm-lang-btn active">English</button>
            <button className="cpm-lang-btn inactive">Arabic</button>
          </div>
        </div>
        <textarea 
          rows="3"
          className="cpm-input" 
          placeholder="this is the history of egypt....." 
        />
        <p className="cpm-validation">Title must include at least 150 words</p>
      </div>

       <div className="cpm-form-group">
        <div className="cpm-label-row">
          <label className="cpm-label">Slug Name</label>
        </div>
        <input 
          type="text" 
          className="cpm-input" 
          placeholder="Slug name here" 
        />
      </div>

       <div className="cpm-editor-wrapper">
        <Edit />
        </div>

        <div className="cpm-editor-box">
           <div className="cpm-toolbar">
            <span>↩</span>
            <span>↪</span>
            <div className="cpm-toolbar-separator"></div>
            <span>Normal text ▾</span>
            <div className="cpm-toolbar-separator"></div>
            {/* Alignment Icons */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 21h4v-2h-4v2zm-4-4h12v-2H6v2zm-3-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/></svg>
            <div className="cpm-toolbar-separator"></div>
            <span style={{fontWeight:'bold'}}>B</span>
            <span style={{fontStyle:'italic'}}>I</span>
            <span style={{textDecoration:'underline'}}>U</span>
            <span style={{textDecoration:'line-through'}}>S</span>
            <div className="cpm-toolbar-separator"></div>
            <span>&lt; &gt;</span>
            <div className="cpm-toolbar-separator"></div>
            <span>🔗</span>
            <span>🖼️</span>

             <button className="cpm-trash-btn">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 <polyline points="3 6 5 6 21 6"></polyline>
                 <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
               </svg>
            </button>
          </div>

           <div className="cpm-content-area">
            <h1>Heading1</h1>
            <h2>Heading2</h2>
            <h3>Heading3</h3>
            
            <h1 style={{marginTop: '20px'}}>Heading1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare. At urna viverra non suspendisse neque, lorem. Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod. Rhoncus proin orci duis scelerisque molestie cursus tincidunt aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare. At urna viverra non suspendisse neque, lorem. Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod.
            </p>

            {/* Image Placeholder */}
            <div className="cpm-img-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="#6F6F6F">
                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                 <circle cx="8.5" cy="8.5" r="1.5"></circle>
                 <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div> 
</div>

        </>
  );
};

export default Cpm;