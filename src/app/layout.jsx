import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TikTok - Make Your Day',
  description: 'TikTok Clone NextJS - Firebase'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='filter_shadow'>
          <main className='main__container'>
            <section className='section__container'>
              <div className='absolute bg-white inset-0 -z-10' />
              <Header />
              <div className='relative w-full h-full my-0 mx-auto'>
                {children}
              </div>
              <Footer />
            </section>
          </main>
        </div>
      </body>
    </html>
  )
}
