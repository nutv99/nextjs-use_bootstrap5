import '../styles/applications.scss'
import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

// https://www.npmjs.com/package/@madzadev/image-slider