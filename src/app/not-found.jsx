import Link from 'next/link'

import { NotFound } from './components/Svg'

export default function NotFoundPage () {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex-[1,1,auto] flex flex-col items-center justify-center text-center my-0 mx-auto'>
        <NotFound />
        <p className='font-bold text-[rgb(22,24,35)] text-2xl mt-6'>
          Page not available
        </p>
        <p className='font-normal text-base text-[rgba(22,24,35,.75)] mt-2'>
          Sorry about that! Please try again later.
        </p>
        <Link
          href='/'
          className='
            flex
            px-2
            mt-6
            border
            py-1.5
            rounded
            text-lg
            min-h-12
            relative
            border-solid
            items-center
            min-w-[168px]
            font-semibold
            justify-center
            text-[rgb(22,24,35)]
            hover:bg-gray-50
          '
        >
          Try again
        </Link>
      </div>
    </div>
  )
}
