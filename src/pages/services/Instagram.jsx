import Navbar from '../../componentes/Navbar/Navbar'
import Footer from '../../componentes/Footer/Footer'
import HeaderInstagram from '../../componentes/Header/HeaderInstagram'
import InstagramComponent from '../../componentes/Instagram/InstagramComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchInstagramServices, selectInstagramServices } from './Hooks/serviciosInstagram'

const Instagram = () => {
  const dispatch = useDispatch();
  const instagramServices = useSelector(selectInstagramServices);

  useEffect(() => {
    // Realizar la solicitud al cargar el componente
    dispatch(fetchInstagramServices());
  }, [dispatch]);

  useEffect(() => {
    console.log(instagramServices);
  }, [instagramServices])
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