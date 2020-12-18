const React = require('react')
const { ThemeProvider } = require('theme-ui')
const { dark } = require('@theme-ui/presets')


module.exports =({ element }) => (
    <ThemeProvider theme={dark}>{element}</ThemeProvider>
)