import React from "react";
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '../App.css'

import awsExports from '../aws-exports';

import Sidebar from '../components/navigation/usersidenav';

import { Grid } from "@mui/material"
import { Box } from "@mui/material"

import { Container } from "@mui/material"


Amplify.configure(awsExports);

function Userhomev1({ user }) {
    return (

        <div className="App">
          <div className="User-Dash">
            <Grid container spacing={2} rowSpacing={2}>
              <Grid item xs={4}>
                <Sidebar/>
              </Grid>
              <Grid item xs={8}>
                  <div className="test">
                      <Container>
                        <h1 style={{ padding: '50px' }}>Hello {user.username}</h1>
                      </Container>
                  </div>
              </Grid>
              <Grid item xs={8}>
                <div className="test1">
                  <Box sx={{ display: 'flex'}}>
                    <h1>test</h1>
                  </Box>
                </div>
              </Grid>
  
            </Grid>


            
          </div>

        </div>




    )
}

export default withAuthenticator(Userhomev1);