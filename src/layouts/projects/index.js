import React from 'react';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import ProjectsComponent from './components/Projects-component'

function Projects() {
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <ProjectsComponent/>
    </DashboardLayout>
  );
}

export default Projects;