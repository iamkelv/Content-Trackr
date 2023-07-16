import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Amplify } from 'aws-amplify'
// import config from '../src/aws-exports'
// import confi from ''
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Layout from '@/components/layout/Layout'

// Amplify.configure(config)

export default function App({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AmplifyProvider>
  )
}
