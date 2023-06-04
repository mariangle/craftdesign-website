import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CraftDesign | Home',
  description: 'CraftDesign is a creative agency specializing in web design, branding, and digital marketing solutions. We craft unique and impactful experiences that help businesses thrive in the digital world. Explore our work and discover how we can elevate your brand to new heights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
