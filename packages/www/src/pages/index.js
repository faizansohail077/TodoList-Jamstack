import React, { useEffect, useState } from 'react'
import { Container, Heading, Button, Flex, NavLink } from 'theme-ui'
import netlifyIdentity from 'netlify-identity-widget'
import { Link } from 'gatsby'

function Index() {
    const [user, setUser] = useState('');
    useEffect(() => {
        netlifyIdentity.init({})
    });

    netlifyIdentity.on('login', user1 => {
        netlifyIdentity.close();
        setUser(user1)
    })

    netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        setUser()
    })

    return (
        <Container>
            <Flex as='nav'>
                <NavLink as={Link} to='/' href='#!' p={2}>
                    Home
                  </NavLink>
                <NavLink as={Link} to='/app' p={2}>
                    DashBoard
                </NavLink>

                {user && (<NavLink sx={{ marginLeft: '500px' }} p={2}>
                    {<h1>Username</h1>}
                    {<h2>{user.user_metadata.full_name}</h2>}
                </NavLink>)}
            </Flex>

            <Flex sx={{ flexDirection: 'column', padding: 3 }}>
                <Heading sx={{ marginTop: 5 }}>Todo List Jamstack by faizan</Heading>
                <Button sx={{ marginTop: 2 }} onClick={() => netlifyIdentity.open()}>Login</Button>
                <Button sx={{ marginTop: 2 }} onClick={() => netlifyIdentity.currentUser()}>user</Button>

            </Flex>
        </Container>
    )
}

export default Index
