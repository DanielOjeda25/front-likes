import Navbar from '../../componentes/Navbar/Navbar'
import Footer from '../../componentes/Footer/Footer'
import HeaderInstagram from '../../componentes/Header/HeaderInstagram'
import InstagramComponent from '../../componentes/Instagram/InstagramComponent'

const Instagram = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="flex flex-col items-center">
        <HeaderInstagram />
        <InstagramComponent />
        <Footer />
      </div>
    </div>
  )
}

export default Instagram