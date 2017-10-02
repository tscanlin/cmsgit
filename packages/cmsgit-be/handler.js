const fetch = require('node-fetch')

const githubAccessTokenUrl = 'https://github.com/login/oauth/access_token'

exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }

  callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event })
}

exports.callback = (event, context, callback) => {
  fetch(githubAccessTokenUrl, {
    method: 'POST',
    body: JSON.stringify({
      // Required. The client ID you received from GitHub for your GitHub App.
      client_id: '', // string
      // Required. The client secret you received from GitHub for your GitHub App.
      client_secret: '', // string
      // Required. The code you received as a response to Step 1.
      code: '', // string
      redirect_uri: '', // string The URL in your application where users are sent after authorization.
      state: ''
    })
  })
}
