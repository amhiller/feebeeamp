import React, { useEffect, useState } from 'react'
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import awsExports from './aws-exports'

import Home from './pages/home'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Signout from './pages/signout'
import Navigation from './components-old/navigation';
import Userhome from './pages/userhome'
import Projects from './pages/projects'
import Project from './pages/project'
import Userhomev1 from './pages/userhomev1'
import Userhomev2 from './pages/userhomev2'

import Sidebar from './components-old/navigation/usersidenav'

console.log(awsExports)
Amplify.configure(awsExports);

//const initialFormState = { name: '', description: '' }

function App( { signOut, user }) {

  //const [ notes, setNotes ] = useState([]);
  //const [formData, setFormData] = useState(initialFormState);

  //useEffect(() => {
  //  fetchNotes();
  //}, []);


  return (
    <BrowserRouter>
    <Navigation/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/> } />
        <Route path="/signin" element={<Signin/> } />
        <Route path="/userhome" element={<Userhome/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/signout" element={<Signout/>} />
        <Route path="/projects/:projectId" element={<Project/>} />
        <Route path="/userhomev1" element={<Userhomev1/>} />
        <Route path="/userhomev2" element={<Userhomev2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default (App);
