import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="text-center w-full text-2xl mt-10">Test</div>
      <Analytics />
    </>
  )
}
