import React from 'react';
import '../../App.css'
import logo from '../../pictures/feebee-logo2.png'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <CDBSidebar textColor="#041E77" backgroundColor="#FFFFFF" style={{ padding: '50px'}}>
          <CDBSidebarHeader >
              <img className="photo" src={logo} alt="logo" />
              FeeBee
          </CDBSidebarHeader>

          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Schedule</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card">Messaging</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line">New Project</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="gamepad">Settings</CDBSidebarMenuItem>

          </CDBSidebarMenu>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: '20px 5px'
              }}
              >
                FeeBee Inc.
              </div>
          </CDBSidebarFooter>
        </CDBSidebar>
    )
};

export default Sidebar;