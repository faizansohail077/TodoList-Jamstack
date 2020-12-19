import React, { useContext } from 'react'
import { Container, Heading, Button, Flex, NavLink } from 'theme-ui'

import { Link } from 'gatsby'
import { IdentityContext } from '../../netlfyContext'

function Index() {
    const { user, identity: netlifyIdentity } = useContext(IdentityContext)
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
            </Flex>

            <Flex sx={{ flexDirection: 'column', padding: 3 }}>
                <Heading sx={{ marginTop: 5 }}>Todo List Jamstack by faizan</Heading>
                <Button sx={{ marginTop: 2 }} onClick={() => netlifyIdentity.open()}>Login</Button>

            </Flex>
        </Container>
    )
}

export default Index
