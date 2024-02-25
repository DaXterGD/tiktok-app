'use client'

import { useRef, useState, useEffect } from 'react'

const VIDEO_URL = 'https://v16m.tiktokcdn.com/760a72a763d98ea75702ca7a2f0bee90/65de1ab6/video/tos/useast2a/tos-useast2a-pve-0068/oUfl8AR9EXDrpdJEeJFBGQhMB8FiIQBtp2gJUA/?a=1233&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C&cv=1&br=3694&bt=1847&bti=NDU3ZjAwOg%3D%3D&cs=0&ds=3&ft=pfuryMM88Zmo0F~pT94jVxhzZpWrKsd.&mime_type=video_mp4&qs=0&rc=ZjM6PGUzaTM8Ojs0ZmZnaEBpM3VsN3A5cms8cDMzNzczM0A2Ml42LzFjNi0xNjUuMjNiYSNjLV5pMmRrLWtgLS1kMTZzcw%3D%3D&l=202402251723530001D7B3C465B1F605D1&btag=e00088000&cc=3'

export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const HandleVisibilityChange = () => {
    document.visibilityState === 'hidden'
      ? video.current.pause()
      : video.current.play()
  }

  const HandlePlay = () => {
    if (video.current) {
      playing
        ? video.current.pause()
        : video.current.play()

      setPlaying(!playing)
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', HandleVisibilityChange)

    return () => {
      document.addEventListener('visibilitychange', HandleVisibilityChange)
    }
  }, [])
  return (
    <>
      <video
        src={VIDEO_URL}
        controls={false}
        ref={video}
        loop
        className='w-full h-full overscroll-y-scroll block rounded-xl'
      />
      <button
        className='w-16 h-16 absolute m-auto border-0 inset-0'
        style={{
          backgroundImage: 'url(/images/player.png)',
          backgroundSize: 'contain',
          backgroundColor: 'transparent',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}
        onClick={HandlePlay}
      />
    </>
  )
}
