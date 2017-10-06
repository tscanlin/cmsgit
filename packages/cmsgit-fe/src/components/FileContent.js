import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const FileContentQuery = gql`
  query GetRepositories {
    repository(name: "tocbot", owner: "tscanlin") {
      object(expression: "master:README.md") {
        ... on Blob {
          text
          byteSize
          commitUrl
        }
      }
    }
  }
`

const FileContentWithData = graphql(FileContentQuery, {
  // options: ({id, navigation}) => {
  //   return {
  //     variables: {
  //       id: 'tocbot',
  //       after: null,
  //     }
  //   }
  // },
  props: ({ data, ownProps }) => {
    return {
      viewer: data.viewer
    }
  }
})

class FileContent extends React.Component {
  render () {
    console.log(this.props)
    return (
      <pre>
        {JSON.stringify(this.props.viewer, null, 2)}
      </pre>
    )
  }
}

export default FileContentWithData(FileContent)
