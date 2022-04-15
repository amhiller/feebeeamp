// Amplify
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { API } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import awsExports from 'aws-exports';

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

import protectedRoute from 'context/protected'

import CreateProjectForm from "./components/createProjectForm"
Amplify.configure(awsExports);



function Overview() {
    return(
    <DashboardLayout>
      <DashboardNavbar />
      <CreateProjectForm />
    </DashboardLayout>
  )
}

export default protectedRoute(Overview);
