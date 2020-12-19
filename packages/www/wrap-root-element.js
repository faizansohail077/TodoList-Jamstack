const React = require('react')
const { ThemeProvider } = require('theme-ui')
const { dark } = require('@theme-ui/presets')
const {Provider} = require('./netlfyContext')
const newTheme = {
    ...dark,
    sizes:{
        container:1024,
    }
}

module.exports =({ element }) => (
    <ThemeProvider theme={newTheme}>{element}</ThemeProvider>
)