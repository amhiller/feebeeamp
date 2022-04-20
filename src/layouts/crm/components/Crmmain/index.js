//imports
import React from 'react';

//react-router
import { Link } from 'react-router-dom';

//@mui
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon"


function Crmmain() {
  return (
    <Card id="delete-account">
      <MDBox pt={4} px={4} py={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Clients
        </MDTypography>
        <MDButton pt={2} px={2} py={2} component={Link} to="/crm/add-client" variant="gradient" color="dark">
          <Icon xs={{fontWeight: "bold" }}>add</Icon>
          &nbsp;add new Client
        </MDButton>
      </MDBox>
    </Card>
  )
}

export default Crmmain