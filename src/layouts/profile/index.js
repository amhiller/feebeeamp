// Amplify
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { API } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import awsExports from '../../aws-exports';

import { Redirect } from 'react-router-dom'

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// @mui material components
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";

// Material Dashboard 2 React Components
import MDBox from "components/MDBox";

// Overview page compoonents
// import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Overview page components
// import Header from "layouts/profile/components/Header";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

import protectedRoute from '../../context/protected'

import React, { useEffect, useState } from 'react';
Amplify.configure(awsExports);


const initialAuthForm = { isAuthenticated: false};

function Overview() {

  const [ authData, setAuthData ] = useState(initialAuthForm);

    return(
      
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <MDBox mt={5} mb={3}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
            <ProfileInfoCard
              title="profile information"
              description="Test Description"
              info={{
                fullName: "Austin Hiller",
                mobile: "631-241-5763",
                email: "amhiller96@gmail.com",
                location: "USA",
              }}
              social={[
                {
                  link: "https://facebook.com",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
            />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  )
}

export default protectedRoute(Overview);
