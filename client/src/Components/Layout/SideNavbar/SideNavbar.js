import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideNavbar() {
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <NavLink to="/home" className="nav-link" >
            {/* <a class="nav-link" href="index.html"> */}
            <i class="mdi mdi-home menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          {/* </a> */}  
          </NavLink>
        </li>

        <li class="nav-item">
          <NavLink to="/forms" className="nav-link" >
            {/* <a class="nav-link" href="basic_form.html"> */}
              <i class="mdi mdi-view-headline menu-icon"></i>
              <span class="menu-title">Form elements</span>
            {/* </a> */}
          </NavLink>
        </li>

        <li class="nav-item">
          <NavLink to="/tables" className="nav-link">
            {/* <a class="nav-link" href="#"> */}
              <i class="mdi mdi-grid-large menu-icon"></i>
              <span class="menu-title">Tables</span>
            {/* </a> */}
          </NavLink>
        </li>

        <li class="nav-item">
          <NavLink to="/buttons" className="nav-link">
            {/* <a class="nav-link" href="#"> */}
              <i class="mdi mdi-grid-large menu-icon"></i>
              <span class="menu-title">Buttons</span>
            {/* </a> */}
          </NavLink>
        </li>

        <li class="nav-item">
          
            <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i class="mdi mdi-account menu-icon"></i>
              <span class="menu-title">User Pages</span>
              <i class="menu-arrow"></i>
            </a>
          
          <div class="collapse" id="auth">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> 
              <NavLink to="/login" className="nav-link" >
                    {/* <a class="" href="#">  */}
                    Login 
                    {/* </a> */}
              </NavLink>
              </li>
              <li class="nav-item"> 
              <NavLink to="/register" className="nav-link" >
                    {/* <a class="" href="#">  */}
                      Register 
                    {/* </a> */}
              </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}
