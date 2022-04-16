import React from 'react'

import { API } from "aws-amplify";

import { deleteProject as DeleteProjectMutation} from "graphql/mutations"


// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

const initialProjectState = { name: '', description: '' };

function Project({name, description, id, _version}) {


  const project = {
    name: {name},
    description: {description},
    id: {id},
    _version: {_version}
  }
  async function deleteProject( { id, _version }) {
    console.log({id, _version})
    //console.log(_version._version)
    try {
      await API.graphql({ query: DeleteProjectMutation, variables: {input:{id, _version} }})
      console.log("test")
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor="grey-100"
      borderRadius="lg"
      p={3}
      mt={2}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {name}
          </MDTypography>

          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton onClick={() => deleteProject(project)}variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
            <MDButton variant="text" color="dark">
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Name:&nbsp;&nbsp;&nbsp;
            <MDTypography variant="caption" fontWeight="medium">
              {name}
            </MDTypography>
          </MDTypography>
        </MDBox>
        <MDTypography variant="caption" color="text">
          description:&nbsp;&nbsp;&nbsp;
          <MDTypography variant="caption" fontWeight="medium">
            {description}
          </MDTypography>
        </MDTypography>
        <MDTypography variant="caption" color="text">
          id:&nbsp;&nbsp;&nbsp;
          <MDTypography variant="caption" fontWeight="medium">
            {id}
          </MDTypography>
        </MDTypography>
      </MDBox>
    </MDBox>
  )
}

Project.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project