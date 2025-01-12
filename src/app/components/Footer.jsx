import Link from 'next/link'

import { Home, Friends, Upload, Inbox, Profile } from './Svg'

export default function Footer () {
  return (
    <>
      <div className='sticky -bottom-4 left-0 bg-white w-full py-2 px-3 mt-1 text-xs'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <div className='flex flex-col items-center'>
              <Home />
              <span>Home</span>
            </div>
          </Link>
          <Link href='/friends'>
            <div className='flex flex-col items-center'>
              <Friends />
              <span>Friends</span>
            </div>
          </Link>
          <Link href='/upload'>
            <div className='flex flex-col items-center'>
              <div className='w-[fit-content] flex items-center justify-center my-0 mx-auto top-2/4 left-2/4'>
                <Upload />
              </div>
            </div>
          </Link>
          <Link href='/inbox'>
            <div className='flex flex-col items-center'>
              <Inbox />
              <span>Inbox</span>
            </div>
          </Link>
          <Link href='/profile[1]'>
            <div className='flex flex-col items-center'>
              <Profile />
              <span>Profile</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
