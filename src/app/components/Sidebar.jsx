import { Heart, Comment, Share } from './Svg'

export default function VideoPlayerActions () {
  return (
    <>
      <aside className='absolute top-1/2 right-0 text-white'>
        <div className='text-white flex flex-col justify-center items-center'>
          <Heart />
        </div>
        <div className='text-white flex flex-col justify-center items-center'>
          <Comment />
        </div>
        <div className='text-white flex flex-col justify-center items-center'>
          <Share />
        </div>
      </aside>
    </>
  )
}
