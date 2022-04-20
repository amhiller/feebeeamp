import React from 'react';

//Layout Structure
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

//CRM components
import CrmMain from './components/Crmmain'

//Auth
import protectedRoute from 'context/protected';

//MUI
import Grid from '@mui/material/Grid';
import MDBox from 'components/MDBox';

function Crm() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <CrmMain />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  )
}

export default protectedRoute(Crm);