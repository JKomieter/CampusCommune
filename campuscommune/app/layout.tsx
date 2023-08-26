import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/layout/Header'
import { Providers } from '@/themeProvider/Provider'
import AskModal from '@/components/modals/QuestionModal/AskModal'
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Campus Commune',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
        <Providers>
          <Toaster position="top-center" reverseOrder={false} />
          <AskModal />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
