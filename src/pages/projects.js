import React, { useEffect, useState } from 'react'
import '../App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import awsExports from '../aws-exports'
import { listProjects } from '../graphql/queries';
import { createProject as CreateProjectMutation, deleteProject as DeleteProjectMutation } from '../graphql/mutations';
console.log(awsExports)
Amplify.configure(awsExports);


const initialFormState = { name: '', description: ''}

function Projects ({signOut, user}) {

    const [ projects, setProjects] = useState([]);
    const [ formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchProjects();
      }, []);
    
      async function fetchProjects() {
        const apiData = await API.graphql({query: listProjects});
        setProjects(apiData.data.listProjects.items.filter(item => item._deleted !== true))
      }
    

      async function createProject() {
        try {
            if(!formData.name || !formData.description) return;
            console.log(formData)
            await API.graphql({ query: CreateProjectMutation, variables: {input: formData } });
            setProjects([ ...projects, formData]);
            setFormData(initialFormState);
        } catch(err) {
            console.log(err)
        }

      }
    
      async function deleteProject( { id, _version } ) {
          console.log(id)
          console.log(_version)
          try {
            const newProjectsArray = projects.filter(project => project.id !== id);
            setProjects(newProjectsArray);
            await API.graphql({ query: DeleteProjectMutation, variables: { input: { id, _version } }})
          } catch (err) {
              console.log(err)
          }
        
      } 
    
      return (
        <div className="App">
          <header className="App-header">
            <h1>Projects</h1>
            <input 
              onChange={e => setFormData({...formData, 'name': e.target.value})}
              placeholder="Project Name"
              value={formData.name}
            />
            <input 
              onChange={e => setFormData({...formData, 'description': e.target.value})}
              placeholder="Project Description"
              value={formData.description}
            />
            <button onClick={createProject}> CreateProject </button>
            <div style={{marginBottom: 30}}>
              {
                projects.map((project, index) => (
                  <div key={project.id || project.name}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <button onClick={() => deleteProject(project)}>Delete Project</button>
                  </div>
                ))
              }
            </div>
          </header>
        </div>
      );
    }
    
    export default withAuthenticator(Projects);
