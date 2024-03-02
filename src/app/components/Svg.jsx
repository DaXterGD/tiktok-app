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

export const Heart = ({ fill = 'currentColor' }) => (
  <svg
    width='46'
    height='46'
    viewBox='0 0 56 56'
    fill='none'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.5 11.75C25.5 11.75 28 15.0833 28 15.0833C28 15.0833 30.5 11.75 35.5 11.75C41.3333 11.75 45.5 16.3333 45.5 22.1667C45.5 28.8333 40.0518 34.7762 35.0833 39.25C32.0159 42.012 29.6667 43.8333 28 43.8333C26.3333 43.8333 23.9175 41.9982 20.9167 39.25C16.0325 34.7771 10.5 28.8333 10.5 22.1667C10.5 16.3333 14.6667 11.75 20.5 11.75Z' fill={fill}
    />
  </svg>
)

export const Comment = props => {
  return (
    <svg
      width='36'
      height='36'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 48 48'
      {...props}
    >
      <g filter='url(#prefix__a)' opacity={0.9}>
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M38.5 35.3C42.6 31.2 45 27 45 22c0-10-9.3-18.3-20.7-18.3C12.9 3.7 3.6 11.9 3.6 22c0 10.2 9.6 17.1 21 17.1v3.4c0 1 1.1 1.7 2 1.2 3-1.6 8.4-4.8 11.9-8.3zM14.2 19.5a3 3 0 013 2.9 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm13 2.9a3 3 0 00-2.9-3 3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3zm7.2-3a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3z'
          clipRule='evenodd'
        />
      </g>
      <path
        fill='url(#prefix__b)'
        fillRule='evenodd'
        d='M24.6 39s11.5-.9 16.3-7C36 38.7 31.3 42.4 27 43.6 22.9 45 24.6 39 24.6 39z'
        clipRule='evenodd'
        opacity={0.1}
      />
      <defs>
        <linearGradient
          id='prefix__b'
          x1={20.4}
          x2={22.3}
          y1={37.7}
          y2={43.6}
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <filter
          id='prefix__a'
          width={46.2}
          height={45}
          x={1.2}
          y={2.4}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy={1.2} />
          <feGaussianBlur stdDeviation={1.2} />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}

export const Share = props => {
  return (
    <svg
      width='36'
      height='36'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 48 48'
      {...props}
    >
      <g filter='url(#prefix__a)' opacity={0.9}>
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M25.8 10.3c0-1.3 1.5-2 2.4-1l14 13.3a2.9 2.9 0 01-.1 4.2L28 39c-.8.9-2.3.2-2.3-1v-5.5s-15-2.7-19.7 6c-.5.9-2.2 1.2-1.9-3C5.7 28 8.8 16.3 25.8 16.3v-5.9z'
          clipRule='evenodd'
        />
      </g>
      <path
        fillRule='evenodd'
        d='M25.8 16.8v15.6s-14.3-2-18.8 4.8C2.7 43.8 3.1 29.8 9.6 23c6.5-7 16.2-6 16.2-6z'
        clipRule='evenodd'
        opacity={0.1}
      />
      <defs>
        <radialGradient
          id='prefix__b'
          cx={0}
          cy={0}
          r={1}
          gradientTransform='matrix(-7.4612 -17.5775 17.2788 -7.33441 26.23 42.56)'
          gradientUnits='userSpaceOnUse'
        >
          <stop />
          <stop offset={1} stopOpacity={0} />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <filter
          id='prefix__a'
          width={43.7}
          height={35.2}
          x={1.8}
          y={7.7}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy={1.2} />
          <feGaussianBlur stdDeviation={1.2} />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}
