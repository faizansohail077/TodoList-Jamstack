import React, { useEffect } from 'react'
import { Container, Heading, Button, Flex } from 'theme-ui'
import netlifyIdentity from 'netlify-identity-widget'

function Index() {
    useEffect(()=>{
        netlifyIdentity.init({})
    })
    return (
        <Container>
            <Flex sx={{ flexDirection: 'column', padding: 3 }}>
                <Heading sx={{marginTop:5}}>Todo List Jamstack by faizan</Heading>
                <Button sx={{marginTop:2}} onClick={()=>netlifyIdentity.open()}>Login</Button>
            </Flex>
        </Container>
    )
}

export default Index
