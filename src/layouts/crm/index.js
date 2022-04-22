//Layout Structure
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

//CRM components
import CrmMain from './components/Crmmain'
import DataTable from 'examples/Tables/DataTable';

//react
import React, { useEffect, useState } from 'react';

//Auth
import protectedRoute from 'context/protected';

//MUI
import Grid from '@mui/material/Grid';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import Card from '@mui/material/Card';

//Test data
import authorTableData from "layouts/tables/data/authorsTableData"

//aws
import { API, selectInput } from "aws-amplify";

//graphql
import { listClients } from "graphql/queries";

//const [ clients, setClients ] = useState([]);

function Crm() {
  
  const { columns } = authorTableData();

  const [ clients, setClients ] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    console.log("Fetching Clients")
    try {
      const clientData = await API.graphql({query: listClients});
      //console.log(clientData.data.listClients.items);
      //setClients(...clients, clientData.data.listClients.items.filter(item => item._deleted !== true));
      const client1 = clientData.data.listClients.items
      setClients(client1)
      //console.log(client1)
      
    } catch(err) {
      console.log(err)
    }
  }

  console.log("clients: ",clients);

  clients.map((client, index) => {
    console.log(client.firstName)
  })



  const rows = clients

  //console.log({rows1})
  //clients.map(console.log("test"))
  //var rows2 = {rows1}
  //console.log(rows2)
  //const rows2 = getRows()
  console.log(rows)

  //const {rows2} = getRows()
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
                table={{ columns , rows }}
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