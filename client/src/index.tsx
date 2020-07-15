import * as React from 'react'
import * as ReactDOM from 'react-dom'
// Apollo
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
// Components
import { App } from './app'

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql'
})


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.querySelector('#root')
)