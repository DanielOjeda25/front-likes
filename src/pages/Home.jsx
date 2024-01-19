import ComoComprar from '../componentes/ComoComprar/ComoComprar'
import Footer from '../componentes/Footer/Footer'
import Header from '../componentes/Header/Header'
import NavbarHome from '../componentes/Navbar/Navbar'
import NuestrosServicios from '../componentes/NuestrosServicios/NuestrosServicios'
import Referencias from '../componentes/Referentes/Referencias'

const Home = () => {
  return (
    <main className='w-full'>
      <NavbarHome />
      <div className="flex flex-col items-center w-full">
        <Header />
        <NuestrosServicios />
        <ComoComprar />
        <Referencias />
        <Footer />
      </div>
    </main>
  )
}

export default Home