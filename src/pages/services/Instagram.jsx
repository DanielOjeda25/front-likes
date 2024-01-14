import Navbar from '../../componentes/Navbar/Navbar'
import Footer from '../../componentes/Footer/Footer'
import HeaderInstagram from '../../componentes/Header/HeaderInstagram'
import InstagramComponent from '../../componentes/Instagram/InstagramComponent'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchInstagramServices } from './Hooks/serviciosInstagram'

const Instagram = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Realizar la solicitud al cargar el componente
    dispatch(fetchInstagramServices());
  }, [dispatch]);

  return (
    <div className='w-full '>
      <Navbar />
      <div className="flex flex-col items-center w-full overflow-x-auto ">
        <HeaderInstagram />
        <InstagramComponent />
        <Footer />
      </div>
    </div>
  )
}

export default Instagram