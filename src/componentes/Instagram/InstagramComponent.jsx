import { instagram } from '../Svgs/Instagram'
import { insta, instaLikes } from './InstaSVG'
import InstagramButtons from './InstagramButtons'

const InstagramComponent = () => {
  return (
    <div className='' id='instagram'>
      <div className='p-1 justify-center flex mt-5'>
        {instagram}
      </div>
      <div className='flex justify-center items-center flex-col'>
        <InstagramButtons text={'Followers'} svg={insta} />
        <InstagramButtons text={'Likes'} svg={instaLikes} />
      </div>
    </div>
  )
}

export default InstagramComponent