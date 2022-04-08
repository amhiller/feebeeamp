import React from "react";
import '../App.css';
import logo from '../pictures/feebee-logo-blue.PNG'
import test from '../pictures/sign-in-photo.PNG'
import { Box, Grid } from '@mui/material'
import { Button } from '@mui/material';

function Signin() {
    return (
        <div className="App-SignIn">
          <header className="sign-in">
            <Grid container rowSpacing={1} columnSpacing={{ xs:1, sm:2, md: 3}}>
              <Grid item xs={8}>
                  <img style={{padding:"50px"}}src={logo} alt="logo" />
              </Grid>
              <Grid item xs={8}>
                <img className="photo2" src={test} alt="test"/>
              </Grid>
              <Grid item xs={8}>
                <div className="sign-in-class">
                  <h1>Sign In</h1>
                  <p>Sign in as a contractor</p>
                  <Button variant="contained" color='inherit'>click me</Button>
                </div>
                
              </Grid>
              
            </Grid>
            
          </header>
          
      </div>
    )
}

export default Signin;