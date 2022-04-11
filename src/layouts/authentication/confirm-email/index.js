import React, { useState } from 'react';

import { Auth } from 'aws-amplify'

import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/pro-onboarding-v2.jpg";

const initialFormState = { email: '', code: ''}

function ConfirmEmail() {

  const [ formData, setFormData] = useState(initialFormState)
  
  let navigate = useNavigate();

  async function confirmSignUp() {
    try {
      setFormData(initialFormState)
      console.log(formData)
      await Auth.confirmSignUp(formData.email, formData.code)

    } catch (err) {
      console.log(err)
    }
    
  }

  async function resendCode() {
    try {
      await Auth.resendSignUp(formData.email)
      console.log('code resent successfully')
    } catch (err) {
      console.log(err);
    }
  }

  
  return(
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Email Confirmation Code
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Check email inbox for verification code
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={4}>
              <MDInput 
              type="email" 
              label="email" 
              variant="standard" 
              fullWidth 
              onChange={e => setFormData({...formData, 'email': e.target.value})}
              />
            </MDBox>
            <MDBox mb={4}>
              <MDInput 
              type="string" 
              label="code" 
              variant="standard" 
              fullWidth 
              onChange={e => setFormData({...formData, 'code': e.target.value})}
              />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton 
                variant="gradient" 
                color="info" 
                fullWidth
                onClick={() => confirmSignUp(formData)}
                >
                confirm
              </MDButton>
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton 
                variant="gradient" 
                color="info" 
                fullWidth
                onClick={() => resendCode(formData)}
                >
                Resend Code
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  )
}

export default ConfirmEmail;