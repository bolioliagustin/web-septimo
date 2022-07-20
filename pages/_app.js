import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/carousel.css'
import '../styles/cards.css'
import '../styles/parallax.css'
import '../styles/footer.css'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Grupo Scout Séptimo</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
