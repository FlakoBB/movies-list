import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import utilStyles from '../styles/utils.module.css'

const ROUTES = [
  {
    title: 'Inicio',
    route: '/'
  },
  {
    title: 'Películas',
    route: '/peliculas'
  },
  {
    title: 'Series',
    route: '/series'
  }
]

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image className={styles.logo} width='100' height='100' src='/logoV2.png' alt='Logo de la aplicacion "Movie List"' />
      <div className={styles.main}>
        <h1 className={utilStyles.mainTitle}>Movie List</h1>
        <nav className={styles.navigation}>
          {
            ROUTES.map((route, index) => (
              <Link key={index} href={route.route}>{route.title}</Link>
            ))
          }
        </nav>
      </div>
      <div className={styles.search}>
        <input type='text' placeholder='Buscar' />
      </div>
    </header>
  )
}

export default Header
