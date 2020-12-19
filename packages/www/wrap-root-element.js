const React = require('react')
const { ThemeProvider } = require('theme-ui')
const { dark } = require('@theme-ui/presets')
const { Provider } = require('./netlfyContext')
const { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } = require('apollo-client')


const newTheme = {
    ...dark,
    sizes: {
        container: 1024,
    }
}
const client = new ApolloClient({
    cache: InMemoryCache(),
    link: new HttpLink({
        uri: 'https://todolist-jamstack-faizan.netlify.app/.netlify/functions/graphql'
    })
})

module.exports = ({ element }) => (
    <Provider>
        <ApolloProvider client={client}>
            <ThemeProvider theme={newTheme}>{element}</ThemeProvider>
        </ApolloProvider>
    </Provider>
)