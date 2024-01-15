import { useParams } from 'react-router-dom';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import TwitterComprar from '../../componentes/Twitter/TwitterComprar';

const ComprarTwitter = () => {
  const { serviceId } = useParams();
  return (
    <div className='w-full '>
      <Navbar />
      <div className="flex flex-col items-center w-full  h-screen">
        <TwitterComprar service={serviceId} />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default ComprarTwitter