import Link from 'next/link'

export default function Footer () {
  return (
    <>
      <div className='relative flex-[0,0,auto]'>
        <div>
          <footer className='h-[48px] grid grid-cols-[20%,20%,20%,20%,20%] bg-black'>
            <div className='flex flex-col'>
              <Link
                href='/'
                className='pt-0 flex relative justify-center items-center'
              >
                <svg
                  fill='#fff'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  viewBox='0 0 48 48'
                  className='w-8 h-8'
                >
                  <path fill-rule='evenodd' clip-rule='evenodd' d='M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z' />
                </svg>
              </Link>
            </div>
            <div className='flex flex-col'>
              <Link
                href='/discover'
                className='pt-0 flex relative justify-center items-center'
              >
                <svg
                  style={{ fillOpacity: 0.75 }}
                  fill='#fff'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  viewBox='0 0 36 36'
                  className='w-8 h-8'
                >
                  <path fill-rule='evenodd' clip-rule='evenodd' d='M18 28.0547C23.553 28.0547 28.0547 23.5531 28.0547 18C28.0547 12.4469 23.553 7.94531 18 7.94531C12.4469 7.94531 7.94531 12.4469 7.94531 18C7.94531 23.5531 12.4469 28.0547 18 28.0547ZM30.375 18C30.375 24.8345 24.8345 30.375 18 30.375C11.1655 30.375 5.625 24.8345 5.625 18C5.625 11.1655 11.1655 5.625 18 5.625C24.8345 5.625 30.375 11.1655 30.375 18Z' />
                  <path fill-rule='evenodd' clip-rule='evenodd' d='M20.3508 20.3864C20.712 20.1679 20.9645 19.8074 21.0462 19.3932L22.427 12.3948C22.5027 12.0113 22.0871 11.7204 21.7527 11.9226L15.6486 15.6137C15.2874 15.8322 15.0349 16.1928 14.9532 16.6069L13.5724 23.6053C13.4967 23.9888 13.9123 24.2797 14.2467 24.0775L20.3508 20.3864ZM16.5684 20.0442L18.9029 18.6325L19.431 15.9559L17.0965 17.3676L16.5684 20.0442Z' />
                </svg>
              </Link>
            </div>
            <div className='text-white w-[75px] items-center justify-center'>
              <Link href='/uppload'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 75 49'
                  width='100%'
                  height='100%'
                ><path fill='#D8D8D8' stroke='#979797' stroke-width='0.5' d='M.25.25h74.5v48.5H.25z' opacity='0.01' />
                  <path fill='#FA2D6C' fill-rule='evenodd' d='M23.5 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C29.58 10.5 31.82 10.5 36.3 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496C59 16.58 59 18.82 59 23.3v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C23.5 32.42 23.5 30.18 23.5 25.7v-2.4z' clip-rule='evenodd' />
                  <path fill='#20D5EC' fill-rule='evenodd' d='M16 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C22.08 10.5 24.32 10.5 28.8 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496c.872 1.711.872 3.952.872 8.432v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C16 32.42 16 30.18 16 25.7v-2.4z' clip-rule='evenodd' />
                  <rect width='36' height='28' x='19.5' y='10.5' fill='#fff' rx='8' />
                  <path fill='#161823' fill-rule='evenodd' d='M36.5 18.25a.5.5 0 00-.5.5v4.75h-4.75a.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5H36v4.75a.5.5 0 00.5.5H38a.5.5 0 00.5-.5V26h4.75a.5.5 0 00.5-.5V24a.5.5 0 00-.5-.5H38.5v-4.75a.5.5 0 00-.5-.5h-1.5z' clip-rule='evenodd' />
                </svg>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
