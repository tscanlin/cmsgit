import ApolloClient, { createNetworkInterface } from 'apollo-client'

export default function getClient (options) {
  const networkInterface = createNetworkInterface({uri: 'https://api.github.com/graphql'})

  networkInterface.use([{
    applyMiddleware (req, next) {
      if (!req.options.headers) {
        req.options.headers = {}  // Create the header object if needed.
      }

      // Send the login token in the Authorization header
      req.options.headers.authorization = `Bearer ${options.accessToken}`
      next()
    }
  }])

  const client = new ApolloClient({
    networkInterface
  })

  return client
}
