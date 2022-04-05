import React, { useEffect, useState } from 'react';
import '../App.css'
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify, { API } from 'aws-amplify';
import awsExports from '../aws-exports';
import { useLocation } from 'react-router-dom';

import { getProject } from '../graphql/queries'

import Card from 'react-bootstrap/Card'

Amplify.configure(awsExports);

const initialFormState = { name: '', descritpion: '' }

function Project (state) {

  const location = useLocation();
  const data = location.state;


  const [project, setProject] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    var id = data.id
    fetchProject(id)
  })

  //var test = "23813ef0-dd01-40a2-af15-5999374b3cdb"
  async function fetchProject(id) {
    console.log(id)
    try {
      const Project = await API.graphql({ query: getProject, variables: { id: data.id} })
      console.log(Project.data.getProject)
      setProject(Project.data.getProject)
      console.log(Project)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project</h1>
        <h2>{project.name}</h2>
        <h2>{project.description}</h2>
      </header>
    </div>
  )

}

export default withAuthenticator(Project);