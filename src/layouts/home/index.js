import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";



// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/pro-onboarding-v2.jpg";

// Auth API Amplify
import { Auth } from 'aws-amplify';
import Signin from "pages/signin";




function Home() {
  
  let navigate = useNavigate();
  const routeChange = (route) => {
    navigate(route);
  }

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            FeeBee Home
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Would you like to signin or signup?
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mt={4} mb={1}>
              <MDButton 
                variant="gradient" 
                color="info" 
                fullWidth
                onClick={() => routeChange("/authentication/sign-in")}
                >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton 
                variant="gradient" 
                color="info" 
                fullWidth
                onClick={() => routeChange("/authentication/sign-up")}
                >
                sign up
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Home;
