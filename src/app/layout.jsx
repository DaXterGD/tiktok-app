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
        <main className='main__container'>
          <section className='section__container'>
            <Header />
            <div className='relative w-full h-full my-0 mx-auto'>
              <div className='h-screen main__section'>
                {children}
              </div>
            </div>
            <Footer />
          </section>
        </main>
      </body>
    </html>
  )
}
