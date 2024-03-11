import Image from 'next/image'

import { FaCheck } from 'react-icons/fa'
import { CiCircleInfo } from 'react-icons/ci'
import { MdErrorOutline } from 'react-icons/md'

export default function Toast ({ info, heading, isToastVisible, setIsToastVisible }) {
  setTimeout(() => {
    setIsToastVisible(false)
  }, 4900)

  const GetSymbolIcon = info => {
    switch (info) {
      case 'success':
        return (
          <span className='flex justify-center items-center bg-gray-300/20 text-gray-300 rounded-full h-9 w-9'>
            <FaCheck />
          </span>
        )
      case 'error':
        return (
          <span className='flex justify-center items-center bg-red-300/20 text-red-300 rounded-full h-9 w-9'>
            <MdErrorOutline />
          </span>
        )
      case 'info':
        return (
          <span className='flex justify-center items-center bg-blue-300/20 text-blue-300 rounded-full h-9 w-9'>
            <CiCircleInfo />
          </span>
        )
    }
  }
  return (
    <>
      {isToastVisible && (
        <div className='bg-zinc-800 w-80 h-12 rounded-full ring-2 ring-white/30 shadow-xl fixed top-4 pill-animation z-50'>
          <div className='flex justify-between items-center h-full w-full px-2 gap-4 inner-animation'>
            <Image src='/favicon.ico' alt='TikTok Logo' className='rounded-full' width={36} height={36} />
            <p className='text-zinc-400 font-medium'>{heading}</p>
            {GetSymbolIcon(info)}
          </div>
        </div>
      )}
    </>
  )
}
