import { useSelector } from 'react-redux';
import { selectYouTubeServices } from '../../pages/services/Hooks/serviciosYoutube';
import YoutubeServicesTable from './YoutubeServicesTable';

const YoutubeComponent = () => {
  const youtubeServices = useSelector(selectYouTubeServices);

  return (
    <div className='' id='youtube'>
      <div className="mt-5">
        <YoutubeServicesTable services={youtubeServices} />
      </div>
    </div>
  )
}

export default YoutubeComponent