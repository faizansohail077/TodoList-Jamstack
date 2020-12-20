import React, { useContext} from 'react'
import {  Link, Router } from '@reach/router'
import { Button} from 'theme-ui'

import { IdentityContext } from '../../netlfyContext'
import Dashboard from '../component/dashboard'



let DashloggedOut = props => {
    const { identity: netlifyIdentity } = useContext(IdentityContext)

    return (
        <div>
            <h1>Currently you are logout </h1>
            <Button sx={{ marginTop: 2, width: '100%' }} onClick={() => netlifyIdentity.open()}>Login</Button>
            <Button sx={{ marginTop: 2, width: '100%' }} as={Link} to='/'>Home</Button>


        </div>
    )
}


function App() {
    const { user } = useContext(IdentityContext)
    if (!user) {
        console.log('why no user')
        return (
            <Router>
                <DashloggedOut path='/app' />
            </Router>
        )
    }

    return (
        <Router>
            <Dashboard  path="/app" />
        </Router>

    )

}

export default App
