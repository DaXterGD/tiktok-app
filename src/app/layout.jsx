import MainLayout from './components/MainLayout'
import './globals.css'

export const metadata = {
  title: 'TikTok - Make Your Day',
  description: 'TikTok Clone NextJS - Firebase'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
