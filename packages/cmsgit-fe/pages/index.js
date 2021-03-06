import Head from 'next/head'

import Auth from '../src/components/Auth'
import NoAuth from '../src/components/NoAuth'
// function makeRequest(e) {
//   e.preventDefault()
//   console.log(e)
//   return fetch(, {}).then((data) => {
//     console.log(data)
//   })
// }

import config from '../config'

import getAuthData from '../src/utils/auth'

export default function Index (props) {
  const authData = getAuthData()
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
          Cmsgit
        </h1>

        {!authData.accessToken ? (
          <NoAuth config={config} />
        ) : (
          <Auth
            config={config}
            authData={authData}
          />
        )}
      </main>
    </div>
  )
}
