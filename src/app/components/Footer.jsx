import Link from 'next/link'

import { Home, Friends, Upload, Inbox, Profile } from './Icons'

export default function Footer () {
  return (
    <>
      <div class='sticky bottom-0 left-0 bg-white w-full py-2 px-3 mt-1 text-xs'>
        <div class='flex justify-between items-center'>
          <Link href='/'>
            <div class='flex flex-col items-center'>
              <Home />
              <span>Home</span>
            </div>
          </Link>
          <Link href='/friends'>
            <div class='flex flex-col items-center'>
              <Friends />
              <span>Friends</span>
            </div>
          </Link>
          <Link href='/upload'>
            <div class='flex flex-col items-center'>
              <div className='w-[75px] flex items-center justify-center my-0 mx-auto top-2/4 left-2/4'>
                <Upload />
              </div>
            </div>
          </Link>
          <Link href='/inbox'>
            <div class='flex flex-col items-center'>
              <Inbox />
              <span>Inbox</span>
            </div>
          </Link>
          <Link href='/profile[1]'>
            <div class='flex flex-col items-center'>
              <Profile />
              <span>Profile</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
