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
            <div className='absolute bg-[#e5e5e5] inset-0 -z-10' />
            {children}
            <Footer />
          </section>
        </main>
      </body>
    </html>
  )
}
