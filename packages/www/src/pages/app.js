import React, { useContext } from 'react'
import { Link, Router } from '@reach/router'
import { Heading, Button, Flex, NavLink, Container } from 'theme-ui'

import { IdentityContext } from '../../netlfyContext'


let Dash = () => {
    const { user, identity: netlifyIdentity } = useContext(IdentityContext)
    console.log('this is user', user)

    return (
        <Container>
            <Flex as='nav'>
                <NavLink as={Link} to='/' href='#!' p={2}>
                    Home
                    </NavLink>
                <NavLink as={Link} to='/app' p={2}>
                    DashBoard
                 </NavLink>

                

                {user && (<NavLink p={2}>

                    {user.user_metadata.full_name}
                </NavLink>)}
            <Button sx={{marginLeft:'700px', marginTop: 2, width: '20', }} onClick={() => netlifyIdentity.open(false)}>Logout {user && user.user_metadata.full_name}</Button>
            </Flex>
            <Heading sx={{ marginTop: 5 }}>Login from DashBoard</Heading>


        </Container>
    )
}

let DashloggedOut = props => {
    const { identity: netlifyIdentity } = useContext(IdentityContext)

    return (
        <div>
            <h1>Currently you are logout </h1>
            <Button sx={{ marginTop: 2, width: '100%' }} onClick={() => netlifyIdentity.open()}>Login</Button>

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
            <Dash path="/app" />
        </Router>

    )

}

export default App
