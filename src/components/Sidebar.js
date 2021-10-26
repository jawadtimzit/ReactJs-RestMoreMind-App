import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4" >
    {/* application Logo */}
    <a className="brand-link">
      <img src="dist/img/RestLessMind-logo.jpg" alt="RestLessMind Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">RestMoreMind</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          {/*<img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />*/}
        </div>
        <div className="info"> 
          {/*<a href="#" className="d-block">Alexander Pierce</a>*/}
        </div>
      </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <li className="nav-header">EXAMPLES</li>
          <li className="nav-item">
            <a href="src/Calendar.js" className="nav-link">
              <i className="nav-icon far fa-calendar-alt" />
              <p>
                Calendar
                <span className="badge badge-info right">events</span>
              </p>
            </a>
          </li>
          
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                Pages
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              
              <li className="nav-item">
                <a href="pages/examples/faq.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>FAQ</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/pages/contactus" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Contact us</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="/pages/signin" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Sign In</p>
                </a>
              </li>

              <li className="nav-item">
                <a href="/pages/signup" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Sign Up</p>
                </a>
              </li>

            </ul>
          </li>
         
      
          
          
          
          
          
          <li className="nav-header">{/*LABELS*/}</li>
          <li className="nav-item">
            
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-danger" />
              <p className="text">Important</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-warning" />
              <p>Warning</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-info" />
              <p>Informational</p>
            </a>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}