import React from "react";
import { withAuthenticator } from '@aws-amplify/ui-react'
import '../App.css';

function Signout({ signOut }) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Sign Out!</h1>
                <button onClick={signOut}>Sign Out</button>
            </header>
        </div>
    )

}

export default withAuthenticator(Signout);