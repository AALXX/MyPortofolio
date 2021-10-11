import '../styles/globals.css'
import Layout from '../Layout/Layout'

function Portofolio({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Portofolio
