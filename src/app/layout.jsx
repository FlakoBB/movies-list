import Header from '../components/Header'
import '../styles/globals.css'
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Movies List',
  openGraph: {
    title: 'Movies List',
    description: 'Aplicacion de servicio de streaming de peliculas usando la API de TMDB'
  }
}

export const RootLayout = ({ children }) => {
  return (
    <html lang='en' className={jost.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
