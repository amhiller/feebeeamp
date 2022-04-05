import React from 'react';
import '../App.css'
import { withAuthenticator } from '@aws-amplify/ui-react';

function Project () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TESTING</h1>
      </header>
    </div>
  )

}

export default withAuthenticator(Project);