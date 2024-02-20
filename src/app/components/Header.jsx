import Image from 'next/image'

export default function Header () {
  return (
    <>
      <header className='flex justify-start pl-4'>
        <Image
          src='/images/tiktok-logo.png'
          alt='TikTok Logo'
          width={24}
          height={24}
        />
      </header>
    </>
  )
}
