import { LuUser2 } from 'react-icons/lu'
import { RiHome4Fill } from 'react-icons/ri'
import { FaUserFriends } from 'react-icons/fa'
import { BiMessageAltMinus } from 'react-icons/bi'

export default function Footer () {
  return (
    <>
      <footer className='absolute bottom-0 left-0 w-full bg-black z-10 px-2 py-4 text-[1.6rem]'>
        <ul className='flex items-center justify-between'>
          <li className='menu__list'>
            <RiHome4Fill />
            <span className='capitalize'>home</span>
          </li>
          <li className='menu__list'>
            <FaUserFriends />
            <span className='capitalize'>friends</span>
          </li>
          <li className='menu__list'>
            <a
              href='/upload'
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 75 49' width={69}>
                <path fill='#FA2D6C' fillRule='evenodd' d='M23.5 23.3c0-4.5 0-6.7.9-8.4a8 8 0 0 1 3.5-3.5c1.7-.9 4-.9 8.4-.9h9.9c4.5 0 6.7 0 8.4.9a8 8 0 0 1 3.5 3.5c.9 1.7.9 4 .9 8.4v2.4c0 4.5 0 6.7-.9 8.4a8 8 0 0 1-3.5 3.5c-1.7.9-4 .9-8.4.9h-9.9c-4.5 0-6.7 0-8.4-.9a8 8 0 0 1-3.5-3.5c-.9-1.7-.9-4-.9-8.4v-2.4Z' clipRule='evenodd' />
                <path fill='#20D5EC' fillRule='evenodd' d='M16 23.3c0-4.5 0-6.7.9-8.4a8 8 0 0 1 3.5-3.5c1.7-.9 4-.9 8.4-.9h9.9c4.5 0 6.7 0 8.4.9a8 8 0 0 1 3.5 3.5c.9 1.7.9 4 .9 8.4v2.4c0 4.5 0 6.7-.9 8.4a8 8 0 0 1-3.5 3.5c-1.7.9-4 .9-8.4.9h-9.9c-4.5 0-6.7 0-8.4-.9a8 8 0 0 1-3.5-3.5c-.9-1.7-.9-4-.9-8.4v-2.4Z' clipRule='evenodd' />
                <rect width='36' height='28' x='19.5' y='10.5' fill='#161823' rx='8' />
                <path fill='#fff' fillRule='evenodd' d='M37 18c-.3 0-.5.2-.5.5v5h-5c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h5v5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-5h5c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-5v-5c0-.3-.2-.5-.5-.5h-1Z' clipRule='evenodd' />
              </svg>
            </a>
          </li>
          <li className='menu__list'>
            <BiMessageAltMinus />
            <span className='capitalize'>inbox</span>
          </li>
          <li className='menu__list'>
            <LuUser2 />
            <span className='capitalize'>profile</span>
          </li>
        </ul>
      </footer>
    </>
  )
}