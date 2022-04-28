import React, { useEffect, useState } from 'react' 
import { useLocation } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Add from '@mui/icons-material/Add'

import { useParams } from 'react-router-dom';

import { getProject } from 'graphql/queries';
import { API } from 'aws-amplify';


function Project (){
  let params = useParams();


  const [project, setProject] = useState([])


  useEffect(() => {
    fetchProject()
  }, [])

  async function fetchProject() {
    console.log("Fetching Project")
    try {
      const projectDatav1 = await API.graphql({query: getProject, variables: {id: params.projectId}})
      setProject(projectDatav1.data.getProject)
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  return(
    <DashboardLayout>
      <DashboardNavbar />

      <Box sx={{
        fontSize: 24,
        color: '#393939',
        fontWeight: 'medium'
      }}>
        Project
      </Box>
      <Box sx={{
        bgcolor: '#ffffff',
        height: 500,
        m: 3
      }}>
        <Box sx={{
          color: '#393939',
          fontWeight: 'medium',
          m: 3,
          p: 2,
        }}>
          Project: {project.name}
        </Box>
        <Box sx={{
          color: '#393939',
          m: 3,
          p: 2
        }}>
          Description: {project.description}
        </Box>
        <Box>
          <Button variant="contained" startIcon={<Add />} sx={{
            color: '#ffffff',
            bgcolor: '#1EC1CB',
            borderColor: '#1EC1CB',
            m: 2
          }}>
            Create New Task
          </Button>
        </Box>
      </Box>

    </DashboardLayout>
  )

}

export default Project