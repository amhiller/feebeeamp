import React, { useState } from 'react';

// react-router
import { Link } from "react-router-dom";
 
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button"

import { listProfiles } from 'graphql/queries';

import { API } from 'aws-amplify';
import { useEffect } from "react";


const initialProfileState = { firstName: '', lastName: '', companyName: '', bio: '', owner_id: ''}

function ProfileInformaton() {

  const [ profileData, setProfileData ] = useState(initialProfileState)
  const first = false;
  useEffect(() => {
    FetchProfiles();
  }, []);

  async function FetchProfiles() {
    try {
      const profileDatav1 = await API.graphql({query: listProfiles})
      console.log("logging", profileDatav1.data.listProfiles.items[0])
      if(!profileDatav1.data.listProfiles.items.length) {
        console.log("not first")
        first = true;
      } 
      else {
        setProfileData(profileDatav1.data.listProfiles.items[0])
        console.log(profileData)
      }
    } catch (err) {
      console.log(err)
    }
    
  }

  return (
    <Card >
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Profile Information
        </MDTypography>
        <MDTypography component={Link} to="/edit-profile" variant="body2" color="secondary">
          <Tooltip title="Edit Profile" placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </MDTypography>
      </MDBox>
      <MDBox display="flex" pt={1} pb={2} px={2}>
  
        <MDTypography variant="h6" fontWeight="bold">
          FirstName:&nbsp;
        </MDTypography>
        <MDTypography variant="h6" fontWeight="regular">
          &nbsp;{profileData.firstName}
        </MDTypography>
          

      </MDBox>
      <MDBox display="flex" pt={1} pb={2} px={2}>
  
        <MDTypography variant="h6" fontWeight="bold">
          lastName:&nbsp;
        </MDTypography>
        <MDTypography variant="h6" fontWeight="regular">
          &nbsp;{profileData.lastName}
        </MDTypography>
        

      </MDBox>

      <MDBox display="flex" pt={1} pb={2} px={2}>
  
        <MDTypography variant="h6" fontWeight="bold">
          Company Name:&nbsp;
        </MDTypography>
        <MDTypography variant="h6" fontWeight="regular">
          &nbsp;{profileData.companyName}
        </MDTypography>
        

      </MDBox>

            <MDBox display="flex" pt={1} pb={2} px={2}>
  
        <MDTypography variant="h6" fontWeight="bold">
          bio:&nbsp;
        </MDTypography>
        <MDTypography variant="h6" fontWeight="regular">
          &nbsp;{profileData.bio}
        </MDTypography>
        

      </MDBox>
      <MDBox display="flex" pt={1} pb={2} px={2}>
  
        <MDTypography variant="h6" fontWeight="bold">
          Verified:&nbsp;
        </MDTypography>
        <MDTypography variant="h6" fontWeight="regular">
          &nbsp;Nope
        </MDTypography>
      </MDBox>

    </Card>
  );
}

export default ProfileInformaton;
