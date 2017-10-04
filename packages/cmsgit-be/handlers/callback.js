const fetch = require('node-fetch')
const config = require('../config.js')

const githubAccessTokenUrl = 'https://github.com/login/oauth/access_token'
const redirectUri = 'https://api.cmsgit.com/v1-dev/callback'
const returnUri = 'http://www.cmsgit.com:3000'
const domain = '.cmsgit.com'

function requestGithubToken (options) {
  const data = {
    'client_id': options.clientId,
    'client_secret': options.clientSecret,
    'code': options.code,
    'redirect_uri': options.redirectUri,
    'state': options.state
  }

  return fetch(githubAccessTokenUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then((response) => {
    return response.json()
  })
  // .then((data) => {
  //   // let params = new URLSearchParams(paramsString)
  //   // console.log('access_token', params.get('access_token'))
  //   // return {
  //   //   accessToken: params.get('access_token')
  //   // }
  // })
}

exports.default = (event, context, callback) => {
  const params = event.queryStringParameters || {}

  requestGithubToken({
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    redirectUri,
    code: params.code,
    state: params.state
  }).then(data => {
    console.log(data)
    // const response = {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     message: 'Go Serverless v1.0! Your function executed successfully!',
    //     data: data,
    //     input: event
    //   })
    // }
    // callback(null, response)

    const response = {
      statusCode: 302,
      headers: {
        'Location': returnUri,
        'Set-Cookie': `githubAuth=${JSON.stringify({ accessToken: data.access_token, scope: data.scope })}; Domain=${domain}; Path=/;`
      }
      // body: JSON.stringify({ data })
    }
    callback(null, response)
  }).catch(e => {
    console.log(e)
  })
}
