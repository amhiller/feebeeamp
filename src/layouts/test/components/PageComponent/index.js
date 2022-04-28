import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Edit from '@mui/icons-material/Edit';



function PageComponent() {

  return (
    <div>
      <Box sx={{
        bgcolor: '#ffffff',
        height: 360,
        m: 4
      }}>
        <Box sx={{
          bgcolor: '#D3F8FB',
          height: 200,
        }}>
        </Box>
        <Box sx={{
          height: 160
        }}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Box sx={{
                bgcolor: '#000000',
                textAlign: 'center'
              }}>xs</Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{
                bgcolor: '#000000',
                textAlign: 'center'
              }}>xs=6</Box>
            </Grid>
            <Grid item xs>
              <Box sx={{
                bgcolor: '#000000',
                textAlign: 'center'
              }}>xs</Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{
        bgcolor: '#ffffff',
        height: 20,
        m: 10
      }}>

      </Box>
    </div>

  )
}

export default PageComponent;