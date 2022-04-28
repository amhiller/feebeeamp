import React from 'react'

import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import PageComponent from './components/PageComponent';

function Test() {
  return(
    <DashboardLayout>
      <DashboardNavbar/>
      <PageComponent />
    </DashboardLayout>
  )
}

export default Test;