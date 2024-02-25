// Icons nav menu
export const Home = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    className='h-6 w-6'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6'
    />
  </svg>
)

export const Friends = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    className='h-6 w-6'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 4.354a4 4 0 1 1 0 5.292M15 21H3v-1a6 6 0 0 1 12 0v1zm0 0h6v-1a6 6 0 0 0-9-5.197M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z'
    />
  </svg>
)

export const Upload = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 75 49'
    {...props}
  >
    <path
      fill='#D8D8D8'
      stroke='#979797'
      strokeWidth={0.5}
      d='M.25.25h74.5v48.5H.25z'
      opacity={0.01}
    />
    <path
      fill='#FA2D6C'
      fillRule='evenodd'
      d='M23.5 23.3c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C29.58 10.5 31.82 10.5 36.3 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 0 1 3.496 3.496C59 16.58 59 18.82 59 23.3v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 0 1-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 0 1-3.496-3.496C23.5 32.42 23.5 30.18 23.5 25.7v-2.4z'
      clipRule='evenodd'
    />
    <path
      fill='#20D5EC'
      fillRule='evenodd'
      d='M16 23.3c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C22.08 10.5 24.32 10.5 28.8 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 0 1 3.496 3.496c.872 1.711.872 3.952.872 8.432v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 0 1-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 0 1-3.496-3.496C16 32.42 16 30.18 16 25.7v-2.4z'
      clipRule='evenodd'
    />
    <rect width={36} height={28} x={19.5} y={10.5} fill='#fff' rx={8} />
    <path
      fill='#161823'
      fillRule='evenodd'
      d='M36.5 18.25a.5.5 0 0 0-.5.5v4.75h-4.75a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5H36v4.75a.5.5 0 0 0 .5.5H38a.5.5 0 0 0 .5-.5V26h4.75a.5.5 0 0 0 .5-.5V24a.5.5 0 0 0-.5-.5H38.5v-4.75a.5.5 0 0 0-.5-.5h-1.5z'
      clipRule='evenodd'
    />
  </svg>
)

export const Inbox = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    className='h-6 w-6'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5z'
    />
  </svg>
)

export const Profile = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    className='h-6 w-6'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-4 7a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z'
    />
  </svg>
)
// Finish icons navmenu

export const NotFound = props => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={90}
      height={90}
      fill='rgba(128, 130, 133, 1)'
      viewBox='0 0 72 72'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M33.853 13.661c-2.799-.686-4.884-3.218-4.884-6.224a6.417 6.417 0 0 1 6.408-6.408 6.417 6.417 0 0 1 6.408 6.408c0 3.006-2.084 5.538-4.883 6.224V24.5h18.177c4.675 0 8.481 3.806 8.481 8.481v29.51c-.005 4.674-3.806 8.48-8.486 8.48H15.68c-4.675 0-8.481-3.806-8.481-8.48V32.98c0-4.675 3.806-8.481 8.481-8.481h18.172V13.661Zm1.525-9.583a3.366 3.366 0 0 0-3.36 3.359 3.363 3.363 0 0 0 3.36 3.359 3.363 3.363 0 0 0 3.359-3.36 3.363 3.363 0 0 0-3.36-3.358ZM15.68 27.548a5.438 5.438 0 0 0-5.432 5.432v29.509a5.438 5.438 0 0 0 5.432 5.432H55.08a5.438 5.438 0 0 0 5.432-5.432v-29.51a5.438 5.438 0 0 0-5.432-5.431H15.68Zm7.007 16.939a1.526 1.526 0 0 0 3.049 0v-4.635c0-.843-.68-1.524-1.524-1.524s-1.525.68-1.525 1.524v4.635Zm24.047 14.7c-.432 0-.859-.182-1.164-.538A13.372 13.372 0 0 0 35.5 53.93a1.517 1.517 0 0 1-.117.004 13.354 13.354 0 0 0-10.2 4.721c-.304.35-.731.534-1.163.534a1.523 1.523 0 0 1-1.159-2.51 16.401 16.401 0 0 1 12.38-5.793c.043-.004.087-.006.132-.006 4.827 0 9.39 2.114 12.52 5.793.544.64.468 1.606-.172 2.15a1.485 1.485 0 0 1-.986.366Zm-.193-13.176a1.522 1.522 0 0 1-1.525-1.525v-4.634c0-.843.681-1.524 1.525-1.524.843 0 1.524.68 1.524 1.524v4.635c0 .838-.68 1.524-1.524 1.524Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
