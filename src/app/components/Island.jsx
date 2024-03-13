'use client'

import { useState, useEffect } from 'react'
import { Spin } from './Svg'

export default function Island ({ loading, completed }) {
  const [state, setState] = useState('inactive')

  useEffect(() => {
    if (loading) {
      setState('loading')
    } else if (completed) {
      setState('completed')

      setTimeout(() => {
        setState('loading')

        setTimeout(() => {
          setState('inactive')
        }, 0)
      }, 1000)
    } else {
      setState('inactive')
    }
  }, [loading, completed])

  const GetStyle = () => {
    switch (state) {
      case 'loading':
        return {
          width: '200px',
          height: '25px',
          borderRadius: '20px'
        }
      case 'completed':
        return {
          width: '250px',
          height: '60px',
          borderRadius: '50px'
        }

      default:
        break
    }
  }
  return (
    <div
      className='island'
      style={GetStyle()}
    >
      {state === 'loading' && (
        <div className='flex justify-between'>
          <div>
            <img
              src='../favicon.ico'
              alt='TikTok Logo'
              className='rounded-full my-0.5'
              width={20}
              height={90}
            />
          </div>
          <div class='flex justify-center items-center'>
            <Spin />
          </div>
        </div>
      )}

      {state === 'completed' && (
        <span />
      )}
    </div>
  )
}
