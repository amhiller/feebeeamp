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

function ProfileInformaton() {
  return (
    <Card >
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Profile Information
        </MDTypography>
        <MDTypography component={Link} to="/" variant="body2" color="secondary">
          <Tooltip title="Edit Profile" placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          test
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ProfileInformaton;
