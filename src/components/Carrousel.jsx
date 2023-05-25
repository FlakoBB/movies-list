import movies from '../models/movies.json'
import MovieCard from './MovieCard'
import styles from '../styles/carrousel.module.scss'

const Carrousel = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn_roll}>{'<'}</button>
      <section className={styles.carrousel}>
        {
          movies.map(movie => (
            <MovieCard key={movie.id} />
          ))
        }
      </section>
      <button className={styles.btn_roll}>{'>'}</button>
    </div>
  )
}
export default Carrousel
