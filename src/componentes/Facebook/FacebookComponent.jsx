import { useSelector } from 'react-redux';
import FacebookServicesTable from './FacebookServicesTable'
import { selectFacebookServices } from '../../pages/services/Hooks/serviciosFacebook';

const FacebookComponent = () => {
  const facebookServices = useSelector(selectFacebookServices);

  return (
    <div className='' id='facebook'>
      <div className="mt-5">
        <FacebookServicesTable services={facebookServices} />
      </div>
    </div>
  )
}

export default FacebookComponent