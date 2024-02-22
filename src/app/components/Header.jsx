import Link from 'next/link'
import Image from 'next/image'

export default function Header () {
  return (
    <>
      <header className='flex justify-start pl-4'>
        <Link href='/'>
          <Image
            src='/images/tiktok-logo.png'
            alt='TikTok Logo'
            width={24}
            height={24}
          />
        </Link>

      </header>
    </>
  )
}
