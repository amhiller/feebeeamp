import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import AddClientForm from './components/addClientForm';
import React from 'react';

function AddClient() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AddClientForm />
    </DashboardLayout>
  )
}

export default AddClient