import '../styles/globals.css'
import Layout from '../Layout/Layout'
import { AnimatePresence } from 'framer-motion'

function Portofolio({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Portofolio