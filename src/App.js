import React from 'react'
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports'
Amplify.configure(awsExports);

function App( { signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{user.username}</h1>
        <button onClick={signOut}>Sign Out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
