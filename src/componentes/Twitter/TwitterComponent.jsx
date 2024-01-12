import { twitter } from '../Svgs/Twitter'
import TwitterButtons from './TwitterButtons'
import { face, faceFollow, share } from './TwitterSVG'

const TwitterComponent = () => {
  return (
    <div className='' id='twitter'>
      <div className='p-1 justify-center flex mt-5'>
        {twitter}
      </div>
      <div className='flex justify-center items-center flex-col'>
        <TwitterButtons text={'Followers'} svg={faceFollow} />
        <TwitterButtons text={'Re-tweets'} svg={share} />
        <TwitterButtons text={'Likes'} svg={face} />
      </div>
    </div>
  )
}

export default TwitterComponent