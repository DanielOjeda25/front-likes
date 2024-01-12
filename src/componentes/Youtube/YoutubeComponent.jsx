import { youtube } from '../Svgs/Youtube'
import YoutubeButtons from './YoutubeButtons'
import { face, faceFollow, view } from './YoutubeSVG'

const YoutubeComponent = () => {
  return (
    <div className='' id='youtube'>
      <div className='p-1 justify-center flex mt-5'>
        {youtube}
      </div>
      <div className='flex justify-center items-center flex-col'>
        <YoutubeButtons text={'Subscribers'} svg={faceFollow} />
        <YoutubeButtons text={'Views'} svg={view} />
        <YoutubeButtons text={'Likes'} svg={face} />
      </div>
    </div>
  )
}

export default YoutubeComponent