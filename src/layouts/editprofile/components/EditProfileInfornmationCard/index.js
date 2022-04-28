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

import awsExports from '../../../../aws-exports';

import { API } from "aws-amplify"

import { createProfile as CreateProfileMutation } from '../../../../graphql/mutations'
import { updateProfile as UpdateProfileMutation } from '../../../../graphql/mutations';

import checkAuthState from "authentication/authcheck";

import { listProfiles } from 'graphql/queries';

import Amplify from "aws-amplify"
const initialFormState = { firstName: '', lastName: '', companyName: '', bio: '', owner_id: '', address: ''}
const initialSubmitState = { firstName: '', lastName: '', companyName: '', bio: '', owner_id: '', address: ''}
Amplify.configure(awsExports)

var first = false;

function ProfileInformaton() {

  //const authstate = checkAuthState()
  const [ formData, setFormData ] = useState(initialFormState)
  const [ submitData, setSubmitData] = useState(initialSubmitState)


  useEffect(() => {
    FetchProfiles();
  }, []);

  async function FetchProfiles() {
    try {
      console.log("iteration")
      const profileDatav1 = await API.graphql({query: listProfiles})
      console.log("logging", profileDatav1.data.listProfiles.items[0])
      console.log("Sizing", profileDatav1.data.listProfiles.items.length)
      if (!profileDatav1.data.listProfiles.items.length)
      {
        console.log("first")
        first = true;
        console.log(first)
      }
      //console.log(profileDatav1);
      else {
        setFormData(profileDatav1.data.listProfiles.items[0])
        console.log(formData)
        submitData['firstName'] = profileDatav1.data.listProfiles.items[0].firstName
        submitData['lastName'] = profileDatav1.data.listProfiles.items[0].lastName
        submitData['companyName'] = profileDatav1.data.listProfiles.items[0].companyName
        submitData['bio'] = profileDatav1.data.listProfiles.items[0].bio
        submitData['id'] = profileDatav1.data.listProfiles.items[0].id
        submitData['owner_id'] = profileDatav1.data.listProfiles.items[0].owner_id
        submitData['_version'] = profileDatav1.data.listProfiles.items[0]._version
        submitData['address'] = profileDatav1.data.listPrfofiles.items[0].address
        console.log("here", submitData);
      }
      return profileDatav1 
    } catch (err) {
      console.log(err)
    }
    
  }

  async function Create() {
    try {
      console.log(submitData)
      const test = await API.graphql({ query: CreateProfileMutation, variables: {input: submitData}})
      console.log(test)
    } catch (err) {
      console.log(err)
    }
  }

  async function Update() {
    console.log("test", first)
    if(!first){
      try {
        console.log("updating...")
        //FetchProfiles();
        console.log("Update function", submitData)
        const test = await API.graphql({ query: UpdateProfileMutation, variables: {input: submitData}})
        console.log(test)
      } catch (err) {
        console.log("Error in update function: ", err)
      }
    } else {
      Create();
      first = false;
    }

  }

  async function test(e) {
    console.log(e.target.value)
    setSubmitData({...submitData, 'firstName': e.target.value})
    console.log(submitData)
  }

  //owner_id
  return (
    <Card >
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Edit Profile Information
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDTypography variant="h6" fontWeight="bold">
              firstname:&nbsp;
            </MDTypography>
            <MDInput
            //onChange={e => test(e)}
            onChange={e => setSubmitData({...submitData, 'firstName': e.target.value})}
            type="string"
            label={formData.firstName}
          />
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="h6" fontWeight="bold">
              lastname:&nbsp;
            </MDTypography>
            <MDInput
            onChange={e => setSubmitData({...submitData, 'lastName': e.target.value})}
            type="string"
            label={formData.lastName}
          />
          </MDBox>
          <MDBox mb={2}>
            <MDTypography variant="h6" fontWeight="bold">
              company:&nbsp;
            </MDTypography>
            <MDInput
            onChange={e => setSubmitData({...submitData, 'companyName': e.target.value})}
            type="string"
            label={formData.companyName}
          />
          </MDBox>
          <MDBox mb={2} >
            <MDTypography variant="h6" fontWeight="bold">
              bio:&nbsp;
            </MDTypography>
            <MDInput
            onChange={e => setSubmitData({...submitData, 'bio': e.target.value})}
            type="string"
            label={formData.bio}
          />
          </MDBox>
          <MDBox mb={2} >
            <MDTypography variant="h6" fontWeight="bold">
              Owner_id:&nbsp;
            </MDTypography>
            <MDInput
            onChange={e => setFormData({...formData, 'owner_id': e.target.value})}
            type="string"
            disabled
            label={formData.owner_id}
          />
          </MDBox>
          <MDBox mb={2} >
            <MDTypography variant="h6" fontWeight="bold">
              address:&nbsp;
            </MDTypography>
            <MDInput
            onChange={e => setSubmitData({...submitData, 'address': e.target.value})}
            type="string"
            label={formData.address}
          />
          </MDBox>
        </MDBox>
        <MDButton 
          variant="button"
          color="info"
          onClick={() => Update()}
        >
        Update
        </MDButton>
      </MDBox>



    </Card>
  );
}

export default ProfileInformaton;
