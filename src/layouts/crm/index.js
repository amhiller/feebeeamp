import React from 'react';

//Layout Structure
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

//CRM components
import CrmMain from './components/Crmmain'
import DataTable from 'examples/Tables/DataTable';

//Auth
import protectedRoute from 'context/protected';

//MUI
import Grid from '@mui/material/Grid';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import Card from '@mui/material/Card';

//Test data
import authorTableData from "layouts/tables/data/authorsTableData"

function Crm() {
  
  const{ columns, rows } = authorTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CrmMain />
          </Grid>
        </Grid>
      </MDBox>

      <MDBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <MDBox pt={3}>
              <DataTable
                table={{ columns, rows }}
                isSorted={false}
                entriedPerPage={false}
                showTotalEntries={false}
                noEndBorder
              />
            </MDBox>


          </Grid>
        </Grid>
      </MDBox>

    </DashboardLayout>
  )
}

export default protectedRoute(Crm);