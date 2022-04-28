import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getClient } from 'graphql/queries';
import { API } from 'aws-amplify';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



function Client() {
  let params = useParams();
  const [ clientData, setClientData ] = useState([])

  useEffect(() => {
    fetchClient();
  }, [])



  async function fetchClient(){
    console.log("Fetching Client: ", params.crmId)
    try {
      const clientDatav1 = await API.graphql({query: getClient, variables: {id: params.crmId}})
      console.log(clientDatav1.data.getClient)
      setClientData(clientDatav1.data.getClient)
    } catch (err) {
      console.log("error: ", err)
    }
  }

  console.log(params.crmId)
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Box sx={{
        m: 3
      }}>
        Client Information
      </Box>

      <Box sx={{
        bgcolor: '#ffffff',
        height: 200,
        m: 3,
        borderRadius: 2
      }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{
              textAlign: 'center',
              color: '#000000',
              m: 3
            }}>
              name: {clientData.firstName} {clientData.lastName}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              textAlign: 'center',
              color: '#000000',
              m: 3
            }}>
              phone: {clientData.phoneNumber}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              textAlign: 'center',
              color: '#000000',
              m: 3
            }}>
              email: {clientData.email}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{
              textAlign: 'center',
              color: '#000000',
              m: 3
            }}>
              address: {clientData.address}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{
              textAlign: 'center',
              color: '#000000',
              bgcolor: '#ffffff',
              m: 3
            }}>
              <Button variant="outlined" sx={{
                color: '#1EC1CB',
                bgcolor: '#ffffff',
                borderColor: '#1EC1CB',
                m: 2
              }}>
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </DashboardLayout>
  )
}

export default Client;
