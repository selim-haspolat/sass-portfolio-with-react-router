import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-bgImg-container">
        {/* HOME MAIN */}
        <main className="home">
          <h2>Hi! My Name Is</h2>
          <h1 className="home__name">
            Wednesday <span className="home__name--last">Addams</span>
          </h1>
          <h2>Full Stack Web Developer</h2>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Home