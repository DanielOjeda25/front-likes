import Navbar from '../componentes/Navbar/Navbar'
import Footer from '../componentes/Footer/Footer'
import VerOrdenes from '../componentes/Pagos/VerOrdenes'

const Pagos = () => {
  return (
    <div className='w-full '>
      <Navbar />
      <div className="flex flex-col items-center w-full  h-screen">
        <VerOrdenes />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default Pagos