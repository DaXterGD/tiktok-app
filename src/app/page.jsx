'use client'

import { useState } from 'react'
import Island from './components/Island'

export default function Home () {
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)

  const HandleClick = () => {
    setLoading(true)

    setTimeout(() => {
      setCompleted(true)

      setTimeout(() => {
        setLoading(false)
        setCompleted(true)
      }, 500)
    }, 1500)
  }
  return (
    <>
      {/* <FeedVideos /> */}
      <Island
        loading={loading}
        completed={completed}
      />

      <button
        onClick={HandleClick}
        className='rounded p-2 bottom-12 text-white bg-red-500 flex absolute'
      >
        Upload
      </button>
    </>
  )
}
