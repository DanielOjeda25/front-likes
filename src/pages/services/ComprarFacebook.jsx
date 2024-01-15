import { useParams } from 'react-router-dom';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import FacebookComprar from '../../componentes/Facebook/FacebookComprar';

const ComprarFacebbok = () => {
  const { serviceId } = useParams();
  return (
    <div className='w-full '>
      <Navbar />
      <div className="flex flex-col items-center w-full  h-screen">
        <FacebookComprar service={serviceId} />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default ComprarFacebbok