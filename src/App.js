import React, { useEffect, useState } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import awsExports from './aws-exports'
import { listNotes } from './graphql/queries';
import { createNote as CreateNoteMutation, deleteNote as DeleteNoteMutation } from './graphql/mutations';
console.log(awsExports)
Amplify.configure(awsExports);

const initialFormState = { name: '', description: '' }

function App( { signOut, user }) {

  const [ notes, setNotes ] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({query: listNotes});
    setNotes(apiData.data.listNotes.items)
  }

  async function createNote() {
    if(!formData.name || !formData.description) return;
    await API.graphql({ query: CreateNoteMutation, variables: {input: formData } });
    setNotes([ ...notes, formData]);
    setFormData(initialFormState);
  }

  async function deleteNote( { id } ) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: DeleteNoteMutation, variables: { input: { id } }})
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>My notes app</h1>
        <input 
          onChange={e => setFormData({...formData, 'name': e.target.value})}
          placeholder="Note Name"
          value={formData.name}
        />
        <input 
          onChange={e => setFormData({...formData, 'description': e.target.value})}
          placeholder="Note Description"
          value={formData.description}
        />
        <button onClick={createNote}> CreateNote </button>
        <div style={{marginBottom: 30}}>
          {
            notes.map(note => (
              <div key={note.id || note.name}>
                <h2>{note.name}</h2>
                <p>{note.description}</p>
                <button onClick={() => deleteNote(note)}>Delete Note</button>
              </div>
            ))
          }
        </div>
        <button onClick={signOut}>Sign Out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
