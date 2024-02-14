// Aca podes importar cualquier fuente de google, solo cambia el inter
// por la fuente que elijas
import { Inter } from 'next/font/google'
import './globals.css'
import { NotificationProvider } from '@/context/NotificationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pnova files',
  description: 'File management, generated by Pnova Vige Studios'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NotificationProvider>
          <main className="main">{children}</main>
        </NotificationProvider>
      </body>
    </html>
  )
}
