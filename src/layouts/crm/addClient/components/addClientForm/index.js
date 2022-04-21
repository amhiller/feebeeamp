import React, { useState } from 'react';

// MUI
import Card from '@mui/material/Card';
import MDBox from "components/MDBox";
import MDTypography from 'components/MDTypography'; 
import MDButton from "@mui/material/Button";
import MDInput from "components/MDInput";

//API
import { createClient as CreateClientMutation } from 'graphql/mutations' 
import { API } from 'aws-amplify';

const initialClientState = { firstName: '', lastName: '', phoneNumber: '', email: '', address: '' };

function AddClient() {

  const [ clientData, setClientData ] = useState(initialClientState);

  async function CreateClient() {
    console.log("Creating Client");
    try {
      await API.graphql({ query: CreateClientMutation, variables: {input: clientData}})
      setClientData(initialClientState)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <Card >
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Add Client
        </MDTypography>
      </MDBox>

      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDTypography variant="h6" fontWeight="bold">
              Client First Name:&nbsp;
            </MDTypography>
            <MDInput
              onChange={e => setClientData({...clientData, 'firstName': e.target.value})}
              type="string"
              label="First Name"
            />
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="h6" fontWeight="bold">
              Client Last Name:&nbsp;
            </MDTypography>
            <MDInput
              onChange={e => setClientData({...clientData, 'lastName': e.target.value})}
              type="string"
              label="Last Name"
            />
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="h6" fontWeight="bold">
              Email:&nbsp;
            </MDTypography>
            <MDInput
              onChange={e => setClientData({...clientData, 'email': e.target.value})}
              type="string"
              label="Email"
            />
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="h6" fontWeight="bold">
              Phone Number:&nbsp;
            </MDTypography>
            <MDInput
              onChange={e => setClientData({...clientData, 'phoneNumber': e.target.value})}
              type="string"
              label="123-451-6789"
            />
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="h6" fontWeight="bold">
              Address:&nbsp;
            </MDTypography>
            <MDInput
              onChange={e => setClientData({...clientData, 'address': e.target.value})}
              type="string"
              label="123 FeeBee Ln"
            />
          </MDBox>

          <MDButton
            variant="button"
            color="info"
            onClick={() => CreateClient()}
            >
              Add Client
            </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default AddClient;