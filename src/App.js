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
import Navigation from './components/navigation';
import Userhome from './pages/userhome'
import Projects from './pages/projects'

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
        <Route path="signup" element={<Signup/> } />
        <Route path="signin" element={<Signin/> } />
        <Route path="userhome" element={<Userhome/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="signout" element={<Signout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default (App);
