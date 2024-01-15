import { useSelector } from 'react-redux';
import { selectInstagramServices } from '../../pages/services/Hooks/serviciosInstagram';
import InstagramServicesTable from './InstagramServicesTable';

const InstagramComponent = () => {
  const instagramServices = useSelector(selectInstagramServices);

  return (
    <div className='' id='instagram'>
      <div className="mt-5">
        {/* <InstagramServicesTable services={instagramServices} /> */}
      </div>
    </div>
  )
}

export default InstagramComponent


