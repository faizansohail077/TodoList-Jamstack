const React = require('react')
const netlifyIdentity = require('netlify-identity-widget')


const IdentityContext = React.createContext({})
exports.IdentityContext = IdentityContext

const Identityprovider = props => {
    const [user, setUser] = React.useState('');
    React.useEffect(() => {
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
        <IdentityContext.Provider value={{ identity: netlifyIdentity, user }}>
            {props.children}
        </IdentityContext.Provider>
    )
}
exports.Provider = Identityprovider