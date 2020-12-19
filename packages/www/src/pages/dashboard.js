import React, { useContext, useReducer, useRef } from 'react'
import { Link } from '@reach/router'
import { Heading, Button, Flex, NavLink, Container, Label, Input, Checkbox } from 'theme-ui'
import { IdentityContext } from '../../netlfyContext'






const todosReducer = (state, action) => {
    switch (action.type) {
        case "addTodo":
            return [{ done: false, value: action.payload }, ...state];
        case "toggleTodoDone":
            const newState = [...state];
            newState[action.payload] = {
                done: !state[action.payload].done,
                value: state[action.payload].value
            };
            return newState;
    }
};



function Dashboard() {
    const { user, identity: netlifyIdentity } = useContext(IdentityContext)
    const [todos, dispatch] = useReducer(todosReducer, []);
    const inputRef = useRef()

    console.log('this is user', user)

    return (
        <div>
            <Container>
                <Flex as='nav'>
                    <NavLink as={Link} to='/' href='#!' p={2}>
                        Home
                    </NavLink>
                    <NavLink as={Link} to='/app' p={2}>
                        DashBoard
                    </NavLink>
                    <NavLink sx={{ cursor: 'pointer' }} p={2} onClick={() => netlifyIdentity.open(false)}   >
                        logout
                    </NavLink>
                    {user && (<NavLink p={2}>

                        {user.user_metadata.full_name}
                    </NavLink>)}

                </Flex>
                <Flex as="form" onSubmit={e => {
                    e.preventDefault();
                    dispatch({ type: "addTodo", payload: inputRef.current.value });
                    inputRef.current.value = ""

                }}>
                    <Label sx={{ display: "flex" }}>
                        <span>Add : Todo</span>
                        <Input ref={inputRef} sx={{ marginLeft: 1 }} />
                    </Label>
                    <Button sx={{ marginLeft: 1 }}>submit</Button>
                </Flex>
                <Flex sx={{ flexDirection: 'column' }}>
                    <ul sx={{ listStyleType: "none" }}>
                        {todos.map((todo, i) => (
                            <Flex
                                as="li"
                                onClick={() => {
                                    dispatch({
                                        type: "toggleTodoDone",
                                        payload: i
                                    });
                                }}
                            >
                                <Checkbox checked={todo.done} />
                                <span>{todo.value}</span>
                            </Flex>
                        ))}
                    </ul>

                </Flex>


            </Container>
        </div>
    )
}



export default Dashboard
