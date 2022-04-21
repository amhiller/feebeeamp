// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Client = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Role = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "client", accessor: "client", width: "45%", align: "left" },
      { Header: "type", accessor: "type", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "phone", accessor: "phone", align: "center" },
      { Header: "address", accessor: "address", align: "center" },
    ],

    rows: [
      {
        client: <Client image={team2} name="John Michael" email="john@gmail.com" />,
        type: <Role title="client" description="home-owner" />,
        status: "Past Client",
        phone: "123-454-6789",
        address: "123 Feebee ln",
      },
      {
        client: <Client image={team3} name="Alexa Liras" email="alexa@gmail.com" />,
        type: <Role title="sub" description="plumber" />,
        status: "working on project X",
        phone: "123-546-7890",
        address: "124 FeeBee ln"
      },
    ],
  };
}
