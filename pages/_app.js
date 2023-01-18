import 'bootswatch/dist/cosmo/bootstrap.min.css'
import Head from 'next/head'
import '../pages/global.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Estiven C | fullstack developer</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

