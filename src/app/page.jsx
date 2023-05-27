import Carrousel from '../components/Carrousel'
import utilStyles from '../styles/utils.module.css'

export const Home = () => {
  return (
    <main>
      <section>
        <h1 className={utilStyles.sectionTitle}>Top 10 Películas</h1>
        <Carrousel />
        {/* // ToDo: Editar Componente <Carrousel /> para que abarque toda laseccion incluyendo titulo */}
      </section>
      <section>
        <h1 className={utilStyles.sectionTitle}>Top 10 Series</h1>
        <Carrousel />
      </section>
    </main>
  )
}

export default Home
