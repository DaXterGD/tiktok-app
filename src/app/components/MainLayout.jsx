import Footer from './Footer'
import Header from './Header'

export default function MainLayout ({ children }) {
  return (
    <>
      <main className='main__container'>
        <section className='section__container'>
          <Header />
          <div className='relative w-full h-full my-0 mx-auto'>
            {children}
          </div>
          <Footer />
        </section>
      </main>
    </>
  )
}
