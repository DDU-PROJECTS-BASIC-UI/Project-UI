import React from 'react'
import SideNavbar from "./SideNavbar/SideNavbar"
import TopNavbar from "./TopNavbar/TopNavbar"
import RightComponent from './RightComponent/RightComponent'

export default function RootComponent(props) {
    return (
      <>
        <TopNavbar />
        <div class="container-fluid page-body-wrapper">
          <SideNavbar />
          <div class="main-panel">
            <div class="content-wrapper">
                <RightComponent name={props.name}/>   
            </div>
          </div>
        </div>
      </>
    );
}
