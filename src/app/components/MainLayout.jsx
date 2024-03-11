export default function MainLayout ({ children }) {
  return (
    <>
      <div className='box'>
        <div className='inner'>
          <div className='island' />
          {children}
        </div>
      </div>
    </>
  )
}
