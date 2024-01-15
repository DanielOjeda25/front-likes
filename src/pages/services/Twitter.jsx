import Navbar from '../../componentes/Navbar/Navbar'
import HeaderTwitter from '../../componentes/Header/TwitterHeader'
import TwitterComponent from '../../componentes/Twitter/TwitterComponent'
import Footer from '../../componentes/Footer/Footer'
import { useDispatch } from 'react-redux'
import { fetchTwitterServices } from './Hooks/serviciosTwitter'
import { useEffect } from 'react'

const Twitter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTwitterServices());
  }, [dispatch]);

  return (
    <div className='w-full'>
      <Navbar />
      <div className="flex flex-col items-center">
        <HeaderTwitter />
        <TwitterComponent />
        <Footer />
      </div>
    </div>
  )
}

export default Twitter