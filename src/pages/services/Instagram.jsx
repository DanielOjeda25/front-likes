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
    dispatch(fetchInstagramServices());
  }, [dispatch]);

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Navbar />
      <div className="flex flex-col items-center flex-grow">
        <HeaderInstagram />
        <InstagramComponent />
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default Instagram