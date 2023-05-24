import movies from '../models/movies.json'

export const Home = () => {
  return (
    <main>
      <h1>Hola Mundo</h1>
      {
        movies.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))
      }
    </main>
  )
}

export default Home
