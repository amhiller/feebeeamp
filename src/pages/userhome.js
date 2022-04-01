import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '../App.css'

import awsExports from '../aws-exports';

Amplify.configure(awsExports);

function userHome({ signOut, user }) {
    return (
        <>
          <div className='App'>
            <header className="App-header">
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
            </header>
          </div>

        </>
    )
}

export default withAuthenticator(userHome);