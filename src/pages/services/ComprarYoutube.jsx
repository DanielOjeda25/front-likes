import { useParams } from 'react-router-dom';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import YoutubeComprar from '../../componentes/Youtube/YoutubeComprar';

const ComprarYoutube = () => {
  const { serviceId } = useParams();
  return (
    <div className='w-full '>
      <Navbar />
      <div className="flex flex-col items-center w-full  h-screen">
        <YoutubeComprar service={serviceId} />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default ComprarYoutube