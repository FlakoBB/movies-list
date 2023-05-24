export const metadata = {
  title: 'Movies List',
  openGraph: {
    title: 'Movies List',
    description: 'Aplicacion de servicio de streaming de peliculas usando la API de TMDB'
  }
}

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
