import React, {useState, useEffect} from "react";

// react-router
import { Link } from "react-router-dom";
 
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import MDButton from "@mui/material/Button"
import MDInput from "components/MDInput";

import awsExports from 'aws-exports';

import { API } from "aws-amplify"


import Amplify from "aws-amplify"

Amplify.configure(awsExports)



function ProjectInformation() {


  return (
    <Card >
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Create Project
        </MDTypography>
      </MDBox>

      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
        <MDBox mb={2}> 
          <MDTypography variant="h6" fontWeight="bold">
                project Name:&nbsp;
          </MDTypography>
          <MDInput
            //onChange={e => test(e)}
            //onChange={e => setSubmitData({...submitData, 'firstName': e.target.value})}
            type="string"
            label="project Name"
          />
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="h6" fontWeight="bold">
                  project Description:&nbsp;
            </MDTypography>
            <MDInput
            //onChange={e => test(e)}
            //onChange={e => setSubmitData({...submitData, 'firstName': e.target.value})}
            type="string"
            label="Project Description"
          />
          </MDBox>
 

        
        </MDBox>

      </MDBox>



          
          




    </Card>
  );
}

export default ProjectInformation;
