import { facebook } from '../Svgs/facebook'
import { face, faceFollow, facePageFollow } from './FaceSVG'
import FacebookButtons from './FacebookButtons'

const FacebookComponent = () => {
  return (
    <div className='' id='instagram'>
      <div className='p-1 justify-center flex mt-5'>
        {facebook}
      </div>
      <div className='flex justify-center items-center flex-col'>
        <FacebookButtons text={'Followers'} svg={faceFollow} />
        <FacebookButtons text={'Likes'} svg={face} />
        <FacebookButtons text={'Pages Likes'} svg={facePageFollow} />
      </div>
    </div>
  )
}

export default FacebookComponent