function makeAuthUrl (params) {
  return `https://github.com/login/oauth/authorize?scope=${params.scope}&client_id=${params.clientId}&redirect_uri=${params.redirectUri}&state=${params.randomString}`
}

export default function NoAuth (props) {
  const config = props.config
  const randomString = Math.random().toString(36)
  const authorizeUrl = makeAuthUrl({
    scope: config.scope,
    clientId: config.clientId,
    redirectUri: config.redirectUri,
    randomString: randomString
  })

  return (
    <div>
      <a href={authorizeUrl}>
        Click here to authorize
      </a>
    </div>
  )
}
