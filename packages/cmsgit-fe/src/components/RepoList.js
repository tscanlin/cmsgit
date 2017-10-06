import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const RepoListQuery = gql`
  query GetRepositories {
    viewer {
      login
      email
      repositories(first: 100) {
        edges {
          node {
            id
            name
            nameWithOwner
            description
            url
            object(expression: "master:") {
              ... on Tree {
                id
                entries {
                  name
                  oid
                }
              }
            }
            defaultBranchRef {
              name
            }
          }
        }
      }
    }

  }
`

const RepoListWithData = graphql(RepoListQuery, {
  options: (props) => {
    console.log(props)
    return {
      variables: {
        id: 'tocbot',
        after: null,
      }
    }
  },
  props: ({ data, ownProps }) => {
    return {
      viewer: data.viewer
    }
  }
})

class RepoList extends React.Component {
  render () {
    console.log(this.props)
    return (
      <pre>
        {JSON.stringify(this.props.viewer, null, 2)}
      </pre>
    )
  }
}

export default RepoListWithData(RepoList)
