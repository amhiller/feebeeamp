// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

//react
import React, { useEffect, useState } from 'react';

//aws
import { API } from "aws-amplify";


//graphql
import { listClients } from "graphql/queries";

const initialProjectState = { firstName: '', lastName: '', phoneNumber: '', email: '', address: ''}

function Crm() {

  const [ clients, setClients ] = useState([]);

  //why is this being dumb
  //useEffect(() => {
  //  fetchClients();
  //}, []);

  async function fetchClients() {
    console.log("Fetching Clients")
    try {
      const clientData = await API.graphql({query: listClients});
      console.log(clientData.data.listClients.items);
      setClients(clientData.data.listClients.items.filter(item => item._deleted !== true));
      //const client1 = clientData.data.listClients.items
      //console.log(client1)
      //console.log("clients: ",clients);
      console.log("test: ", clients)
    } catch(err) {
      console.log(err)
    }
  }



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
      { Header: "firstName", accessor: "firstName", width: "45%", align: "left" },
      { Header: "lastName", accessor: "lastName", align: "left" },
      { Header: "email", accessor: "email", align: "center" },
      { Header: "phoneNumber", accessor: "phoneNumber", align: "center" },
      { Header: "address", accessor: "address", align: "center" },
    ],
    
    rows: [
      {
        firstName: "Austin" ,
        lastName: "Hiller",
        email: "amhiller96@gmail.com",
        phone: "123-454-6789",
        address: "123 Feebee ln",
      },
      {
        firstName: "Bob",
        lastName: "Henry",
        email: "test@gmail.com",
        phone: "123-546-7890",
        address: "124 FeeBee ln"
      },
    ],
  };
}

export default Crm