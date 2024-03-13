'use client'

import { useState, useEffect } from 'react'

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
        }, 500)
      }, 2500)
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
          background: 'black',
          borderRadius: '20px'
        }
      case 'completed':
        return {
          width: '250px',
          height: '60px',
          background: 'black',
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
        <span />
      )}

      {state === 'completed' && (
        <span />
      )}
    </div>
  )
}
