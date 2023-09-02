import './globals.css'
import { Inter } from 'next/font/google'
import { Navigator } from './components/Navigator'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Página de prueba',
  description: 'Probando deploy con vercel',
}

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/About'
  },
  {
    label: 'Página de posts',
    route: '/Posts'
  }
]

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Holis</title>
      </head>
      <body className={inter.className}>
        <Navigator links={links} />
        {children}
      </body>
    </html>
  )
}