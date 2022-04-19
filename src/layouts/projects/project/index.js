import React, { useEffect, useState } from 'react' 
import { useLocation } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const initialProjectState = { name: '', description: '' }
function Project (state){

  const location = useLocation();
  console.log(state)

  const [project, setProject] = useState(initialProjectState)
  const data = location.state;

  useEffect(() => {
    //fetchProject(id)
    console.log(data)
  }, [])

  return(
    <DashboardLayout>
      <DashboardNavbar />
      <h1>Project</h1>
      <h2>{data.name}</h2>
      <h2>{data.description}</h2>
    </DashboardLayout>
  )

}

export default Project