import { List } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { API } from 'aws-amplify';

import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from 'components/MDTypography';

import Project from "layouts/projects/components/Project"

import { listProjects } from 'graphql/queries';

import { deleteProject as DeleteProjectMutation} from "graphql/mutations"

const initialProjectState = { name: '', description: '' };

function ListProjectsComponent() {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    console.log("fetching projects")
    try {
      const projectData = await API.graphql({query: listProjects});
      setProjects(projectData.data.listProjects.items.filter(item => item._deleted !== true))
      console.log(projects)
    } catch (err) {
      console.log(err)
    }
  }



  return(
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Projects
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {
            projects.map((project, index) => (
              <Project
                key={project.id}
                id={project.id}
                _version={project._version}
                name={project.name}
                description={project.description}
              />
            ))
          }
        </MDBox>
      </MDBox>
    </Card>
  )
}

export default ListProjectsComponent;