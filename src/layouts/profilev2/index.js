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

import BillingInformation from 'layouts/billing/components/BillingInformation'

import Profile from 'layouts/profilev2/components/ProfileInformationv2'
import ProfileInformation from 'layouts/profilev2/components/ProfileInformation';
import { getProfile, listProfiles } from '../../graphql/queries';
import React, { useEffect, useState } from 'react';
Amplify.configure(awsExports);


const initialAuthForm = { isAuthenticated: false};

function Overview() {

  const [ authData, setAuthData ] = useState(initialAuthForm);
  const [ profiles, setProfiles ] = useState([])
    useEffect(() => {
      fetchProfiles();
    }, []);

    async function fetchProfile() {
      const profileData = await API.graphql({query: getProfile})
    }

    async function fetchProfiles() {
      try {
        const profileData = await API.graphql({query: listProfiles})
        setProfiles(profileData.data.listProfiles.item)
        console.log(profileData)
        console.log(profiles)
      } catch (err) {
        console.log(err)
      }

    }
    return(
    <DashboardLayout>
      <DashboardNavbar />
      <Profile />
    </DashboardLayout>
  )
}

export default protectedRoute(Overview);
