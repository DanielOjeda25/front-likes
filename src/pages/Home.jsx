import Footer from '../componentes/Footer/Footer'
import Header from '../componentes/Header/Header'
import NavbarHome from '../componentes/Navbar/Navbar'
import ServicesGrid from '../componentes/Services/ServicesGrid'

const Home = () => {
  return (
    <main className='w-full'>
      <NavbarHome />
      <div className="flex flex-col items-center">
        <Header />
        <ServicesGrid />
        <Footer />
      </div>
    </main>
  )
}

export default Home