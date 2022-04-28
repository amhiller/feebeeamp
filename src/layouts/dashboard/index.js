// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import Box from "@mui/material/Box"

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

import { API, Auth } from 'aws-amplify';

import React, { useEffect, useState } from 'react';

import { listProfiles } from 'graphql/queries';
import { listProjects } from 'graphql/queries';
import { listClients } from 'graphql/queries';
import { FaceRetouchingNaturalSharp } from "@mui/icons-material";
import MDTypography from "components/MDTypography";
import profile from "layouts/profile";
import { borderRadius } from "@mui/system";

import image from './icon/feebee-icon.PNG';

const initialProfileState = { firstName: '', lastName: '', companyName: '', bio: '', owner_id: ''}

function Dashboard() {

  const [ authData, setAuthData ] = useState([])
  const first = false
  const [ projects, setProjects ] = useState([])
  const [ profileData, setProfileData ] = useState(initialProfileState)
  const [ clients, setClients ] = useState([]);

  useEffect(() => {
    fetchProfiles();
    fetchAuth();
    fetchProjects();
    fetchClients();
  }, []);

  async function fetchProfiles() {
    console.log("Fetching Profile")
    try {
      const profileDatav1 = await API.graphql({query: listProfiles})
      if(!profileDatav1.data.listProfiles.items.length) {
        first = true;
        console.log("First time, no profile")
      } 
      else {
        setProfileData(profileDatav1.data.listProfiles.items[0])
        console.log(profileData)
        console.log("Profile Found: Setting state")
      }
    } catch (err) {
      console.log("Error",err)
    }
    
  }

  async function fetchAuth() {
    console.log("Fetching Auth")
    try {
      const authDatav1 = await Auth.currentAuthenticatedUser()
      setAuthData(authDatav1)
      console.log("Authenticated User: ", authDatav1)
    } catch (err) {
      console.log("Error", err)
    }
  }

  async function fetchProjects() {
    console.log("Fetching Projects")
    try {
      const projectDatav1 = await API.graphql({query: listProjects});
      setProjects(projectDatav1.data.listProjects.items.filter(item => item._deleted !== true))
      console.log("Fetch Project Success", projectDatav1.data.listProjects.items)
    } catch (err) {
      console.log("Error", err)
    }
  }

  async function fetchClients() {
    console.log("Fetching Clients")
    try {
      const ClientDatav1 = await API.graphql({query: listClients});
      setClients(ClientDatav1.data.listClients.items)
    } catch(err) {
      console.log("Error: ", err)
    }
  }

  return (
    <DashboardLayout>
    <DashboardNavbar/>
      <Grid container spacing={4}>
        <Grid item xs={6} md={8}>
          <Box sx={{
            bgcolor: '#ffffff',
            color: '#000000',
            p: 2,
            height: 300,
            borderRadius: 2,
            minwidth: 300
          }}>
            <Box sx={{
              p: 1,
              color: '#041E77',
              fontWeight: "medium",
            }}>Hello {profileData.firstName} {profileData.lastName}
            </Box>
            <Box sx={{
              color: '#636363',
              p: 1
            }}>
              Profile ID: {profileData.id}
            </Box>
            <Box sx={{
              color: '#636363',
              p: 1
            }}>
              Owner ID: {profileData.owner}
            </Box>
            <Box sx={{
              color: '#636363',
              p: 1
            }}>
              Cognito Email:
            </Box>
            <Box sx={{
              color: '#636363',
              p: 1
            }}>
              Cognito Username: {authData.username}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} md={4}>
          <Box sx={{
              bgcolor: '#ffffff',
              color: '#000000',
              p: 2,
              height: 300,
              borderRadius: 2,
              minwidth: 300
            }}>
              <Box sx={{
                p: 1,
                color: '#041E77',
                fontWeight: 'medium'
              }}>
                {profileData.companyName}
              </Box>
              <Box sx={{
                p: 1,
                color: '#636363',
              }}>
                {profileData.bio}
              </Box>
              <Box sx={{
                display: "flex",
                justifyContent: "center"
              }}>
                <img src={image} />
              </Box>
            </Box>
        </Grid>

        <Grid item xs={6} md={4}>
          <Box sx={{
              bgcolor: '#ffffff',
              color: '#041E77',
              p: 2,
              height: 300,
              borderRadius: 2,
              minwidth: 300,
              fontWeight: "medium"
            }}>
            <Box sx={{
              p: 1,
              color: '#041E77',
              fontWeight: "medium",
            }}>Projects
            </Box>
              <Box sx={{
                p: 1,
                color: '#636363',
                fontWeight: 'normal'
              }}>
                Active Projects: {projects.length}
              </Box>
            </Box>

        </Grid>

        <Grid item xs={6} md={8}>
          <Box sx={{
              bgcolor: '#ffffff',
              color: '#041E77',
              p: 2,
              height: 300,
              borderRadius: 2,
              minwidth: 300,
              fontWeight: "medium"
            }}>
              <Box>
                Clients
              </Box>
              <Box>
                Clients: {clients.length}
              </Box>
            </Box>
        </Grid>

      </Grid>

    </DashboardLayout>
  );
}

export default Dashboard;
