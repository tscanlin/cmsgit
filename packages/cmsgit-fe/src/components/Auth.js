import { ApolloProvider } from 'react-apollo'
import getClient from '../data/apollo'
import RepoList from './RepoList'

export default function Auth (props) {
  const client = getClient(props.authData)
  return (
    <div>
      <ApolloProvider client={client}>
        <div>
          dgfs

          <RepoList a={1} />
        </div>
      </ApolloProvider>
    </div>
  )
}
