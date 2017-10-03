import Head from 'next/head'

// function makeRequest(e) {
//   e.preventDefault()
//   console.log(e)
//   return fetch(, {}).then((data) => {
//     console.log(data)
//   })
// }

export default function Index (props) {
  console.log(props)
  const clientId = '4ea695b1a963ea3efab2'
  const scope = 'user:email,public_repo,repo'
  const redirectUri = 'https://api.cmsgit.com/v1-dev/callback'
  const randomString = Math.random().toString(36)
  const url = `https://github.com/login/oauth/authorize?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${randomString}`

  return (
    <div>
      <Head>
        <title>Cmsgit</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css' />
      </Head>
      <main className='sans-serif ma4'>
        <h1>
          Test!
        </h1>
        <a href={url}>
          Click here
        </a>
      </main>
    </div>
  )
}
