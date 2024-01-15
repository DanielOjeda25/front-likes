import { useSelector } from 'react-redux';
import TwitterServicesTable from './TwitterServicesTable'
import { selectTwitterServices } from '../../pages/services/Hooks/serviciosTwitter';

const TwitterComponent = () => {
  const twitterServices = useSelector(selectTwitterServices);
  return (
    <div className='' id='twitter'>
      <div className="mt-5">
        <TwitterServicesTable services={twitterServices} />
      </div>
    </div>
  )
}

export default TwitterComponent