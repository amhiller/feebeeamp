import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

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



const initialFormState = { email: '', password: '' }

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const [ formData, setFormData] = useState(initialFormState);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  let navigate = useNavigate();
  async function signIn() {

    try {
      setFormData(initialFormState)
      const user = await Auth.signIn(formData.email, formData.password)
      console.log("success")
      console.log(user)
      navigate('/profile')
    } catch (err) {
      console.log(err)
    }
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
            FeeBee Sign in
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput 
                onChange={e => setFormData({...formData, 'email': e.target.value})}
                type="email" 
                label="Email" 
                fullWidth 
                value={formData.email}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput 
                onChange={e => setFormData({...formData, 'password': e.target.value})}
                type="password" 
                label="Password" 
                fullWidth 
                value={formData.password}
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton 
                variant="gradient" 
                color="info" 
                fullWidth
                onClick={() => signIn(formData)}
                >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
