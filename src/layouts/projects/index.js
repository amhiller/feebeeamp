import React from 'react';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import ProjectsComponent from './components/Projects-component'
import ListProjectsComponent from './components/ListProjectsComponent';

import Grid from '@mui/material/Grid'

import MDBox from "components/MDBox"

function Projects() {
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <MDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <ProjectsComponent/>
            
          </Grid>
          <Grid item xs={12} md={7}>
            <ListProjectsComponent />
          </Grid>
        </Grid>
      </MDBox>


    </DashboardLayout>
  );
}

export default Projects;