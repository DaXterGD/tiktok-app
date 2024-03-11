'use client'

import LiveIsland from 'react-live-island'

export default function Island () {
  return (
    <LiveIsland>{(isSmall) => (isSmall ? 'small' : 'large')}</LiveIsland>
  )
}
