import FacebookComponent from '../../componentes/Facebook/FacebookComponent'
import Footer from '../../componentes/Footer/Footer'
import HeaderFacebook from '../../componentes/Header/HeaderFacebook'
import Navbar from '../../componentes/Navbar/Navbar'

const Facebook = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className="flex flex-col items-center">
        <HeaderFacebook />
        <FacebookComponent />
        <Footer />
      </div>
    </div>
  )
}

export default Facebook