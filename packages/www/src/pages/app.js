import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { Router } from '@reach/router'


let Dash = () => {
    const user = netlifyIdentity.currentUser()

    return (<div>{user && user.user_metadata.full_name}</div>)
}


function app() {
    return (
        <Router>
            <Dash path='/app' />
        </Router>
    )
}

export default app
