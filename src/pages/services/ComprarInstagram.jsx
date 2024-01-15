import { useParams } from 'react-router-dom';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import InstagramComprar from '../../componentes/Instagram/InstagramComprar';

const ComprarInstagram = () => {
  const { serviceId } = useParams();
  return (
    <div className='w-full '>
      <Navbar />
      <div className="flex flex-col items-center w-full  h-screen">
        <InstagramComprar service={serviceId} />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default ComprarInstagram