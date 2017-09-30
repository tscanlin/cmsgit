import Head from 'next/head'

console.log(Head)

const clientId = '4ea695b1a963ea3efab2'
const scope = 'user:email,public_repo,repo'

export default function Index(props) {
    return (
        <div>
            <Head>
                <title>Cmsgit</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://unpkg.com/tachyons@4.8.0/css/tachyons.min.css"/>
            </Head>
            <main className="sans-serif ma4">
                <h1>
                    Test!
                </h1>
                <a href={`https://github.com/login/oauth/authorize?scope=${scope}&client_id=${clientId}`}>
                    Click here
                </a>
                
            </main>
        </div>
    )
}