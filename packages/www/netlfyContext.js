// const React = require('react')
// const useState = require('react')
// const  useEffect  = require('react')


// const netlifyIdentity = require('netlify-identity-widget')

// const IdentityContext = React.createContext({})

// exports.IdentityContext = IdentityContext

// const provider = props => {
//     const [user, setUser] = useState('');
//     useEffect(() => {
//         netlifyIdentity.init({})
//     });

//     netlifyIdentity.on('login', user1 => {
//         netlifyIdentity.close();
//         setUser(user1)
//     })

//     netlifyIdentity.on('logout', () => {
//         netlifyIdentity.close();
//         setUser()
//     })

//     return (
//         <IdentityContext.Provider value={{ identity: netlifyIdentity, user: undefined }}>
//             {props.children}
//         </IdentityContext.Provider>
//     )
// }
// exports.Provider = provider