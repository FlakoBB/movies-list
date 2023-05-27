'use client'
import { useRef } from 'react'
import movies from '../models/movies.json'
import MovieCard from './MovieCard'
import styles from '../styles/carrousel.module.scss'

const Carrousel = () => {
  const carrouselWrap = useRef(null)

  const scrollPrev = () => {
    console.log(carrouselWrap.current)
    carrouselWrap.current.scrollLeft -= 450
  }

  const scrollNext = () => {
    carrouselWrap.current.scrollLeft += 450
  }

  // ToDo: Editar funciones de Scroll para que cuando llegue al final se regrese al inicio

  return (
    <div className={styles.container}>
      <button onClick={scrollPrev} className={styles.btn_roll}>{'<'}</button>
      <section ref={carrouselWrap} className={styles.carrousel}>
        {
          movies.map(movie => (
            <MovieCard key={movie.id} />
          ))
        }
      </section>
      <button onClick={scrollNext} className={styles.btn_roll}>{'>'}</button>
    </div>
  )
}
export default Carrousel
