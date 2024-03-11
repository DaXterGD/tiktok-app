'use client'

import { useState } from 'react'

import FeedVideos from './components/FeedVideos'
import Toast from './components/Toast'

export default function Home () {
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [toastVarient, setToastVarient] = useState('success')
  const [toastHeading, setToastHeading] = useState('Notification Header')

  return (
    <>
      <FeedVideos />
      {isToastVisible && (
        <Toast
          info={toastVarient}
          heading={toastHeading}
          isToastVisible={isToastVisible}
          setIsToastVisible={setIsToastVisible}
        />
      )}

      <button
        className='flex justify-center items-center bg-blue-300/20 text-blue-400 ring-blue-600/30 hover:bg-blue-300 hover:text-black rounded-full py-2 px-6 ring-2 transition-all duration-300 active:scale-95 disabled:saturate-0 disabled:cursor-not-allowed'
        disabled={isToastVisible}
        onClick={() => {
          if (!isToastVisible) {
            setIsToastVisible(true) &
                setToastVarient('info') &
                setToastHeading('Info Heading')
          }
        }}
      >
        Show Info Toast
      </button>
    </>
  )
}
