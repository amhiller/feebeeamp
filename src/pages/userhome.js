import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '../App.css'

import awsExports from '../aws-exports';
import { Form } from 'react-bootstrap';

import UserProfile from '../components/forms/Userprofile'

Amplify.configure(awsExports);

function userHome({ user }) {
    return (
        <>
          <div className='App'>
            <header className="App-header">
                <h1>Hello {user.username}</h1>
                <br/>
                <UserProfile user={user}/>
            </header>
          </div>
        </>
    )
}

export default withAuthenticator(userHome);